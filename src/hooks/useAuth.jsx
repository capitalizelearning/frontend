import PropTypes from "prop-types";
import * as React from "react";

const AuthContext = React.createContext({});

export const useAuth = () => {
    const context = React.useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};

export const AuthProvider = ({ children }) => {
    const savedToken = localStorage.getItem("authToken") || null;
    const [authToken, setAuthToken] = React.useState(savedToken);
    const [user, setUser] = React.useState(null);

    /**
     * Fetch the user's details when the token changes
     */
    React.useEffect(() => {
        if (authToken) {
            const fetchUser = async () => {
                const res = await fetch("/api/user", {
                    headers: {
                        Authorization: `Bearer ${authToken}`,
                    },
                });
                if (res.ok) {
                    const data = await res.json();
                    setUser(data);
                }
            };
            fetchUser();
        }
    }, [authToken]);

    /**
     * Login a user and store the token in localstorage if remember is true
     * @param {String} username - The user's email address
     * @param {String} password - The user's password
     * @param {Boolean} remember - Whether to store the token in localstorage, defaults to false
     * @returns {Object} - The result of the login operation with success and error properties
     */
    async function login(username, password, remember = false) {
        if (!username) throw new Error("Username is required");
        if (!password) throw new Error("Password is required");

        const formData = new FormData();
        formData.append("username", username);
        formData.append("password", password);

        const res = await fetch("/api/auth/token", {
            method: "POST",
            body: formData,
        });
        if (!res.ok) {
            const error = await res.json();
            return {
                success: false,
                error,
            };
        }
        const data = await res.json();
        if (data.access) {
            setAuthToken(data.access);
            if (remember) {
                localStorage.setItem("authToken", data.access);
            }
        }
        return {
            success: true,
            error: null,
        };
    }

    /**
     * Logout the user and remove the token from localstorage
     */
    function logout() {
        setAuthToken(null);
        setUser(null);
        localStorage.removeItem("authToken");
    }

    /**
     * Whether the user is authenticated
     * @type {Boolean}
     */
    const isAuthenticated = Boolean(user);

    return (
        <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

import PropTypes from "prop-types";
import * as React from "react";

const AuthContext = React.createContext({});

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
    const context = React.useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};

export const AuthProvider = ({ children }) => {
    const [authToken, setAuthToken] = React.useState(null);
    const [user, setUser] = React.useState(null);
    const [isAuthenticated, setIsAuthenticated] = React.useState(false);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        const savedToken = localStorage.getItem("authToken") || null;
        if (savedToken) {
            setAuthToken(savedToken);
        } else {
            setAuthToken(null);
        }
    }, []);

    /**
     * Fetch the user's details when the token changes
     */
    React.useEffect(() => {
        if (authToken) {
            setLoading(true);
            const fetchUser = async () => {
                const res = await fetch("/api/auth/profile/", {
                    headers: {
                        Authorization: `Bearer ${authToken}`,
                    },
                });
                if (res.ok) {
                    const data = await res.json();
                    setUser(data);
                    setIsAuthenticated(true);
                }
                setLoading(false);
            };
            fetchUser();
        } else {
            setLoading(false);
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
        if (!username || !password)
            return {
                success: false,
                error: "Username and password are required",
            };

        const formData = new FormData();
        formData.append("username", username);
        formData.append("password", password);

        setLoading(true);
        const res = await fetch("/api/auth/token/", {
            method: "POST",
            body: formData,
        });
        if (!res.ok) {
            const error = await res.json();
            setLoading(false);
            return {
                success: false,
                error: error.detail,
            };
        }
        const data = await res.json();
        if (data.access) {
            setAuthToken(data.access);
            if (remember) {
                localStorage.setItem("authToken", data.access);
            }
        }
        setLoading(false);
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
        setIsAuthenticated(false);
        localStorage.removeItem("authToken");
    }

    return (
        <AuthContext.Provider
            value={{
                authToken,
                user,
                isAuthenticated,
                loading,
                login,
                logout,
            }}>
            {children}
        </AuthContext.Provider>
    );
};
AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

import axios from "axios";
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
            const fetchUser = () => {
                axios({
                    url: "/auth/profile/",
                    headers: {
                        Authorization: `Bearer ${authToken}`,
                    },
                })
                    .then((res) => {
                        setUser(res.data);
                        setIsAuthenticated(true);
                    })
                    .catch((e) => {
                        if (e.status === 401) logout();
                        console.error(e);
                    })
                    .finally(() => setLoading(false));
            };
            fetchUser();
        } else setLoading(false);
    }, [authToken]);

    /**
     * Login a user and store the token in localstorage if remember is true
     * @param {String} username - The user's email address
     * @param {String} password - The user's password
     * @param {Boolean} remember - Whether to store the token in localstorage, defaults to false
     * @returns {Object} - The result of the login operation with success and error properties
     */
    function login(username, password, remember = false) {
        if (!username || !password)
            return {
                success: false,
                error: "Username and password are required",
            };

        const formData = new FormData();
        formData.append("username", username);
        formData.append("password", password);

        setLoading(true);
        return axios({
            url: "/auth/token/",
            method: "POST",
            data: formData,
        })
            .then((res) => {
                if (res.data.access) {
                    setAuthToken(res.data.access);
                    if (remember) {
                        localStorage.setItem("authToken", res.data.access);
                    }
                }
                return {
                    success: true,
                    error: null,
                };
            })
            .catch((e) => {
                return {
                    success: false,
                    error:
                        e.response?.data?.detail ??
                        "Failed to get user data from server",
                };
            })
            .finally(() => setLoading(false));
    }

    /**
     * Sets a test user's password
     * @param {string} token - The registration token
     * @param {string} password  - The new password
     * @returns {Object} - The result of the operation with success and error properties
     */
    function setInitialPassword(token, password) {
        if (!token || !password)
            return { success: false, error: "Token and password are required" };

        const formData = new FormData();
        formData.append("password", password);

        setLoading(true);
        return axios({
            urL: `/auth/register/${token}/`,
            method: "POST",
            data: formData,
        })
            .then(() => {
                return { success: true, error: null };
            })
            .catch((e) => {
                setLoading(false);
                return {
                    success: false,
                    error:
                        e.response?.data?.detail ??
                        "Unable complete the request at this time. Try again later.",
                };
            })
            .finally(() => setLoading(false));
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
                setInitialPassword,
            }}>
            {children}
        </AuthContext.Provider>
    );
};
AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

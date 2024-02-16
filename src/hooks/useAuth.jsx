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
    const [authToken, setAuthToken] = React.useState(null);
    const isAuthenticated = false;
    const [user, setUser] = React.useState(null);

    const fetchUser = async () => {
        // ... implement fetchUser
    };

    function login(username, password) {
        // ... implement login
        // fetchUser();
        return {
            success: true,
            error: null,
        };
    }

    function logout() {
        // ... implement logout
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

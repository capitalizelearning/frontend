import * as React from "react";
import { useAuth } from "./useAuth.jsx";

const ContentContext = React.createContext({});

export const useContent = () => {
    const context = React.useContext(ContentContext);
    if (!context) {
        throw new Error("useContent must be used within a ContentProvider");
    }
    return context;
};

export const ContentProvider = ({ children }) => {
    const [content, setContent] = React.useState([]);
    const [activeContentId, setActiveContentId] = React.useState(null);
    const [loading, setLoading] = React.useState(false);

    const { isAuthenticated, user } = useAuth();

    const fetchContent = async (resourceId) => {
        setLoading(true);
        try {
            // ... implement fetchContent using resourceId
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const fetchUserContent = async () => {
        if (isAuthenticated) {
            setLoading(true);
            try {
                // ... implement fetchUserContent using user.id
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        }
    };

    return (
        <ContentContext.Provider
            value={{ content, loading, fetchContent, fetchUserContent }}>
            {children}
        </ContentContext.Provider>
    );
};

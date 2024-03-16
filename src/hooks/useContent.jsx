import PropTypes from "prop-types";
import * as React from "react";
import { useAuth } from "./useAuth.jsx";

const ContentContext = React.createContext({});

// eslint-disable-next-line react-refresh/only-export-components
export const useContent = () => {
    const context = React.useContext(ContentContext);
    if (!context) {
        throw new Error("useContent must be used within a ContentProvider");
    }
    return context;
};

export const ContentProvider = ({ children }) => {
    const { isAuthenticated, authToken } = useAuth();
    const [content, setContent] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(null);

    const fetchContent = React.useCallback(async () => {
        if (!isAuthenticated) {
            console.error("User is not authenticated");
        }
        setLoading(true);
        const response = await fetch("/api/lessons/", {
            headers: {
                Authorization: `Bearer ${authToken}`,
            },
        });
        const data = await response.json();
        if (!response.ok) {
            setError(data);
        } else {
            setContent(data);
        }
        setLoading(false);
    }, [isAuthenticated, authToken]);

    React.useEffect(() => {
        if (isAuthenticated) fetchContent();
    }, [isAuthenticated, fetchContent]);

    async function getLessonQuizzes(lessonId) {
        const response = await fetch(`/api/lessons/quizzes/${lessonId}/`, {
            headers: {
                Authorization: `Bearer ${authToken}`,
            },
        });
        return response.json();
    }

    async function getQuizQuestions(quizId) {
        const response = await fetch(`/api/lessons/quizzes/${quizId}/`, {
            headers: {
                Authorization: `Bearer ${authToken}`,
            },
        });
        return await response.json();
    }

    async function checkQuizAnswer(quizId, questionId, answerIndex) {
        const response = await fetch(
            `/api/lessons/quizzes/${quizId}/${questionId}/`,
            {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${authToken}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ response: answerIndex }),
            }
        );
        return await response.json();
    }

    // async function createLesson(data) {}

    // async function updateLesson(id, data) {}

    // async function deleteLesson(id) {}

    return (
        <ContentContext.Provider
            value={{
                content,
                fetchContent,
                loading,
                error,
                getLessonQuizzes,
                getQuizQuestions,
                checkQuizAnswer,
                // createLesson,
                // updateLesson,
                // deleteLesson,
            }}>
            {children}
        </ContentContext.Provider>
    );
};
ContentProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

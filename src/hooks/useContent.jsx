import axios from "axios";
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

    const fetchContent = React.useCallback(() => {
        if (!isAuthenticated) {
            console.error("User is not authenticated");
        }
        setLoading(true);
        axios({
            url: "/lessons/",
            headers: {
                Authorization: `Bearer ${authToken}`,
            },
        })
            .then((res) => setContent(res.data))
            .catch((e) =>
                setError(
                    e.response?.data?.detail ??
                        "Something went wrong while fetching content."
                )
            )
            .finally(() => setLoading(false));
    }, [isAuthenticated, authToken]);

    React.useEffect(() => {
        if (isAuthenticated) fetchContent();
    }, [isAuthenticated, fetchContent]);

    async function getQuizzes() {
        try {
            const res = await axios({
                url: "/lessons/quizzes/",
                headers: {
                    Authorization: `Bearer ${authToken}`,
                },
            });
            return res.data;
        } catch (message) {
            return console.error(message);
        }
    }

    async function getLessonQuizzes(lessonId) {
        try {
            const res = await axios({
                url: `/lessons/quizzes/${lessonId}/`,
                headers: {
                    Authorization: `Bearer ${authToken}`,
                },
            });
            return res.data;
        } catch (message) {
            return console.error(message);
        }
    }

    async function getQuizQuestions(quizId) {
        try {
            const res = await axios({
                url: `/lessons/quizzes/${quizId}/`,
                headers: {
                    Authorization: `Bearer ${authToken}`,
                },
            });
            return res.data;
        } catch (message) {
            return console.error(message);
        }
    }

    async function checkQuizAnswer(quizId, questionId, answerIndex) {
        try {
            const res = await axios({
                url: `/lessons/quizzes/${quizId}/${questionId}/`,
                method: "POST",
                headers: {
                    Authorization: `Bearer ${authToken}`,
                },
                data: JSON.stringify({ response: answerIndex }),
            });
            return res.data;
        } catch (message) {
            return console.error(message);
        }
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
                getQuizzes,
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

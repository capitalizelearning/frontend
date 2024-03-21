import Layout from "@/components/Layout/Layout";
import { useContent } from "@/hooks/useContent";
import { useTheme } from "@/hooks/useTheme";
import * as React from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function QuizPage() {
    const navigate = useNavigate();
    const { quizId } = useParams();
    const { getQuizQuestions, checkQuizAnswer } = useContent();
    const { theme } = useTheme();
    const [questions, setQuestions] = React.useState([]);
    const [currentQuestion, setCurrentQuestion] = React.useState({});
    const [selectedAnswer, setSelectedAnswer] = React.useState(null);

    React.useEffect(() => {
        // Fetch quiz questions from the server
        if (!quizId) return null;
        getQuizQuestions(quizId)
            .then((data) => {
                setQuestions(data);
                setCurrentQuestion(data[0]);
            })
            .catch((error) => {
                console.error(error);
                navigate("/404");
            });
    }, [quizId, getQuizQuestions, navigate]);

    const handleChangeQuestion = (question) => {
        setCurrentQuestion(question);
        setSelectedAnswer(null);
    };

    const handleCheckAnswer = () => {
        if (selectedAnswer === null) return;
        checkQuizAnswer(quizId, currentQuestion.id, selectedAnswer)
            .then((data) => {
                setCurrentQuestion({
                    ...currentQuestion,
                    score: data.score,
                    correct_index: data.correct_index,
                });
            })
            .catch(console.error);
    };

    return (
        <Layout>
            <div className={`md:flex ${theme === "dark" ? "dark" : ""}`}>
                {/* Question List */}
                <div className="md:w-auto p-4">
                    <h5 className="my-3 font-bold dark:text-white">
                        Question List
                    </h5>
                    <div
                        id="scroll-ct"
                        className="overflow-y-auto scroll-smooth focus:scroll-auto md:h-[70vh] no-scrollbar md:border-r dark:border-gray-700 border-gray-300 md:pr-3">
                        {questions.map((question, index) => (
                            <div
                                key={question.id}
                                onClick={() => handleChangeQuestion(question)}
                                className={`p-4 rounded-lg cursor-pointer flex gap-2 items-center justify-center text-center font-thin
                                ${
                                    question.id === currentQuestion.id
                                        ? "bg-[#02A854] dark:bg-[#33C6AB] text-white"
                                        : "dark:bg-neutral-800 bg-[#fefefe] my-2 dark:text-white"
                                }`}>
                                <span className="text-md whitespace-nowrap">
                                    {"Question " + (index + 1)}
                                </span>
                                <span className="ml-2">
                                    {question.score !== null ? (
                                        question.score === question.weight ? (
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="currentColor"
                                                className="w-6 h-6">
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="m4.5 12.75 6 6 9-13.5"
                                                />
                                            </svg>
                                        ) : (
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.5"
                                                stroke="currentColor"
                                                className="w-6 h-6">
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M6 18 18 6M6 6l12 12"
                                                />
                                            </svg>
                                        )
                                    ) : null}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Question Details */}
                <div className="md:w-3/4 p-4 flex flex-col justify-center gap-7 md:h-[70vh] mt-5">
                    {questions && questions.length > 0 && (
                        <React.Fragment>
                            <div className="mb-4 flex flex-col gap-5">
                                <div className="flex items-center gap-5 justify-between">
                                    <p className="text-3xl dark:text-[#f3f3f3] font-semibold">
                                        {currentQuestion.question}
                                    </p>
                                    <div>
                                        {currentQuestion.score !== null && (
                                            <p
                                                className={`text-xl px-4 py-2 rounded-lg border-2 font-semibold 
                                            ${
                                                currentQuestion.score ===
                                                currentQuestion.weight
                                                    ? "border-[#02A854] text-[#02A854] dark:border-[#33C6AB] dark:text-[#33C6AB]"
                                                    : "border-red-500 text-red-500 dark:border-red-400 dark:text-red-400"
                                            }
                                            `}>
                                                {currentQuestion.score ===
                                                currentQuestion.weight
                                                    ? "Correct"
                                                    : "Incorrect"}
                                            </p>
                                        )}
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 w-full">
                                    <p className="text-sm dark:text-[#fefefe]">
                                        Worth {currentQuestion.weight} point(s)
                                    </p>
                                    {currentQuestion.score !== null && (
                                        <React.Fragment>
                                            <p className="text-sm dark:text-[#fefefe]">
                                                {currentQuestion.score} points
                                                earned.
                                            </p>
                                            <p className="text-sm dark:text-[#fefefe]">
                                                {(currentQuestion.score /
                                                    currentQuestion.weight) *
                                                    100}
                                                %
                                            </p>
                                        </React.Fragment>
                                    )}
                                </div>
                                <div className="grid grid-flow-row grid-cols-2 gap-4">
                                    {currentQuestion.options.map(
                                        (option, index) => (
                                            <button
                                                key={index}
                                                disabled={
                                                    currentQuestion.score !==
                                                    null
                                                }
                                                className={`p-4 rounded-full 
                                                ${
                                                    selectedAnswer === index
                                                        ? "bg-[#02A854] dark:bg-[#33C6AB] text-white"
                                                        : "bg-[#fefefe] dark:bg-gray-800 dark:text-white disabled:opacity-50"
                                                }`}
                                                onClick={() =>
                                                    setSelectedAnswer(index)
                                                }>
                                                {option}
                                            </button>
                                        )
                                    )}
                                </div>
                                <div>
                                    <button
                                        className={`bg-[#02A854] dark:bg-[#33C6AB] text-white text-md p-4 rounded-lg ${
                                            selectedAnswer === null &&
                                            "opacity-50 cursor-not-allowed"
                                        }`}
                                        onClick={() => handleCheckAnswer()}
                                        disabled={
                                            selectedAnswer === null ||
                                            currentQuestion.score !== null
                                        }>
                                        Submit Answer
                                    </button>
                                </div>
                            </div>
                        </React.Fragment>
                    )}
                </div>
            </div>
        </Layout>
    );
}

import Layout from "@/components/Layout/Layout";
import { useContent } from "@/hooks/useContent";
import * as React from "react";
import { useParams } from "react-router-dom";

const QuizComponent = () => {
    const { lessonId, quizId } = useParams();
    const { getQuizQuestions, checkQuizAnswer } = useContent();
    const [questions, setQuestions] = React.useState([]);
    const [currentQuestion, setCurrentQuestion] = React.useState(0);
    const [selectedOption, setSelectedOption] = React.useState(null);
    const [showResult, setShowResult] = React.useState(false);

    React.useEffect(() => {
        // Fetch quiz questions from the server
        getQuizQuestions(lessonId)
            .then((data) => {
                console.log(data);
                setQuestions(data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [lessonId, quizId, getQuizQuestions]);

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
    };

    const handleNextQuestion = () => {
        if (!selectedOption) {
            alert("Please select an option");
            return;
        }
        // eslint-disable-next-line no-unused-vars
        let isCorrect = checkAnswer(
            questions[currentQuestion].id,
            String(questions[currentQuestion].options.indexOf(selectedOption))
        );
        // TODO: handle user feedback based on the response

        if (selectedOption === questions[currentQuestion].correctAnswer) {
            // Handle correct answer logic
        } else {
            // Handle incorrect answer logic
        }

        setSelectedOption(null);
        setShowResult(false);
        setCurrentQuestion((prev) => prev + 1);
    };

    const checkAnswer = (questionId, answerIndex) => {
        console.log(questionId, answerIndex);
        return checkQuizAnswer(quizId, questionId, answerIndex)
            .then((data) => {
                console.log(data);
                alert(data.isCorrect);
                return data.isCorrect;
            })
            .catch(console.error);
    };

    const handlePrevQuestion = () => {
        setSelectedOption(null);
        setShowResult(false);
        setCurrentQuestion((prev) => prev - 1);
    };

    const handleCheckAnswer = () => {
        let status = checkAnswer(
            questions[currentQuestion].id,
            String(questions[currentQuestion].options.indexOf(selectedOption))
        );
        setShowResult(status);
    };

    return (
        <Layout>
            <div className="h-full flex justify-center flex-col">
                <div className="flex flex-col lg:w-3/5 justify-center gap-12 items-center text-center mx-auto">
                    {questions?.length > 0 ? (
                        <React.Fragment>
                            <div className="w-full pr-4">
                                <div className="mb-5 dark:text-[#f3f3f3]">
                                    {currentQuestion +
                                        1 +
                                        "/" +
                                        questions?.length}
                                </div>
                                {/* Question */}
                                <div className="quiz-question">
                                    <p className="dark:text-white text-5xl leading-relaxed">
                                        {questions[currentQuestion].question}
                                    </p>
                                </div>
                            </div>
                            <div className="w-full pl-4">
                                <div className="quiz-options grid grid-cols-2 gap-4">
                                    {questions[currentQuestion].options.map(
                                        (option, index) => (
                                            <button
                                                key={index}
                                                className={`option-item p-4 rounded ${
                                                    showResult &&
                                                    option ===
                                                        questions[
                                                            currentQuestion
                                                        ].correctAnswer
                                                        ? "bg-green-500 text-white"
                                                        : showResult &&
                                                          option ===
                                                              selectedOption
                                                        ? "bg-red-500 text-white"
                                                        : option ===
                                                          selectedOption
                                                        ? "bg-black text-white"
                                                        : "bg-[#000] text-white"
                                                } bg-[#202020] hover:bg-[#000000] dark:hover:bg-[#000000] transition-all`}
                                                onClick={() =>
                                                    !showResult &&
                                                    handleOptionSelect(option)
                                                }>
                                                {option}
                                            </button>
                                        )
                                    )}
                                </div>
                            </div>
                            <div className="md:flex justify-between gap-12 items-center text-center mx-auto quiz-navigation mt-6">
                                <button
                                    className="btn-prev mr-2 text-black dark:text-[#F5F5F5] py-3 px-5 rounded-lg disabled:hidden"
                                    onClick={handlePrevQuestion}
                                    disabled={currentQuestion === 0}>
                                    Previous
                                </button>
                                <button
                                    className="btn-check mx-2 disabled:hidden text-black dark:text-[#F5F5F5] py-3 px-5 rounded-lg"
                                    onClick={handleCheckAnswer}
                                    disabled={selectedOption === null}>
                                    Check Answer
                                </button>
                                <button
                                    className="btn-next ml-2 text-black dark:text-[#F5F5F5] py-3 px-5 rounded-lg disabled:hidden"
                                    onClick={handleNextQuestion}
                                    disabled={
                                        currentQuestion === questions.length - 1
                                    }>
                                    Next
                                </button>
                            </div>
                        </React.Fragment>
                    ) : (
                        JSON.stringify(questions)
                    )}
                </div>
            </div>
        </Layout>
    );
};

export default QuizComponent;

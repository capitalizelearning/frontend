import React, { useState } from 'react';
import Layout from '../../components/Layout/Layout';

const QuizPage = () => {
    const [selectedQuestion, setSelectedQuestion] = useState(1);
    const [answers, setAnswers] = useState({});
    const [darkMode, setDarkMode] = useState(false);

    const questions = [
        {
            id: 1,
            title: 'Question 1',
            details: 'Details of Question 1',
        },
        {
            id: 2,
            title: 'Question 2',
            details: 'Details of Question 2',
        },
        {
            id: 3,
            title: 'Question 3',
            details: 'Details of Question 3',
        },
        {
            id: 4,
            title: 'Question 1',
            details: 'Details of Question 1',
        },
        {
            id: 5,
            title: 'Question 2',
            details: 'Details of Question 2',
        },
        {
            id: 6,
            title: 'Question 3',
            details: 'Details of Question 3',
        },
        {
            id: 7,
            title: 'Question 1',
            details: 'Details of Question 1',
        },
        {
            id: 8,
            title: 'Question 2',
            details: 'Details of Question 2',
        },
        {
            id: 9,
            title: 'Question 3',
            details: 'Details of Question 3',
        },
        {
            id: 1,
            title: 'Question 1',
            details: 'Details of Question 1',
        },
        {
            id: 2,
            title: 'Question 2',
            details: 'Details of Question 2',
        },
        {
            id: 3,
            title: 'Question 3',
            details: 'Details of Question 3',
        },
        {
            id: 4,
            title: 'Question 1',
            details: 'Details of Question 1',
        },
        {
            id: 5,
            title: 'Question 2',
            details: 'Details of Question 2',
        },
        {
            id: 6,
            title: 'Question 3',
            details: 'Details of Question 3',
        },
        {
            id: 7,
            title: 'Question 1',
            details: 'Details of Question 1',
        },
        {
            id: 8,
            title: 'Question 2',
            details: 'Details of Question 2',
        },
        {
            id: 9,
            title: 'Question 3',
            details: 'Details of Question 3',
        },
    ];

    const handleQuestionSelect = (questionId) => {
        setSelectedQuestion(questionId);
    };

    const handleAnswerChange = (e) => {
        setAnswers({ ...answers, [selectedQuestion]: e.target.value });
    };

    const handleSubmit = () => {
        // Handle submission logic here
        console.log(answers);
    };

    return (
        <Layout>
            <div className={`md:flex ${darkMode ? 'dark' : ''}`}>
                {/* Question List */}
                <div className="md:w-1/5 p-4">
                    <h5 className='my-3 p-3 dark:text-white'>Questions</h5>
                    <div id="scroll-ct" className='overflow-y-auto scroll-smooth focus:scroll-auto md:h-[70vh] no-scrollbar md:border-r dark:border-gray-700 border-gray-300 md:pr-3'>
                        {questions.map((question, index) => (
                            <div
                                key={question.id}
                                onClick={() => handleQuestionSelect(question.id)}
                                className={`p-4 rounded-lg cursor-pointer flex items-center justify-center text-center font-thin
                                ${selectedQuestion === question.id ? 'bg-[#33c6ab] text-white' : 'dark:bg-gray-800 bg-[#fefefe] my-2 dark:text-white'
                                    }`}
                            >
                                <span className='text-md'>{'Question ' + (index + 1)}</span>
                            </div>
                        ))}
                    </div>
                </div>


                {/* Question Details */}
                <div className="md:w-3/4 p-4 flex flex-col justify-center gap-7 md:h-[70vh] mt-5">
                    <div className="mb-4 flex flex-col gap-5">
                        {/* <p className="font-bold">Details:</p> */}
                        <p className='text-xl dark:text-[#f3f3f3] font-semibold'>{questions.find((q) => q.id === selectedQuestion)?.details}</p>
                        <p className='text-3xl dark:text-[#fefefe]'>Which is the longest river in the world?</p>
                    </div>
                    <textarea
                        className="min-h-[30vh] w-full p-4 mb-4 rounded dark:bg-[#242424] outline-none"
                        placeholder="Type your answer here..."
                        value={answers[selectedQuestion] || ''}
                        onChange={handleAnswerChange}
                    />
                    <div>
                        <button
                            onClick={handleSubmit}
                            className="px-4 py-2 bg-[#1F1F1F] text-white rounded hover:bg-[#1F1F1F] font-mediu text-lg"
                        >
                            Submit
                        </button>
                    </div>

                </div>

                {/* Dark Mode Toggle */}
                <div className="absolute top-4 right-4">
                    <input
                        type="checkbox"
                        id="darkModeToggle"
                        checked={darkMode}
                        onChange={() => setDarkMode(!darkMode)}
                        className="hidden"
                    />
                    <label
                        htmlFor="darkModeToggle"
                        className="cursor-pointer flex items-center justify-center w-10 h-10 bg-gray-200 dark:bg-gray-800 rounded-full"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className={`h-6 w-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                            />
                        </svg>
                    </label>
                </div>
            </div>
        </Layout>
    );
};

export default QuizPage;

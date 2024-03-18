import Layout from "@/components/Layout/Layout";
import LoadingSpinner from "@/components/LoadingSpinner";
import { useContent } from "@/hooks/useContent";
import * as React from "react";
import { Link } from "react-router-dom";

export default function Quizzes() {
    const { getQuizzes } = useContent();

    const [quizzes, setQuizzes] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        getQuizzes().then((data) => {
            setQuizzes(data);
            setLoading(false);
        });
    }, [getQuizzes]);

    return (
        <Layout>
            <h1 className="text-4xl font-bold my-6">Quizzes</h1>
            {loading ? (
                <LoadingSpinner size="10" />
            ) : (
                <div className="flex flex-col gap-6">
                    {quizzes.map((quiz) => (
                        <div
                            key={quiz.id}
                            className="w-full bg-white border rounded-lg border-neutral-500 dark:border-neutral-500 p-4 dark:bg-neutral-800">
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-neutral-900 dark:text-white">
                                    {quiz.title}
                                </h5>
                            </a>
                            <p className="mb-3 font-normal text-neutral-700 dark:text-neutral-400">
                                {quiz.description}
                            </p>
                            <p className="mb-3 font-normal text-neutral-700 dark:text-neutral-400">
                                {quiz.question_list.length} Questions
                            </p>
                            {quiz.is_completed === true && (
                                <p className="mb-3 font-medium text-lg">
                                    Grade: {quiz.score}%
                                </p>
                            )}
                            <div className="flex items-center justify-start gap-2 w-full mt-4">
                                <a
                                    href={`/learn/quizzes/${quiz.id}`}
                                    className="bg-[#118B4E] hover:bg-[#0B6E3E] dark:bg-[#02A854] dark:hover:bg-[#02A854] text-[#FBFBFB] font-bold py-2 px-4 rounded">
                                    {quiz.is_completed === null ? "Start Quiz" : "Review Questions"}
                                </a>
                                <Link
                                    to={`/learn/lessons/${quiz.content_id}`}
                                    className="ml-2 text-[#118B4E] dark:text-[#02A854]">
                                    Goto Lesson
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            )}{" "}
        </Layout>
    );
}

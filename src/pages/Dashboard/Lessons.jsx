import Layout from "@/components/Layout/Layout";
import LoadingSpinner from "@/components/LoadingSpinner";
import { useContent } from "@/hooks/useContent";
import { useNavigate } from "react-router-dom";

export default function Lessons() {
    const { content, loading } = useContent();
    const navigate = useNavigate();

    return (
        <Layout>
            {/* content */}
            <div className="flex-1 flex flex-col gap-12 pt-12">
                {loading ? (
                    <LoadingSpinner size="10" />
                ) : (
                    <ul className="bg-white border rounded-lg border-neutral-500 dark:border-neutral-500 p-4 divide-y divide-neutral-400 dark:divide-neutral-400 dark:bg-neutral-800">
                        {content.map((lesson) => (
                            <li key={lesson.id} className="flex flex-col gap-2">
                                <div className="flex items-center justify-between">
                                    <h2 className="text-2xl font-bold">
                                        {lesson.title}
                                    </h2>
                                    <span className="text-sm">
                                        Added{" "}
                                        {new Date(
                                            lesson.created_at
                                        ).toLocaleDateString("en-US", {
                                            year: "numeric",
                                            month: "long",
                                            day: "numeric",
                                        })}
                                    </span>
                                </div>
                                <p>{lesson.description}</p>
                                <p className="text-sm">
                                    <span className="font-semibold">
                                        Lesson format:
                                    </span>{" "}
                                    {lesson.content_type}
                                </p>
                                <div>
                                    <button
                                        onClick={() =>
                                            navigate(`/learn/lessons/${lesson.id}`)
                                        }
                                        className="bg-[#118B4E] hover:bg-[#0B6E3E] dark:bg-[#02A854] dark:hover:bg-[#02A854] text-[#FBFBFB] font-bold py-2 px-4 rounded">
                                        View lesson
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </Layout>
    );
}

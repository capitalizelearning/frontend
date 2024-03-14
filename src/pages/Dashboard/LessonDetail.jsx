import Layout from "@/components/Layout/Layout";
import { useContent } from "@/hooks/useContent";
import * as React from "react";
import { useNavigate, useParams } from "react-router-dom";
import PdfLesson from "../../components/PdfLesson";
import LoadingSpinner from "@/components/LoadingSpinner";

export default function LessonDetail() {
    const navigate = useNavigate();
    const urlParams = useParams();
    const { content, isLoading: contentLoading } = useContent();
    const [lesson, setLesson] = React.useState(null);

    React.useEffect(() => {
        if (contentLoading) return;
        const lessonId = urlParams.lessonId;
        const lesson = content.find((l) => l.id == lessonId);
        console.log(lesson);
        setLesson(lesson);
    }, [content, contentLoading, urlParams.lessonId, navigate]);

    return (
        <Layout>
            <div className="flex-1 flex flex-col gap-12 pt-12">
                {!contentLoading ? (
                    lesson ? (
                        <PdfLesson lessonData={lesson} />
                    ) : (
                        <div className="space-y-4">
                            <h1 className="text-3xl font-bold">
                                Lesson not found
                            </h1>
                            <p>
                                The lesson you are looking for does not exist.
                                Please check the URL and try again.
                            </p>
                            <button
                                onClick={() => navigate("/learn")}
                                className="bg-[#118B4E] hover:bg-[#0B6E3E] dark:bg-[#02A854] dark:hover:bg-[#02A854] text-[#FBFBFB] font-bold py-2 px-4 rounded">
                                Go back to dashboard
                            </button>
                        </div>
                    )
                ) : (
                    <LoadingSpinner />
                )}
            </div>
        </Layout>
    );
}

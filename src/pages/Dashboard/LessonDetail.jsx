import Layout from "@/components/Layout/Layout";
import { useContent } from "@/hooks/useContent";
import * as React from "react";
import { useParams } from "react-router-dom";
import PdfLesson from "../../components/PdfLesson";

export default function LessonDetail() {
    const urlParams = useParams();
    const { content, isLoading: contentLoading } = useContent();
    const [lesson, setLesson] = React.useState(null);

    React.useEffect(() => {
        if (contentLoading) return;
        const lessonId = urlParams.lessonId;
        const lesson = content.find((l) => l.id == lessonId);
        setLesson(lesson);
    }, [content, contentLoading, urlParams.lessonId]);

    return (
        <Layout>
            <div className="flex-1 p-10 flex flex-col gap-12">
                {lesson ? <PdfLesson lessonData={lesson} /> : <p>Loading...</p>}
            </div>
        </Layout>
    );
}

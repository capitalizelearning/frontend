import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

export default function PdfLesson({ lessonData }) {
    const navigate = useNavigate();

    return (
        <div className="w-full flex flex-col gap-6">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold">{lessonData.title}</h1>

                <button
                    onClick={() =>
                        navigate(
                            `/learn/${lessonData.id}/quiz/${lessonData.quiz_id_list[0]}`
                        )
                    }
                    className="bg-[#118B4E] hover:bg-[#0B6E3E] dark:bg-[#02A854] dark:hover:bg-[#02A854] text-[#FBFBFB] font-bold py-2 px-4 rounded"
                    type="button">
                    Take Quiz
                </button>
            </div>
            <p className="leading-relaxed">{lessonData.description}</p>
            <object
                data={lessonData.content_uri}
                type="application/pdf"
                width="100%"
                height="750"></object>
        </div>
    );
}
PdfLesson.propTypes = {
    lessonData: PropTypes.object,
};

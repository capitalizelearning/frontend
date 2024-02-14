import VideoActivity from "@/components/VideoActivity";
import Shell from "@/pages/app/Shell";
import { Link } from "react-router-dom";

export default function Content() {
    const sampleData = {
        id: 1,
        title: "What is Financial Literacy",
        description: "This is a video activity",
        content_uri:
            "https://storage.googleapis.com/capitalize/file_example_MP4_1920_18MG.mp4",
        content_type: "video",
        created_at: "2021-08-12T00:00:00Z",
        updated_at: "2021-08-12T00:00:00Z",
    };

    return (
        <Shell>
            <div className="flex flex-col flex-1 gap-6 w-full h-full">
                {/* Breadcrumbs */}
                <nav className="flex" aria-label="Breadcrumb">
                    <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                        <li className="inline-flex items-center">
                            <Link
                                to="/learn/"
                                className="inline-flex items-center text-sm font-medium text-gray-700 hover:underline">
                                Lessons
                            </Link>
                        </li>
                        <li className="inline-flex items-center">
                            <a
                                href="#"
                                className="inline-flex items-center text-sm font-medium text-gray-700 hover:underline">
                                Unit 1
                            </a>
                        </li>
                        <li>
                            <div className="flex items-center">
                                <svg
                                    className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 6 10">
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="m1 9 4-4-4-4"
                                    />
                                </svg>
                                <a
                                    href="#"
                                    className="inline-flex items-center text-sm font-medium text-gray-700 hover:underline">
                                    What is Financial Literacy
                                </a>
                            </div>
                        </li>
                    </ol>
                </nav>

                <div className="flex items-start gap-12">
                    {/* Main content */}
                    {/* Load relevant component based on ContentFormat */}
                    <VideoActivity lessonData={sampleData} />

                    {/* Sidebar */}
                    <div class="w-72 flex-shrink-0">
                        <div className="bg-white rounded-lg  border border-[#00000070] flex flex-col divide-y divide-[#00000070]">
                            <span className="px-4 py-2">Lesson Plan</span>
                            <ul className="p-4">
                                <li>Video 1</li>
                                <li>Video 2</li>
                                <li>Article</li>
                                <li>Video 3</li>
                            </ul>
                            <div className="p-4">Next Lesson"</div>
                        </div>
                        <div className="flex items-center gap-4 mt-6">
                            <button className="flex-1 p-4 bg-[#00800010] text-black border border-[#008000] rounded-md font-medium">
                                Ask AI
                            </button>
                            <button className="flex-1 p-4 bg-[#00800010] text-black border border-[#008000] rounded-md font-medium">
                                Start Quiz
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Shell>
    );
}

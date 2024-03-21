import Footer from "@/components/Footer";
import LandingNav from "@/components/LandingNav";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
    const navigate = useNavigate();
    return (
        <main className="flex flex-col max-w-screen w-full overflow-x-hidden dark:bg-[#0F0F0F] dark:text-[#FBFBFB]">
            <div className="flex-1 flex flex-col min-h-screen">
                <LandingNav />

                <div className="w-full container mx-auto flex-wrap p-8 md:p-4">
                    <section>
                        <div className="flex flex-col items-center w-full gap-6 my-12 md:my-32">
                            <div>
                                <p className="uppercase font-semibold text-[#02A854] dark:text-[#33C6AB]">
                                    Error 404
                                </p>
                            </div>
                            <div className="w-full max-w-screen-md mx-auto space-y-8">
                                <h1 className="text-7xl font-bold text-center text-primary">
                                    Page Not Found
                                </h1>
                                <p className="text-lg text-text-light text-center leading-relaxed">
                                    We couldn&apos;t find the page you were
                                    looking for. Please check the URL or go back
                                    to the homepage.
                                </p>
                                <div className="flex justify-center gap-4 mb-6">
                                    <button
                                        onClick={() => navigate(-1)}
                                        className="flex items-center gap-2 bg-[#002A14] text-white py-4 px-10 rounded-full text-lg font-semibold dark:bg-[#33C6AB]">
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
                                                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                                            />
                                        </svg>
                                        Go Back
                                    </button>
                                    <a
                                        href="/"
                                        className="flex items-center gap-2 border border-[#002A14] hover:bg-[#002A14] text-[#002A14] hover:text-white py-4 px-10 rounded-full text-lg font-semibold dark:border-[#33C6AB] dark:text-[#33C6AB] dark:hover:bg-[#33C6AB]">
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
                                                d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                                            />
                                        </svg>
                                        Go Home
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <Footer />
        </main>
    );
}

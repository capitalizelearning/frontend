import Footer from "@/components/Footer";
import LandingNav from "@/components/LandingNav";

export default function NotFound() {
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
                                    <a
                                        href="/"
                                        className="flex items-center gap-2 bg-[#002A14] text-white py-4 px-10 rounded-full text-lg font-semibold dark:bg-[#33C6AB]">
                                        Go Home
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="stroke-white h-6 w-6"
                                            width={44}
                                            height={44}
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            fill="none"
                                            strokeLinecap="round"
                                            strokeLinejoin="round">
                                            <path
                                                stroke="none"
                                                d="M0 0h24v24H0z"
                                                fill="none"
                                            />
                                            <path d="M9 6l6 6l-6 6" />
                                        </svg>
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

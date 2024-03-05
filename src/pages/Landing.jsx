import ApplicationV1Src from "@/assets/imgs/application_v1.png";
import FramerLogoSrc from "@/assets/imgs/brands/framer.png";
import LoomLogoSrc from "@/assets/imgs/brands/loom.png";
import MazeLogoSrc from "@/assets/imgs/brands/maze.png";
import SquareLogoSrc from "@/assets/imgs/brands/square.png";
import Feature1Src from "@/assets/imgs/features_tile_1.png";
import Feature2Src from "@/assets/imgs/features_tile_2.png";
import Feature3Src from "@/assets/imgs/features_tile_3.png";
import Feature4Src from "@/assets/imgs/features_tile_4.png";
import Feature5Src from "@/assets/imgs/features_tile_5.png";
import JoinWaitList from "@/components/JoinWaitlist";
import LandingNav from "@/components/LandingNav";
import Footer from "@/components/Footer";
import * as React from "react";
import { useLocation } from "react-router-dom";
import ProductTabs from "@/components/ProductTabs";
import SectionHeaderTitle from "@/components/Section/HeaderTitle";

export default function Landing() {
    const location = useLocation();
    const joinWaitListRef = React.useRef(null);

    React.useEffect(
        // Scroll to #join-wait-list if the URL has #join-wait-list
        () => {
            if (location.hash === "#join-wait-list") scrollToWaitList();
        },
        [location.hash]
    );

    const scrollToWaitList = () => {
        joinWaitListRef.current.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };

    return (
        <>


            <main className="flex flex-col max-w-screen w-full overflow-x-hidden dark:bg-[#0F0F0F] dark:text-[#FBFBFB]">
                <LandingNav />

                <div className="w-full container mx-auto flex-wrap p-8 md:p-4">
                    <section>
                        <div className="flex flex-col items-center w-full gap-6 my-12 md:my-32">
                            <div>
                                <p className="uppercase font-semibold text-[#02A854] dark:text-[#33C6AB]">
                                    INTRODUCING FINANCE
                                </p>
                            </div>
                            <div className="w-full max-w-screen-md mx-auto space-y-8">
                                <h1 className="text-7xl font-bold text-center text-primary">
                                    Your Gateway to Financial Freedom!
                                </h1>
                                <p className="text-lg text-text-light text-center leading-relaxed">
                                    Our app streamlines financial management,
                                    providing a comprehensive starters guide,
                                    empowering users to achieve greater efficiency
                                    in their financial goals.
                                </p>
                                <div className="flex justify-center gap-4 mb-6">
                                    <a
                                        href="#"
                                        className="flex items-center gap-2 bg-[#002A14] text-white py-4 px-10 rounded-full text-lg font-semibold dark:bg-[#33C6AB]">
                                        Get Started
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
                                <p className="text-center text-text-light text-xs">
                                    1,200+ reviewers (4.9 out of 5)
                                </p>
                            </div>
                        </div>
                        <div className="w-full mb-12">
                            <img
                                src={ApplicationV1Src}
                                className="w-full rounded-lg"
                                alt="hero"
                            />
                        </div>
                        <div className="flex flex-col items-center justify-center w-full mb-12">
                            <p className="text-lg font-semibold text-text mb-4">
                                Trusted by the world leaders
                            </p>
                            <div className="flex flex-row flex-wrap justify-center gap-12">
                                <img
                                    src={LoomLogoSrc}
                                    className="h-12"
                                    alt="loom"
                                />
                                <img
                                    src={MazeLogoSrc}
                                    className="h-12"
                                    alt="maze"
                                />
                                <img
                                    src={FramerLogoSrc}
                                    className="h-12"
                                    alt="framer"
                                />
                                <img
                                    src={SquareLogoSrc}
                                    className="h-12"
                                    alt="square"
                                />
                            </div>
                        </div>
                    </section>
                    <section>
                        <div className="flex flex-col items-center w-full gap-8 my-12 md:my-32">
                            <div className="flex items-center gap-1.5 border border-solid border-[#02A854] text-[#02A854] rounded-full px-2 py-1.5 font-medium dark:border-[#33C6AB] dark:text-[#33C6AB]">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-6 h-6">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
                                    />
                                </svg>
                                Features
                            </div>
                            <h2 className="text-6xl font-bold text-primary-dark">
                                Product Features
                            </h2>
                            <p className="text-lg text-text-light md:text-center leading-relaxed mb-12">
                                We take immense pride in presenting you with a
                                comprehensive array of powerful tools and
                                capabilities that are designed to elevate your
                                experience and help you achieve more.
                            </p>
                            <div className="flex flex-wrap items-center justify-center gap-8 w-full">
                                <img src={Feature1Src} alt="feature_1" />
                                <img src={Feature2Src} alt="feature_2" />
                            </div>
                            <div className="flex items-center flex-wrap justify-center gap-8 w-full">
                                <img src={Feature3Src} alt="feature_3" />
                                <img src={Feature4Src} alt="feature_4" />
                                <img src={Feature5Src} alt="feature_5" />
                            </div>
                        </div>
                    </section>
                    <section id="#features">
                            <div className="flex flex-col items-center w-full gap-4 my-12 md:mb-32">
                                {/* Header Title */}
                                <SectionHeaderTitle
                                    title={"Features"}
                                    subTitle={"Other Features"}
                                    desc={`Our platform is designed to provide you with an
                                exceptional user experience, catering to the needs
                                of ambitious professionals and visionary
                                entrepreneurs.`}
                                />
                                {/* Product Tab */}
                                <ProductTabs />
                            </div>
                        </section>
                    <section>
                        <div className="flex flex-col items-center w-full gap-8 my-12 md:my-32">
                            <div className="flex flex-wrap items-center justify-center gap-8 w-full">
                                <img src={Feature3Src} alt="feature_3" />
                                <img src={Feature4Src} alt="feature_4" />
                                <img src={Feature5Src} alt="feature_5" />
                            </div>
                        </div>
                    </section>
                    <section>
                        <div className="flex flex-col items-center w-full gap-8 my-12 md:my-32">
                            <div className="flex items-center gap-1.5 border border-solid border-[#02A854] text-[#02A854] rounded-full px-2 py-1.5 font-medium dark:border-[#33C6AB] dark:text-[#33C6AB]">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-6 h-6">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                    />
                                </svg>
                                Pricing
                            </div>
                            <h2 className="text-6xl font-bold text-primary-dark">
                                Supercharge your growth
                            </h2>
                            <p className="text-lg text-text-light md:text-center leading-relaxed mb-12">
                                Whether you&apos;re a small startup, a growing
                                mid-sized business, or a large enterprise, we have
                                plans tailored to your specific demands.
                            </p>
                            <div className="flex flex-col md:flex-row items-center gap-12 w-full max-w-screen-lg">
                                <div className="flex flex-col items-center gap-4 border border-solid border-[#242424] rounded-lg p-6 dark:bg-[#161616] dark:border-[#242424]">
                                    <h4 className="text-3xl text-primary-dark text-center">
                                        Starter
                                    </h4>
                                    <p>
                                        For driven individuals who want to start
                                        with essential features and resources to
                                        kickstart your journey.{" "}
                                    </p>
                                    <p className="text-3xl font-bold text-primary-dark">
                                        Free{" "}
                                        <span className="text-lg font-normal text-text-light">
                                            /{" "}month
                                        </span>
                                    </p>
                                    <hr className="border border-black my-12 w-full" />
                                    <ul className="flex flex-col w-full justify-start">
                                        <li className="flex items-center gap-1.5">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.5"
                                                stroke="currentColor"
                                                className="w-6 h-6">
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="m4.5 12.75 6 6 9-13.5"
                                                />
                                            </svg>
                                            Progress analytics
                                        </li>
                                        <li className="flex items-center gap-1.5">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.5"
                                                stroke="currentColor"
                                                className="w-6 h-6">
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="m4.5 12.75 6 6 9-13.5"
                                                />
                                            </svg>
                                            Easy Collaboration
                                        </li>
                                        <li className="flex items-center gap-1.5">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.5"
                                                stroke="currentColor"
                                                className="w-6 h-6">
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="m4.5 12.75 6 6 9-13.5"
                                                />
                                            </svg>
                                            Basic AI Assistant 
                                        </li>
                                        <li className="flex items-center gap-1.5">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.5"
                                                stroke="currentColor"
                                                className="w-6 h-6">
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="m4.5 12.75 6 6 9-13.5"
                                                />
                                            </svg>
                                            Stock Simulator
                                        </li>
                                        <li className="flex items-center gap-1.5">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.5"
                                                stroke="currentColor"
                                                className="w-6 h-6">
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="m4.5 12.75 6 6 9-13.5"
                                                />
                                            </svg>
                                            Investing Curriculum 
                                        </li>
                                    </ul>
                                </div>
                                <div className="flex flex-col items-center gap-4 border border-solid border-[#242424] rounded-lg p-6 dark:bg-[#161616] dark:border-[#242424]">
                                    <h4 className="text-3xl text-primary-dark text-center">
                                        Pro
                                    </h4>
                                    <p>
                                        For ambitious professionals who require more
                                        innovative and additional tools to stay
                                        ahead of the competition.
                                    </p>
                                    <p className="text-3xl font-bold text-primary-dark">
                                        $4.99{" "}
                                        <span className="text-lg font-normal text-text-light">
                                            /{" "}month
                                        </span>
                                    </p>
                                    <hr className="border border-black my-12 w-full" />
                                    <ul className="flex flex-col w-full justify-start">
                                        <li className="flex items-center gap-1.5">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.5"
                                                stroke="currentColor"
                                                className="w-6 h-6">
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="m4.5 12.75 6 6 9-13.5"
                                                />
                                            </svg>
                                            All Free Features
                                        </li>
                                        <li className="flex items-center gap-1.5">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.5"
                                                stroke="currentColor"
                                                className="w-6 h-6">
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="m4.5 12.75 6 6 9-13.5"
                                                />
                                            </svg>
                                            Options and Forex Simulator 
                                        </li>
                                        <li className="flex items-center gap-1.5">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.5"
                                                stroke="currentColor"
                                                className="w-6 h-6">
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="m4.5 12.75 6 6 9-13.5"
                                                />
                                            </svg>
                                            Premium AI Assistant 
                                        </li>
                                        <li className="flex items-center gap-1.5">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.5"
                                                stroke="currentColor"
                                                className="w-6 h-6">
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="m4.5 12.75 6 6 9-13.5"
                                                />
                                            </svg>
                                            Advanced Trading Curriculum
                                        </li>
                                        <li className="flex items-center gap-1.5">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.5"
                                                stroke="currentColor"
                                                className="w-6 h-6">
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="m4.5 12.75 6 6 9-13.5"
                                                />
                                            </svg>
                                            In-depth Technical Indicators
                                        </li>
                                    </ul>
                                </div>
                                <div className="flex flex-col items-center gap-4 border border-solid border-[#242424] rounded-lg p-6 dark:bg-[#161616] dark:border-[#242424]">
                                    <h4 className="text-3xl text-primary-dark text-center">
                                        Schools
                                    </h4>
                                    <p>
                                        For companies who want advanced features
                                        with specific needs to achieve better
                                        business results.
                                    </p>
                                    <p className="text-3xl font-bold text-primary-dark">
                                        Contact Sales
                                    </p>
                                    <hr className="border border-black my-12 w-full" />
                                    <ul className="flex flex-col w-full justify-start">
                                        <li className="flex items-center gap-1.5">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.5"
                                                stroke="currentColor"
                                                className="w-6 h-6">
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="m4.5 12.75 6 6 9-13.5"
                                                />
                                            </svg>
                                           Custom Teacher and Learner Dashboard 
                                        </li>
                                        <li className="flex items-center gap-1.5">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.5"
                                                stroke="currentColor"
                                                className="w-6 h-6">
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="m4.5 12.75 6 6 9-13.5"
                                                />
                                            </svg>
                                            Progress Leaderboards
                                        </li>
                                        <li className="flex items-center gap-1.5">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.5"
                                                stroke="currentColor"
                                                className="w-6 h-6">
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="m4.5 12.75 6 6 9-13.5"
                                                />
                                            </svg>
                                            Premium AI model
                                        </li>
                                        <li className="flex items-center gap-1.5">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.5"
                                                stroke="currentColor"
                                                className="w-6 h-6">
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="m4.5 12.75 6 6 9-13.5"
                                                />
                                            </svg>
                                            Standard integrations
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section ref={joinWaitListRef}>
                        <JoinWaitList />
                    </section>
                    <Footer />
                </div>
            </main>
        </>
    );
}

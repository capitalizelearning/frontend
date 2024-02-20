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
import Feature6Src from "@/assets/imgs/features_tile_6.png";
import GetStartedSrc from "@/assets/imgs/get_started.png";
import Review1Src from "@/assets/imgs/review_1.png";
import Review2Src from "@/assets/imgs/review_2.png";
import Review3Src from "@/assets/imgs/review_3.png";
import LogoSrc from "@/assets/imgs/svgs/logo.svg";
import * as React from "react";

export default function Landing() {
    const [vpWidth, setVpWidth] = React.useState(0);
    const [showMenu, setShowMenu] = React.useState(false);

    React.useEffect(() => {
        const handleResize = () => {
            setVpWidth(window.innerWidth);
            setShowMenu(false);
        };
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const [email, setEmail] = React.useState("");
    const [waitListMessage, setWaitListMessage] = React.useState("");

    const handleWaitListSubmit = async (e) => {
        e.preventDefault();
        setWaitListMessage("");

        if (email === "") {
            setWaitListMessage("Please enter a valid email address.");
            return;
        }

        const res = await fetch(
            "https://api.capitalizelearn.com/v1/auth/wait-list/",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email }),
            }
        );
        if (res.status === 201) {
            setWaitListMessage("Thank you for joining the waitlist!");
            setEmail("");
            return;
        }
        if (res.status === 200) {
            setWaitListMessage(
                "You are already on the waitlist. Keep an eye on your email for updates on our product."
            );
            setEmail("");
            return;
        }
        if (res.status === 400) {
            setWaitListMessage("Please enter a valid email address.");
            return;
        }
        if (res.status === 500) {
            setWaitListMessage("Something went wrong. Please try again later.");
            return;
        }
    };

    return (
        <main className="flex flex-col max-w-screen w-full overflow-x-hidden">
            <nav className="flex border-b border-[#161616] relative">
                <div className="container mx-auto flex items-center py-3 px-4 gap-2">
                    <div className="md:hidden flex">
                        <button
                            className="p-4"
                            onClick={() => setShowMenu(!showMenu)}>
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
                                    d="M3.75 9h16.5m-16.5 6.75h16.5"
                                />
                            </svg>
                        </button>
                    </div>
                    <div className=" flex-shrink-0 flex-1 md:flex-none">
                        <img src={LogoSrc} className="h-12 w-12D" alt="logo" />
                    </div>
                    {/* Mobile menu */}
                    <ul
                        className={`${
                            showMenu ? "flex" : "hidden"
                        } md:hidden flex-1 flex-col gap-4 absolute w-full left-0 top-full mt-1 px-8 py-4 bg-white border-b border-[#161616]`}>
                        <li>
                            <a
                                href="/"
                                className="text-text hover:underline">
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="text-text hover:underline">
                                About Us
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="text-text hover:underline">
                                Features
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="text-text hover:underline">
                                Contact Us
                            </a>
                        </li>
                    </ul>
                    {/* Desktop menu */}
                    <ul className="hidden md:flex flex-1 justify-center gap-4">
                        <li>
                            <a
                                href="/"
                                className="text-text hover:underline">
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="text-text hover:underline">
                                About Us
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="text-text hover:underline">
                                Features
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="text-text hover:underline">
                                Contact Us
                            </a>
                        </li>
                    </ul>
                    <div className="flex gap-4">
                        <button
                            type="button"
                            className="flex items-center border border-[#8C8D8E] text-[#8C8D8E] p-4 rounded-full text-lg font-semibold">
                            <svg
                                width={24}
                                height={24}
                                className="stroke-current h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fillRule="evenodd"
                                clipRule="evenodd">
                                <path d="M15.853 16.56c-1.683 1.517-3.911 2.44-6.353 2.44-5.243 0-9.5-4.257-9.5-9.5s4.257-9.5 9.5-9.5 9.5 4.257 9.5 9.5c0 2.442-.923 4.67-2.44 6.353l7.44 7.44-.707.707-7.44-7.44zm-6.353-15.56c4.691 0 8.5 3.809 8.5 8.5s-3.809 8.5-8.5 8.5-8.5-3.809-8.5-8.5 3.809-8.5 8.5-8.5z" />
                            </svg>
                        </button>
                        <a
                            href="/login"
                            className="flex items-center gap-1.5 bg-green-950 text-white py-1 px-10 rounded-full text-lg font-semibold">
                            Login
                        </a>
                    </div>
                </div>
            </nav>

            <div className="w-full container mx-auto flex-wrap p-8 md:p-4">
                <section>
                    <div className="flex flex-col items-center w-full gap-6 my-12 md:my-32">
                        <div>
                            <p className="uppercase font-semibold text-[#02A854]">
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
                                    className="flex items-center gap-2 bg-green-950 text-white py-4 px-10 rounded-full text-lg font-semibold">
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
                            className="w-full"
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
                        <div className="flex items-center gap-1.5 border border-solid border-[#02A854] text-[#02A854] rounded-full px-2 py-1.5 font-medium">
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
                        <div className="flex flex-col items-center justify-center gap-8 w-full f">
                            <img src={Feature1Src} alt="feature_1" />
                            <img src={Feature2Src} alt="feature_2" />
                        </div>
                        <div className="flex flex-col items-center justify-center gap-8 w-full">
                            <img src={Feature3Src} alt="feature_3" />
                            <img src={Feature4Src} alt="feature_4" />
                            <img src={Feature5Src} alt="feature_5" />
                        </div>
                    </div>
                </section>
                <section>
                    <div className="flex flex-col items-center w-full gap-8 my-12 md:my-32">
                        <div className="flex items-center gap-1.5 bg-[#112220] text-[#33C6AB] border border-[#33C6AB] rounded-full px-2 py-1.5 font-medium">
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
                            Other features
                        </h2>
                        <p className="text-lg text-text-light md:text-center leading-relaxed mb-12">
                            Our platform is designed to provide you with an
                            exceptional user experience, catering to the needs
                            of ambitious professionals and visionary
                            entrepreneurs.
                        </p>
                        <ul className="w-full max-w-screen-lg flex items-center overflow-x-auto rounded-full bg-[#161616] text-[#9B9CA1] text-center mb-12 ">
                            <li className="p-4 flex-1 flex gap-1.5 justify-center text-[#FBFBFB] bg-[#1F1F1F] rounded-full w-full h-full whitespace-nowrap">
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
                                        d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
                                    />
                                </svg>
                                AI Assistant
                            </li>
                            <li className="p-4 flex-1 flex gap-1.5 justify-center hover:text-[#FBFBFB] hover:bg-[#1F1F1F] rounded-full whitespace-nowrap">
                                <svg
                                    width={19}
                                    height={19}
                                    viewBox="0 0 19 19"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M9.15039 1.77612C7.64849 1.77612 6.18032 2.22149 4.93153 3.0559C3.68275 3.89031 2.70944 5.07629 2.13468 6.46387C1.55993 7.85145 1.40955 9.3783 1.70256 10.8513C1.99556 12.3244 2.7188 13.6775 3.7808 14.7395C4.84281 15.8015 6.19588 16.5247 7.66893 16.8177C9.14197 17.1107 10.6688 16.9603 12.0564 16.3856C13.444 15.8108 14.63 14.8375 15.4644 13.5887C16.2988 12.3399 16.7441 10.8718 16.7441 9.36987C16.7419 7.35657 15.9411 5.42637 14.5175 4.00275C13.0939 2.57913 11.1637 1.77836 9.15039 1.77612ZM9.99414 3.52479C11.4944 3.74171 12.8538 4.52715 13.791 5.71854L9.99414 7.90878V3.52479ZM3.66602 11.5615C3.33373 10.7319 3.19417 9.83769 3.25788 8.94629C3.32158 8.05489 3.58688 7.1896 4.03376 6.41568C4.48064 5.64177 5.09743 4.97944 5.83761 4.47866C6.57779 3.97788 7.42203 3.65172 8.30664 3.52479V8.88261L3.66602 11.5615ZM9.15039 15.2761C8.25717 15.2759 7.37565 15.0729 6.57236 14.6823C5.76907 14.2916 5.065 13.7237 4.51328 13.0212L14.6348 7.17823C14.9929 8.07434 15.1259 9.04455 15.0223 10.004C14.9187 10.9634 14.5816 11.8828 14.0405 12.6818C13.4993 13.4809 12.7706 14.1351 11.9182 14.5874C11.0657 15.0396 10.1154 15.2761 9.15039 15.2761Z"
                                        fill="#9B9CA1"
                                    />
                                </svg>
                                Simple Analytics
                            </li>
                            <li className="p-4 flex-1 flex gap-1.5 justify-center hover:text-[#FBFBFB] hover:bg-[#1F1F1F] rounded-full whitespace-nowrap">
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
                                        d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
                                    />
                                </svg>
                                Easy Collaboration
                            </li>
                            <li className="p-4 flex-1 flex gap-1.5 justify-center hover:text-[#FBFBFB] hover:bg-[#1F1F1F] rounded-full whitespace-nowrap">
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
                                        d="M6 6.878V6a2.25 2.25 0 0 1 2.25-2.25h7.5A2.25 2.25 0 0 1 18 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 0 0 4.5 9v.878m13.5-3A2.25 2.25 0 0 1 19.5 9v.878m0 0a2.246 2.246 0 0 0-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0 1 21 12v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6c0-.98.626-1.813 1.5-2.122"
                                    />
                                </svg>
                                Smart Automation
                            </li>
                        </ul>
                        <div className="w-full max-w-screen-lg grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div className="flex flex-col gap-8">
                                <div className="flex items-center gap-4">
                                    <span className="p-2 rounded-lg bg-[#111E22] text-[#33ABD1]">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-10 h-10"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
                                            />
                                        </svg>
                                    </span>
                                    <span className="text-lg font-bold text-[#33ABD1]">
                                        AI Assistant
                                    </span>
                                </div>
                                <h3 className="text-5xl font-bold text-black">
                                    Your new ultimate productivity companion
                                </h3>
                                <p className="text-text-light text-lg leading-relaxed">
                                    Designed to seamlessly integrate into your
                                    personal
                                    <br />
                                    and professional life, our AI Assistant is
                                    here to revolutionize the way you accomplish
                                    tasks.
                                </p>
                                <div className="flex justify-center">
                                    <a
                                        href="#"
                                        className="bg-[#1F1F1F] text-[#FBFBFB] py-4 px-10 rounded-full text-lg font-semibold ">
                                        Learn More
                                    </a>
                                </div>
                            </div>
                            <div>
                                <img
                                    src={Feature6Src}
                                    className="w-full"
                                    alt="ai_assistant"
                                />
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="flex flex-col items-center w-full gap-8 my-12 md:my-32">
                        <div className="flex items-center gap-1.5 bg-[#112220] text-[#33C6AB] border border-[#33C6AB] rounded-full px-2 py-1.5 font-medium">
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
                                    d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
                                />
                            </svg>
                            Features
                        </div>
                        <h2 className="text-6xl font-bold text-primary-dark">
                            What are people saying
                        </h2>
                        <p className="text-lg text-text-light md:text-center leading-relaxed mb-12">
                            Our customers continue to be the core of our
                            business and their feedback vividly illustrates the
                            success of our efforts.
                        </p>
                        <div className="flex flex-col items-center gap-8 w-full justify-center">
                            <img src={Review1Src} alt="review_1" />
                            <img src={Review2Src} alt="review_2" />
                            <img src={Review3Src} alt="review_3" />
                        </div>
                    </div>
                </section>
                <section>
                    <div className="flex flex-col items-center w-full gap-8 my-12 md:my-32">
                        <div className="flex items-center gap-1.5 bg-[#112220] text-[#33C6AB] border border-[#33C6AB] rounded-full px-2 py-1.5 font-medium">
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
                            Testimonials
                        </div>
                        <h2 className="text-6xl font-bold text-primary-dark">
                            Supercharge your growth
                        </h2>
                        <p className="text-lg text-text-light md:text-center leading-relaxed mb-12">
                            Whether you're a small startup, a growing mid-sized
                            business, or a large enterprise, we have plans
                            tailored to your specific demands.
                        </p>
                        <div className="flex flex-col items-center gap-12 w-full max-w-screen-lg">
                            <div className="max-w-[718px] flex flex-col items-center gap-4 border border-solid border-black rounded-lg p-6">
                                <h4 className="text-3xl text-primary-dark text-center">
                                    Starter
                                </h4>
                                <p>
                                    For driven individuals who want to start
                                    with essential features and resources to
                                    kickstart your journey.{" "}
                                </p>
                                <p className="text-3xl font-bold text-primary-dark">
                                    $9.99{" "}
                                    <span className="text-lg font-normal text-text-light">
                                        /month
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
                                        Standard analytics
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
                                        Limited tracking
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
                                        Basic AI model
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
                                        Email support
                                    </li>
                                </ul>
                            </div>
                            <div className="max-w-[718px] flex flex-col items-center gap-4 border border-solid border-black rounded-lg p-6">
                                <h4 className="text-3xl text-primary-dark text-center">
                                    Pro
                                </h4>
                                <p>
                                    For ambitious professionals who require more
                                    innovative and additional tools to stay
                                    ahead of the competition.
                                </p>
                                <p className="text-3xl font-bold text-primary-dark">
                                    $19.99{" "}
                                    <span className="text-lg font-normal text-text-light">
                                        /month
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
                                        Standard analytics
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
                                        Limited tracking
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
                                        Basic AI model
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
                                        Email support
                                    </li>
                                </ul>
                            </div>
                            <div className="max-w-[718px] flex flex-col items-center gap-4 border border-solid border-black rounded-lg p-6">
                                <h4 className="text-3xl text-primary-dark text-center">
                                    Enterprise
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
                                        Standard analytics
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
                                        Limited tracking
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
                                        Basic AI model
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
                                        Email support
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="flex flex-col items-center w-full gap-8 my-12 md:my-32">
                        <div className="grid grid-cols-1 md:grid-cols-2 border border-solid border-black rounded-lg  w-full max-w-screen-lg">
                            <div className="flex flex-col gap-4 p-12">
                                <h3 className="text-4xl font-bold text-primary-dark">
                                    Start building today
                                </h3>
                                <p className="text-lg text-text-light leading-relaxed">
                                    Our app eliminates the need for complex
                                    spreadsheets,endless email threads,
                                    empowering businesses to achieve greater
                                    efficiency.
                                </p>
                                {waitListMessage && (
                                    <span className="flex items-center gap-4 text-red-600">
                                        {waitListMessage}
                                    </span>
                                )}
                                <form
                                    className="flex flex-col md:flex-row items-center gap-2 md:gap-4"
                                    method="POST">
                                    <input
                                        type="email"
                                        required
                                        autoComplete="email"
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                        placeholder="Enter your email"
                                        className="w-full py-2 px-4 rounded-full border-2 border-solid border-[#8C8D8E] focus:outline-none focus:border-[#0F0F0F]"
                                    />
                                    <button
                                        onClick={handleWaitListSubmit}
                                        className="bg-[#0F0F0F] text-[#FBFBFB] py-3 px-6 rounded-full flex-shrink-0 place-self-end">
                                        Join waitlist
                                    </button>
                                    <span className="font-light text-xs mt-4">
                                        Joining the wait list, indicates your consent to our{" "}
                                        <a
                                            href="#"
                                            className="underline hover:no-underline">
                                            Privacy Policy
                                        </a> and{" "} 
                                        <a
                                            href="#"
                                            className="underline hover:no-underline">
                                            Terms of Service
                                        </a>. You can unsubscribe at any time.
                                    </span>
                                </form>
                            </div>
                            <div className="get-started-cta">
                                <img
                                    src={GetStartedSrc}
                                    className="w-full"
                                    alt="cta_tile"
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}

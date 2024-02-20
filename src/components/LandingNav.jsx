import LogoSrc from "@/assets/imgs/svgs/logo.svg";
import * as React from "react";

export default function LandingNav() {
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

    return (
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
                        <a href="/" className="text-text hover:underline">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="/about" className="text-text hover:underline">
                            About Us
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-text hover:underline">
                            Features
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-text hover:underline">
                            Contact Us
                        </a>
                    </li>
                </ul>
                {/* Desktop menu */}
                <ul className="hidden md:flex flex-1 justify-center gap-4">
                    <li>
                        <a href="/" className="text-text hover:underline">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="/about" className="text-text hover:underline">
                            About Us
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-text hover:underline">
                            Features
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-text hover:underline">
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
    );
}

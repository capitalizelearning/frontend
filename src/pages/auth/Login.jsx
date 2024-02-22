import ImgSrc from "@/assets/imgs/login.png";
import { useAuth } from "@/hooks/useAuth";
import * as React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Login() {
    const { login, isAuthenticated } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();

    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [error, setError] = React.useState("");

    React.useEffect(() => {
        // Bypass login on mount if already authenticated
        if (isAuthenticated) {
            navigate(getNextPage());
        }
    }, []);

    function getNextPage() {
        return new URLSearchParams(location.search).get("next") || "/learn";
    }

    async function handleLogin() {
        return;
        // setError(null);
        // const { success, error } = login(username, password);
        // if (success) {
        //     navigate(getNextPage());
        // }
        // setError(error);
    }

    return (
        <div className="min-h-screen  flex flex-col items-center justify-center overflow-x-hidden dark:bg-[#0F0F0F] dark:text-[#FBFBFB]">
            <div className="flex flex-col md:flex-row overflow-hidden gap-16 p-8 container mx-auto ">
                <div className="hidden md:block">
                    <img
                        src={ImgSrc}
                        alt="Login"
                        className="w-full h-full rounded-lg"
                    />
                </div>
                <div className="flex flex-col items-center justify-center w-full">
                    <h1 className="text-4xl font-bold md:text-center mb-4 w-full">
                        Welcome Back!
                    </h1>
                    <p className="md:text-center mb-6 w-full text-[#93949E] dark:text-[#9B9CA1]">
                        Access your future financial freedom ahead!
                    </p>
                    <div className="flex flex-col w-full max-w-sm gap-6">
                        <form
                            onSubmit={handleLogin}
                            className="space-y-6"
                            method="POST">
                            {error && (
                                <ul
                                    className="px-4 py-2 bg-[#FEE2E2] dark:bg-[#FEE2E2] rounded-md text-[#C53030] dark:text-[#C53030] border-l-4 border-[#C53030] dark:border-[#C53030"
                                    role="alert">
                                    <li className="flex items-start gap-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="w-5 h-5 flex-shrink-0">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                                            />
                                        </svg>
                                        <span className="dark:text-[#FBFBFB">
                                            {error}
                                        </span>
                                    </li>
                                </ul>
                            )}
                            <div className="relative z-0">
                                <input
                                    type="text"
                                    id="email-label"
                                    value={username}
                                    onChange={(e) =>
                                        setUsername(e.target.value)
                                    }
                                    className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-[#161616] bg-[#] border-0 border-b-2 border-[#161616] appearance-none  focus:outline-none focus:ring-0 focus:border-[#02A854] peer dark:bg-[#161616] dark:text-[#FBFBFB] dark:border-[#FBFBFB]"
                                    placeholder=" "
                                />
                                <label
                                    htmlFor="email-label"
                                    className="absolute text-sm text-[#9B9CA1] duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-[#02A854] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
                                    Email
                                </label>
                            </div>
                            <div className="relative z-0">
                                <input
                                    type="text"
                                    id="password-label"
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                    className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-[#161616] bg-[#FBFBFB] border-0 border-b-2 border-[#161616] appearance-none  focus:outline-none focus:ring-0 focus:border-[#02A854] peer dark:bg-[#161616] dark:text-[#FBFBFB] dark:border-[#FBFBFB]"
                                    placeholder=" "
                                />
                                <label
                                    htmlFor="password-label"
                                    className="absolute text-sm text-[#9B9CA1] duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-[#02A854] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
                                    Password
                                </label>
                            </div>
                            <div className="flex flex-col md:flex-row justify-between gap-3 md:items-center">
                                <div className="flex items-center">
                                    <input
                                        type="checkbox"
                                        id="remember-me"
                                        name=""
                                        className="w-5 h-5 rounded border-[#161616] dark:border-[#FBFBFB] dark:bg-[#161616] dark:text-[#FBFBFB]"
                                        defaultChecked
                                    />
                                    <label
                                        htmlFor="remember-me"
                                        className="ml-2 block text-sm dark:text-[#FBFBFB]">
                                        Remember me
                                    </label>
                                </div>
                                <a
                                    href="#"
                                    className="text-[#118B4E] font-medium">
                                    Forgot Password?
                                </a>
                            </div>
                            <div className="mb-4">
                                <button
                                    type="submit"
                                    disabled
                                    className="cursor-not-allowed w-full bg-[#118B4E] hover:bg-primary text-[#FBFBFB] font-bold py-2 px-4 rounded">
                                    Login
                                </button>
                            </div>
                        </form>

                        <div className="flex items-center justify-center gap-3">
                            <span className="flex-1 h-0.5 bg-neutral-200 dark:bg-neutral-700"></span>
                            <span>or</span>
                            <span className="flex-1 h-0.5 bg-neutral-200 dark:bg-neutral-700"></span>
                        </div>
                        <div className="flex items-center justify-center gap-4">
                            <a
                                href="#"
                                className="w-full bg-transparent hover:bg-neutral-200 text-neutral-900  font-bold py-2 px-4 flex items-center justify-center gap-2 rounded border border-neutral-800 dark:text-[#FBFBFB] dark:border-[#FBFBFB]">
                                <img
                                    src="https://img.icons8.com/color/24/000000/google-logo.png"
                                    alt="Google"
                                />
                                <span>Login with Google</span>
                            </a>
                        </div>

                        <p className="text-center">
                            Don't have an account?{" "}
                            <a href="#" className="text-[#118B4E]">
                                Register
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

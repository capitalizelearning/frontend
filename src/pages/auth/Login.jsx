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
    const [error, setError] = React.useState(null);

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
        setError(null);
        const { success, error } = login(username, password);
        if (success) {
            navigate(getNextPage());
        }
        setError(error);
    }

    return (
        <div className="container min-h-screen mx-auto flex flex-col items-center justify-center">
            <div className="flex flex-col md:flex-row overflow-hidden gap-16 p-8">
                <div className="hidden md:block">
                    <img
                        src={ImgSrc}
                        alt="Login"
                        className="w-full h-full rounded-lg"
                    />
                </div>
                <div className="flex flex-col items-center justify-center w-full">
                    <h1 className="text-4xl font-bold text-center mb-2">
                        Welcome Back!
                    </h1>
                    <p className="text-center mb-4 text-lg text-neutral-700">
                        Access your future financial freedom ahead!
                    </p>
                    <div className="flex flex-col w-full max-w-sm gap-6">
                        <form
                            onSubmit={handleLogin}
                            className="space-y-4"
                            method="POST">
                            {error && (
                                <ul
                                    class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
                                    role="alert">
                                    <li>{message}</li>
                                </ul>
                            )}
                            <div className="relative z-0">
                                <input
                                    type="text"
                                    id="email-label"
                                    value={username}
                                    onChange={(e) =>
                                        setUsername(e.target, value)
                                    }
                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-[#118B4E] peer"
                                    placeholder=" "
                                />
                                <label
                                    htmlFor="email-label"
                                    className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-[#118B4E] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
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
                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-[#118B4E] peer"
                                    placeholder=" "
                                />
                                <label
                                    htmlFor="password-label"
                                    className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-[#118B4E] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
                                    Password
                                </label>
                            </div>
                            <div className="flex flex-col md:flex-row justify-between gap-2 md:items-center">
                                <div className="flex items-center">
                                    <input
                                        type="checkbox"
                                        id="remember-me"
                                        name=""
                                        className="rounded border-gray-300 text-[#118B4E] shadow-sm focus:border-green-400 focus:ring focus:ring-green-200 focus:ring-opacity-50"
                                        defaultChecked
                                    />
                                    <label
                                        htmlFor="remember-me"
                                        className="ml-2 block text-sm text-gray-900">
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
                                    className="w-full bg-[#118B4E] hover:bg-primary text-white font-bold py-2 px-4 rounded">
                                    Login
                                </button>
                            </div>
                        </form>

                        <div className="flex items-center justify-center gap-2">
                            <span className="flex-1 h-0.5 bg-gray-300"></span>
                            <span className="text-gray-500">or</span>
                            <span className="flex-1 h-0.5 bg-gray-300"></span>
                        </div>
                        <div className="flex items-center justify-center gap-4">
                            <a
                                href="#"
                                className="w-full bg-transparent hover:bg-neutral-200 text-neutral-900  font-bold py-2 px-4 flex items-center justify-center gap-2 rounded border border-neutral-800">
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

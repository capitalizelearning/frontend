import DarkLogoSrc from "@/assets/imgs/svgs/darkLogo.svg";
import LogoSrc from "@/assets/imgs/svgs/logo.svg";
import { useAuth } from "@/hooks/useAuth";
import { useTheme } from "@/hooks/useTheme";
import * as React from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
    const { setInitialPassword } = useAuth();
    const { theme, toggleTheme } = useTheme();
    const navigate = useNavigate();

    const [token, setToken] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [strength, setStrength] = React.useState(0);
    const [showPassword, setShowPassword] = React.useState(false);
    const [terms, setTerms] = React.useState(false);
    const [error, setError] = React.useState(null);

    React.useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const token = searchParams.get("token");
        if (token) setToken(token);
    }, []);

    const calculatePasswordStrength = (password) => {
        var strength = 0;
        if (password.length > 7) strength++;
        if (password.match(/[a-z]/)) strength++;
        if (password.match(/[A-Z]/)) strength++;
        if (password.match(/[0-9]/)) strength++;
        if (password.match(/[$&+,:;=?@#|'<>.^*()%!-]/)) strength++;
        return strength;
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        let newStrength = calculatePasswordStrength(e.target.value);
        setStrength(newStrength);
    };

    const handleChangeToken = (e) => {
        setToken(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {
            const { success, error } = await setInitialPassword(
                token,
                password
            );
            if (success) {
                navigate("/auth/login");
                return;
            }
            setError(error);
            setPassword("");
            setToken("");
            setStrength(0);
        } catch (error) {
            setError(error.message);
            setPassword("");
            setToken("");
            setStrength(0);
        }
    };

    return (
        <div className="h-screen w-screen flex flex-col items-center overflow-clip dark:bg-[#0F0F0F] dark:text-[#FBFBFB] ">
            <div className="w-full max-w-lg my-24">
                <div className="flex-shrink-0 mb-8">
                    <a href="/">
                        <img
                            src={theme === "dark" ? DarkLogoSrc : LogoSrc}
                            className="h-12 w-12"
                            alt="logo"
                        />
                        <span className="sr-only">Capitalize</span>
                    </a>
                </div>
                <div className="flex items-center justify-between mb-4">
                    <h1 className="text-3xl font-bold">Register</h1>
                    <button
                        type="button"
                        onClick={toggleTheme}
                        className="flex items-center border border-[#8C8D8E] text-[#8C8D8E] p-4 rounded-full text-lg font-semibold dark:border-[#3B3B3B]">
                        {theme === "dark" ? (
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
                                    d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                                />
                            </svg>
                        ) : (
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
                                    d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                                />
                            </svg>
                        )}
                    </button>
                </div>
                <p className="mb-8 leading-loose">
                    This app is currently in <strong>private beta</strong> and
                    requires an invite token to register. If you have a token,
                    please enter it below. If you want early access, please join
                    the wait list and we will send you an invite when we have
                    more capacity.
                </p>
                <form className="space-y-6" action="#">
                    {error && (
                        <ul
                            className="px-4 py-2 bg-[#FEE2E2] dark:bg-[#FEE2E2] rounded-md text-[#C53030] dark:text-[#C53030] font-medium"
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
                            id="token-label"
                            value={token}
                            onChange={handleChangeToken}
                            autoComplete="current-password"
                            className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-[#161616] bg-[#FBFBFB] border-0 border-b border-[#161616] appearance-none  focus:outline-none focus:ring-0 focus:border-[#02A854] peer dark:bg-[#161616] dark:text-[#FBFBFB] dark:border-[#FBFBFB]"
                            placeholder=" "
                        />
                        <label
                            htmlFor="token-label"
                            className="absolute text-sm text-[#9B9CA1] duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-[#02A854] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
                            Token
                        </label>
                    </div>
                    <div className="flex items-stretch gap-0">
                        <div className="relative z-0 flex-1">
                            <input
                                type={showPassword ? "text" : "password"}
                                id="password-label"
                                value={password}
                                onChange={handlePasswordChange}
                                autoComplete="current-password"
                                className="block rounded-tl-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-[#161616] bg-[#FBFBFB] border-0 border-b border-[#161616] appearance-none  focus:outline-none focus:ring-0 focus:border-[#02A854] peer dark:bg-[#161616] dark:text-[#FBFBFB] dark:border-[#FBFBFB]"
                                placeholder=" "
                            />
                            <label
                                htmlFor="password-label"
                                className="absolute text-sm text-[#9B9CA1] duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-[#02A854] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
                                Password
                            </label>
                        </div>
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="flex-shrink-0 text-[#161616] bg-[#FBFBFB] dark:bg-[#161616] dark:text-[#FBFBFB] px-2 rounded-tr-lg">
                            {!showPassword ? (
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
                                        d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                    />
                                </svg>
                            ) : (
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
                                        d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                    <div className="w-full bg-neutral-200 rounded-full h-1.5 mb-4 dark:bg-neutral-700">
                        <div
                            className="bg-[#02A854] h-1.5 rounded-full transition-all duration-300 ease-in-out"
                            style={{ width: `${strength * 25}%` }}></div>
                    </div>
                    <div className="flex items-start">
                        <div className="flex items-center h-5">
                            <input
                                id="terms-and-conditions"
                                type="checkbox"
                                checked={terms}
                                onChange={() => setTerms(!terms)}
                                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3  dark:bg-gray-700 dark:border-gray-600  dark:ring-offset-gray-800"
                                required=""
                            />
                        </div>
                        <div className="ml-3 text-sm">
                            <label
                                htmlFor="terms-and-conditions"
                                className="font-light text-gray-500 dark:text-gray-300">
                                I have read and accept the{" "}
                                <a
                                    className="font-medium text-[#118B4E] hover:underline "
                                    href="#">
                                    Terms and Conditions
                                </a>{" "}
                                and{" "}
                                <a
                                    className="font-medium text-[#118B4E] hover:underline "
                                    href="#">
                                    Privacy Policy
                                </a>{" "}
                                .
                            </label>
                        </div>
                    </div>
                    <div>
                        <button
                            type="submit"
                            onClick={handleSubmit}
                            disabled={
                                strength < 3 || !token || !password || !terms
                            }
                            className=" bg-[#118B4E] hover:bg-[#0B6E3E] dark:bg-[#02A854] dark:hover:bg-[#02A854] text-[#FBFBFB] font-bold py-2 px-4 rounded disabled:opacity-50 disabled:cursor-not-allowed">
                            Set Password
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

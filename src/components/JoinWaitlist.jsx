import GetStartedSrc from "@/assets/imgs/get_started.png";
import axios from "axios";
import * as React from "react";
import { Link } from "react-router-dom";

export default function JoinWaitList() {
    const [email, setEmail] = React.useState("");
    const [waitListMessage, setWaitListMessage] = React.useState("");

    const handleWaitListSubmit = async (e) => {
        e.preventDefault();
        setWaitListMessage("");

        if (email === "") {
            setWaitListMessage("Please enter a valid email address.");
            return;
        }

        axios({
            url: "/auth/wait-list/",
            method: "POST",
            validateStatus: (status) => status < 500,
            headers: {
                "Content-Type": "application/json",
            },
            data: JSON.stringify({ email }),    
        })
            .then((res) => {
                setWaitListMessage(res.data.message);
            })
            .catch(() => {
                setWaitListMessage(
                    "Something went wrong. Please try again later."
                );
            });
    };

    return (
        <div className="flex flex-col items-center w-full gap-8 my-12 md:my-32">
            <div className="grid grid-cols-1 md:grid-cols-2 border border-[#242424] rounded-lg  w-full max-w-screen-lg dark:dark:bg-[#161616] dark:border-[#242424]">
                <div className="flex flex-col gap-4 p-12">
                    <h3 className="text-4xl font-bold text-primary-dark">
                        Start building today
                    </h3>
                    <p className="text-lg text-text-light leading-relaxed">
                        Our app eliminates the need for complex
                        spreadsheets,endless email threads, empowering
                        businesses to achieve greater efficiency.
                    </p>
                    {waitListMessage && (
                        <span className="flex items-center gap-4 text-red-600">
                            {waitListMessage}
                        </span>
                    )}
                    <form
                        className="flex flex-col lg:flex-row items-center gap-2 md:gap-4 w-full"
                        method="POST">
                        <input
                            type="email"
                            required
                            autoComplete="email"
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            className="w-full py-2 px-4 rounded-full border-2 border-[#8C8D8E] focus:outline-none focus:border-[#0F0F0F] dark:border-[#242424] dark:bg-[#242424] dark:text-[#FBFBFB] dark:focus:border-[#FBFBFB]"
                        />
                        <button
                            onClick={handleWaitListSubmit}
                            className="bg-[#0F0F0F] text-[#FBFBFB] py-3 px-6 rounded-full flex-shrink-0 place-self-end dark:bg-[#FBFBFB] dark:text-[#0F0F0F]">
                            Join waitlist
                        </button>
                    </form>
                    <span className="font-light text-xs mt-4">
                        Joining the wait list, indicates your consent to our{" "}
                        <Link
                            to="/privacy"
                            className="underline hover:no-underline">
                            Privacy Policy
                        </Link>{" "}
                        and{" "}
                        <Link to="/terms" className="underline hover:no-underline">
                            Terms of Service
                        </Link>
                        . You can unsubscribe at any time.
                    </span>
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
    );
}

import JoinWaitList from "@/components/JoinWaitlist";
import Footer from '@/components/Footer';
import * as React from "react";

import LandingNav from "@/components/LandingNav";

export default function ContactUs() {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [message, setMessage] = React.useState("");

    const handleSendMessage = async (e) => {
        e.preventDefault();
        // TODO: Implement sending message
    };

    return (
        <main className="flex flex-col max-w-screen w-full overflow-x-hidden dark:bg-[#0F0F0F] dark:text-[#FBFBFB]">
            <LandingNav />
            <div className="w-full container mx-auto flex-wrap p-8 md:p-4">
                <section>
                    <div className="flex flex-col items-center w-full gap-4 my-12 md:my-32">
                        <div className="flex items-center gap-1.5 border border-solid border-[#02A854] text-[#02A854] rounded-full px-2 py-1.5 font-medium dark:border-[#33C6AB] dark:text-[#33C6AB]">
                            <svg
                                width="17"
                                height="17"
                                viewBox="0 0 17 17"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M14.5801 3.15002H2.58008C2.38117 3.15002 2.1904 3.22904 2.04975 3.36969C1.9091 3.51035 1.83008 3.70111 1.83008 3.90002V12.4C1.83008 12.7315 1.96177 13.0495 2.19619 13.2839C2.43062 13.5183 2.74856 13.65 3.08008 13.65H14.0801C14.4116 13.65 14.7295 13.5183 14.964 13.2839C15.1984 13.0495 15.3301 12.7315 15.3301 12.4V3.90002C15.3301 3.70111 15.2511 3.51035 15.1104 3.36969C14.9698 3.22904 14.779 3.15002 14.5801 3.15002ZM12.652 4.65002L8.58008 8.38252L4.5082 4.65002H12.652ZM3.33008 12.15V5.60502L8.0732 9.95315C8.21153 10.08 8.3924 10.1504 8.58008 10.1504C8.76776 10.1504 8.94862 10.08 9.08695 9.95315L13.8301 5.60502V12.15H3.33008Z"
                                    fill="currentColor"
                                />
                            </svg>
                            Contact us
                        </div>
                        <h2 className="text-6xl font-bold text-primary-dark">
                            Get in touch
                        </h2>
                        <p className="text-lg text-text-light md:text-center leading-relaxed mb-12">
                            We’re here to help and answer any question you might
                            have. We look forward to hearing from you!
                        </p>

                        <form className="flex flex-col gap-4 md:gap-8 w-full max-w-lg mx-auto">
                            <div className="grid grid-cols-2 gap-4 md:gap-8">
                                <div className="relative">
                                    <input
                                        type="text"
                                        id="input-full-name"
                                        className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-[#161616] bg-[#FBFBFB] border-0 border-b-2 border-[#161616] appearance-none  focus:outline-none focus:ring-0 focus:border-[#02A854] peer dark:bg-[#161616] dark:text-[#FBFBFB] dark:border-[#FBFBFB]"
                                        placeholder=" "
                                    />
                                    <label
                                        htmlFor="input-full-name"
                                        className="absolute text-sm text-[#9B9CA1] duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-[#02A854] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
                                        Full name
                                    </label>
                                </div>
                                <div className="relative">
                                    <input
                                        type="email"
                                        id="input-email"
                                        className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-[#161616] bg-[#FBFBFB] border-0 border-b-2 border-[#161616] appearance-none  focus:outline-none focus:ring-0 focus:border-[#02A854] peer dark:bg-[#161616] dark:text-[#FBFBFB] dark:border-[#FBFBFB]"
                                        placeholder=" "
                                    />
                                    <label
                                        htmlFor="input-email"
                                        className="absolute text-sm text-gray-500  duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-[#02A854] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
                                        Email
                                    </label>
                                </div>
                            </div>
                            <div className="relative">
                                <textarea
                                    type="text"
                                    id="input-message"
                                    className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-[#161616] bg-[#FBFBFB] border-0 border-b-2 border-[#161616] appearance-none  focus:outline-none focus:ring-0 focus:border-[#02A854] peer dark:bg-[#161616] dark:text-[#FBFBFB] dark:border-[#FBFBFB]"
                                    placeholder=" "
                                    rows={4}></textarea>
                                <label
                                    htmlFor="input-message"
                                    className="absolute text-sm text-gray-500  duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-[#02A854] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
                                    Subject
                                </label>
                            </div>
                            <button
                                onClick={handleSendMessage}
                                className="bg-[#02A854] text-white py-3 rounded-full dark:bg-[#FBFBFB] dark:text-[#161616]">
                                Send message
                            </button>
                        </form>
                    </div>
                </section>

                <section>
                    <div className="flex flex-col items-center w-full gap-4 my-12 md:my-32">
                        <div className="flex items-center gap-1.5 border border-solid border-[#02A854] text-[#02A854] rounded-full px-2 py-1.5 font-medium dark:border-[#33C6AB] dark:text-[#33C6AB]">
                            <svg
                                width="14"
                                height="14"
                                viewBox="0 0 14 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7.18555 0.420044C5.85053 0.420044 4.54548 0.815925 3.43545 1.55762C2.32542 2.29932 1.46025 3.35353 0.949363 4.58693C0.438472 5.82033 0.304799 7.17753 0.565249 8.4869C0.8257 9.79628 1.46857 10.999 2.41258 11.943C3.35658 12.887 4.55932 13.5299 5.86869 13.7903C7.17806 14.0508 8.53526 13.9171 9.76866 13.4062C11.0021 12.8953 12.0563 12.0302 12.798 10.9201C13.5397 9.81011 13.9355 8.50507 13.9355 7.17004C13.9336 5.38044 13.2218 3.66471 11.9563 2.39927C10.6909 1.13383 8.97515 0.422029 7.18555 0.420044ZM9.95117 8.87504C10.2678 8.36271 10.4355 7.77233 10.4355 7.17004C10.4355 6.56776 10.2678 5.97738 9.95117 5.46504L11.3887 4.02754C12.0682 4.9343 12.4355 6.03691 12.4355 7.17004C12.4355 8.30318 12.0682 9.40579 11.3887 10.3125L9.95117 8.87504ZM5.43555 7.17004C5.43555 6.82393 5.53819 6.48558 5.73048 6.1978C5.92277 5.91001 6.19608 5.68571 6.51585 5.55325C6.83562 5.4208 7.18749 5.38615 7.52696 5.45367C7.86642 5.52119 8.17825 5.68787 8.42299 5.93261C8.66773 6.17735 8.8344 6.48917 8.90192 6.82864C8.96945 7.1681 8.93479 7.51997 8.80234 7.83974C8.66989 8.15951 8.44558 8.43282 8.1578 8.62512C7.87001 8.81741 7.53167 8.92004 7.18555 8.92004C6.72142 8.92004 6.2763 8.73567 5.94811 8.40748C5.61992 8.07929 5.43555 7.63417 5.43555 7.17004ZM10.328 2.96692L8.89055 4.40442C8.37822 4.08778 7.78783 3.92007 7.18555 3.92007C6.58327 3.92007 5.99288 4.08778 5.48055 4.40442L4.04305 2.96692C4.9498 2.28736 6.05241 1.92004 7.18555 1.92004C8.31869 1.92004 9.4213 2.28736 10.328 2.96692ZM2.98242 4.02942L4.41992 5.46692C4.10329 5.97925 3.93557 6.56964 3.93557 7.17192C3.93557 7.7742 4.10329 8.36459 4.41992 8.87692L2.98242 10.3144C2.30287 9.40767 1.93555 8.30506 1.93555 7.17192C1.93555 6.03878 2.30287 4.93617 2.98242 4.02942ZM4.04492 11.375L5.48242 9.93754C5.99476 10.2542 6.58514 10.4219 7.18742 10.4219C7.78971 10.4219 8.38009 10.2542 8.89242 9.93754L10.3299 11.375C9.42317 12.0546 8.32056 12.4219 7.18742 12.4219C6.05429 12.4219 4.95168 12.0546 4.04492 11.375Z"
                                    fill="currentColor"
                                />
                            </svg>
                            Support
                        </div>
                        <h2 className="text-6xl font-bold text-primary-dark">
                            Contact us
                        </h2>
                        <p className="text-lg text-text-light md:text-center leading-relaxed mb-12">
                            We value your feedback, inquiries, and suggestions.
                            Feel free to contact with us using the information
                            below.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="border border-[#161616] rounded-xl p-6 flex flex-col gap-4">
                                <svg
                                    width="18"
                                    height="23"
                                    viewBox="0 0 18 23"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M9 5.15503C8.18415 5.15503 7.38663 5.39696 6.70827 5.85022C6.02992 6.30348 5.50121 6.94771 5.189 7.70146C4.87679 8.4552 4.7951 9.28461 4.95426 10.0848C5.11343 10.8849 5.50629 11.62 6.08318 12.1968C6.66008 12.7737 7.39508 13.1666 8.19525 13.3258C8.99542 13.4849 9.82482 13.4032 10.5786 13.091C11.3323 12.7788 11.9766 12.2501 12.4298 11.5718C12.8831 10.8934 13.125 10.0959 13.125 9.28003C13.1238 8.18639 12.6888 7.1379 11.9154 6.36458C11.1421 5.59126 10.0936 5.15627 9 5.15503ZM9 11.155C8.62916 11.155 8.26665 11.0451 7.95831 10.839C7.64996 10.633 7.40964 10.3402 7.26773 9.99756C7.12581 9.65495 7.08868 9.27795 7.16103 8.91423C7.23337 8.55052 7.41195 8.21643 7.67417 7.9542C7.9364 7.69198 8.27049 7.5134 8.6342 7.44106C8.99792 7.36871 9.37492 7.40584 9.71753 7.54775C10.0601 7.68967 10.353 7.92999 10.559 8.23833C10.765 8.54668 10.875 8.90919 10.875 9.28003C10.875 9.77731 10.6775 10.2542 10.3258 10.6059C9.97419 10.9575 9.49728 11.155 9 11.155ZM9 0.655029C6.71327 0.657511 4.52091 1.56701 2.90394 3.18397C1.28698 4.80094 0.377482 6.9933 0.375 9.28003C0.375 16.5325 8.02875 21.9738 8.355 22.2016C8.54407 22.3339 8.76924 22.4049 9 22.4049C9.23076 22.4049 9.45594 22.3339 9.645 22.2016C11.0946 21.1332 12.4209 19.907 13.5994 18.5453C16.2328 15.521 17.625 12.3147 17.625 9.28003C17.6225 6.9933 16.713 4.80094 15.0961 3.18397C13.4791 1.56701 11.2867 0.657511 9 0.655029ZM11.9344 17.0341C11.0405 18.0609 10.0586 19.0076 9 19.8635C7.94136 19.0076 6.9595 18.0609 6.06562 17.0341C4.5 15.221 2.625 12.4028 2.625 9.28003C2.625 7.58927 3.29665 5.96777 4.49219 4.77222C5.68774 3.57668 7.30925 2.90503 9 2.90503C10.6908 2.90503 12.3123 3.57668 13.5078 4.77222C14.7034 5.96777 15.375 7.58927 15.375 9.28003C15.375 12.4028 13.5 15.221 11.9344 17.0341Z"
                                        fill="currentColor"
                                    />
                                </svg>
                                <h5 className="text-lg font-bold">Office</h5>
                                <p className="">
                                    Come say hello at our office HQ.
                                </p>
                                <p className="text-[#02A854] font-bold dark:text-[#33C6AB]">
                                    123 Main Street, Los Angeles, CA 90001
                                </p>
                            </div>
                            <div className="border border-[#161616] rounded-xl p-6 flex flex-col gap-4">
                                <svg
                                    width="21"
                                    height="17"
                                    viewBox="0 0 21 17"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M19.6602 0.655029H1.66016C1.36179 0.655029 1.07564 0.773556 0.864661 0.984534C0.653683 1.19551 0.535156 1.48166 0.535156 1.78003V14.53C0.535156 15.0273 0.7327 15.5042 1.08433 15.8559C1.43596 16.2075 1.91288 16.405 2.41016 16.405H18.9102C19.4074 16.405 19.8843 16.2075 20.236 15.8559C20.5876 15.5042 20.7852 15.0273 20.7852 14.53V1.78003C20.7852 1.48166 20.6666 1.19551 20.4557 0.984534C20.2447 0.773556 19.9585 0.655029 19.6602 0.655029ZM16.768 2.90503L10.6602 8.50378L4.55234 2.90503H16.768ZM2.78516 14.155V4.33753L9.89984 10.8597C10.1073 11.05 10.3786 11.1555 10.6602 11.1555C10.9417 11.1555 11.213 11.05 11.4205 10.8597L18.5352 4.33753V14.155H2.78516Z"
                                        fill="currentColor"
                                    />
                                </svg>
                                <h5 className="text-lg font-bold">Email</h5>
                                <p className="">
                                    Our friendly team is here to help.
                                </p>
                                <p className="text-[#02A854] font-bold dark:text-[#33C6AB]">
                                    capitalize.learning@gmail.com
                                </p>
                            </div>
                            <div className="border border-[#161616] rounded-xl p-6 flex flex-col gap-4">
                                <svg
                                    width="21"
                                    height="20"
                                    viewBox="0 0 21 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M19.3301 13.0426L14.9154 11.0635L14.8985 11.056C14.6116 10.9323 14.2982 10.8825 13.987 10.9112C13.6758 10.9399 13.3768 11.0461 13.1173 11.2201C13.0809 11.2445 13.0458 11.2708 13.0123 11.2989L10.9207 13.0801C9.70196 12.4192 8.4429 11.1704 7.78102 9.96667L9.5679 7.84229C9.59662 7.80801 9.62323 7.772 9.64758 7.73448C9.81707 7.47588 9.91997 7.17937 9.94712 6.87137C9.97427 6.56337 9.92483 6.25344 9.80321 5.96917C9.80032 5.96372 9.79782 5.95809 9.79571 5.95229L7.81758 1.53011C7.65521 1.16028 7.37809 0.852563 7.02723 0.652483C6.67638 0.452403 6.27043 0.370596 5.86946 0.419168C4.50856 0.597943 3.25926 1.26599 2.3549 2.29853C1.45054 3.33108 0.952958 4.65751 0.955085 6.03011C0.955085 13.681 7.17915 19.9051 14.8301 19.9051C16.2027 19.9072 17.5291 19.4096 18.5617 18.5053C19.5942 17.6009 20.2622 16.3516 20.441 14.9907C20.4896 14.5898 20.4078 14.1838 20.2077 13.833C20.0076 13.4821 19.6999 13.205 19.3301 13.0426ZM14.8301 17.6551C11.7481 17.6514 8.79338 16.4254 6.61408 14.2461C4.43477 12.0668 3.20881 9.11211 3.20508 6.03011C3.20294 5.25338 3.46663 4.49931 3.95235 3.89318C4.43806 3.28706 5.11656 2.86539 5.87509 2.69823L7.63946 6.63573L5.84321 8.77511C5.81418 8.8097 5.78725 8.84602 5.76258 8.88386C5.58554 9.15438 5.48145 9.46608 5.46042 9.7887C5.43939 10.1113 5.50215 10.4339 5.64258 10.7251C6.52571 12.5326 8.3454 14.3401 10.1716 15.2251C10.4648 15.3641 10.789 15.4246 11.1126 15.4008C11.4361 15.377 11.7479 15.2696 12.0176 15.0892C12.0538 15.0647 12.0886 15.0381 12.1216 15.0095L14.2245 13.2217L18.162 14.9851C17.9948 15.7436 17.5731 16.4221 16.967 16.9078C16.3609 17.3936 15.6068 17.6573 14.8301 17.6551Z"
                                        fill="currentColor"
                                    />
                                </svg>
                                <h5 className="text-lg font-bold">Phone</h5>
                                <p className="">
                                    Monday - Friday from 8am to 5pm.
                                </p>
                                <p className="text-[#02A854] font-bold dark:text-[#33C6AB]">
                                    +1 502 536 7229
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="flex flex-col items-center w-full gap-4 my-12 md:my-32">
                        <div className="flex items-center gap-1.5 border border-solid border-[#02A854] text-[#02A854] rounded-full px-2 py-1.5 font-medium dark:border-[#33C6AB] dark:text-[#33C6AB]">
                            <svg
                                width="14"
                                height="14"
                                viewBox="0 0 14 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7.80469 10.1799C7.80469 10.3777 7.74604 10.5711 7.63616 10.7355C7.52628 10.9 7.3701 11.0281 7.18737 11.1038C7.00465 11.1795 6.80358 11.1993 6.6096 11.1607C6.41562 11.1221 6.23744 11.0269 6.09758 10.887C5.95773 10.7472 5.86249 10.569 5.8239 10.375C5.78532 10.181 5.80512 9.97997 5.88081 9.79725C5.9565 9.61452 6.08467 9.45834 6.24912 9.34846C6.41357 9.23858 6.60691 9.17993 6.80469 9.17993C7.06991 9.17993 7.32426 9.28529 7.5118 9.47283C7.69933 9.66036 7.80469 9.91471 7.80469 10.1799ZM13.5547 6.92993C13.5547 8.26496 13.1588 9.57 12.4171 10.68C11.6754 11.7901 10.6212 12.6552 9.3878 13.1661C8.1544 13.677 6.7972 13.8107 5.48783 13.5502C4.17846 13.2898 2.97572 12.6469 2.03172 11.7029C1.08772 10.7589 0.44484 9.55616 0.18439 8.24679C-0.0760604 6.93742 0.0576122 5.58022 0.568504 4.34682C1.0794 3.11342 1.94456 2.05921 3.05459 1.31751C4.16462 0.575812 5.46967 0.179932 6.80469 0.179932C8.59429 0.181917 10.31 0.893713 11.5755 2.15915C12.8409 3.42459 13.5527 5.14033 13.5547 6.92993ZM12.0547 6.92993C12.0547 5.89158 11.7468 4.87655 11.1699 4.01319C10.593 3.14983 9.77309 2.47692 8.81378 2.07956C7.85447 1.6822 6.79887 1.57824 5.78047 1.78081C4.76207 1.98338 3.82661 2.4834 3.09238 3.21762C2.35815 3.95185 1.85814 4.88731 1.65557 5.90571C1.453 6.92411 1.55696 7.97971 1.95432 8.93902C2.35168 9.89833 3.02459 10.7183 3.88795 11.2951C4.75131 11.872 5.76634 12.1799 6.80469 12.1799C8.19662 12.1784 9.53111 11.6248 10.5154 10.6406C11.4996 9.65635 12.0532 8.32186 12.0547 6.92993ZM6.80469 2.92993C5.28844 2.92993 4.05469 4.05118 4.05469 5.42993V5.67993C4.05469 5.87884 4.13371 6.06961 4.27436 6.21026C4.41501 6.35091 4.60578 6.42993 4.80469 6.42993C5.0036 6.42993 5.19437 6.35091 5.33502 6.21026C5.47567 6.06961 5.55469 5.87884 5.55469 5.67993V5.42993C5.55469 4.87868 6.11719 4.42993 6.80469 4.42993C7.49219 4.42993 8.05469 4.87868 8.05469 5.42993C8.05469 5.98118 7.49219 6.42993 6.80469 6.42993C6.60578 6.42993 6.41501 6.50895 6.27436 6.6496C6.13371 6.79025 6.05469 6.98102 6.05469 7.17993V7.67993C6.05424 7.86523 6.12241 8.04413 6.24604 8.18215C6.36967 8.32017 6.54002 8.40754 6.72424 8.42741C6.90847 8.44729 7.09353 8.39826 7.24376 8.28978C7.39398 8.18131 7.49873 8.02106 7.53782 7.83993C8.69907 7.54743 9.55469 6.57806 9.55469 5.42993C9.55469 4.05118 8.32094 2.92993 6.80469 2.92993Z"
                                    fill="currentColor"
                                />
                            </svg>
                            FAQ
                        </div>
                        <h2 className="text-6xl font-bold text-primary-dark">
                            Some of the things you may want to know
                        </h2>
                        <p className="text-lg text-text-light md:text-center leading-relaxed mb-12">
                            We answered questions so you don’t have to ask them.
                        </p>

                        <div className="flex flex-col gap-6 w-full max-w-xl">
                            <details className="border border-solid border-[#161616] rounded-xl p-6">
                                <summary className="font-bold">
                                    Is my data safe with your platform?
                                </summary>
                                Absolutely. We prioritize the security and privacy of your data above all else. 
                                Our platform employs state-of-the-art encryption techniques to safeguard your
                                information from unauthorized access.
                            </details>
                            <details className="border border-solid border-[#161616] rounded-xl p-6">
                                <summary className="font-bold">
                                    What kind of customer support do you offer?                                
                                </summary>
                                We take pride in providing exceptional customer support to ensure your 
                                experience with our platform is seamless and hassle-free. Our dedicated 
                                support team is available to assist you via email, phone, and live chat 
                                during business hours.
                            </details>
                            <details className="border border-solid border-[#161616] rounded-xl p-6">
                                <summary className="font-bold">
                                    How does the pricing for your subscription work?
                                </summary>
                                Our subscription pricing is designed to be flexible and transparent, 
                                allowing you to choose the plan that best fits your needs. With our monthly 
                                subscription, you pay a fixed fee on a monthly basis, granting you access to 
                                our platform and its features for the duration of your subscription period. 
                                The pricing tiers are based on factors such as the level of service, the number 
                                of users, and additional features included. We strive to offer competitive pricing 
                                while delivering exceptional value and quality service to our subscribers. For 
                                detailed information on our pricing plans and what each includes, please visit our
                                pricing page or contact our sales team for personalized assistance.
                            </details>
                            <details className="border border-solid border-[#161616] rounded-xl p-6">
                                <summary className="font-bold">
                                    Can I cancel my subscription at any time?
                                </summary>
                                Yes, you have the flexibility to cancel your subscription at any time, 
                                no questions asked. We understand that circumstances may change, and 
                                we want to make sure you have full control over your subscription.
                            </details>
                            <details className="border border-solid border-[#161616] rounded-xl p-6">
                                <summary className="font-bold">
                                    Can I upgrade or downgrade my subscription plan?
                                </summary>
                                Yes, absolutely! We understand that your needs may evolve over time, 
                                which is why we offer the flexibility to upgrade or downgrade your 
                                subscription plan as necessary. Whether you require additional features 
                                and resources or you're looking to streamline your expenses, you can 
                                easily make changes to your subscription through your account settings 
                                or by reaching out to our customer support team.
                            </details>
                        </div>
                    </div>
                </section>
                <section>
                    <JoinWaitList />
                </section>
            </div>

            {/* Footer */}
            <Footer />
        </main>
    );
}

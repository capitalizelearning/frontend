import { useState } from 'react'
import Feature6Src from '@/assets/imgs/features_tile_6.png'

function ProductTabs() {
    const [activeTab, setActiveTab] = useState(0)

    const tabData = [
        {
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
                    />
                </svg>
            ),
            label: 'AI Assistant',
            content: (
                <div className="w-full max-w-screen-lg grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="flex flex-col gap-8">
                        <div className="flex justify-center md:justify-start items-center gap-4">
                            <span className="p-2 rounded-lg bg-[#111E22] text-[#33ABD1]">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-10 h-10"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                >
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
                        <h3 className="text-3xl md:text-5xl font-bold text-center md:text-left">
                            Your new ultimate productivity companion
                        </h3>
                        <p className="text-text-light text-lg leading-relaxed text-center md:text-left">
                            Designed to seamlessly integrate into your personal
                            <br />
                            and professional life, our AI Assistant is here to revolutionize
                            the way you accomplish tasks.
                        </p>
                        <div className="flex justify-center">
                            <a
                                href="#"
                                className="bg-[#1F1F1F] text-[#FBFBFB] py-4 px-10 rounded-full text-lg font-semibold "
                            >
                                Learn More
                            </a>
                        </div>
                    </div>
                    <div>
                        <img src={Feature6Src} className="w-full" alt="ai_assistant" />
                    </div>
                </div>
            ),
        },
        {
            icon: (
                <svg
                    width={19}
                    height={19}
                    viewBox="0 0 19 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M9.15039 1.77612C7.64849 1.77612 6.18032 2.22149 4.93153 3.0559C3.68275 3.89031 2.70944 5.07629 2.13468 6.46387C1.55993 7.85145 1.40955 9.3783 1.70256 10.8513C1.99556 12.3244 2.7188 13.6775 3.7808 14.7395C4.84281 15.8015 6.19588 16.5247 7.66893 16.8177C9.14197 17.1107 10.6688 16.9603 12.0564 16.3856C13.444 15.8108 14.63 14.8375 15.4644 13.5887C16.2988 12.3399 16.7441 10.8718 16.7441 9.36987C16.7419 7.35657 15.9411 5.42637 14.5175 4.00275C13.0939 2.57913 11.1637 1.77836 9.15039 1.77612ZM9.99414 3.52479C11.4944 3.74171 12.8538 4.52715 13.791 5.71854L9.99414 7.90878V3.52479ZM3.66602 11.5615C3.33373 10.7319 3.19417 9.83769 3.25788 8.94629C3.32158 8.05489 3.58688 7.1896 4.03376 6.41568C4.48064 5.64177 5.09743 4.97944 5.83761 4.47866C6.57779 3.97788 7.42203 3.65172 8.30664 3.52479V8.88261L3.66602 11.5615ZM9.15039 15.2761C8.25717 15.2759 7.37565 15.0729 6.57236 14.6823C5.76907 14.2916 5.065 13.7237 4.51328 13.0212L14.6348 7.17823C14.9929 8.07434 15.1259 9.04455 15.0223 10.004C14.9187 10.9634 14.5816 11.8828 14.0405 12.6818C13.4993 13.4809 12.7706 14.1351 11.9182 14.5874C11.0657 15.0396 10.1154 15.2761 9.15039 15.2761Z"
                        fill="#9B9CA1"
                    />
                </svg>
            ),
            label: 'Simple Analytics',
            content: (
                <div className="w-full max-w-screen-lg grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="flex flex-col gap-8">
                        <div className="flex justify-center md:justify-start items-center gap-4">
                            <span className="p-2 rounded-lg bg-[#111E22] text-[#33ABD1]">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-10 h-10"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
                                    />
                                </svg>
                            </span>
                            <span className="text-lg font-bold text-[#33ABD1]">
                                Simple Analytics
                            </span>
                        </div>
                        <h3 className="text-3xl md:text-5xl font-bold text-center md:text-left">
                            Your new ultimate productivity companion
                        </h3>
                        <p className="text-text-light text-lg leading-relaxed text-center md:text-left">
                            Designed to seamlessly integrate into your personal
                            <br />
                            and professional life, our Simple Analytics is here to
                            revolutionize the way you accomplish tasks.
                        </p>
                        <div className="flex justify-center">
                            <a
                                href="#"
                                className="bg-[#1F1F1F] text-[#FBFBFB] py-4 px-10 rounded-full text-lg font-semibold "
                            >
                                Learn More
                            </a>
                        </div>
                    </div>
                    <div>
                        <img src={Feature6Src} className="w-full" alt="ai_assistant" />
                    </div>
                </div>
            ),
        },
        {
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
                    />
                </svg>
            ),
            label: 'Easy Collaboration',
            content: (
                <div className="w-full max-w-screen-lg grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="flex flex-col gap-8">
                        <div className="flex justify-center md:justify-start items-center gap-4">
                            <span className="p-2 rounded-lg bg-[#111E22] text-[#33ABD1]">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-10 h-10"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
                                    />
                                </svg>
                            </span>
                            <span className="text-lg font-bold text-[#33ABD1]">
                                Easy Collaboration
                            </span>
                        </div>
                        <h3 className="text-3xl md:text-5xl font-bold text-center md:text-left">
                            Your new ultimate productivity companion
                        </h3>
                        <p className="text-text-light text-lg leading-relaxed text-center md:text-left">
                            Designed to seamlessly integrate into your personal
                            <br />
                            and professional life, our Easy Collaboration is here to
                            revolutionize the way you accomplish tasks.
                        </p>
                        <div className="flex justify-center">
                            <a
                                href="#"
                                className="bg-[#1F1F1F] text-[#FBFBFB] py-4 px-10 rounded-full text-lg font-semibold "
                            >
                                Learn More
                            </a>
                        </div>
                    </div>
                    <div>
                        <img src={Feature6Src} className="w-full" alt="ai_assistant" />
                    </div>
                </div>
            ),
        },
        {
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 6.878V6a2.25 2.25 0 0 1 2.25-2.25h7.5A2.25 2.25 0 0 1 18 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 0 0 4.5 9v.878m13.5-3A2.25 2.25 0 0 1 19.5 9v.878m0 0a2.246 2.246 0 0 0-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0 1 21 12v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6c0-.98.626-1.813 1.5-2.122"
                    />
                </svg>
            ),
            label: 'Smart Automation',
            content: (
                <div className="w-full max-w-screen-lg grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="flex flex-col gap-8">
                        <div className="flex justify-center md:justify-start items-center gap-4">
                            <span className="p-2 rounded-lg bg-[#111E22] text-[#33ABD1]">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-10 h-10"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
                                    />
                                </svg>
                            </span>
                            <span className="text-lg font-bold text-[#33ABD1]">
                                Smart Automation
                            </span>
                        </div>
                        <h3 className="text-3xl md:text-5xl font-bold text-center md:text-left">
                            Your new ultimate productivity companion
                        </h3>
                        <p className="text-text-light text-lg leading-relaxed text-center md:text-left">
                            Designed to seamlessly integrate into your personal
                            <br />
                            and professional life, our Smart Automation is here to
                            revolutionize the way you accomplish tasks.
                        </p>
                        <div className="flex justify-center">
                            <a
                                href="#"
                                className="bg-[#1F1F1F] text-[#FBFBFB] py-4 px-10 rounded-full text-lg font-semibold "
                            >
                                Learn More
                            </a>
                        </div>
                    </div>
                    <div>
                        <img src={Feature6Src} className="w-full" alt="ai_assistant" />
                    </div>
                </div>
            ),
        },
    ]

    const handleTabClick = (index) => {
        setActiveTab(index)
    }

    return (
        <div>
            <ul className="w-full max-w-screen-lg flex flex-wrap lg:flex-nowrap items-center overflow-x-auto lg:rounded-full bg-[#161616] text-[#9B9CA1] text-center mb-12">
                {tabData.map((tab, index) => (
                    <li
                        key={index}
                        onClick={() => handleTabClick(index)}
                        className={`p-4 flex-1 flex gap-1.5 justify-center ${activeTab === index
                                ? 'text-[#FBFBFB] bg-[#1F1F1F]'
                                : 'hover:text-[#FBFBFB] hover:bg-[#1F1F1F]'
                            } rounded-full w-full h-full whitespace-nowrap`}
                    >
                        {tab.icon}
                        {tab.label}
                    </li>
                ))}
            </ul>
            {tabData.map((tab, index) => (
                <div key={index} className={activeTab === index ? 'block' : 'hidden'}>
                    {tab.content}
                </div>
            ))}
        </div>
    )
}
export default ProductTabs

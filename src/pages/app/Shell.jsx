import LogoSrc from "@/assets/img/capitalize.svg";
import * as React from "react";
export default function Shell({ children }) {
    const NAVIGATION = [
        {
            label: "Dashboard",
            dest: "/learn",
            extras: null,
            active: true,
        },
        {
            label: "Assignments",
            dest: "/learn/assignments",
            extras: <span class="inline-block w-4 h-4 bg-[#F5F5F5]">1</span>,
            active: false,
        },
        {
            label: "Analytics",
            dest: "/analytics",
            extras: <span class="inline-block w-4 h-4 bg-[#F5F5F5]">1</span>,
            active: false,
        },
        {
            label: "Schedule",
            dest: "/schedule",
            extras: null,
            active: false,
        },
    ];

    return (
        <div className="h-screen w-screen overflow-clip flex flex-col md:flex-row bg-[#DCE4E7]">
            {/* Sidebar */}
            <aside className="w-full max-w-sm p-4 bg-[#000] flex flex-col gap-5">
                <img src={LogoSrc} alt="Capitalize" className="w-auto h-10" />

                <ul className="list-none flex flex-col flex-1">
                    {NAVIGATION.map((n, i) => {
                        return (
                            <li key={i}>
                                <a
                                    className={
                                        n.active
                                            ? "flex items-center gap-4 justify-center p-4 bg-[#202020] rounded-md text-[#F5F5F5]"
                                            : "flex items-center gap-4 justify-center p-4 rounded-md text-[#F5F5F5]"
                                    }>
                                    {n.label}
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </aside>
            <main className="flex-1 h-full overflow-y-auto p-4 md:p-6 flex flex-col">
                <div className="flex items-center justify-between flex-shrink-0">
                    <div>
                        <p className="font-bold text-lg">
                            Welcome back, Sathvik
                        </p>
                        <p className="">Let do the best today</p>
                    </div>
                    <div className="flex items-center gap-6">
                        <div className="relative w-full max-w-md">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg
                                    className="w-4 h-4 text-gray-500"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 20 20">
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                    />
                                </svg>
                            </div>
                            <input
                                type="search"
                                id="search"
                                className="block w-full p-2.5 ps-10 text-sm text-[#333333] rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-green-500"
                                placeholder="Search"
                                required
                            />
                        </div>

                        <img
                            className="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300"
                            src="https://eu.ui-avatars.com/api/?name=John+Doe&size=250"
                            alt="Bordered avatar"
                        />
                    </div>
                </div>
                <div className="flex-1 py-6">{children}</div>
            </main>
        </div>
    );
}

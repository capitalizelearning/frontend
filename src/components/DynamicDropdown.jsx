/* eslint-disable react/prop-types */
import { useState } from 'react';

function DynamicDropdown({ options }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <button
                // id="dropdownHoverButton"
                className="dark:text-white dark:bg-[#161616] bg-[#f3f3f3] focus:ring-4  text-lg focus:outline-none px-4 w-auto flex py-2 items-center rounded-xl"
                type="button"
                onClick={toggleDropdown}
            >
                Indicators
                <svg
                    className="w-2.5 h-2.5 ms-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                >
                    <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="m1 1 4 4 4-4"
                    />
                </svg>
            </button>
            {/* Dropdown menu */}
            <div
                id="dropdownHover"
                className={`z-10 ${isOpen ? 'block' : 'hidden'} bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}
            >
                <ul
                    className="py-2 text-sm text-gray-700 dark:text-gray-200 dark:bg-[#161616] bg-[#f3f3f3] mt-2 absolute"
                    aria-labelledby="dropdownHoverButton"
                >
                    {options?.map((option, index) => (
                        <li key={index}>
                            <a
                                href={option.link}
                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                                {option.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default DynamicDropdown;

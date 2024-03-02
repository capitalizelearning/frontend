/* eslint-disable react/prop-types */
import React from 'react'

const TeamMember = ({ name, title, imageUrl, linkedin, twitter, instagram }) => (
    <div className="w-full md:w-6/12 lg:w-4/12 px-6 sm:px-6 lg:px-4 mb-12">
        <div className="flex flex-col">
            {/* Avatar */}
            <a href="#" className="mx-auto">
                <img
                    className="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                    src={imageUrl}
                    alt={`Avatar of ${name}`}
                />
            </a>

            {/* Details */}
            <div className="text-center mt-6">
                {/* Name */}
                <h1 className="text-gray-900  dark:text-white text-xl font-bold mb-1">{name}</h1>

                {/* Title */}
                <div className="text-gray-700 dark:text-white font-light mb-2">{title}</div>
            </div>
        </div>
    </div>
);

export default TeamMember
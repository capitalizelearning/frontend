/* eslint-disable react/prop-types */
import React from 'react'

const TeamMember = ({ name, title, imageUrl, linkedin, twitter, instagram }) => (
    <div className="w-full md:w-6/12 lg:w-4/12 px-6 sm:px-6 lg:px-4">
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
                <h1 className="text-gray-900 text-xl font-bold mb-1">{name}</h1>

                {/* Title */}
                <div className="text-gray-700 font-light mb-2">{title}</div>

                {/* Social Icons */}
                <div className="flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity duration-300">
                    {/* Linkedin */}
                    <a href={linkedin} className="flex rounded-full hover:bg-indigo-50 h-10 w-10">
                        <i className="mdi mdi-linkedin text-indigo-700 mx-auto mt-2"></i>
                    </a>

                    {/* Twitter */}
                    <a href={twitter} className="flex rounded-full hover:bg-blue-50 h-10 w-10">
                        <i className="mdi mdi-twitter text-blue-400 mx-auto mt-2"></i>
                    </a>

                    {/* Instagram */}
                    <a href={instagram} className="flex rounded-full hover:bg-orange-50 h-10 w-10">
                        <i className="mdi mdi-instagram text-orange-400 mx-auto mt-2"></i>
                    </a>
                </div>
            </div>
        </div>
    </div>
);

export default TeamMember
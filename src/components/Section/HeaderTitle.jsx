/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'

function SectionHeaderTitle({ title, subTitle, desc, hasSvg = false, svgComponent }) {
    return (
        <>
            {
                !hasSvg ?
                    <p className="uppercase font-semibold text-[#02A854] dark:text-[#33C6AB]">
                        {title}
                    </p> :
                    <div className="flex items-center gap-1.5 border border-solid bg-[#2364564f] border-[#33C6AB] text-[#33C6AB] rounded-full px-4 py-1.5 font-bold dark:border-[#33C6AB] dark:text-[#33C6AB]">
                        {svgComponent}
                        {title}
                    </div>}
            <h2 className={`text-3xl font-extrabold ${hasSvg ? 'text-[#fff]' : 'text-[#002A14]'}`}>
                {subTitle}
            </h2>
            <p className="md:w-3/5 text-lg text-text-light md:text-center leading-relaxed mb-12 text-[#9B9CA1]" style={{ maxWidth: 800 }}>
                {desc}
            </p>
        </>
    )
}

export default SectionHeaderTitle
/* eslint-disable react/prop-types */
import noImg from '@/assets/imgs/noImg.png';

function DashboardSliderComponent({ data }) {
    return (
        <div className="bg-[#FFFFFF] dark:bg-[#1c1c1c] p-3 rounded-xl md:flex flex-col gap-3">
            <img
                className="bg-[#B7B7B7]"
                src={
                    data?.image
                        ? data?.image
                        : noImg
                }
                alt="image"
                style={{ height: 150, width: '100%' }}
            />

            {/* progress bar */}
            <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700 mt-2 md:mt-0">
                <div
                    className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
                    style={{ width: data?.progress ? data?.progress + '%' : 0 }}
                >
                    {data?.progress}%
                </div>
            </div>

            {/* Continue */}
            <button
                type="button"
                className="w-full mt-2 md:mt-0 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4
                 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 mb-2
                 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700
                  dark:hover:border-gray-600 dark:focus:ring-gray-700"
            >
                Continue
            </button>

        </div>
    )
}

export default DashboardSliderComponent

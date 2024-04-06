/* eslint-disable react/prop-types */

function TradeCard({ data, selectedCard, handleCardSelect }) {
    return (
        <div className={`m-2`}>
            <div
                className={`cursor xxl:min-h-[200px] w-full rounded-xl ${selectedCard === data?.id
                        ? 'border-[#02a854ad] border-2 bg-[#fefefe] dark:bg-[#161616]'
                        : 'bg-[#fefefe] dark:bg-[#161616]'
                    }`}
                onClick={() => handleCardSelect(data?.id)}
            >
                {/* Top */}
                <div
                    className={`flex flex-col gap-1 border-b-1 pb-3 border-gray-300 p-5`}
                >
                    <p className="text-lg font-bold">
                        {data?.title ? data?.title : '---'}
                    </p>
                    <p className="text-md font-medium">
                        {data?.amount ? data?.amount : ''}
                    </p>
                </div>
                <div className="border-1 border-gray-300"></div>

                {/* Middle */}
                <div className="flex space-x-3 justify-between px-5">
                    <div className="flex flex-col">
                        <p className="text-gray-800 dark:text-gray-300 font-thin">
                            24H High
                        </p>
                        <p className="text-gray-900 dark:text-[#fefefe] font-medium">
                            {data?.high ? data?.high : '0'}
                        </p>
                    </div>

                    <div className="flex flex-col">
                        <p className="text-gray-800 dark:text-gray-300 font-thin">
                            24H Low
                        </p>
                        <p className="text-gray-900 dark:text-[#fefefe] font-medium">
                            {data?.low ? data?.low : '0'}
                        </p>
                    </div>
                </div>

                {/* Bottom */}
                <div
                    className={`font-medium text-md text-center dark:text-[#fefefe] my-3 mx-2 rounded-2xl 
                ${data?.up ? 'bg-[rgba(2,168,85,0.53)]' : 'bg-[#f026178f]'
                        } px-5 py-2 text-[#161616]`}
                >
                    {data?.percent > 0
                        ? '+ ' + data?.percent + ' %'
                        : data?.percent + ' %'}
                </div>
            </div>
        </div>
    )
}

export default TradeCard

import { useState } from "react"

function TradeTabs() {
    const tabs = [
        { title: 'FAV', value: 'FAV' },
        { title: 'BUSD', value: 'BUSD' },
        { title: 'ETH', value: 'ETH' },
        { title: 'BNB', value: 'BNB' },
        { title: 'FAT', value: 'FAT' },
    ]

    const [selectedTab, setSelectedTab] = useState('FAV')

    return (
        <div className='rounded-2xl flex space-x-2 bg-[#fefefe] dark:bg-[#202020] justify-between py-1 px-2 mt-5'>
            {
                tabs?.map((e, index) => (
                    <button
                        type="button"
                        key={index}
                        onClick={() => setSelectedTab(e?.value)}
                        className={`rounded-2xl px-4 py-2  w-full text-[#202020] dark:text-[#fefefe] font-medium uppercase]
                        ${selectedTab === e?.value && 'bg-[#161616] text-[#fefefe]'}
                          text-[#FBFBFB]`}>
                        <span className="">{e?.title}</span>
                    </button>
                ))
            }
        </div>
    )
}

export default TradeTabs
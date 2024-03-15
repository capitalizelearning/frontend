import { useState } from "react"

function TradeTabs() {
    const tabs = [
        { title: 'Fav', value: 'fav' },
        { title: 'BUSD', value: 'BUSD' },
        { title: 'ETH', value: 'ETH' },
        { title: 'BNB', value: 'BNB' },
        { title: 'FAT', value: 'FAT' },
    ]

    const [selectedTab, setSelectedTab] = useState('')

    return (
        <div className='rounded-2xl flex space-x-2 bg-[#161616] justify-between py-2 mt-5'>
            {
                tabs?.map((e, index) => (
                    <button
                        type="button"
                        key={index}
                        onClick={() => setSelectedTab(e?.value)}
                        className={`rounded-2xl px-4 py-1  w-full
                        ${selectedTab === e?.title && 'bg-[#1F1F1F]'}
                          text-[#FBFBFB]`}>
                        <span className="">{e?.title}</span>
                    </button>
                ))
            }
        </div>
    )
}

export default TradeTabs
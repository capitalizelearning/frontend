import { useState } from 'react'
import Layout from '@/components/Layout/Layout'
import SearchFilter from '@/components/Trade/SearchFilter'
import TradeTabs from '@/components/Trade/TradeTabs'
import TradeCard from '@/components/Trade/TradeCard'
import SimulationChart from '@/components/Trade/SimulationChart'
import settingsSvg from '@/assets/imgs/svgs/settings-svg.svg'
import cameraSvg from '@/assets/imgs/svgs/camera-svg.svg'
import { Link } from 'react-router-dom'
import DynamicDropdown from '../../components/DynamicDropdown'

function TradeIndex() {
    let cardData = [
        {
            id: 1,
            title: 'BTC/BUHD',
            amount: 30624,
            high: 31026,
            low: 30220,
            up: true,
            percent: 1.07,
        },
        {
            id: 2,
            title: 'ETH/USDT',
            amount: 1800,
            high: 1835,
            low: 1780,
            up: true,
            percent: 0.8,
        },
        {
            id: 3,
            title: 'ADA/USD',
            amount: 1.2,
            high: 1.25,
            low: 1.18,
            up: true,
            percent: 1.6,
        },
        {
            id: 4,
            title: 'XRP/USD',
            amount: 0.45,
            high: 0.48,
            low: 0.42,
            up: false,
            percent: -0.5,
        },
        {
            id: 5,
            title: 'BNB/BTC',
            amount: 0.0042,
            high: 0.0045,
            low: 0.004,
            up: true,
            percent: 0.9,
        },
        {
            id: 6,
            title: 'BTC/BUHD',
            amount: 30624,
            high: 31026,
            low: 30220,
            up: true,
            percent: 1.07,
        },
        {
            id: 7,
            title: 'ETH/USDT',
            amount: 1800,
            high: 1835,
            low: 1780,
            up: true,
            percent: 0.8,
        },
        {
            id: 8,
            title: 'ADA/USD',
            amount: 1.2,
            high: 1.25,
            low: 1.18,
            up: true,
            percent: 1.6,
        },
        {
            id: 9,
            title: 'XRP/USD',
            amount: 0.45,
            high: 0.48,
            low: 0.42,
            up: false,
            percent: -0.5,
        },
        {
            id: 10,
            title: 'BNB/BTC',
            amount: 0.0042,
            high: 0.0045,
            low: 0.004,
            up: true,
            percent: 0.9,
        },
    ]

    const [selectedCard, setSelectedCard] = useState(1)
    const [cardDetails, setCardData] = useState(cardData[0])
    const [selectedTab, setSelectedTab] = useState('chart');

    const tabs = [
        { label: 'Chart', id: 'chart' },
        { label: 'Order Book', id: 'orderBook' },
        { label: 'Market Traders', id: 'marketTraders' },
    ];

    const options = [
        { label: 'Dashboard', link: '#' },
        { label: 'Settings', link: '#' },
        { label: 'Earnings', link: '#' },
        { label: 'Sign out', link: '#' },
    ];

    const handleTabClick = (tabId) => {
        setSelectedTab(tabId);
    };

    const handleCardSelect = (id) => {
        setSelectedCard(id)
        setCardData(cardData?.filter((e) => e?.id === id)[0])
    }

    return (
        <Layout>
            <div className="md:flex py-5">
                {/* Trade Analysis */}
                <div className="md:w-4/12 md:border-r-2 md:pr-5 border-gray-300 dark:border-[#202020]">
                    <h3 className="text-3xl font-semibold text-[#202020] dark:text-[#fefefe]">
                        Analysis
                    </h3>
                    <div className="flex flex-col gap-4 ">
                        {/* Tabs */}
                        <TradeTabs />

                        {/* Search/Filter */}
                        <SearchFilter />

                        {/* Cards */}
                        <div className="overflow-y-auto md:h-[70vh] flex flex-wrap no-scrollbar">
                            {cardData?.map((e, index) => (
                                <div key={index} className={`w-1/2 rounded-xl`}>
                                    <TradeCard
                                        data={e}
                                        selectedCard={selectedCard}
                                        handleCardSelect={handleCardSelect}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {/* Charts */}
                <div className="md:w-8/12 md:ml-5">
                    <div className='md:flex justify-between items-center'>
                        {/* Left */}
                        <div className='flex-1'>
                            {/* header title */}
                            <h3 className="text-3xl font-semibold text-[#202020] dark:text-[#fefefe]">
                                {cardDetails?.title}
                            </h3>
                            {/* Amount/Change */}
                            <div className='flex flex-row items-center'>
                                <span className="text-xl font-medium text-[#202020] dark:text-[#fefefe]">
                                    {cardDetails?.amount}
                                </span>
                                <span
                                    className={`font-medium text-md text-center rounded-2xl 
                                        ${cardDetails?.up
                                            ? 'dark:text-green-400 text-green-700'
                                            : 'text-[#f026178f]'
                                        } px-3`}
                                >
                                    {cardDetails?.percent > 0
                                        ? '+ ' + cardDetails?.percent + ' %'
                                        : cardDetails?.percent + ' %'}
                                </span>
                            </div>
                        </div>

                        {/* Right */}
                        <div className='md:flex space-x-2 justify-between md:w-2/6'>
                            <div className='flex flex-col'>
                                <h5 className='text-xl font-medium'>{(cardDetails?.amount * Math.random()).toFixed(3) + ' BUSD'}</h5>
                                <h5 className='text-md font-medium'>{'24h Volume'}</h5>
                            </div>
                            <div className='flex space-x-2'>
                                <Link to={'#'}>
                                    <img src={cameraSvg} alt='cameraSvg' style={{ height: 42 }} />
                                </Link>
                                <Link to={'#'}>
                                    <img src={settingsSvg} alt='settings' style={{ height: 42 }} />
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Tab */}
                    <div className="flex items-center py-3">
                        <div className="flex space-x-4 rounded-full bg-[#fefefe] dark:bg-[#161616] p-2 overflow-hidden">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    className={`transition inline-block rounded-full px-4 py-2 font-medium text-[#161616] dark:text-[#fefefe] duration-150 ease-in ${selectedTab === tab.id ? 'dark:bg-black bg-[#161616] text-[#fefefe]' : ''
                                        }`}
                                    onClick={() => handleTabClick(tab.id)}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </div>
                    </div>
                    {/* Chart */}
                    <div className="bg-[#fefefe] dark:bg-[#161616] rounded-2xl">
                        <SimulationChart />
                    </div>
                    {/* Chart Bottom */}
                    <div className='flex justify-between mt-2'>
                        <div className='flex-0 mt-2'>
                            <DynamicDropdown options={options} />
                        </div>
                        <div className='flex-1 flex justify-start flex-row-reverse'>
                            <button
                                type="button"
                                className="dark:text-white dark:bg-[#161616] bg-[#f3f3f3] focus:ring-4  text-lg focus:outline-none px-4 w-auto flex py-2 items-center rounded-xl"
                            >
                                <svg
                                    width={24}
                                    height={24}
                                    xmlns="http://www.w3.org/2000/svg"
                                    fillRule="evenodd"
                                    className='dark:fill-[#fefefe] fill-[#161616] mr-2'
                                    clipRule="evenodd"
                                >
                                    <path d="M6 16h-5v6h22v-6h-5v-1h6v8h-24v-8h6v1zm14 2c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1zm-7.5-17v14.884l4.736-5.724.764.645-5.979 7.195-6.021-7.205.765-.644 4.735 5.732v-14.883h1z" />
                                </svg>

                                Download
                            </button>

                            <button
                                type="button"
                                className="mx-2 dark:text-white dark:bg-[#161616] bg-[#f3f3f3] focus:ring-4  text-lg focus:outline-none px-4 w-auto flex py-3 items-center rounded-xl"
                            >
                                <svg
                                    width={24}
                                    height={24}
                                    xmlns="http://www.w3.org/2000/svg"
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    className='dark:fill-[#fefefe] fill-[#161616] mr-2'
                                >
                                    <path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm0 11h6v1h-7v-9h1v8z" />
                                </svg>

                                Set up alert
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default TradeIndex

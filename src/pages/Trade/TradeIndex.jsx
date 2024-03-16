import { useState } from 'react';
import Layout from '../../components/Layout/Layout'
import SearchFilter from '../../components/Trade/SearchFilter'
import TradeTabs from '../../components/Trade/TradeTabs'
import TradeCard from '../../components/Trade/TradeCard';
import SimulationChart from '../../components/Trade/SimulationChart';

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
    ];

    const [selectedCard, setSelectedCard] = useState(1)

    const handleCardSelect = (id) => {
        setSelectedCard(id)
    }

    return (
        <Layout>
            <div className="md:flex py-5">
                {/* Trade Analysis */}
                <div className="md:w-4/12 md:border-r-2 md:pr-5 border-gray-300 dark:border-[#202020]">
                    <h3 className="text-3xl font-semibold text-[#202020] dark:text-[#fefefe]">
                        Analysis
                    </h3>
                    <div className="flex flex-col gap-4">
                        {/* Tabs */}
                        <TradeTabs />

                        {/* Search/Filter */}
                        <SearchFilter />

                        {/* Cards */}
                        <div className="overflow-y-auto md:h-[70vh] flex flex-wrap no-scrollbar">
                            {cardData?.map((e, index) => (
                                <div key={index} className={`w-1/2 rounded-xl`}>
                                    <TradeCard data={e} selectedCard={selectedCard} handleCardSelect={handleCardSelect} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Charts */}
                <div className="md:w-8/12">

                    <SimulationChart />
                </div>
            </div>
        </Layout>
    )
}

export default TradeIndex

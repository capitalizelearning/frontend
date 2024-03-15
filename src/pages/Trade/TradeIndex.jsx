import Layout from "../../components/Layout/Layout"
import TradeTabs from "../../components/Trade/TradeTabs"

function TradeIndex() {
    return (
        <Layout>
            <div className="md:max-h-[80vh] flex">
                {/* Trade Analysis */}
                <div className="flex-0">
                    {/* Tabs */}
                    <TradeTabs />
                </div>

                {/* Charts */}
                <div className="flex-1"></div>
            </div>
        </Layout>
    )
}

export default TradeIndex
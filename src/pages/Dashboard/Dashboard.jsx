import Layout from "@/components/Layout/Layout";
import ytBlue from '@/assets/imgs/svgs/yt-blue.svg'
import ytRed from '@/assets/imgs/svgs/yt-red.svg'
import tickYellow from '@/assets/imgs/svgs/tick-yellow.svg'
import DashboardTopCard from "../../components/Cards/DashboardTopCard";
import DashboardAreaChart from "../../components/Charts/DashboardAreaChart";
import DashboardLeaderboard from "../../components/Cards/DashboardLeaderboard";

export default function Dashboard() {
    return (
        <Layout>
            <div className="flex space-x-3 mt-5">
                {/* content */}
                <div className="md:w-9/12">
                    {/* Top Stat Card */}
                    <div className="flex-1 flex space-x-3">
                        <DashboardTopCard
                            icon={ytBlue}
                            title="Total Users"
                            number={457}
                            percent="25"
                            isUp={true}
                        />
                        <DashboardTopCard
                            icon={tickYellow}
                            title="Total Users"
                            number={4585}
                            percent="3.8"
                            isUp={true}
                        />
                        <DashboardTopCard
                            icon={ytRed}
                            title="Total Users"
                            number={574}
                            percent="8.7"
                            isUp={true}
                        />
                    </div>
                    <div className="mt-3 flex space-x-3">
                        <div className="md:w-8/12">
                            {/* Area Chart */}
                            <DashboardAreaChart />
                        </div>
                        <div className="md:w-3/12">
                            {/* Stat Card */}
                        </div>
                    </div>
                </div>
                <div className="md:w-3/12">
                    <DashboardLeaderboard />
                </div>
            </div>
        </Layout>
    );
}

/* eslint-disable no-unused-vars */
import Layout from "@/components/Layout/Layout";
import ytBlue from '@/assets/imgs/svgs/yt-blue.svg'
import ytRed from '@/assets/imgs/svgs/yt-red.svg'
import tickYellow from '@/assets/imgs/svgs/tick-yellow.svg'
import DashboardTopCard from "../../components/Cards/DashboardTopCard";
import DashboardAreaChart from "../../components/Charts/DashboardAreaChart";
import DashboardLeaderboard from "../../components/Cards/DashboardLeaderboard";
import { useState } from "react";
import Slider from "react-slick";
import DashboardSliderComponent from "../../components/Cards/DashboardSliderComponent";
import DashboardStatCard from "../../components/Cards/DashboardStatCard";

export default function Dashboard() {
    const initialSliderData = [
        { id: 1, image: '', progress: 45, link: '' },
        { id: 2, image: '', progress: 99, link: '' },
        { id: 3, image: '', progress: 44, link: '' },
        { id: 4, image: '', progress: 22, link: '' },
        { id: 5, image: '', progress: 55, link: '' },
        { id: 6, image: '', progress: 45, link: '' },
        { id: 7, image: '', progress: 86, link: '' },
        { id: 8, image: '', progress: 75, link: '' },
    ]
    const [sliderData, setSliderData] = useState(initialSliderData)

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <Layout>
            <div className="lg:flex space-x-3 mt-5">
                {/* content */}
                <div className="md:w-12/12 lg:w-9/12 w-full">
                    {/* Top Stat Card */}
                    <div className="flex-1 flex flex-col lg:flex-row gap-3 lg:gap-0 lg:space-x-3">
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
                    <div className="mt-3 flex flex-col lg:flex-row gap-3  lg:gap-0 lg:space-x-3">
                        <div className="md:w-12/12 lg:w-8/12">
                            {/* Area Chart */}
                            <DashboardAreaChart />
                        </div>
                        <div className="md:w-full lg:w-4/12 flex flex-col gap-3">
                            {/* Stat Card */}
                            <DashboardStatCard title='Minutes' total={40} completed={25} />
                            <DashboardStatCard title='Assignments' total={20} completed={10} />
                        </div>
                    </div>
                </div>
                <div className="md:w-12/12 lg:w-3/12">
                    <DashboardLeaderboard />
                </div>
            </div>
            {/* Slider */}
            <div className="mt-5 bg-[#fefefe] dark:bg-[#1c1c1c] rounded-xl p-3">
                <div className="slider-container">
                    <Slider {...settings}>
                        {sliderData?.map(e => (
                            <div className="bg-[#CDCDCD] dark:bg-[#CDCDCD] rounder-xl p-5 md:flex flex-col gap-3" key={e?.id}>
                                <DashboardSliderComponent data={e} />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </Layout>
    );
}

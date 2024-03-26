import { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';
import arrowRight from '@/assets/imgs/svgs/arrow-right.svg'

function DashboardAreaChart() {
    const [chartData, setChartData] = useState([]);
    const [selectedFilter, setSelectedFilter] = useState('7');

    useEffect(() => {
        // Simulated data for demonstration
        const fetchData = async () => {
            const data = [];
            const endDate = new Date();
            const startDate = new Date();
            startDate.setDate(startDate.getDate() - parseInt(selectedFilter));
            for (let date = startDate; date <= endDate; date.setDate(date.getDate() + 1)) {
                data.push({
                    x: date.toLocaleDateString(),
                    y: Math.floor(Math.random() * 100) + 1 // Simulated random data
                });
            }
            setChartData(data);
        };

        fetchData();
    }, [selectedFilter]);

    const handleFilterChange = (filter) => {
        setSelectedFilter(filter);
    };

    const options = {
        chart: {
            id: 'area-chart',
        },
        xaxis: {
            type: 'category'
        },
        yaxis: {
            labels: {
                formatter: function (value) {
                    return value.toFixed(2);
                }
            }
        }
    };

    return (
        <div className="relative bg-[#fefefe] dark:bg-[#161616] p-5 rounded-xl">
            <div className="flex justify-start space-x-4 m-3 ">
                <button onClick={() => handleFilterChange('7')} className={`text-md font-medium text-[#161616] dark:text-[#fefefe] ${selectedFilter === '7' && 'border-[#4299e1] border-b-2'}`}>7 Days</button>
                <button onClick={() => handleFilterChange('30')} className={`text-md font-medium text-[#161616] dark:text-[#fefefe] ${selectedFilter === '30' && 'border-[#4299e1] border-b-2'}`}>30 Days</button>
                <button onClick={() => handleFilterChange('60')} className={`text-md font-medium text-[#161616] dark:text-[#fefefe] ${selectedFilter === '60' && 'border-[#4299e1] border-b-2'}`}>60 Days</button>
            </div>
            <Chart
                options={options}
                series={[{ data: chartData }]}
                type="area"
                height={250}
            />
            <button className="dark:text-green-300 text-green-700 font-bold dark:font-medium flex space-x-3 items-center">View Details <img src={arrowRight} alt="icon" className='mx-2' /></button>
        </div>
    );
}

export default DashboardAreaChart;

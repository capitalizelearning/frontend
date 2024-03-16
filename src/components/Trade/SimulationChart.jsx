import { useState } from 'react';
import Chart from 'react-apexcharts';

const SimulationChart = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [selectedInterval, setSelectedInterval] = useState('15m');

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const changeInterval = (interval) => {
    setSelectedInterval(interval);
  };

  const chartOptions = {
    chart: {
      type: 'candlestick',
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: true,
      },
      animations: {
        enabled: true,
        easing: 'easeinout',
        speed: 800,
        animateGradually: {
          enabled: true,
          delay: 150,
        },
        dynamicAnimation: {
          enabled: true,
          speed: 350,
        },
      },
    },
    xaxis: {
      type: 'category',
      categories: ['9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00'],
    },
    yaxis: {
      title: {
        text: 'Price',
      },
    },
    theme: {
      mode: 'light',
    },
    tooltip: {
      x: {
        show: true,
        format: 'HH:mm',
      },
    },
  };

  const chartSeries = [
    {
      data: [
        {
          x: '9:00',
          y: [30, 40, 20, 35], // Green candle data (open, high, low, close)
        },
        {
          x: '10:00',
          y: [40, 50, 35, 45], // Green candle data
        },
        {
          x: '11:00',
          y: [45, 55, 40, 50], // Green candle data
        },
        {
          x: '12:00',
          y: [50, 60, 45, 55], // Green candle data
        },
        {
          x: '13:00',
          y: [55, 65, 50, 60], // Green candle data
        },
        {
          x: '14:00',
          y: [60, 70, 55, 65], // Green candle data
        },
        {
          x: '15:00',
          y: [65, 75, 60, 70], // Green candle data
        },
      ],
    },
    {
      data: [
        {
          x: '9:00',
          y: [35, 45, 25, 40], // Red candle data (open, high, low, close)
        },
        {
          x: '10:00',
          y: [45, 55, 30, 50], // Red candle data
        },
        {
          x: '11:00',
          y: [50, 60, 35, 55], // Red candle data
        },
        {
          x: '12:00',
          y: [55, 65, 40, 60], // Red candle data
        },
        {
          x: '13:00',
          y: [60, 70, 45, 65], // Red candle data
        },
        {
          x: '14:00',
          y: [65, 75, 50, 70], // Red candle data
        },
        {
          x: '15:00',
          y: [70, 80, 55, 75], // Red candle data
        },
      ],
    },
  ];

  return (
    <div className={`w-full h-screen p-5`}>
      <div className="flex justify-between items-center p-4">
        <div className="flex space-x-2">
          <button
            className={`${
              selectedInterval === '15m' ? 'dark:bg-[#000] bg-[#161616] text-white' : 'bg-gray-300 text-gray-800 dark:bg-gray-800 dark:text-white'
            } p-2 rounded`}
            onClick={() => changeInterval('15m')}
          >
            15m
          </button>
          <button
            className={`${
              selectedInterval === '1hr' ? 'dark:bg-[#000] bg-[#161616] text-white' : 'bg-gray-300 text-gray-800 dark:bg-gray-800 dark:text-white'
            } p-2 rounded`}
            onClick={() => changeInterval('1hr')}
          >
            1hr
          </button>
          <button
            className={`${
              selectedInterval === '4hr' ? 'dark:bg-[#000] bg-[#161616] text-white' : 'bg-gray-300 text-gray-800 dark:bg-gray-800 dark:text-white'
            } p-2 rounded`}
            onClick={() => changeInterval('4hr')}
          >
            4hr
          </button>
        </div>
      
      </div>
      <div className="p-4 bg-[#fefefe] dark:bg-[#161616] rounded-2xl">
        <Chart options={chartOptions} series={chartSeries} type="candlestick" height={300} />
      </div>
    </div>
  );
};

export default SimulationChart
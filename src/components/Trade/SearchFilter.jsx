import { useState } from 'react';
import filterIcon from '@/assets/imgs/filter-icon.png'
const SearchFilter = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [showTradeAnalysis, setShowTradeAnalysis] = useState(false);

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleFilterClick = () => {
        setShowTradeAnalysis(!showTradeAnalysis);
    };


    return (
        <div className={`flex items-center justify-between w-full`}>
        <div className="relative flex-grow"> {/* Use flex-grow to make the search field take full width */}
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search..."
            className="w-full border border-gray-300 rounded-2xl px-4 py-2 focus:outline-none dark:bg-gray-800 dark:border-gray-600 dark:text-white"
          />
          <svg className="h-6 w-6 absolute top-1/2 transform -translate-y-1/2 right-4 text-gray-400 dark:text-gray-300"
            aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
          </svg>
        </div>
        <button
          className="bg-[#fefefe] ml-4 w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-800 dark:border-gray-600"
          onClick={handleFilterClick}
          type='button'
        >
         <img src={filterIcon} className='dark:invert pt-1'  alt='filter icon'/>
        </button>
        {showTradeAnalysis && (
          <div className="absolute top-full left-0 w-40 bg-white border border-gray-300 p-2 rounded-md shadow-md dark:bg-gray-800 dark:border-gray-600 dark:text-white">
            Trade Analysis Options...
          </div>
        )}
      </div>
      
    );
};

export default SearchFilter;

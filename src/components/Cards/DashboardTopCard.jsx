/* eslint-disable react/prop-types */
import arrowUp from '@/assets/imgs/svgs/arrow-up.svg';

function DashboardTopCard({ icon, title, number, percent, isUp }) {
    return (
        <div className="flex p-5 rounded-xl flex-1 dark:bg-[#161616] space-x-3 bg-[#fefefe]">
            <div>
                <img src={icon} alt="icon" />
            </div>
            <div className='flex-1 flex flex-col justify-center'>
                <h5 className='text-lg text-[#000000] dark:text-[#fefefe]'>{title ? title : '--'}</h5>
                <h3 className='text-xl font-bold'>{number ? number : 0}</h3>
            </div>
            <div className="flex flex-0 items-end">
                {percent !== undefined && (
                    <div className="flex items-center">
                        {isUp ? <img src={arrowUp} alt="icon" /> : null}
                        <span className={`${isUp ? 'text-[#118B4E] dark:text-[#77f8a2]' : 'text-[#c73030]'}`}>{percent + '%'}</span>
                    </div>
                )}
            </div>
        </div>
    );
}

export default DashboardTopCard;

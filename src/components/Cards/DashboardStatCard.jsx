import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function DashboardStatCard({ icon, title, total, completed }) {
    let percent = (completed / total) * 100
    return (
        <div className="w-full  p-5 rounded-xl flex-1 dark:bg-[#161616] bg-[#fefefe]">
            <h5 className='text-lg text-[#000000] dark:text-[#fefefe] text-center mb-3'>{title ? title : '--'}</h5>
            <div className="flex items-center">
                <div className="md:w-3/12 flex items-center">
                    <CircularProgressbar value={percent} text={`${percent}%`} />
                </div>
                <div className="md:w-9/12 items-center pl-3">
                    <div className='flex-1 flex flex-col justify-center items-center'>
                        <h3 className='text-md font-medium text-gray-500 dark:text-[#fefefe]'>
                            You’ve completed
                            <span className="text-orange-400 mx-1">{completed ? completed : 0}</span>
                            of your daily <span className="text-red-500 mx-1">{total ? total : 0}</span>
                            assignments
                        </h3>
                    </div>

                </div>
            </div>

        </div>
    );
}

export default DashboardStatCard
/* eslint-disable react/jsx-key */
import star1 from '@/assets/imgs/svgs/1star.svg'
import star2 from '@/assets/imgs/svgs/2star.svg'
import star3 from '@/assets/imgs/svgs/3star.svg'

function DashboardLeaderboard() {
    // Sample data for demonstration
    const users = [
        { id: 1, name: 'John Doe', points: 500, image: 'https://via.placeholder.com/150' },
        { id: 2, name: 'Jane Smith', points: 450, image: 'https://via.placeholder.com/150' },
        { id: 3, name: 'Jane Smith', points: 450, image: 'https://via.placeholder.com/150' },
        { id: 4, name: 'Jane Smith', points: 450, image: 'https://via.placeholder.com/150' },
        { id: 5, name: 'Jane Smith', points: 450, image: 'https://via.placeholder.com/150' },
        { id: 6, name: 'Jane Smith', points: 450, image: 'https://via.placeholder.com/150' },
        { id: 7, name: 'Jane Smith', points: 450, image: 'https://via.placeholder.com/150' },
        { id: 8, name: 'Jane Smith', points: 450, image: 'https://via.placeholder.com/150' },
        // { id: 9, name: 'Jane Smith', points: 450, image: 'https://via.placeholder.com/150' },
    ];

    return (
        <div className="bg-[#118B4E] dark:bg-[#161616] mx-auto p-5 rounded-xl">
            <h2 className="text-2xl dark:font-bold mb-4 text-center text-[#fefefe]">Leaderboard</h2>
            <div className="flex flex-col">
                <table className="table-auto w-full">
                    <thead>
                        <tr className="text-[#fefefe] font-medium">
                            <th className="px-2 py-2"></th>
                            <th className="px-4 py-2"></th>
                            <th className="px-4 py-2"></th>
                            <th className="py-2 text-end">Points</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.slice(0,8).map(user => (
                            <tr key={user.id} className="text-[#fefefe]">
                                <td className="px-2 py-2 text-center">{user.id === 1 ?
                                    <img src={star1} alt={user.name} className="w-6" /> : user.id === 2 ?
                                        <img src={star2} alt={user.name} className="w-6" /> : user.id === 3 ?
                                            <img src={star3} alt={user.name} className="w-6" /> : user.id
                                }</td>
                                <td className="px-4 py-2">
                                    <img src={user.image} alt={user.name} className="w-8 h-8 rounded-full" />
                                </td>
                                <td className="px-4 py-2">{user.name}</td>
                                <td className="py-2 text-end">{user.points}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}


export default DashboardLeaderboard
/* eslint-disable react/prop-types */
import arrowIcon from '@/assets/imgs/arrow.png'
function CardFooter({ icon, title, desc, link }) {
    return (
        <div className='flex flex-col gap-2'>
            <p>{icon}</p>
            <p className='text-[#FBFBFB] font-bold text-md'>{title}</p>
            <p className='text-[#9B9CA1] text-sm'>{desc}</p>
            <p className='flex'><a href={link} className='text-[#FBFBFB] font-medium text-md'>Learn More </a>
            <div className='px-3 py-1'><img src={arrowIcon} alt='arrow' /></div></p>
        </div>
    )
}

export default CardFooter
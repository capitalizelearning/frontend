/* eslint-disable react/prop-types */

function FeatureSection({ img, title, desc }) {
    return (
        <div className='bg-[#161616] rounded-2xl min-h-[500px] flex flex-col gap-3 w-full p-5 mb-3'>
            <div className='pb-3 min-h-[280px]'>
                <img src={img} alt={title} className="w-full" />
            </div>
            <div className='text-[#FBFBFB] font-medium text-xl'>{title ? title : 'Title Missing ...'}</div>
            <div className='text-[#9B9CA1] font-light text-lg'>{desc ? desc : 'Title Missing ...'}</div>
        </div>
    )
}

export default FeatureSection
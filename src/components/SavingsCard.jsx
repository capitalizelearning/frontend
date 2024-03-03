import phoneImg from '@/assets/imgs/savings-img.png'

function SavingsCard() {
    return (
        <div className="lg:flex bg-[#161616] bg-[url('@/assets/imgs/div-bg.png')] my-6 lg:my-32 min-h-80 border-2 pt-16 border-[#161616] rounded-xl space-x-4">
            <div className="flex-1">
                <div className="lg:flex flex-1 flex-col gap-4 mt-5 ml-10">
                    <h3 className="text-5xl font-bold text-white">
                        Start saving today.
                    </h3>
                    <p className="text-[#9B9CA1] text-lg leading-relaxed pr-3">
                        Revolutionize the way you learn about financial literacy, and pave the way for your future financial freedom!
                    </p>
                    <p className="flex justify-center mt-3">
                       <input type='text' placeholder='your@email.com' className='bg-[#242424] px-5 py-3 w-full rounded-2xl' />
                       <button type='button' className='text-sm font-semibold bg-[#FBFBFB] mx-2 w-40 px-5 rounded-2xl text-[#0F0F0F]'>Join waitlist</button>
                    </p>
                </div>
            </div>
            <div className="hidden md:block flex-0 justify-end items-end w-2/5">
                <img src={phoneImg} />
            </div>
        </div>
    )
}


export default SavingsCard
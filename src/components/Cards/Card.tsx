import img1 from '../../assets/img1.jpg'
import ReadMoreButton from '../Button/ReadMoreButton'
import Typography from '../Text/Typography'
// eslint-disable-next-line @typescript-eslint/naming-convention
function Card() {
    return (
        <>
            <div className="w-full my-[1rem] sm:my-0 sm:max-w-[20rem] bg-white border border-gray-200 rounded-tl-[10rem] shadow-sm sm:h-[33rem] h-auto hover:bg-orange-100 relative group">
                <a href="#">
                    <img className="rounded-tl-[10rem]" src={img1} alt="" />
                </a>
                <div className="p-5">
                    <Typography className='uppercase hover:underline cursor-pointer text-custom_green_1 font-medium text-[12px] tracking-[1px] mb-2' text='april 07,2025' />
                    <Typography text='Noteworthy technology acquisitions 2021' className='cursor-pointer hover:underline hover:text-custom_orange_1 text-[16px] font-bold leading-[1.2] ' />
                    <Typography className='my-3 text-custom_grey' text='Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.' />
                    <div className='mt-12'>
                        <ReadMoreButton />
                    </div>
                </div>

                <div className="absolute bottom-[-6px] left-[15px] w-[90%] bg-orange-100 text-white text-center p-1  transition-colors duration-300 rounded-md group-hover:bg-custom_maroon z-[-1]">
                </div>
            </div>
        </>
    )
}

export default Card
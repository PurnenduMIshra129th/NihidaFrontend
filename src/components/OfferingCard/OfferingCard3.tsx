import icon1_2 from "../../assets/ServiceIcon3.2.png"
import img1_2 from '../../assets/ServiceImg3.2.jpg'
import img1_1 from "../../assets/ServiceImg3.jpg"
import {GiftIcon } from "../Icons/Icon"
import Typography from "../Text/Typography"

// eslint-disable-next-line @typescript-eslint/naming-convention
function OfferingCard3() {
    return (
        <>
            <div className="flex  flex-col sm:flex-1">
                <div className="bg-custom_green_1 w-full p-3 flex flex-col justify-center items-center pb-[3.5rem]" >
                    <Typography text="Charity Registry" className="text-custom_white text-center font-bold text-[20px] my-5 hover:underline cursor-pointer" />
                    <Typography text="Want to start Charity or make a gift on behalf of someone special to you? Make your registry now. Some more details abou..." className="text-custom_white text-center font-normal leading-[1.6] text-[16px] mb-3 hover:underline cursor-pointer" />
                </div>
                <div className="w-full relative h-[200px] bg-cover bg-center" style={{ backgroundImage: `url(${img1_1})` }}>
                    <div className='absolute -top-[3rem] left-1/2 transform -translate-x-1/2 w-[6rem] h-[6rem] bg-custom_white flex justify-center items-center rounded-full cursor-pointer'>
                    <div className='w-[6rem] h-[6rem] bg-custom_white flex justify-center items-center rounded-full'>
                        <GiftIcon className='size-10 text-custom_green_1' />
                    </div>
                    </div>
                </div>
                <div className="bg-custom_green_1 w-full p-3 flex flex-col justify-center items-center pb-[3.5rem]">
                    <Typography text="Identification Of Social Partner" className="text-custom_white text-center font-bold text-[20px] my-5 hover:underline cursor-pointer" />
                    <Typography text="Our Sector Experts connect Individuals and Organizations to trusted social partners meeting their unique requirements ..." className="text-custom_white text-center font-normal leading-[1.6] text-[16px] mb-3 hover:underline cursor-pointer" />  
                </div>
                <div className="w-full relative h-[200px] bg-cover bg-center" style={{ backgroundImage: `url(${img1_2})` }}>
                    <div className='absolute -top-[3rem] left-1/2 transform -translate-x-1/2 w-[6rem] h-[6rem] bg-custom_white flex justify-center items-center rounded-full cursor-pointer'>
                    
                    <img src={icon1_2} className="w-[60%]"></img>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OfferingCard3
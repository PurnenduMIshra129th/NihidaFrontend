import { useSelector } from "react-redux"

import icon1_2 from "../../assets/ServiceIcon3.2.png"
import { selectService } from "../../contexts/slice/serviceSlice"
import { defaultImage } from "../../utils/constant"
import { trimText } from "../../utils/trimText"
import {GiftIcon } from "../Icons/Icon"
import Typography from "../Text/Typography"

// eslint-disable-next-line @typescript-eslint/naming-convention
function OfferingCard3() {
    const serviceList = useSelector(selectService);
    return (
        <>
            <div className="flex  flex-col sm:w-1/3">
                <div className="bg-custom_green_1 w-full p-3 flex flex-col justify-center items-center pb-[3.5rem] break-all" >
                    <Typography text={trimText(serviceList[4]?.heading,35)} className="text-custom_white text-center font-bold text-[20px] my-5 hover:underline cursor-pointer" />
                    <Typography text={trimText(serviceList[4]?.description,150)} className="text-custom_white text-center font-normal leading-[1.6] text-[16px] mb-3 hover:underline cursor-pointer" />
                </div>
                <div className="w-full relative h-[200px] bg-cover bg-center" style={{ backgroundImage: `url(${serviceList[4]?.imagePath || defaultImage})` }}>
                    <div className='absolute -top-[3rem] left-1/2 transform -translate-x-1/2 w-[6rem] h-[6rem] bg-custom_white flex justify-center items-center rounded-full cursor-pointer'>
                    <div className='w-[6rem] h-[6rem] bg-custom_white flex justify-center items-center rounded-full'>
                        <GiftIcon className='size-10 text-custom_green_1' />
                    </div>
                    </div>
                </div>
                <div className="bg-custom_green_1 w-full p-3 flex flex-col justify-center items-center pb-[3.5rem] break-all">
                    <Typography text={trimText(serviceList[5]?.heading,35)} className="text-custom_white text-center font-bold text-[20px] my-5 hover:underline cursor-pointer" />
                    <Typography text={trimText(serviceList[5]?.description,150)} className="text-custom_white text-center font-normal leading-[1.6] text-[16px] mb-3 hover:underline cursor-pointer" />  
                </div>
                <div className="w-full relative h-[200px] bg-cover bg-center" style={{ backgroundImage: `url(${serviceList[5]?.imagePath || defaultImage})` }}>
                    <div className='absolute -top-[3rem] left-1/2 transform -translate-x-1/2 w-[6rem] h-[6rem] bg-custom_white flex justify-center items-center rounded-full cursor-pointer'>
                    
                    <img src={icon1_2 || defaultImage} className="w-[60%]"></img>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OfferingCard3
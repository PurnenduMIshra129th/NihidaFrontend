import { useSelector } from "react-redux"

import icon1_1 from "../../assets/ServiceIcon2.1.png"
import icon1_2 from "../../assets/ServiceIcon2.2.png"
import { selectService } from "../../contexts/slice/serviceSlice"
import { trimText } from "../../utils/trimText"
import Typography from "../Text/Typography"

// eslint-disable-next-line @typescript-eslint/naming-convention
function OfferingCard2() {
    const serviceList = useSelector(selectService);
    return (
        <>
            <div className="flex  flex-col sm:w-1/3">
                <div className="bg-custom_yellow w-full p-3 flex flex-col justify-center items-center pb-[3.5rem] break-all ">
                    <Typography text={trimText(serviceList[2]?.heading,35)} className="text-custom_white text-center font-bold text-[20px] my-5 hover:underline cursor-pointer break-words" />
                    <Typography text={trimText(serviceList[2]?.description,150)} className="text-custom_white text-center font-normal leading-[1.6] text-[16px] mb-3 hover:underline cursor-pointer" />
                </div>
                <div className="w-full relative h-[200px] bg-cover bg-center" style={{ backgroundImage: `url(${serviceList[2]?.imagePath})` }}>
                    <div className='absolute -top-[3rem] left-1/2 transform -translate-x-1/2 w-[6rem] h-[6rem] bg-custom_white flex justify-center items-center rounded-full cursor-pointer'>
                        <img src={icon1_1} className="w-[40%]" alt="no image found"></img>
                    </div>
                </div>
                <div className="bg-custom_yellow w-full p-3 flex flex-col justify-center items-center pb-[3.5rem] break-all">
                    <Typography text={trimText(serviceList[3]?.heading,35)} className="text-custom_white text-center font-bold text-[20px] my-5 hover:underline cursor-pointer" />
                    <Typography text={trimText(serviceList[3]?.description,150)} className="text-custom_white text-center font-normal leading-[1.6] text-[16px] mb-3 hover:underline cursor-pointer" />  
                </div>
                <div className="w-full relative h-[200px] bg-cover bg-center" style={{ backgroundImage: `url(${serviceList[3]?.imagePath})` }}>
                    <div className='absolute -top-[3rem] left-1/2 transform -translate-x-1/2 w-[6rem] h-[6rem] bg-custom_white flex justify-center items-center rounded-full cursor-pointer'>
                    <img src={icon1_2} className="w-[40%]" alt="no image found"></img>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OfferingCard2
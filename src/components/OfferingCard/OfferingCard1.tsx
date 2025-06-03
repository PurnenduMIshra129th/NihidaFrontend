import { useSelector } from "react-redux"

import icon1_1 from "../../assets/ServiceIcon1.1.png"
import { selectService } from "../../contexts/slice/serviceSlice"
import { defaultImage } from "../../utils/constant"
import { trimText } from "../../utils/trimText"
import { EcologyIcon } from "../Icons/Icon"
import Typography from "../Text/Typography"

// eslint-disable-next-line @typescript-eslint/naming-convention
function OfferingCard1() {
    const serviceList = useSelector(selectService);
    return (
        <>
            <div className="flex  flex-col sm:w-1/3">
                <div className="bg-custom_blue_4 w-full p-3 flex flex-col justify-center items-center pb-[3.5rem] break-all">
                    <Typography text={trimText(serviceList[0]?.heading,35)} className="text-custom_white text-center font-bold text-[20px] my-5 hover:underline cursor-pointer" />
                    <Typography text={trimText(serviceList[0]?.description,150)} className="text-custom_white text-center font-normal leading-[1.6] text-[16px] mb-3 hover:underline cursor-pointer" />
                </div>
                <div className="w-full relative h-[200px] bg-cover bg-center" style={{ backgroundImage: `url(${serviceList[0]?.imagePath || defaultImage})` }}>
                    <div className='absolute -top-[3rem] left-1/2 transform -translate-x-1/2 w-[6rem] h-[6rem] bg-custom_white flex justify-center items-center rounded-full cursor-pointer'>
                        <img src={icon1_1 || defaultImage} className="w-[60%]"></img>
                    </div>
                </div>
                <div className="bg-custom_blue_4 w-full p-3 flex flex-col justify-center items-center pb-[3.5rem] break-all">
                    <Typography text={trimText(serviceList[1]?.heading,35)} className="text-custom_white text-center font-bold text-[20px] my-5 hover:underline cursor-pointer" />
                    <Typography text={trimText(serviceList[1]?.description,150)} className="text-custom_white text-center font-normal leading-[1.6] text-[16px] mb-3 hover:underline cursor-pointer" />  
                </div>
                <div className="w-full relative h-[200px] bg-cover bg-center" style={{ backgroundImage: `url(${serviceList[1]?.imagePath || defaultImage})` }}>
                    <div className='absolute -top-[3rem] left-1/2 transform -translate-x-1/2 w-[6rem] h-[6rem] bg-custom_white flex justify-center items-center rounded-full'>
                    <div className='w-[6rem] h-[6rem] bg-custom_white flex justify-center items-center rounded-full cursor-pointer'>
                        <EcologyIcon className='size-10 text-custom_blue_4' />
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OfferingCard1
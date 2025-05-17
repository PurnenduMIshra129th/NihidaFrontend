import icon1_1 from "../../assets/ServiceIcon1.png"
import img1_2 from '../../assets/ServiceImg1.1.jpg'
import img1_1 from "../../assets/ServiceImg1.jpg"
import { EcologyIcon } from "../Icons/Icon"
import Typography from "../Text/Typography"

// eslint-disable-next-line @typescript-eslint/naming-convention
function OfferingCard1() {
    return (
        <>
            <div className="flex  flex-col sm:flex-1">
                <div className="bg-custom_blue_4 w-full p-3 flex flex-col justify-center items-center pb-[3.5rem]">
                    <Typography text="hynGO for Individuals" className="text-custom_white text-center font-bold text-[20px] my-5 hover:underline cursor-pointer" />
                    <Typography text="Building an Endowment for NGOs - With a one-time donation today, you can support vetted NGOs for 10 years! Read more..." className="text-custom_white text-center font-normal leading-[1.6] text-[16px] mb-3 hover:underline cursor-pointer" />
                </div>
                <div className="w-full relative h-[200px] bg-cover bg-center" style={{ backgroundImage: `url(${img1_1})` }}>
                    <div className='absolute -top-[3rem] left-1/2 transform -translate-x-1/2 w-[6rem] h-[6rem] bg-custom_white flex justify-center items-center rounded-full cursor-pointer'>
                        <img src={icon1_1} className="w-[60%]"></img>
                    </div>
                </div>
                <div className="bg-custom_blue_4 w-full p-3 flex flex-col justify-center items-center pb-[3.5rem]">
                    <Typography text="CSR" className="text-custom_white text-center font-bold text-[20px] my-5 hover:underline cursor-pointer" />
                    <Typography text="Outsource your CSR! We provide end-to-end services - NGO identification, Monitoring and Reporting..." className="text-custom_white text-center font-normal leading-[1.6] text-[16px] mb-3 hover:underline cursor-pointer" />  
                </div>
                <div className="w-full relative h-[200px] bg-cover bg-center" style={{ backgroundImage: `url(${img1_2})` }}>
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
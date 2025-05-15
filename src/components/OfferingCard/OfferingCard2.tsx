import icon1_1 from "../../assets/ServiceIcon2.1.png"
import icon1_2 from "../../assets/ServiceIcon2.2.png"
import img1_2 from '../../assets/ServiceImg2.2.jpg'
import img1_1 from "../../assets/ServiceImg2.jpg"
import Typography from "../Text/Typography"

// eslint-disable-next-line @typescript-eslint/naming-convention
function OfferingCard2() {
    return (
        <>
            <div className="flex  flex-col flex-1">
                <div className="bg-custom_yellow w-full p-3 flex flex-col justify-center items-center pb-[3.5rem]">
                    <Typography text="Systematic Giving Plan" className="text-custom_white text-center font-bold text-[20px] my-5 hover:underline cursor-pointer" />
                    <Typography text="Mutual Fund investors can contribute 10% of their investment every year to vetted NGOs monitored by HelpYourNGO ..." className="text-custom_white text-center font-normal leading-[1.6] text-[16px] mb-3 hover:underline cursor-pointer" />
                </div>
                <div className="w-full relative h-[200px] bg-cover bg-center" style={{ backgroundImage: `url(${img1_1})` }}>
                    <div className='absolute -top-[3rem] left-1/2 transform -translate-x-1/2 w-[6rem] h-[6rem] bg-custom_white flex justify-center items-center rounded-full cursor-pointer'>
                        <img src={icon1_1} className="w-[40%]" alt="no image found"></img>
                    </div>
                </div>
                <div className="bg-custom_yellow w-full p-3 flex flex-col justify-center items-center pb-[3.5rem]">
                    <Typography text="NGO Due Diligence" className="text-custom_white text-center font-bold text-[20px] my-5 hover:underline cursor-pointer" />
                    <Typography text="We provide NGO due diligence services to enable donors to make 'informed' donation decisions..." className="text-custom_white text-center font-normal leading-[1.6] text-[16px] mb-3 hover:underline cursor-pointer" />  
                </div>
                <div className="w-full relative h-[200px] bg-cover bg-center" style={{ backgroundImage: `url(${img1_2})` }}>
                    <div className='absolute -top-[3rem] left-1/2 transform -translate-x-1/2 w-[6rem] h-[6rem] bg-custom_white flex justify-center items-center rounded-full cursor-pointer'>
                    <img src={icon1_2} className="w-[40%]" alt="no image found"></img>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OfferingCard2
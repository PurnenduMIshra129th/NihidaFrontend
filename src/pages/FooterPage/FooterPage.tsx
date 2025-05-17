// import img1 from "../../assets/img1.jpg"
import Button from "../../components/Button/Button"
import { CallIcon, FacebookIcon, InstagramIcon, LinkedinIcon, TelegramIconChangedBG, TwitterIcon, YoutubeIcon, } from "../../components/Icons/Icon"
import IconWithText from "../../components/Icons/IconWithText"
import FooterText from "../../components/Text/FooterText"
import SubHeading from "../../components/Text/SubHeading"
import Typography from "../../components/Text/Typography"
// eslint-disable-next-line @typescript-eslint/naming-convention
function FooterPage() {
    return (
        <>
            <div className="w-full flex flex-col items-center justify-center sm:py-7 py-2 bg-custom_black_2 p-[1rem] sm:p-0">
                <div className="sm:w-[90%] w-full flex-row flex flex-wrap space-x-4">
                    <div className="flex flex-col sm:flex-1 sm:px-7 w-full " style={{marginLeft: "0"}}>
                        <Typography className="text-[20px] sm:my-5 my-3 text-custom_white font-extrabold uppercase" text="HelpYourNGO" />
                        <Typography text=" 103, Regent Chambers, Above Status Restaurant, Nariman Point, Mumbai - 400 021, India." className="text-custom_white_1 my-3" />
                        <IconWithText Icon={CallIcon} text="+91 8144746685/9437138912" />
                        <IconWithText Icon={TelegramIconChangedBG} text="purnendu@telegram.com" />
                        <div className="flex flex-row my-5 w-full space-x-5">
                            <TwitterIcon className='size-10 cursor-pointer' />
                            <FacebookIcon className='size-10 cursor-pointer' />
                            <InstagramIcon className='size-10 cursor-pointer' />
                            <LinkedinIcon className='size-10 cursor-pointer' />
                            <YoutubeIcon className='size-10 cursor-pointer' />
                        </div>
                        <Button className="my-5 w-[10rem] bg-custom_green_1 text-custom_white hover:bg-custom_black_2 hover:text-custom_green_1 hover:border-2 hover:border-custom_green_1 h-[3rem]" name="Donate Now" />
                        <SubHeading text="Supported by Quantum Asset Management Company Private Limited." className="text-custom_white my-5"/>
                    </div>
                    <div className="flex flex-col sm:flex-1 sm:px-7 w-full " style={{marginLeft: "0"}}>
                        <Typography className="text-[20px] my-5 text-custom_white font-extrabold uppercase" text="About Us" />
                        <FooterText text="The HelpYourNGO Story" />
                        <FooterText text="Our Vision & Mission" />
                        <FooterText text="Our USP" />
                        <FooterText text="Clients and Partners" />
                        <FooterText text="Press & Media" />
                        <FooterText text="Awards & Recognition" />
                        <FooterText text="Our Financials" />
                        <FooterText text="Our Team" />
                        <FooterText text="Company Matters / Activities" />
                        <FooterText text="Contact Us" />
                    </div>
                    <div className="flex flex-col sm:flex-1 sm:px-7 w-full " style={{marginLeft: "0"}}>
                        <Typography className="text-[20px] my-5 text-custom_white font-extrabold uppercase" text="Products & Services" />
                        <FooterText text="NGO Search & Compare Tool" />
                        <FooterText text="hynGO" />
                        <FooterText text="Systematic Giving Plan" />
                        <FooterText text="Charity Registry" />
                        <FooterText text="Donor Advisory" />
                        <FooterText text="CSR Consultancy" />
                        <FooterText text="Identification of NGO partner" />
                        <FooterText text="NGO Due Diligence" />
                        <FooterText text="Ongoing Crowdfunding Campaigns" />
                    </div>
                    <div className="flex flex-col sm:flex-1 sm:px-7 w-full " style={{marginLeft: "0"}}>
                        <Typography className="text-[20px] my-5 text-custom_white font-extrabold uppercase" text="Latest News" />
                        <FooterText text="Latest blog posts" />
                        <FooterText text="Latest webinar" />
                        {/* <div className="my-3">
                            <img src={img1} alt="" className="h-[25rem] w-[80%]"/>
                        </div> */}
                    </div>
                </div>
                <p className="mt-10 text-[15px] font-normal text-custom_grey">Copyright © 2025 All rights reserved by <span className="text-red-400 font-bold text-[13px]">HYNGO India Pvt. Ltd.</span></p>
            </div>
        </>
    )
}

export default FooterPage
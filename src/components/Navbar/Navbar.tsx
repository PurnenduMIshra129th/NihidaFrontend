import { Link } from "react-router"

import { CallIcon, FacebookIcon, InstagramIcon, LinkedinIcon, TelegramIconChangedBG, TwitterIcon, YoutubeIcon } from "../Icons/Icon"
import IconWithText from "../Icons/IconWithText"

// eslint-disable-next-line @typescript-eslint/naming-convention
function Navbar() {
    return (
        <>
            <nav className={`w-full z-20 top-0 fixed start-0 border-b text-custom_white bg-custom_blue_1`} >
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto ">
                    <div className="flex flex-row flex-wrap justify-center space-x-4">
                        <a href="" className="flex items-center space-x-3 rtl:space-x-reverse outline-none ">
                            <span className={`self-center text-2xl font-semibold whitespace-nowrap ml-3 sm:ml-0 mt-[1rem] sm:mt-0`}>Nihida</span>
                        </a>
                        <div className="flex flex-row  justify-center space-x-4 text-custom_white">
                            <IconWithText Icon={TelegramIconChangedBG} text="Nihida@Telegram.com" textClassName="text-custom_white" iconClassName="text-custom_white size-3" />
                            <IconWithText Icon={CallIcon} text="+91 8144746685" textClassName="text-custom_white" iconClassName="text-custom_white size-3" />
                        </div>
                    </div>
                    <div className="items-center justify-between w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                        {/* <ul className={`flex flex-col p-4 md:p-0 mt-4 font-medium border rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 `} >
                            <li>
                                <a href="#" className="block py-2 px-3 rounded-sm  md:p-0 " aria-current="page">Home</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-3  rounded-sm   md:p-0 ">About</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-3  rounded-sm   md:p-0 ">Services</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-3  rounded-sm   md:p-0 ">Contact</a>
                            </li>
                        </ul> */}
                        <div className="flex flex-row space-x-4 w-full sm:w-auto justify-center mb-3 sm:mb-0">
                            <div  className='cursor-pointer'>
                                 <Link to="/manage">Manage</Link>
                            </div>
                            <FacebookIcon className='cursor-pointer' />
                            <TwitterIcon className='cursor-pointer' />
                            <InstagramIcon className='cursor-pointer' />
                            <LinkedinIcon className='cursor-pointer' />
                            <YoutubeIcon className='cursor-pointer' />
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
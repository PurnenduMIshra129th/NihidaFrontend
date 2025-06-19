import { useSelector } from "react-redux"
import { Link, useNavigate } from "react-router"

import { eventBus } from "../../contexts/context/eventBus"
import { selectSocialLink } from "../../contexts/slice/socialLinkSlice"
import { decodeToken, getStorageItem, removeStorageItem } from "../../utils/util"
import { CallIcon, FacebookIcon, InstagramIcon, LinkedinIcon, TelegramIconChangedBG, TwitterIcon, YoutubeIcon } from "../Icons/Icon"
import IconWithText from "../Icons/IconWithText"

// eslint-disable-next-line @typescript-eslint/naming-convention
function Navbar() {
    const navigate = useNavigate()
    const socialLink = useSelector(selectSocialLink)
    const token = getStorageItem("token");
    const decoded = decodeToken<{ exp: number; role: string }>(token || "");
    const role = getStorageItem("role");
    const logout = () => {
        removeStorageItem("token");
        removeStorageItem("role");
        eventBus.emit({
            type: "success",
            message: "You have been logged out successfully.",
        });
        navigate("/");
    };
    const scrollToSection = (sectionId: string) => {
        if (location.pathname !== "/") {
            navigate("/");

            // Delay scroll slightly until HomePage has loaded
            setTimeout(() => {
                document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
            }, 100); // You can tweak this for better UX
        } else {
            document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <>
            <nav className={`w-full z-20 top-0 fixed start-0 border-b text-custom_white bg-custom_blue_1`} >
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto ">
                    <div className="flex flex-row flex-wrap justify-center space-x-4">
                        <Link to='/' className="flex items-center space-x-3 rtl:space-x-reverse outline-none ">
                            <img src="/NIHIDA-LOGO.jpg" className="w-[2rem] h-[2rem]" alt="Nihida Logo" />
                            {/* <span className={`self-center text-2xl font-semibold whitespace-nowrap ml-3 sm:ml-0 mt-[1rem] sm:mt-0`}>Nihida</span> */}
                        </Link>
                        <div className="flex flex-row  justify-center space-x-4 text-custom_white">
                            <IconWithText Icon={TelegramIconChangedBG} text={socialLink[0]?.telegramUrl} textClassName="text-custom_white" iconClassName="text-custom_white size-3" />
                            <IconWithText Icon={CallIcon} text={socialLink[0]?.phoneNumber1} textClassName="text-custom_white" iconClassName="text-custom_white size-3" />
                        </div>
                    </div>
                    <div className="items-center justify-end w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
                            <li>
                                <Link to="/" className="block py-2 px-3 rounded-sm md:p-0">Home</Link>
                            </li>
                            <li>
                                <button onClick={() => scrollToSection("about")} className="block py-2 px-3 rounded-sm md:p-0">About</button>
                            </li>
                            <li>
                                <button onClick={() => scrollToSection("blog")} className="block py-2 px-3 rounded-sm md:p-0">Blog</button>
                            </li>
                            <li>
                                <button onClick={() => scrollToSection("services")} className="block py-2 px-3 rounded-sm md:p-0">Services</button>
                            </li>
                            <li>
                                <button onClick={() => scrollToSection("news")} className="block py-2 px-3 rounded-sm md:p-0">News</button>
                            </li>
                            <li>
                                <button onClick={() => scrollToSection("videos")} className="block py-2 px-3 rounded-sm md:p-0">Videos</button>
                            </li>
                            {
                                token && decoded?.role == 'admin' && role == 'admin' &&
                                <li>
                                    <Link to="/manage" className="block py-2 px-3 rounded-sm md:p-0">Admin</Link>
                                </li>
                            }


                            {token ?
                                <li>
                                    <button onClick={() => logout()} className="block py-2 px-3 rounded-sm md:p-0">Logout</button>
                                </li> :

                                <li>
                                    <Link to="/login" className="block py-2 px-3 rounded-sm md:p-0">Login</Link>
                                </li>
                            }
                        </ul>
                       <div className="flex flex-row space-x-4 w-full sm:w-auto justify-center mb-3 sm:mb-0 ml-[4rem]" >
                            <Link to={socialLink[0]?.facebookUrl || '/'} target="_blank">
                                <FacebookIcon className='cursor-pointer' />
                            </Link>
                            <Link to={socialLink[0]?.twitterUrl || '/'} target="_blank">
                                <TwitterIcon className='cursor-pointer' />
                            </Link>
                            <Link to={socialLink[0]?.instagramUrl || '/'} target="_blank">
                                <InstagramIcon className='cursor-pointer' />
                            </Link>
                            <Link to={socialLink[0]?.linkedinUrl || '/'} target="_blank">
                                <LinkedinIcon className='cursor-pointer' />
                            </Link>
                            <Link to={socialLink[0]?.youtubeUrl || '/'} target="_blank">
                                <YoutubeIcon className='cursor-pointer' />
                            </Link>
                        </div>
                    </div>
                     
                </div>
            </nav>
        </>
    )
}

export default Navbar
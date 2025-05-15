import { useState } from "react"

import Button from "../Button/Button"
import { CrossIcon, MessageIcon } from "../Icons/Icon"
import InputWithIcon from "../Input/InputWithIcon"
import Typography from "../Text/Typography"

// eslint-disable-next-line @typescript-eslint/naming-convention
function SubscribeForm() {
    const [isSubscribeFormClosed, setIsSubscribeFormClosed] = useState(false)
    return (
        <>{!isSubscribeFormClosed &&
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="relative bg-custom_white h-[30rem] w-[25rem] overflow-hidden">
                    <div className="absolute top-[-25px] right-[-22px] ">
                        <div className="w-[5rem] h-[5rem] bg-custom_maroon rounded-full relative flex cursor-pointer group" onClick={() => setIsSubscribeFormClosed(true)}>
                            <CrossIcon className='text-custom_white absolute top-[40px] left-[24px] group-hover:h-5 group-hover:w-5' size={18} />
                        </div>
                    </div>
                    <div className="mx-8 pt-[2rem]">
                        <div className="flex justify-center items-center h-[8rem] ">
                            <div className="w-[6.5rem] h-[6.5rem] flex justify-center items-center bg-custom_maroon rounded-full ">
                                <MessageIcon className='text-custom_white' size={36} />
                            </div>
                        </div>
                        <Typography text="Don't miss updates from us!" className="mt-3 text-center text-[27px] text-custom_grey" />
                        <Typography text="Subscribe now and get exclusive access to sector updates, webinar, blogs, stories of change..and a lot more! Join our community of like-minded individuals working together to make a difference." className="my-3 text-center leading-[20px] text-custom_grey" />
                        <InputWithIcon />
                        <Button name="Subscribe" className="w-full my-3 bg-custom_maroon rounded-none py-4 hover:text-[20px] hover:bg-custom_orange_1" />
                    </div>
                </div>
            </div>}
        </>
    )
}

export default SubscribeForm
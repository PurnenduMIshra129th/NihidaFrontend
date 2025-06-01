import { IFeedbackCardProps } from "../../types/cards/card.type"
import { QuoteLeftIcon, StarIcon } from "../Icons/Icon"
import Typography from "../Text/Typography"

// eslint-disable-next-line @typescript-eslint/naming-convention
function FeedbackCard(props: IFeedbackCardProps) {
    const { aboutSection = '', title = '', description = '' } = props
    return (
        <>
            <div className="relative w-[30rem] h-[30rem] shadow-lg rounded-lg  bg-custom_white ">
                <div className="absolute left-[24px] top-[-22px]">
                    <div className="w-12 h-12 rounded-full bg-custom_maroon flex justify-center items-center">
                    <QuoteLeftIcon className='text-custom_white z-[1]' />
                    </div>
                </div>
                <div className="flex flex-col p-[3rem]">
                    <div className="flex flex-row my-2">
                        <StarIcon size={16} className='text-custom_maroon' />
                        <StarIcon size={16} className='text-custom_maroon' />
                        <StarIcon size={16} className='text-custom_maroon' />
                        <StarIcon size={16} className='text-custom_maroon' />
                        <StarIcon size={16} />
                        <StarIcon size={16} />
                    </div>
                    <Typography text={aboutSection} className="text-[15px]" />
                    <Typography text={title} className="text-custom_maroon font-semibold text-[19px] mt-4" />
                    <Typography text={description} className="text-[15px] text-custom_grey" />
                </div>
            </div>
        </>
    )
}

export default FeedbackCard
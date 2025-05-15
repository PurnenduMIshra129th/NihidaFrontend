import { QuoteLeftIcon, StarIcon } from "../Icons/Icon"
import Typography from "../Text/Typography"

// eslint-disable-next-line @typescript-eslint/naming-convention
function FeedbackCard() {
    return (
        <>
            <div className="relative w-[30rem] h-[30rem] shadow-lg rounded-lg  bg-custom_white ">
                <div className="absolute left-[24px] top-[-22px]">
                    <div className="w-12 h-12 rounded-full bg-custom_maroon flex justify-center items-center">
                    <QuoteLeftIcon className='text-custom_white z-[1]' />
                    </div>
                </div>
                <div className="flex flex-col m-[3rem]">
                    <div className="flex flex-row my-2">
                        <StarIcon size={16} className='text-custom_maroon' />
                        <StarIcon size={16} className='text-custom_maroon' />
                        <StarIcon size={16} className='text-custom_maroon' />
                        <StarIcon size={16} className='text-custom_maroon' />
                        <StarIcon size={16} />
                        <StarIcon size={16} />
                    </div>
                    <Typography text="On behalf of our CSR committee I wish to place on record the commendable work you are doing at HelpYourNGO.
                        Your association with our CSR committee was very rewarding and fulfilling. Your team had organised for us NGO Melas for 3 consecutive years at our Club venue and all of them were a grand success.
                        Please do continue the good work you are doing in this Social Sector." className="text-[15px]" />
                    <Typography text="Ramesh Daswani" className="text-custom_maroon font-semibold text-[19px] mt-4" />
                    <Typography text="Hon. Secretary, CCI CSR Committee" className="text-[15px] text-custom_grey" />
                </div>
            </div>
        </>
    )
}

export default FeedbackCard
import FeedbackCard from "../../components/Cards/FeedbackCard"
import Heading from "../../components/Text/Heading"
import SubHeading from "../../components/Text/SubHeading"

// eslint-disable-next-line @typescript-eslint/naming-convention
function FeedbackPage() {
    return (
        <>
            <div className="flex justify-center items-center flex-col w-full mt-3 bg-custom_blue_3">
                <SubHeading text="Testimonials" className="text-custom_white mt-5"/>
                <Heading text="Happy Clients & Feedback" className="text-custom_white"/>
                <div className="flex flex-row justify-center items-center flex-wrap w-full gap-[1.5rem] my-[4rem] ">
                    <FeedbackCard />
                    <FeedbackCard />
                    <FeedbackCard />
                </div>
            </div>
        </>
    )
}

export default FeedbackPage
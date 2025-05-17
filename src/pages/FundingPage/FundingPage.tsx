import ViewAllButton from "../../components/Button/ViewAllButton"
import Card from "../../components/Cards/Card"
import Heading from "../../components/Text/Heading"
import SubHeading from "../../components/Text/SubHeading"

// eslint-disable-next-line @typescript-eslint/naming-convention
function FundingPage() {
    return (
        <>
            <div className="flex justify-center items-center flex-col sm:w-[80%] w-full p-[1rem] sm:p-0 m-3">
                <SubHeading text="Crowdfunding Campaigns" />
                <Heading text="Support causes you're passionate about" className="text-custom_maroon text-center"/>
                <div className="flex sm:justify-end justify-center w-full my-3">
                    <ViewAllButton text="View All Campaigns"/>
                </div>
                <div className="flex flex-row justify-center items-center flex-wrap w-full gap-[1.5rem] my-3">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </>
    )
}

export default FundingPage
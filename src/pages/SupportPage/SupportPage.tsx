import SupportForm from "../../components/Form/SupportForm"
import Heading from "../../components/Text/Heading"
import SubHeading from "../../components/Text/SubHeading"
import Typography from "../../components/Text/Typography"

// eslint-disable-next-line @typescript-eslint/naming-convention
function SupportPage() {
    return (
        <>
            <div className="flex justify-center items-start flex-row w-[80%] m-3">
                <div className="w-[50%] flex flex-col">
                    <SubHeading text="Welcome to HelpYourNGO - Your Guide to the World of Philanthropy" className="mt-3"/>
                    <Heading text="Evaluate. Then Donate." className="mb-3 text-custom_maroon"/>
                    <p className="text-custom_grey text-justify">
                    "HelpYourNGO (HYNGO) has been set up with the goal of promoting transparency in the social sector and helping donors make donation decisions in an enlightened, strategic and impactful manner.
                    HYNGO is the <span className="font-bold text-custom_grey text-[15px]">only organization in India</span> standardizing detailed financial and program information on <span className="font-bold text-custom_grey text-[15px]">650+ NGOs</span> across <span className="font-bold text-custom_grey text-[15px]">500+ zip-codes, 13 causes</span> and <span className="font-bold text-custom_grey text-[15px]">15 UN SDGs.</span>
                    </p>
                    <Typography text="We recommend NGOs to donors   (corporates, foundations, trusts, individuals) which match their unique requirements, and also monitor the fund utilization for them. We make an effort to identify relatively smaller and mid-sized NGOs which meet the highest standard of credibility and run efficient programs but having lesser visibility than the popular NGOs." className="mt-4 text-custom_grey text-justify"/>
                    <Typography text="Our USP:" className="mt-4 font-bold text-custom_grey text-[15px]"/>
                    <ul className="text-custom_grey mt-4 ml-8 list-disc">
                        <li>Standardized financial information of NGOs.</li>
                        <li>% Spent on Beneficiaries (indicates total direct spend on beneficiaries).</li>
                        <li>NGO Search & Compare Tool</li>
                    </ul>
                    <p className="mt-4 text-custom_grey text-justify">
                       Our <span className="font-bold text-custom_grey text-[15px]"> simple and lost-cost technology solutions hynGO</span> and SGP (Systematic Giving Plan) aim at building a corpus for credible and vetted NGOs and supporting them over a period of time. The objective is to create easy, long-term solutions for companies and individuals to support vetted NGOs and for NGOs to have visibility on annual fund flows. hynGO and SGP create a steady stream of flows for NGOs thereby enabling them to plan their programs more efficiently and utilising their limited resources optimally.
                    </p>

                </div>
                <div className="w-[50%] flex justify-end">
                    <SupportForm/>
                </div>
            </div>
        </>
    )
}

export default SupportPage
import { useEffect, useState } from "react"

import FeedbackCard from "../../components/Cards/FeedbackCard"
import ClientSlider from "../../components/ClientSlider/ClientSlider"
import Heading from "../../components/Text/Heading"
import SubHeading from "../../components/Text/SubHeading"


const feedbackData = [
    {
        aboutSection: "HelpYourNGO identifies and supports some of the most impactful programmes. They have been a long‑time supporter of Dignity Foundation. HelpYourNGO has supported monthly rations and on‑going engagement activities for the poor elderly members of our Loneliness Mitigation Centre in Pune. HelpYourNGO is an engaged and involved partner that not only funds but also contributes to our programmatic success.HelpYourNGO is an engaged and involved partner that not only funds but also contributes to our programmatic success",
        title: "Purnendu Mishra",
        description: "Senior Operating Officer, Dignity Foundation"
    },
    {
        aboutSection: "On behalf of our CSR committee I wish to place on record the commendable work you are doing at HelpYourNGO.Your association with our CSR committee was very rewarding and fulfilling. Your team had organised for us NGO Melas for 3 consecutive years at our Club venue and all of them were a grand success. Please do continue the good work you are doing in this Social Sector.",
        title: "Bibhuti Bhusan Mishra",
        description: "Senior Operating Officer, Dignity Foundation"
    },
    {
        aboutSection: "It has been a great experience working with HelpYourNGO. HelpYourNGO helped identify donors who connected to our cause and supported our 4‑year programs. They hand-holded us where we needed support in our initial phase of partnership. They organized capacity building workshops for NGO partners which were helpful. We look forward to continuing the partnership for years to come.",
        title: "Bibhuti Bhusan Mishra",
        description: "Senior Operating Officer, Dignity Foundation"
    }
]

// eslint-disable-next-line @typescript-eslint/naming-convention
function FeedbackScreen() {
    const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % feedbackData.length);
        }, 3000);

        return () => clearInterval(interval);
    });
    const orderedCards = [...feedbackData.slice(currentIndex), ...feedbackData.slice(0, currentIndex)];
    return (
        <>
            <div className="flex justify-center items-center flex-col relative w-full mt-3 bg-custom_blue_3 overflow-hidden p-[1rem] sm:p-0">
                <SubHeading text="Testimonials" className="text-custom_white mt-5" />
                <Heading text="Happy Clients & Feedback" className="text-custom_white" />
                <div className="flex flex-row items-center w-full gap-[1.5rem] py-[4rem] overflow-x-auto sm:overflow-x-hidden sm:justify-center">
                    {orderedCards.map((item, index) => (
                        <FeedbackCard key={index} aboutSection={item.aboutSection} title={item.title} description={item.description} />
                    ))}
                </div>

                <div className="w-full flex justify-center space-x-2 mb-[3rem] ">
                    {feedbackData.map((_, index) => (
                        <div key={index}
                            className={`w-4 h-4 rounded-full transition-colors duration-300 ${index === currentIndex ? 'bg-blue-500' : 'bg-gray-300'}`} />
                    ))}
                </div>
                <ClientSlider />
            </div>
        </>
    )
}

export default FeedbackScreen
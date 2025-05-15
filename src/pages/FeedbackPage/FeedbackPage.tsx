import { useEffect, useState } from "react"

import FeedbackCard1 from "../../components/Cards/FeedbackCard1"
import FeedbackCard2 from "../../components/Cards/FeedbackCard2"
import FeedbackCard3 from "../../components/Cards/FeedbackCard3"
import ClientSlider from "../../components/ClientSlider/ClientSlider"
import Heading from "../../components/Text/Heading"
import SubHeading from "../../components/Text/SubHeading"

// eslint-disable-next-line @typescript-eslint/naming-convention
function FeedbackPage() {
    const card = [
        { id: "card1", component: <FeedbackCard1 /> },
        { id: "card2", component: <FeedbackCard2 /> },
        { id: "card3", component: <FeedbackCard3 /> },
    ];
    const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % card.length);
        }, 3000);

        return () => clearInterval(interval);
    });
    const orderedCards = [...card.slice(currentIndex), ...card.slice(0, currentIndex)];
    return (
        <>
            <div className="flex justify-center items-center flex-col w-full mt-3 bg-custom_blue_3">
                <SubHeading text="Testimonials" className="text-custom_white mt-5" />
                <Heading text="Happy Clients & Feedback" className="text-custom_white" />
                <div className="flex flex-row justify-center items-center flex-wrap w-full gap-[1.5rem] my-[4rem] ">
                    {orderedCards.map(({ id, component }) => (
                        <div key={id}>
                            {component}
                        </div>
                    ))}
                </div>

                <div className="w-full flex justify-center space-x-2 mb-[3rem]">
                    {card.map((_, index) => (
                        <div key={index}
                            className={`w-4 h-4 rounded-full transition-colors duration-300 ${index === currentIndex ? 'bg-blue-500' : 'bg-gray-300'}`} />
                    ))}
                </div>
                <ClientSlider />
            </div>
        </>
    )
}

export default FeedbackPage
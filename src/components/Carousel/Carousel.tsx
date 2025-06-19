import { useEffect, useState } from "react";

import useFetch from "../../hooks/useFetch";
import { ICarouselApiData } from "../../types/api/carousel.types";
import { defaultImage } from "../../utils/constant";
// import DonorCard from "../Cards/DonorCard";
import SubscribeForm from "../Form/SubscribeForm";
import Image from "../Image/Image";
import Heading from "../Text/Heading";



// eslint-disable-next-line @typescript-eslint/naming-convention
function Carousel() {
    const { data, } = useFetch<ICarouselApiData[]>("carousel/getAllCarousel",);
    const [apiData, setApiData] = useState<ICarouselApiData[]>();

    useEffect(() => {
        const manageData = () => {
            if (data && data.statusCode == 1 && data.data.length > 0) {
                setApiData(data.data.slice(0, 5))
            }
        }
        manageData();
    }, [data])
    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto-slide functionality
    useEffect(() => {
        if (!apiData) return
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % apiData?.length);
        }, 3000); // Change slide every 3 seconds
        return () => clearInterval(interval); // Cleanup interval on unmount
    },);

    // Next slide function
    const nextSlide = () => {
        if (!apiData) return
        setCurrentIndex((prevIndex) => (prevIndex + 1) % apiData.length);
    };

    // Previous slide function
    const prevSlide = () => {
        if (!apiData) return
        setCurrentIndex((prevIndex) => (prevIndex - 1 + apiData.length) % apiData.length);
    };

    return (
        <>
            <div className="relative w-full h-[100%]" >
                {/* Carousel wrapper */}
                <div className="relative h-full overflow-hidden rounded-lg">
                    {apiData?.map((img, index) => (
                        <div
                            key={index}
                            className={`h-full w-full transition-opacity duration-700 ease-in-out ${index === currentIndex ? "opacity-100" : "opacity-0 hidden"}`}
                        >
                            <div className="absolute inset-0 bg-black/10 backdrop-blur-sm   "></div>
                            <Image imagePath={img.imagePath} className="h-full"/>
                        </div>
                    ))}
                    {!apiData && 
                        <div
                           
                            className={`h-full w-full transition-opacity duration-700 ease-in-out "opacity-100"`}
                        >
                            <div className="absolute inset-0 bg-black/10 backdrop-blur-sm "></div>
                            <img onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.onerror = null;
                                target.src = defaultImage;
                            }}
                                src={defaultImage} className="w-full h-full object-cover" alt={`Not Found Image`} />
                        </div> }
                </div>

                {/* Navigation Indicators */}
                <div className="absolute z-10 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                    {apiData?.map((_, index) => (
                        <button
                            key={index}
                            type="button"
                            className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-blue-500" : "bg-gray-500"}`}
                            aria-current={index === currentIndex}
                            aria-label={`Slide ${index + 1}`}
                            onClick={() => setCurrentIndex(index)}
                        />
                    ))}
                </div>

                {/* Slider controls */}
                <button
                    type="button"
                    className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                    onClick={prevSlide}
                >
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30">
                        <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
                        </svg>
                        <span className="sr-only">Previous</span>
                    </span>
                </button>

                <button
                    type="button"
                    className="absolute top-0 end-0 z-10 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                    onClick={nextSlide}
                >
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30">
                        <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                        </svg>
                        <span className="sr-only">Next</span>
                    </span>
                </button>
                <div className="w-full absolute top-[50%] transform -translate-y-1/2  flex flex-row justify-center items-center flex-wrap sm:flex-nowrap p-[1rem] sm:p-0 gap-2 sm:gap-0">
                    <div className="sm:w-[44%] w-full">
                        <Heading text="National Integrated Human And Industrial Development Agency" className="text-custom_white text-[50px]" />
                    </div>
                    {/* <DonorCard /> */}
                </div>
                <SubscribeForm />
            </div>
        </>

    );
}

export default Carousel;
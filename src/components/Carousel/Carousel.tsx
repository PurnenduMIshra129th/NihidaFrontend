import { useEffect,useState } from "react";

import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.png";
import img4 from "../../assets/img4.png";
import img5 from "../../assets/img5.jpg";
import DonorCard from "../Cards/DonorCard";
import Heading from "../Text/Heading";

const images = [img1, img2, img3, img4, img5];

// eslint-disable-next-line @typescript-eslint/naming-convention
function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto-slide functionality
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Change slide every 3 seconds
        return () => clearInterval(interval); // Cleanup interval on unmount
    }, []);

    // Next slide function
    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    // Previous slide function
    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <>
        <div id="default-carousel" className="relative w-full h-[100%]" data-carousel="slide">
            {/* Carousel wrapper */}
            <div className="relative h-56 overflow-hidden rounded-lg md:h-full">
                {images.map((img, index) => (
                    <div
                        key={index}
                        className={`absolute block w-full transition-opacity duration-700 ease-in-out ${index === currentIndex ? "opacity-100" : "opacity-0 hidden"}`}
                    >
                        <img src={img} className="w-full h-auto object-cover" alt={`Slide ${index + 1}`} />
                    </div>
                ))}
            </div>

            {/* Navigation Indicators */}
            <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                {images.map((_, index) => (
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
                className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                onClick={nextSlide}
            >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30">
                    <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                    </svg>
                    <span className="sr-only">Next</span>
                </span>
            </button>
        </div>
        <div className="absolute top-[50%] transform -translate-y-1/2  left-[12%] w-[44%]">
                <Heading text="We are changing the way India donates" className="text-custom_white text-[50px]"/>
        </div>
        <DonorCard/>
        </>
        
    );
}

export default Carousel;
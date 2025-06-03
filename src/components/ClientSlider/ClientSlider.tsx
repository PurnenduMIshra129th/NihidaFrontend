import { useEffect, useState } from "react";

import { defaultImage } from "../../utils/constant";

// eslint-disable-next-line @typescript-eslint/naming-convention
function ClientSlider() {
    const img = [defaultImage ,defaultImage];
    const [currentIndex, setCurrentIndex] = useState(0);

    // Rotate images one position at a time
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % img.length);
        }, 3000); // Slides every 3 seconds

        return () => clearInterval(interval); // Cleanup
    });

    // Get dynamic order of images
    const orderedImages = [...img.slice(currentIndex), ...img.slice(0, currentIndex)];
    
    return (
        <div className="w-full overflow-hidden">
            {/* Image Wrapper */}
            <div className="flex justify-center sm:space-x-[8rem] space-x-[3rem] transition-transform duration-500 ease-in-out sm:overflow-hidden overflow-x-scroll" >
                {orderedImages.map((item, index) => (
                    <div key={index} className="sm:w-[10rem] sm:h-[10rem] w-[100px] h-[100px]">
                        <img src={item} alt="Client" className="w-full h-full object-cover rounded-lg shadow-lg" />
                    </div>
                ))}
            </div>

            {/* Pagination Dots */}
            <div className="w-full flex justify-center space-x-2 sm:my-[5rem] mt-[2rem] overflow-x-scroll sm:overflow-x-hidden">
                {img.map((_, index) => (
                    <div key={index}
                        className={`w-4 h-4 rounded-full transition-colors duration-300 ${index === currentIndex ? 'bg-blue-500' : 'bg-gray-300'}`} />
                ))}
            </div>
        </div>

    );
}

export default ClientSlider;
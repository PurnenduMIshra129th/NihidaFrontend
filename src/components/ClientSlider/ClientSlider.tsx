import { useEffect, useState } from "react";

import SI_1 from "../../assets/SI_1.png"
import SI_2 from "../../assets/SI_2.png"
import SI_3 from "../../assets/SI_3.png"
import SI_4 from "../../assets/SI_4.png"
import SI_5 from "../../assets/SI_5.png"

// eslint-disable-next-line @typescript-eslint/naming-convention
function ClientSlider() {
    const img = [SI_1, SI_2, SI_3, SI_4, SI_5];
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
        <div className="w-full ">
            {/* Image Wrapper */}
            <div className="flex justify-center space-x-[8rem]  transition-transform duration-500 ease-in-out" >
                {orderedImages.map((item, index) => (
                    <div key={index} className="w-[10rem] h-[10rem]">
                        <img src={item} alt="Client" className="w-full h-full object-cover rounded-lg shadow-lg" />
                    </div>
                ))}
            </div>

            {/* Pagination Dots */}
            <div className="w-full flex justify-center space-x-2 my-[5rem]">
                {img.map((_, index) => (
                    <div key={index}
                        className={`w-4 h-4 rounded-full transition-colors duration-300 ${index === currentIndex ? 'bg-blue-500' : 'bg-gray-300'}`} />
                ))}
            </div>
        </div>

    );
}

export default ClientSlider;
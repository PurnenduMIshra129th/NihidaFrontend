import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

import useFetch from "../../hooks/useFetch";
import { ICarouselApiData } from "../../types/api/carousel.types";
import { defaultImage } from "../../utils/constant";
import Button from "../Button/Button";
import Image from "../Image/Image";
import Heading_1 from "../Text/Heading_1";

// eslint-disable-next-line @typescript-eslint/naming-convention
function Carousel() {
  const navigate = useNavigate();
  const { data } = useFetch<ICarouselApiData[]>("carousel/getAllCarousel");
  const [apiData, setApiData] = useState<ICarouselApiData[]>();

  useEffect(() => {
    const manageData = () => {
      if (data && data.statusCode == 1 && data.data.length > 0) {
        setApiData(data.data.slice(0, 5));
      }
    };
    manageData();
  }, [data]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!apiData) return;
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % apiData?.length);
    }, 3000);
    return () => clearInterval(interval);
  });

  return (
    <>
      <div className="relative w-full min-h-screen">
        <div className="relative h-full overflow-hidden rounded-lg">
          {apiData?.map((img, index) => (
            <div
              key={index}
              className={`min-h-screen w-full transition-opacity duration-700 ease-in-out ${
                index === currentIndex ? "opacity-100" : "opacity-0 hidden"
              }`}
            >
              <div className="absolute inset-0 z-10">
                {/* Color overlays */}
                <div className="absolute top-0 bottom-0 left-0 w-1/4 bg-[#158f67]/30 z-10" />
                <div className="absolute top-0 bottom-0 left-1/4 w-1/4 bg-[#e9b929]/30 z-10" />
                <div className="absolute top-0 bottom-0 left-2/4 w-1/4 bg-[#fd4c42]/30 z-10" />
                <div className="absolute top-0 bottom-0 left-3/4 w-1/4 bg-[#396dc4]/30 z-10" />

                {/* Blur + Image */}
                <div className="absolute inset-0z-0" />
                <Image
                  imagePath={img.imagePath}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          ))}

          {!apiData && (
            <div className="h-full w-full transition-opacity duration-700 ease-in-out opacity-100">
              <div className="absolute inset-0 bg-black/10 backdrop-blur-sm z-10" />
              <Image
                className="w-full h-full object-cover"
                imagePath={defaultImage}
              />
            </div>
          )}
        </div>

        {/* Carousel Indicators */}
        <div className="absolute z-20 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
          {apiData?.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? "bg-blue-500" : "bg-gray-500"
              }`}
              aria-current={index === currentIndex}
              aria-label={`Slide ${index + 1}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>

        {/* Carousel Text Content */}
        <div className="absolute md:bottom-[30%] bottom-[40%] md:left-[5%] z-30 px-3">
          <Heading_1
            text="National Integrated Human And Industrial Development Agency"
            className="text-white md:text-left md:break-normal lg:text-6xl"
          />
          <Button
            className="mt-4 bg-custom_orange_1 w-64 text-custom_white_1 py-4 absolute left-1/2 transform -translate-x-1/2 md:left-auto md:transform-none md:translate-x-0"
            name="Plan (2025-2030)"
            onClick={() => navigate("/about/plan")}
          />
        </div>
      </div>
    </>
  );
}

export default Carousel;

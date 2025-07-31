import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

import { selectSocialLinkAndCommonImage } from "../../contexts/slice/socialLinkAndCommonImage.slice";
import { IFile } from "../../types/api/api.type";
import { defaultImage } from "../../utils/constant";
import Button from "../Button/Button";
import Image from "../Image/Image";
import Heading_1 from "../Text/Heading_1";

// eslint-disable-next-line @typescript-eslint/naming-convention
function Carousel() {
  const navigate = useNavigate();
  const data = useSelector(selectSocialLinkAndCommonImage)
  const [apiData, setApiData] = useState<IFile[] | null>(null);
  
  useEffect(() => {
    const manageData = () => {
      if (data?.[0]?.files && data?.[0]?.files?.length > 0) {
        setApiData(data?.[0].files);
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
      <div className="relative w-full min-h-screen overflow-hidden">
        <div className="relative h-full rounded-lg">
          {/* Slide Container */}
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {apiData?.map((img, index) => (
              <div key={index} className="min-w-full min-h-screen relative">
                <div className="absolute inset-0 z-10">
                  {/* Color overlays */}
                  {/* <div className="absolute top-0 bottom-0 left-0 w-1/4 bg-[#158f67]/30 z-10" />
                  <div className="absolute top-0 bottom-0 left-1/4 w-1/4 bg-[#e9b929]/30 z-10" />
                  <div className="absolute top-0 bottom-0 left-2/4 w-1/4 bg-[#fd4c42]/30 z-10" />
                  <div className="absolute top-0 bottom-0 left-3/4 w-1/4 bg-[#396dc4]/30 z-10" /> */}

                  {/* Image */}
                  <Image
                    imagePath={img?.publicFilePath || ''}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            ))}

            {/* Fallback Slide */}
            {!apiData && (
              <div className="min-w-full min-h-screen relative">
                <div className="absolute inset-0 bg-black/10 backdrop-blur-sm z-10" />
                <Image
                  className="w-full h-full object-cover"
                  imagePath={defaultImage}
                />
              </div>
            )}
          </div>
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
        <div className="absolute  inset-0 z-30 flex items-center md:items-end justify-center md:justify-start px-4 sm:px-6 md:px-16">
          <div className="bg-black/50 backdrop-blur-sm p-4 sm:p-6 rounded-xl w-full max-w-3xl animate-fade-in text-center md:text-left md:mb-[8%]">
            <Heading_1
              text="National Integrated Human And Industrial Development Agency"
              className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl   font-bold drop-shadow-md leading-snug"
            />
            <Button
              className="mt-6 bg-custom_orange_1 w-full sm:w-64 text-custom_white_1 py-3 sm:py-4 mx-auto md:mx-0"
              name="Plan (2025–2030)"
              onClick={() => navigate("/about/plan")}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Carousel;

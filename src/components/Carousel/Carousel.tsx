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
                <div className="absolute inset-0 backdrop-blur-sm bg-black/10" />
                <Image
                  imagePath={img.imagePath}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          ))}
          {!apiData && (
            <div
              className={`h-full w-full transition-opacity duration-700 ease-in-out "opacity-100"`}
            >
              <div className="absolute inset-0 bg-black/10 backdrop-blur-sm "></div>
              <Image
                className="w-full h-full object-cover"
                imagePath={defaultImage}
              />
            </div>
          )}
        </div>
        <div className="absolute z-10 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
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
        <div className="absolute md:bottom-[30%] bottom-[40%] md:left-[5%]  z-20 px-3">
          <div>
            <h1 className="mb-4 text-2xl md:text-3xl lg:text-4xl font-bold text-custom_white_1  text-center md:text-left font-mono">
              <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
                Welcome
              </span>{" "}
              To.
            </h1>
          </div>
          <Heading_1
            text="National Integrated Human And Industrial Development Agency"
            className="text-white  text-center md:text-left md:break-normal"
          />
          <Button
            className="mt-4 bg-custom_orange_1 w-64 text-custom_white_1 py-4 absolute left-1/2 transform -translate-x-1/2  md:left-auto md:transform-none md:translate-x-0"
            name="Plan (2025-2030)"
            onClick={()=>navigate("/about/plan")}
          />
        </div>
      </div>
    </>
  );
}

export default Carousel;

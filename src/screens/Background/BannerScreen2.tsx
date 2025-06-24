import { useEffect, useState } from "react";

import Image from "../../components/Image/Image";
import useFetch from "../../hooks/useFetch";
import { ICarouselApiData } from "../../types/api/carousel.types";
import { defaultImage } from "../../utils/constant";
// eslint-disable-next-line @typescript-eslint/naming-convention
function BannerScreen2() {
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
  return (
    <>
      <div className="relative w-full overflow-hidden mt-10 ">
        {apiData ? (
          <div
            className={`h-[400px] w-full`}
          >
            <Image
              className="h-full"
              imagePath={apiData[0].imagePath}
            />
          </div>
        ) : (
          <div
            className={`h-[400px] w-full`}
          >
            <Image
              className="h-full "
              imagePath={defaultImage}
            />
          </div>
        )}
      </div>
    </>
  );
}

export default BannerScreen2;

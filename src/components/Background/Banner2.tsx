import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

import { selectSocialLinkAndCommonImage } from "../../contexts/slice/socialLinkAndCommonImage.slice";
import { IFile } from "../../types/api/api.type";
import { defaultImage } from "../../utils/constant";
import Image from "../Image/Image";
// eslint-disable-next-line @typescript-eslint/naming-convention
function Banner2() {
  const data = useSelector(selectSocialLinkAndCommonImage);
  const [apiData, setApiData] = useState<IFile[] | null>(null);

  useEffect(() => {
    const manageData = () => {
      if (data?.[0]?.files && data?.[0]?.files?.length > 0) {
        setApiData(data?.[0].files);
      }
    };
    manageData();
  }, [data]);
  const [index, setIndex] = useState(0);
  const intervalId = useRef<NodeJS.Timeout | null>(null);

  const getIndexHandler = (Index: number) => {
    const length = data?.[0]?.files?.length ?? 0;
    if (length === 0) return 0;
    const safeIndex = Index % length;
    return safeIndex;
  };

  useEffect(() => {
    if (!data?.[0]?.files || data[0].files.length === 0) return;
    const limitIndex = data[0].files.length - 1;
    if (intervalId.current) clearInterval(intervalId.current);
    intervalId.current = setInterval(() => {
      setIndex((prevIndex) => (prevIndex >= limitIndex ? 0 : prevIndex + 1));
    }, 10000);
    return () => {
      if (intervalId.current) clearInterval(intervalId.current);
    };
  }, [data]);
  return (
    <>
      <section className="bg-white w-full">
        <div className="py-4 px-2 mx-auto  sm:py-4 lg:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full">
            <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-gray-50 h-auto md:h-full flex flex-col">
              <div
                className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow"
              >
                <Image
                  imagePath={apiData?.[getIndexHandler(index)]?.publicFilePath ?? defaultImage}
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
              </div>
            </div>
            <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-stone-50">
              <div
                className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4"
              >
                <Image
                  imagePath={apiData?.[getIndexHandler(index+1)]?.publicFilePath ?? defaultImage}
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
              </div>
              <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2">
                <div
                  className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40"
                >
                  <Image
                    imagePath={apiData?.[getIndexHandler(index+2)]?.publicFilePath ?? defaultImage}
                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                </div>
                <div
                  className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40"
                >
                  <Image
                    imagePath={apiData?.[getIndexHandler(index+3)]?.publicFilePath ?? defaultImage}
                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                </div>
              </div>
            </div>
            <div className="col-span-2 sm:col-span-1 md:col-span-1 bg-sky-50 h-auto md:h-full flex flex-col">
              <div
                className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow"
              >
                <Image
                  imagePath={apiData?.[getIndexHandler(index+4)]?.publicFilePath ?? defaultImage}
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Banner2;

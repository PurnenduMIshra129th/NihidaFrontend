import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { selectSocialLinkAndCommonImage } from "../../contexts/slice/socialLinkAndCommonImageSlice";
import { IFile } from "../../types/api/api.type";
import { defaultImage } from "../../utils/constant";
import Image from "../Image/Image";
// eslint-disable-next-line @typescript-eslint/naming-convention
function Banner2() {
  const data = useSelector(selectSocialLinkAndCommonImage)
  const [apiData, setApiData] = useState<IFile[] | null>(null);
  
  useEffect(() => {
    const manageData = () => {
      if (data?.[0]?.files?.length > 0) {
        setApiData(data?.[0].files);
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
              imagePath={apiData?.[0]?.publicFilePath || ""}
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

export default Banner2;

import { useEffect, useState } from "react";

import useFetch from "../../../../hooks/useFetch";
import { IVideoApiResponse } from "../../../../types/api/api.type";
import NoDataComponent from "../../../EmptyState/NoData";
import SectionDivider from "../../../SectionDivider/SectionDivider";
import VideoCard from "./videoCard";

// eslint-disable-next-line @typescript-eslint/naming-convention
function VideoScreen() {
  const { data } = useFetch<IVideoApiResponse[]>("video/getAllVideo");
  const [apiData, setApiData] = useState<IVideoApiResponse[]>();

  useEffect(() => {
    const manageData = () => {
      if (data && data.statusCode == 1 && data.data.length > 0) {
        setApiData(data.data.slice(0, 3));
      }
    };
    manageData();
  }, [data]);
  return (
    <>
      <div className="flex justify-center items-center flex-col sm:w-[80%] w-full">
        <SectionDivider
          textHeading="Video Articles Section"
          routePath="/user/view-all-video"
        />
        <div className="flex flex-wrap gap-6 justify-center sm:justify-center w-full my-3">
          {!apiData || apiData.length === 0 ? (
            <NoDataComponent message="No video available at the moment" />
          ) : null}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {apiData?.map((item) => (
              <VideoCard
                key={item._id}
                id={item._id || ""}
                title={item.title}
                description={item.description}
                youtubeUrl={item.youtubeUrl}
                thumbnail={item?.files?.[0]?.publicFilePath || ""}
                date={item.date}
                readMoreRouting="/user/view-video"
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default VideoScreen;

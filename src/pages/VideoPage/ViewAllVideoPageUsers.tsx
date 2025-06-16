import { useEffect, useState } from "react";

import VideoCard from "../../components/Cards/VideoCard";
import useFetch from "../../hooks/useFetch";
import { IVideoApiData } from "../../types/api/video.types";
import { trimText } from "../../utils/trimText";

// eslint-disable-next-line @typescript-eslint/naming-convention
function ViewAllNewsPageUsers() {
    const { data } = useFetch<IVideoApiData[]>("video/getAllVideo");
    const [apiData, setApiData] = useState<IVideoApiData[]>();

    useEffect(() => {
        const manageData = () => {
            if (data && data.statusCode == 1 && data.data.length > 0) {
                setApiData(data.data)
            }
        }
        manageData();
    }, [data])
    return (
        <div className="mt-[4rem] px-[1rem] pb-[3rem]">
            <div className="flex flex-row justify-center flex-wrap gap-[1.5rem]">
                {apiData?.slice(0, 8)?.map((item, index) => (
                    <VideoCard key={index} textTime={item.createdAt} textHeading={trimText(item.heading, 40)} textDescription={item.description} imageURL={item.imagePath} videoUrl={item.videoUrl} id={item._id} />
                ))}
            </div>
        </div>
    )
}

export default ViewAllNewsPageUsers
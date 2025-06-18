import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

import ViewAllButton from "../../components/Button/ViewAllButton"
import VideoCard from "../../components/Cards/VideoCard"
import NoDataComponent from "../../components/EmptyState/NoData";
import Heading from "../../components/Text/Heading"
import useFetch from "../../hooks/useFetch";
import { IVideoApiData } from "../../types/api/video.types";
import { trimText } from "../../utils/trimText";

// eslint-disable-next-line @typescript-eslint/naming-convention
function VideoScreen() {
    const navigate = useNavigate()
    const { data, } = useFetch<IVideoApiData[]>("video/getAllVideo");
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
        <>
            <div className="flex justify-center items-center flex-col sm:w-[80%] w-full p-[1rem] sm:p-0 m-3">
                <Heading text="Webinar Videos" />
                {
                    apiData && <div className="flex sm:justify-end justify-center w-full my-3">
                        <ViewAllButton text="View All Videos" onClick={() => navigate("/users/view-all-video")} />
                    </div>
                }

                <div className="flex flex-row justify-center items-center flex-wrap w-full sm:gap-[4.5rem] gap-2 my-3">
                    {!apiData || apiData.length === 0 ? <NoDataComponent message="No video available at the moment" /> : null}
                    {apiData?.slice(0, 8)?.map((item, index) => (
                        <VideoCard key={index} textTime={item.createdAt} textHeading={trimText(item.heading, 40)} textDescription={item.description} imageURL={item.imagePath} videoUrl={item.videoUrl} id={item._id} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default VideoScreen
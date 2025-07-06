import { useEffect, useState } from "react";

import EmptyState from "../../../components/EmptyState/EmptyState";
import VideoCard from "../../../components/section/video/user/videoCard";
import useFetch from "../../../hooks/useFetch";
import { IVideoApiResponse } from "../../../types/api/api.type";

// eslint-disable-next-line @typescript-eslint/naming-convention
const VideoListPage = () => {
  const { data } = useFetch<IVideoApiResponse[]>("video/getAllVideo");
  const [video, setVideo] = useState<IVideoApiResponse[]>([]);

  useEffect(() => {
    if (data && data.statusCode == 1 && data.data.length > 0) {
      setVideo(data.data);
    }
  }, [data]);
  if (video.length === 0) {
    return <EmptyState />;
  }
  return (
    <div className="max-w-7xl mx-auto px-4 pt-[8rem] pb-16">
      <h1 className="text-3xl font-bold text-custom_orange_1 mb-10 text-center">
        Explore Video Articles
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {video.map((item) => (
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
  );
};

export default VideoListPage;

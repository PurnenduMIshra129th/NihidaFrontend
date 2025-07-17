import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

import moment from "moment";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import { useNavigate } from "react-router";

import { IVideoCard } from "../../../../types/component/component.types";
import { trimText } from "../../../../utils/trimText";
import { extractYouTubeId, formatToLocalTime } from "../../../../utils/util";
import Button from "../../../Button/Button";
import Image from "../../../Image/Image";
import Heading_2 from "../../../Text/Heading_2";
import Typography from "../../../Text/Typography";

// eslint-disable-next-line @typescript-eslint/naming-convention
function VideoCard(props: IVideoCard) {
  const {
    id = "noId",
    title = "no title",
    description = "No description available.",
    youtubeUrl = "/",
    thumbnail = "",
    date = moment().toISOString(),
    readMoreRouting = "/videos",
  } = props;
  
  const navigate = useNavigate();
  const videoId = extractYouTubeId(youtubeUrl);
  const embedUrl = videoId ? `https://www.youtube.com/embed/${videoId}` : null;

  return (
    <div className="w-full bg-white rounded-xl shadow-md border border-orange-100 overflow-hidden flex flex-col">
      {/* Video or Thumbnail */}
      <div className="aspect-w-16 h-[300px] aspect-h-9 bg-black">
        {embedUrl ? (
          <LiteYouTubeEmbed
            id={videoId || ""} 
            title={title}
            poster="hqdefault"
            noCookie
            wrapperClass="yt-lite"
            playerClass="lty-playbtn"
          />
        ) : (
          <Image imagePath={thumbnail} className="w-full h-full object-cover" />
        )}
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-grow">
        <Typography
          text={formatToLocalTime(date)}
          className="text-xs text-custom_orange_1 mb-1"
        />
        <Heading_2 text={trimText(title, 60)} className="mb-2" />
        <Typography
          text={trimText(description, 120)}
          className="text-sm text-custom_grey flex-grow"
        />
        <Button
          name="Watch Now"
          className="mt-4 w-full border-2 border-custom_orange_1 text-custom_orange_1 hover:text-white hover:bg-custom_orange_1"
          onClick={() => navigate(`${readMoreRouting}/${id}`)}
        />
      </div>
    </div>
  );
}

export default VideoCard;

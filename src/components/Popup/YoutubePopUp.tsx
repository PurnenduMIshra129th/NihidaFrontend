import { IYouTubePopupProps } from "../../types/popUp/popUp.types";
import { trimText } from "../../utils/trimText";
import { CrossIcon } from "../Icons/Icon";
import Typography from "../Text/Typography";

// eslint-disable-next-line @typescript-eslint/naming-convention
const YouTubePopup = (props: IYouTubePopupProps) => {
    const { videoUrl, textHeading = 'no Heading', textDescription = 'no Description', setIsPopUpOpened = () => { }, time = 'no Time' } = props
    const videoId = new URL(videoUrl).pathname.split("/")[1];
    const embedUrl = `https://www.youtube.com/embed/${videoId}`;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-20">
            <div className="bg-white p-4 rounded-lg shadow-lg relative w-[50%]">
                <button onClick={() => setIsPopUpOpened(false)} className="absolute top-2 right-2 text-gray-500">
                    <CrossIcon className="w-5 h-5 hover:text-custom_maroon" />
                </button>
                <div className="p-4 h-[60%] ">
                <iframe
                    width="560"
                    height="315"
                    src={embedUrl}
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    title="YouTube Video"
                    className="rounded-md w-full z-10"
                />
                </div>
                <div className="break-all p-5">
                    <Typography className="mb-3 font-normal text-gray-700" text={time}/>
                    <Typography className="mb-2 text-2xl font-bold tracking-tight text-gray-900" text={textHeading}/>
                    <Typography className="mb-3 font-normal text-gray-700" text={textDescription.length > 200 ? trimText(textDescription, 200) : textDescription }/>
                </div>
            </div>
        </div>
    );
};

export default YouTubePopup;
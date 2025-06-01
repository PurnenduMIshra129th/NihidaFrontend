import { useState } from "react";

// interface IYouTubePopupProps {
//     videoUrl: string; // ✅ Accepts YouTube link as a prop
// }

// eslint-disable-next-line @typescript-eslint/naming-convention
const YouTubePopup = () => {
    const [isOpen, setIsOpen] = useState(false);

    const videoUrl = "https://youtu.be/Ecs-foVS74Q?si=bgt5TtPdkNhpESds";
    const videoId = new URL(videoUrl).pathname.split("/")[1];

    const embedUrl = `https://www.youtube.com/embed/${videoId}`;

    return (
        <div>
            <button onClick={() => setIsOpen(true)} className="btn-primary">
                Play Video
            </button>
            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-4 rounded-lg shadow-lg relative">
                        <button onClick={() => setIsOpen(false)} className="absolute top-2 right-2 text-gray-500">
                            ✖ Close
                        </button>
                        <iframe
                            width="560"
                            height="315"
                            src={embedUrl}
                            frameBorder="0"
                            allow="autoplay; encrypted-media"
                            allowFullScreen
                            title="YouTube Video"
                            className="rounded-md"
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default YouTubePopup;
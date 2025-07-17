import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

import { useEffect, useState } from "react";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import { useParams } from "react-router";

import EmptyState from "../../../components/EmptyState/EmptyState";
import Image from "../../../components/Image/Image";
import useFetch from "../../../hooks/useFetch";
import { IVideoApiResponse } from "../../../types/api/api.type";
import { extractYouTubeId } from "../../../utils/util";

// eslint-disable-next-line @typescript-eslint/naming-convention
function ViewVideoByIdPage() {
  const { id } = useParams();
  const { data } = useFetch<IVideoApiResponse | null>(
    `video/getVideoById/${id}`,
    "GET",
    undefined,
    true
  );
  const [video, setVideo] = useState<IVideoApiResponse | null>(null);

  useEffect(() => {
    if (data && data.statusCode == 1) {
      setVideo(data.data);
    }
  }, [data]);

  if (!video) return <EmptyState />;
  return (
    <>
      <div className="max-w-5xl mx-auto px-4 pt-[8rem] pb-16">
        <h1 className="text-3xl font-bold text-custom_orange_1 mb-4">
          {video?.title || "Untitled Video"}
        </h1>

        {/* Category + Visibility + Highlighted */}
        <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600 mb-4">
          <span className="px-2 py-0.5 bg-orange-100 text-custom_orange_1 rounded-full capitalize">
            🗂 {video?.category?.replace("-", " ") || "Uncategorized"}
          </span>
          <span className="px-2 py-0.5 bg-gray-100 text-gray-700 rounded-full capitalize">
            🔒 {video?.visibility || "private"}
          </span>
          {video?.highlighted && (
            <span className="px-2 py-0.5 bg-yellow-100 text-yellow-700 rounded-full">
              ⭐ Highlighted
            </span>
          )}
        </div>

        {/* Date */}
        {video?.date && (
          <p className="text-sm text-gray-500 mb-6">
            {new Date(video.date).toLocaleDateString()}
          </p>
        )}

        {/* Description */}
        {video?.description ? (
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              Description
            </h2>
            <p className="text-gray-700 leading-relaxed whitespace-pre-line">
              {video.description}
            </p>
          </div>
        ) : (
          <p className="text-sm text-gray-500 italic mb-6">
            No description available.
          </p>
        )}

        {/* YouTube Embed */}
        {video?.youtubeUrl ? (
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              Watch Video
            </h2>
            <div className="aspect-w-4 h-[400px] aspect-h-3 w-full rounded-md overflow-hidden shadow-md border border-gray-200">
            <LiteYouTubeEmbed
              id={extractYouTubeId(video.youtubeUrl) || ""}
              poster="hqdefault"
              title={video.title}
              noCookie
              wrapperClass="yt-lite"
              playerClass="lty-playbtn"
            />
            </div>
          </div>
        ) : (
          <p className="text-sm text-gray-500 italic mb-8">
            No video URL provided.
          </p>
        )}

        {/* Thumbnail */}
        {video?.files?.[0]?.publicFilePath ? (
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              Thumbnail
            </h2>
            <Image
              imagePath={video.files[0].publicFilePath}
              className="w-full max-w-md rounded-md border border-gray-200 shadow-sm"
            />
          </div>
        ) : (
          <p className="text-sm text-gray-500 italic mb-8">
            No thumbnail available.
          </p>
        )}

        {/* Tags */}
        {video?.tags && video?.tags?.length > 0 ? (
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">Tags</h2>
            <div className="flex flex-wrap gap-2">
              {video.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 text-xs bg-orange-100 text-custom_orange_1 rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        ) : (
          <p className="text-sm text-gray-500 italic">No tags provided.</p>
        )}
      </div>
    </>
  );
}

export default ViewVideoByIdPage;

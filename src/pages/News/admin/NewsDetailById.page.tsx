import { useEffect, useState } from "react";
import { useParams } from "react-router";

import NoDataComponent from "../../../components/EmptyState/NoData";
import Image from "../../../components/Image/Image";
import useFetch from "../../../hooks/useFetch";
import { INewsApiResponse } from "../../../types/api/api.type";

// eslint-disable-next-line @typescript-eslint/naming-convention
export default function NewsDetailByIdPage() {
  const { id } = useParams();
  const { data } = useFetch<INewsApiResponse | null>(
    `news/getNewsById/${id}`,
    "GET",
    undefined,
    true
  );
  const [news, setNews] = useState<INewsApiResponse | null>(null);

  useEffect(() => {
    if (data && data.statusCode == 1) {
      setNews(data.data);
    }
  }, [data]);

  if (!news)
    return <NoDataComponent message="No news detail available at the moment" />;

  return (
    <div className="max-w-5xl mx-auto px-4 pt-[8rem] pb-16">
      <h1 className="text-3xl font-bold text-custom_orange_1 mb-4">
        {news.title}
      </h1>

      {/* Category + Visibility */}
      <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600 mb-4">
        <span className="px-2 py-0.5 bg-orange-100 text-custom_orange_1 rounded-full capitalize">
          🗂 {news.category.replace("-", " ")}
        </span>
        <span className="px-2 py-0.5 bg-gray-100 text-gray-700 rounded-full capitalize">
          🔒 {news.visibility}
        </span>
      </div>

      {/* Date */}
      {news.date && (
        <p className="text-sm text-gray-500 mb-6">
          {new Date(news.date).toLocaleDateString()}
        </p>
      )}

      {/* Summary */}
      {news.summary && (
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">Summary</h2>
          <p className="text-gray-700 leading-relaxed">{news.summary}</p>
        </div>
      )}

      {/* Content */}
      {news.content && (
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">Content</h2>
          <p className="text-gray-700 leading-relaxed whitespace-pre-line">
            {news.content}
          </p>
        </div>
      )}

      {/* Source + URL */}
      {(news.source || news.url) && (
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">Source</h2>
          {news.source && <p className="text-gray-700">{news.source}</p>}
          {news.url && (
            <a
              href={news.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline text-sm"
            >
              {news.url}
            </a>
          )}
        </div>
      )}

      {/* Tags */}
      {news.tags && news.tags?.length > 0 && (
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">Tags</h2>
          <div className="flex flex-wrap gap-2">
            {news.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-3 py-1 text-xs bg-orange-100 text-custom_orange_1 rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Files */}
      {news.files?.length > 0 && (
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-3">Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {news.files.map((file) =>
              file.mimeType?.startsWith("image/") ? (
                <Image
                  key={file._id}
                  imagePath={file.publicFilePath}
                  className="w-full rounded-md border border-gray-200 shadow-sm"
                />
              ) : null
            )}
          </div>
        </div>
      )}
    </div>
  );
}

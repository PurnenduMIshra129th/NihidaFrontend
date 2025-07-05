import { useEffect, useState } from "react";
import { useParams } from "react-router";

import NoDataComponent from "../../../components/EmptyState/NoData";
import Image from "../../../components/Image/Image";
import useFetch from "../../../hooks/useFetch";
import { IGalleryApiResponse } from "../../../types/api/api.type";

// eslint-disable-next-line @typescript-eslint/naming-convention
export default function GalleryDetailByIdPage() {
  const { id } = useParams();
  const { data } = useFetch<IGalleryApiResponse | null>(
    `gallery/getGalleryById/${id}`,"GET",undefined,true
  );
  const [gallery, setGallery] = useState<IGalleryApiResponse | null>(null);

  useEffect(() => {
    if (data && data.statusCode == 1) {
      setGallery(data.data);
    }
  }, [data]);

  if (!gallery)
    return (
      <NoDataComponent message="No gallery available at the moment" />
    );

  return (
  <div className="max-w-5xl mx-auto px-4 pt-[8rem] pb-16">
  <h1 className="text-3xl font-bold text-custom_orange_1 mb-4">
    {gallery.title}
  </h1>

  {/* Category + Visibility + Highlighted */}
  <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600 mb-4">
    <span className="px-2 py-0.5 bg-orange-100 text-custom_orange_1 rounded-full capitalize">
      📁 {gallery.category.replace("-", " ")}
    </span>
    <span className="px-2 py-0.5 bg-gray-100 text-gray-700 rounded-full capitalize">
      🔒 {gallery.visibility}
    </span>
    {gallery.highlighted && (
      <span className="px-2 py-0.5 bg-yellow-100 text-yellow-700 rounded-full">
        ⭐ Highlighted
      </span>
    )}
  </div>

  {/* Date */}
  {gallery.date && (
    <p className="text-sm text-gray-500 mb-6">
      {new Date(gallery.date).toLocaleDateString()}
    </p>
  )}

  {/* Description */}
  {gallery.description && (
    <div className="mb-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-2">Description</h2>
      <p className="text-gray-700 leading-relaxed">{gallery.description}</p>
    </div>
  )}

  {/* Tags */}
  {gallery.tags && gallery.tags?.length > 0 && (
    <div className="mb-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-2">Tags</h2>
      <div className="flex flex-wrap gap-2">
        {gallery.tags.map((tag, idx) => (
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

  {/* Gallery Files */}
  {gallery.files?.length > 0 && (
    <div className="mb-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-3">Gallery</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {gallery.files.map((file) =>
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

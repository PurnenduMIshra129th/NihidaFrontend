import { useEffect, useState } from "react";
import { useParams } from "react-router";

import EmptyState from "../../../components/EmptyState/EmptyState";
import Image from "../../../components/Image/Image";
import useFetch from "../../../hooks/useFetch";
import { IOurPartnerApiResponse } from "../../../types/api/api.type";

// eslint-disable-next-line @typescript-eslint/naming-convention
export default function OurPartnerDetailByIdPage() {
  const { id } = useParams();
  const { data } = useFetch<IOurPartnerApiResponse | null>(
    `partner/getPartnerById/${id}`,
    "GET",
    undefined,
    true
  );
  const [ourPartner, setOurPartner] = useState<IOurPartnerApiResponse | null>(
    null
  );

  useEffect(() => {
    if (data && data.statusCode == 1) {
      setOurPartner(data.data);
    }
  }, [data]);

  if (!ourPartner)
    return (
      <EmptyState />
    );

  return (
    <div className="max-w-5xl mx-auto px-4 pt-[8rem] pb-16">
      <h1 className="text-3xl font-bold text-custom_orange_1 mb-2">
        {ourPartner.name || "Unnamed Partner"}
      </h1>

      {/* Type + Visibility + Dates */}
      <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600 mb-3">
        <span className="px-2 py-0.5 bg-orange-100 text-custom_orange_1 rounded-full capitalize">
          🤝 {ourPartner.type?.replace("-", " ") || "No type"}
        </span>
        <span className="px-2 py-0.5 bg-gray-100 text-gray-700 rounded-full capitalize">
          {ourPartner.visibility === "public" ? "🌍 Public" : "🔒 Internal"}
        </span>
        {ourPartner.partnershipStart && (
          <span className="text-sm text-gray-500">
            🗓 {new Date(ourPartner.partnershipStart).toLocaleDateString()}
            {ourPartner.partnershipEnd &&
              ` – ${new Date(ourPartner.partnershipEnd).toLocaleDateString()}`}
          </span>
        )}
      </div>

      {/* Description */}
      {ourPartner.description && (
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">
            Description
          </h2>
          <p className="text-gray-700 leading-relaxed whitespace-pre-line">
            {ourPartner.description}
          </p>
        </div>
      )}

      {/* Focus Areas */}
      {ourPartner.focusAreas && ourPartner.focusAreas?.length > 0 && (
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">
            Focus Areas
          </h2>
          <div className="flex flex-wrap gap-2">
            {ourPartner.focusAreas.map((area, idx) => (
              <span
                key={idx}
                className="px-3 py-1 text-xs bg-orange-50 border border-orange-200 text-orange-700 rounded-full"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Contact Person */}
      {(ourPartner.contactPerson?.name ||
        ourPartner.contactPerson?.email ||
        ourPartner.contactPerson?.phone) && (
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">
            Contact Person
          </h2>
          <div className="text-sm text-gray-700 leading-relaxed space-y-1">
            {ourPartner.contactPerson.name && (
              <p>👤 {ourPartner.contactPerson.name}</p>
            )}
            {ourPartner.contactPerson.email && (
              <p>📧 {ourPartner.contactPerson.email}</p>
            )}
            {ourPartner.contactPerson.phone && (
              <p>📞 {ourPartner.contactPerson.phone}</p>
            )}
          </div>
        </div>
      )}

      {/* Website */}
      {ourPartner.website && (
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">Website</h2>
          <a
            href={ourPartner.website}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline text-sm break-words"
          >
            {ourPartner.website}
          </a>
        </div>
      )}

      {/* Tags */}
      {ourPartner.tags && ourPartner.tags?.length > 0 && (
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">Tags</h2>
          <div className="flex flex-wrap gap-2">
            {ourPartner.tags.map((tag, idx) => (
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
      {ourPartner.files?.length > 0 && (
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {ourPartner.files.map((file) =>
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

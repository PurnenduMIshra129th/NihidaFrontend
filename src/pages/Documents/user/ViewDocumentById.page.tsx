import { useEffect, useState } from "react";
import { useParams } from "react-router";

import EmptyState from "../../../components/EmptyState/EmptyState";
import PDFPreviewCard from "../../../components/Pdf/PDFPreviewCard";
import useFetch from "../../../hooks/useFetch";
import { IDocumentApiResponse } from "../../../types/api/api.type";

// eslint-disable-next-line @typescript-eslint/naming-convention
function ViewDocumentByIdPage() {
  const { id } = useParams();
  const { data } = useFetch<IDocumentApiResponse | null>(
    `document/getDocumentById/${id}`,
    "GET",
    undefined,
    true
  );
  const [document, setDocument] = useState<IDocumentApiResponse | null>(null);

  useEffect(() => {
    if (data && data.statusCode == 1) {
      setDocument(data.data);
    }
  }, [data]);

  if (!document)
    return <EmptyState />;
  return (
    <>
      <div className="max-w-5xl mx-auto px-4 pt-[8rem] pb-16">
        <h1 className="text-3xl font-bold text-custom_orange_1 mb-4">
          {document.title}
        </h1>

        {/* Type + Visibility + Highlighted */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
          <span className="px-2 py-0.5 bg-orange-100 text-custom_orange_1 rounded-full capitalize">
            📄 {document.type.replace("-", " ")}
          </span>
          <span className="px-2 py-0.5 bg-gray-100 text-gray-700 rounded-full capitalize">
            🔒 {document.visibility}
          </span>
          {document.highlighted && (
            <span className="px-2 py-0.5 bg-yellow-100 text-yellow-700 rounded-full">
              ⭐ Highlighted
            </span>
          )}
        </div>

        {/* Description */}
        {document.description && (
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              Description
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {document.description}
            </p>
          </div>
        )}

        {/* Issued By + Dates */}
        {(document.issuedBy || document.issueDate || document.expiresAt) && (
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              Details
            </h2>
            <ul className="text-sm text-gray-700 space-y-1">
              {document.issuedBy && <li>🏢 Issued By: {document.issuedBy}</li>}
              {document.issueDate && (
                <li>
                  📅 Issue Date:{" "}
                  {new Date(document.issueDate).toLocaleDateString()}
                </li>
              )}
              {document.expiresAt && (
                <li>
                  ⏳ Expires At:{" "}
                  {new Date(document.expiresAt).toLocaleDateString()}
                </li>
              )}
            </ul>
          </div>
        )}

        {/* Tags */}
        {document.tags && document.tags?.length > 0 && (
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">Tags</h2>
            <div className="flex flex-wrap gap-2">
              {document.tags.map((tag, idx) => (
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
        {document.files?.length > 0 && (
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-3">Files</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {document.files.map((file) => (
                <PDFPreviewCard
                  key={file._id}
                  publicFilePath={file.publicFilePath}
                  originalName={file.originalName}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default ViewDocumentByIdPage;

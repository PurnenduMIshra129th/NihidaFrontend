import { useNavigate } from "react-router";

import { IPDFDocumentCardUser } from "../../types/component/component.types";
import { trimText } from "../../utils/trimText";
import { formatToLocalTime } from "../../utils/util";

// eslint-disable-next-line @typescript-eslint/naming-convention
export default function PDFDocumentCardUser({
  document,
  readMoreRouting,
}: IPDFDocumentCardUser) {
  const navigate = useNavigate();

  return (
    <div className="w-full flex flex-col p-4 border border-orange-100 rounded-xl shadow-md bg-white hover:shadow-lg transition-all duration-300">
      {/* PDF Icon */}
      <div className="flex items-center justify-center h-40 bg-orange-50 rounded-md mb-4">
        <div className="text-6xl text-custom_orange_1">📄</div>
      </div>

      {/* Metadata */}
      <div className="bg-custom_orange_2 p-2 rounded-xl w-fit mb-2">
        <p className="text-xs text-custom_orange_1 font-medium">
          {formatToLocalTime(document?.createdAt)}
        </p>
      </div>

      {/* Title */}
      <h2 className="text-lg font-semibold text-gray-800 mb-1">
        {trimText(document?.title, 60)}
      </h2>

      {/* Type + Issued By */}
      <p className="text-sm text-gray-600 mb-1 capitalize">
        📄 {document.type.replace("-", " ")}
      </p>
      {document.issuedBy && (
        <p className="text-sm text-gray-500 mb-2">🏢 {document?.issuedBy}</p>
      )}

      {/* Description */}
      <p className="text-sm text-custom_grey mb-4">
        {trimText(document?.description || "No description provided.", 120)}
      </p>

      {/* Button */}
      <button
        onClick={() => navigate(`${readMoreRouting}/${document._id}`)}
        className="mt-auto w-full border-2 border-custom_orange_1 text-custom_orange_1 hover:bg-custom_orange_1 hover:text-white font-medium py-2 rounded-md transition"
      >
        View Document
      </button>
    </div>
  );
}
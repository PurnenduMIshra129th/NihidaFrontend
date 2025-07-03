import { useEffect, useState } from "react";

import EmptyState from "../../../components/EmptyState/EmptyState";
import PDFDocumentCardUser from "../../../components/Pdf/PdfPreviewCardUser";
import useFetch from "../../../hooks/useFetch";
import { IDocumentApiResponse } from "../../../types/api/api.type";

// eslint-disable-next-line @typescript-eslint/naming-convention
const DocumentListPage = () => {
  const { data } = useFetch<IDocumentApiResponse[]>("document/getAllDocument");
  const [documents, setDocuments] = useState<IDocumentApiResponse[]>([]);

  useEffect(() => {
    if (data && data.statusCode == 1 && data.data.length > 0) {
      setDocuments(data.data);
    }
  }, [data]);
  if (documents.length === 0) {
    return <EmptyState />;
  }
  return (
    <div className="max-w-7xl mx-auto px-4 pt-[8rem] pb-16">
      <h1 className="text-3xl font-bold text-custom_orange_1 mb-10 text-center">
        Explore Document
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {documents.map((item, index) => (
          <PDFDocumentCardUser
            key={index}
            document={item}
            readMoreRouting="/user/view-document"
          />
        ))}
      </div>
    </div>
  );
};

export default DocumentListPage;

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

import Button from "../../../components/Button/Button";
import EmptyState from "../../../components/EmptyState/EmptyState";
import DocumentAdminCard from "../../../components/section/documents/admin/DocumentAdminCard";
import UploadDocument from "../../../components/UploadDocument/UploadDocument";
import {
  fetchAllDocument,
  selectDocument,
} from "../../../contexts/slice/getAllDocument.slice";
import { AppDispatch } from "../../../contexts/store";
import { apiRequest } from "../../../services/apiService";
// eslint-disable-next-line @typescript-eslint/naming-convention
const DocumentAdminDashboardPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const data = useSelector(selectDocument);
  const [showUpload, setShowUpload] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const handleUploadTrigger = (id: string) => {
    setSelectedId(id);
    setShowUpload(true);
  };
  
  const handleDelete = async (id: string) => {
    await apiRequest(
      `document/deleteDocument/${id}`,
      "DELETE",
      undefined,
      true
    );
    await dispatch(fetchAllDocument());
  };

  if (!data || data.length === 0 || data === undefined) {
    return (
      <EmptyState
        routingPath="/admin/add-document"
        buttonText="Create Document"
      />
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-4 pt-[8rem] pb-12">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-custom_orange_1">
          Manage Document
        </h2>
        <Button
          name="Add Document"
          onClick={() => navigate("/admin/add-document")}
          className="bg-custom_orange_1 text-white px-6"
        />
      </div>
      <div className="flex flex-wrap gap-6 justify-center sm:justify-start">
        {data.map((document) => (
          <DocumentAdminCard
            key={document._id}
            data={document}
            onView={() => navigate(`/admin/view-document/${document._id}`)}
            onEdit={() => navigate(`/admin/edit-document/${document._id}`)}
            onDelete={() => handleDelete(document?._id ? document._id : "")}
            onUpload={() =>
              handleUploadTrigger(document?._id ? document._id : "")
            }
            onViewImages={() =>
              navigate(
                `/admin/file-management/${
                  document?._id ? document._id : "noID"
                }`,
                {
                  state: {
                    key: "document",
                    getDataEndPoint: `/document/getDocumentById`,
                    updateDataEndPoint: `/upload/updateDocumentFile`,
                    deleteDataEndPoint: `/upload/deleteDocumentFile`,
                  },
                }
              )
            }
          />
        ))}
      </div>
      <UploadDocument
        isOpen={showUpload}
        onClose={() => setShowUpload(false)}
        endpoint={`upload/createDocumentFile?id=${
          selectedId ? selectedId : ""
        }`}
        label="Upload Document Section"
        note="Please upload a image( pdf ) file"
        warning="Multiple files are not  allowed to upload (max. 5MB per file)"
        isMultiple={false}
        accept="pdf"
        onSuccess={() => dispatch(fetchAllDocument())}
      />
    </section>
  );
};

export default DocumentAdminDashboardPage;

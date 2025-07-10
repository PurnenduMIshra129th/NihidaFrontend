import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

import Button from "../../../components/Button/Button";
import EmptyState from "../../../components/EmptyState/EmptyState";
import DocumentAdminCard from "../../../components/section/documents/admin/DocumentAdminCard";
import UploadDocument from "../../../components/UploadDocument/UploadDocument";
import useFetch from "../../../hooks/useFetch";
import { apiRequest } from "../../../services/apiService";
import { IDocumentApiResponse } from "../../../types/api/api.type";

// eslint-disable-next-line @typescript-eslint/naming-convention
const DocumentAdminDashboardPage = () => {
  const navigate = useNavigate();
  const { data, fetchData } = useFetch<IDocumentApiResponse[]>("document/getAllDocument","GET",undefined,true);
  const [apiData, setApiData] = useState<IDocumentApiResponse[]>([]);
  const [showUpload, setShowUpload] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const handleUploadTrigger = (id: string) => {
    setSelectedId(id);
    setShowUpload(true);
  };
  useEffect(() => {
    if(data && data.statusCode == 1 && data.data.length > 0){
      setApiData(data.data);
    }
  }, [data]);
  const handleDelete = async (id: string) => {
    await apiRequest(
      `document/deleteDocument/${id}`,
      "DELETE",
      undefined,
      true
    );
    await fetchData();
  };

  if (!apiData || apiData.length === 0) {
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
        {apiData.map((activity) => (
          <DocumentAdminCard
            key={activity._id}
            data={activity}
            onView={() => navigate(`/admin/view-document/${activity._id}`)}
            onEdit={() => navigate(`/admin/edit-document/${activity._id}`)}
            onDelete={() => handleDelete(activity?._id ? activity._id : "")}
            onUpload={() =>
              handleUploadTrigger(activity?._id ? activity._id : "")
            }
            onViewImages={() =>
              navigate(
                `/admin/file-management/${
                  activity?._id ? activity._id : "noID"
                }`,
                {
                  state: {
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
      />
    </section>
  );
};

export default DocumentAdminDashboardPage;

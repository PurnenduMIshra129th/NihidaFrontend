import { useState } from "react";
import { useNavigate } from "react-router";

import Button from "../../../components/Button/Button";
import EmptyState from "../../../components/EmptyState/EmptyState";
import NewsAdminCard from "../../../components/section/news/admin/NewsAdminCard";
import UploadDocument from "../../../components/UploadDocument/UploadDocument";
import { useData } from "../../../contexts/context/data/DataContext";
import { apiRequest } from "../../../services/apiService";
import { INewsApiResponse } from "../../../types/api/api.type";

// eslint-disable-next-line @typescript-eslint/naming-convention
const NewsAdminDashboardPage = () => {
  const navigate = useNavigate();
  const { data: apiData, fetchData } = useData<INewsApiResponse[]>();
  const [showUpload, setShowUpload] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const handleUploadTrigger = (id: string) => {
    setSelectedId(id);
    setShowUpload(true);
  };

  const handleDelete = async (id: string) => {
    await apiRequest(`news/deleteNews/${id}`, "DELETE", undefined, true);
    await fetchData();
  };

  if (!apiData || apiData.length === 0) {
    return (
      <EmptyState
        routingPath="/admin/add-news"
        buttonText="Create News Article"
      />
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-4 pt-[8rem] pb-12">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-custom_orange_1">
          Manage News Article
        </h2>
        <Button
          name="Add News Article"
          onClick={() => navigate("/admin/add-news")}
          className="bg-custom_orange_1 text-white px-6"
        />
      </div>
      <div className="flex flex-wrap gap-6 justify-center sm:justify-start">
        {apiData.map((news) => (
          <NewsAdminCard
            key={news._id}
            data={news}
            onView={() => navigate(`/admin/view-news/${news._id}`)}
            onEdit={() => navigate(`/admin/edit-news/${news._id}`)}
            onDelete={() => handleDelete(news?._id ? news._id : "")}
            onUpload={() => handleUploadTrigger(news?._id ? news._id : "")}
            onViewImages={() =>
              navigate(
                `/admin/image-management/${news?._id ? news._id : "noID"}`,
                {
                  state: {
                    getDataEndPoint: `/news/getNewsById`,
                    updateDataEndPoint: `/upload/updateNewsFile`,
                    deleteDataEndPoint: `/upload/deleteNewsFile`,
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
        endpoint={`upload/createNewsFile?id=${selectedId ? selectedId : ""}`}
        label="Upload News Section"
        note="Please upload a image( .jpg, .jpeg, .png ) file"
        warning="Multiple files are allowed to upload (max. 5MB per file)"
        isMultiple={true}
      />
    </section>
  );
};

export default NewsAdminDashboardPage;

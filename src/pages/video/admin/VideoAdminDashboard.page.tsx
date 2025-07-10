import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

import Button from "../../../components/Button/Button";
import EmptyState from "../../../components/EmptyState/EmptyState";
import VideoAdminCard from "../../../components/section/video/admin/VideoAdminCard";
import UploadDocument from "../../../components/UploadDocument/UploadDocument";
import useFetch from "../../../hooks/useFetch";
import { apiRequest } from "../../../services/apiService";
import { IVideoApiResponse } from "../../../types/api/api.type";

// eslint-disable-next-line @typescript-eslint/naming-convention
const VideoAdminDashboardPage = () => {
  const navigate = useNavigate();
  const { data, fetchData } = useFetch<IVideoApiResponse[]>("video/getAllVideo","GET",undefined,true);
  const [apiData, setApiData] = useState<IVideoApiResponse[]>([]);
  useEffect(() => {
    if(data && data.statusCode == 1 && data.data.length > 0){
      setApiData(data.data);
    }
  }, [data]);
  const [showUpload, setShowUpload] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const handleUploadTrigger = (id: string) => {
    setSelectedId(id);
    setShowUpload(true);
  };

  const handleDelete = async (id: string) => {
    await apiRequest(`video/deleteVideo/${id}`, "DELETE", undefined, true);
    await fetchData();
  };

  if (!apiData || apiData.length === 0) {
    return (
      <EmptyState
        routingPath="/admin/add-video"
        buttonText="Create Video Article"
      />
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-4 pt-[8rem] pb-12">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-custom_orange_1">
          Manage Video Article
        </h2>
        <Button
          name="Add Video Article"
          onClick={() => navigate("/admin/add-video")}
          className="bg-custom_orange_1 text-white px-6"
        />
      </div>
      <div className="flex flex-wrap gap-6 justify-center sm:justify-start">
        {apiData.map((video) => (
          <VideoAdminCard
            key={video._id}
            data={video}
            onView={() => navigate(`/admin/view-video/${video._id}`)}
            onEdit={() => navigate(`/admin/edit-video/${video._id}`)}
            onDelete={() => handleDelete(video?._id ? video._id : "")}
            onUpload={() => handleUploadTrigger(video?._id ? video._id : "")}
            onViewImages={() =>
              navigate(
                `/admin/image-management/${video?._id ? video._id : "noID"}`,
                {
                  state: {
                    getDataEndPoint: `/video/getVideoById`,
                    updateDataEndPoint: `/upload/updateVideoFile`,
                    deleteDataEndPoint: `/upload/deleteVideoFile`,
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
        endpoint={`upload/createVideoFile?id=${selectedId ? selectedId : ""}`}
        label="Upload Video Section"
        note="Please upload a image( .jpg, .jpeg, .png ) file"
        warning="Multiple files are not allowed to upload (max. 5MB per file)"
        isMultiple={false}
      />
    </section>
  );
};

export default VideoAdminDashboardPage;

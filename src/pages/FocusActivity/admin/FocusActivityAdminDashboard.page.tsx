import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

import Button from "../../../components/Button/Button";
import EmptyState from "../../../components/EmptyState/EmptyState";
import FocusActivityAdminCard from "../../../components/section/focusActivity/admin/FocusActivityAdminCard";
import UploadDocument from "../../../components/UploadDocument/UploadDocument";
import useFetch from "../../../hooks/useFetch";
import { apiRequest } from "../../../services/apiService";
import { IFocusActivityApiResponse } from "../../../types/api/api.type";

// eslint-disable-next-line @typescript-eslint/naming-convention
const FocusActivityAdminDashboardPage = () => {
  const navigate = useNavigate();
  const { data, fetchData } = useFetch<IFocusActivityApiResponse[]>("focusActivity/getAllFocusActivity","GET",undefined,true);
  const [showUpload, setShowUpload] = useState(false);
  const [apiData, setApiData] = useState<IFocusActivityApiResponse[]>([]);
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
      `focusActivity/deleteFocusActivity/${id}`,
      "DELETE",
      undefined,
      true
    );
    await fetchData();
  };

  if (!apiData || apiData.length === 0) {
    return <EmptyState routingPath="/admin/add-focus-activity" buttonText="Create Activity"/>;
  }

  return (
    <section className="max-w-7xl mx-auto px-4 pt-[8rem] pb-12">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-custom_orange_1">
          Manage Focus Activities
        </h2>
        <Button
          name="Add Activity"
          onClick={() => navigate("/admin/add-focus-activity")}
          className="bg-custom_orange_1 text-white px-6"
        />
      </div>
      <div className="flex flex-wrap gap-6 justify-center sm:justify-start">
        {apiData.map((activity) => (
          <FocusActivityAdminCard
            key={activity._id}
            data={activity}
            onView={() =>
              navigate(`/admin/view-focus-activity/${activity._id}`)
            }
            onEdit={() =>
              navigate(`/admin/edit-focus-activity/${activity._id}`)
            }
            onDelete={() => handleDelete(activity?._id ? activity._id : "")}
            onUpload={() =>
              handleUploadTrigger(activity?._id ? activity._id : "")
            }
            onViewImages={() =>
              navigate(
                `/admin/image-management/${activity?._id ? activity._id : "noID"}`,
                {
                  state: {
                    getDataEndPoint: `/focusActivity/getFocusActivityById`,
                    updateDataEndPoint: `/upload/updateFocusActivityFile`,
                    deleteDataEndPoint: `/upload/deleteFocusActivityFile`,
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
        endpoint={`upload/createFocusActivityFile?id=${
          selectedId ? selectedId : ""
        }`}
        label="Upload Focus Activity Section"
        note="Please upload a image( .jpg, .jpeg, .png ) file"
        warning="Multiple files are allowed to be uploaded (max. 5MB per file)"
        isMultiple={true}
      />
    </section>
  );
};

export default FocusActivityAdminDashboardPage;

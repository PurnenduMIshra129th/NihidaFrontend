import { useState } from "react";
import { useNavigate } from "react-router";

import Button from "../../../components/Button/Button";
import EmptyState from "../../../components/EmptyState/EmptyState";
import FocusActivityAdminCard from "../../../components/section/focusActivity/admin/FocusActivityAdminCard";
import UploadDocument from "../../../components/UploadDocument/UploadDocument";
import { useData } from "../../../contexts/context/data/DataContext";
import { apiRequest } from "../../../services/apiService";
import { IFocusActivityApiData } from "../../../types/api/api.type";

// eslint-disable-next-line @typescript-eslint/naming-convention
const FocusActivityAdminDashboardPage = () => {
  const navigate = useNavigate();
  const { data: apiData, fetchData } = useData<IFocusActivityApiData[]>();
  const [showUpload, setShowUpload] = useState(true);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const handleUploadTrigger = (id: string) => {
    setSelectedId(id);
    setShowUpload(true);
  };

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
    return <EmptyState />;
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
            onEdit={() => navigate(`/admin/focus-activities/${activity._id}`)}
            onDelete={() => handleDelete(activity?._id ? activity._id : "")}
            onUpload={() =>
              handleUploadTrigger(activity?._id ? activity._id : "")
            }
          />
        ))}
      </div>
      <UploadDocument isOpen={showUpload} onClose={() => setShowUpload(false)} endpoint={`upload/createFocusActivityFile?id=${selectedId ? selectedId : ""}`} label="Upload Focus Activity Section" note="Please upload a image( .jpg, .jpeg, .png ) file" warning="Multiple files are allowed to be uploaded (max. 5MB per file)" isMultiple={true}/>
    </section>
  );
};

export default FocusActivityAdminDashboardPage;

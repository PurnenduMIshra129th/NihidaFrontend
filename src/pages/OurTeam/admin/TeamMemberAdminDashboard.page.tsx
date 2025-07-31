import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

import Button from "../../../components/Button/Button";
import EmptyState from "../../../components/EmptyState/EmptyState";
import TeamMemberAdminCard from "../../../components/section/teamMember/admin/TeamMemberAdminCard";
import UploadDocument from "../../../components/UploadDocument/UploadDocument";
import {
  fetchAllTeamMember,
  selectTeamMember,
} from "../../../contexts/slice/getAllTeamMember.slice";
import { AppDispatch } from "../../../contexts/store";
import { apiRequest } from "../../../services/apiService";

// eslint-disable-next-line @typescript-eslint/naming-convention
const TeamMemberAdminDashboardPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const data = useSelector(selectTeamMember);
  const [showUpload, setShowUpload] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const handleUploadTrigger = (id: string) => {
    setSelectedId(id);
    setShowUpload(true);
  };

  const handleDelete = async (id: string) => {
    await apiRequest(
      `teamMember/deleteTeamMember/${id}`,
      "DELETE",
      undefined,
      true
    );
    await dispatch(fetchAllTeamMember());
  };

  if (!data || data.length === 0) {
    return (
      <EmptyState
        routingPath="/admin/add-teamMember"
        buttonText="Create TeamMember"
      />
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-4 pt-[8rem] pb-12">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-custom_orange_1">
          Manage TeamMember
        </h2>
        <Button
          name="Add TeamMember"
          onClick={() => navigate("/admin/add-teamMember")}
          className="bg-custom_orange_1 text-white px-6"
        />
      </div>
      <div className="flex flex-wrap gap-6 justify-center sm:justify-start">
        {data.map((teamMember) => (
          <TeamMemberAdminCard
            key={teamMember._id}
            data={teamMember}
            onView={() => navigate(`/admin/view-teamMember/${teamMember._id}`)}
            onEdit={() => navigate(`/admin/edit-teamMember/${teamMember._id}`)}
            onDelete={() => handleDelete(teamMember?._id ? teamMember._id : "")}
            onUpload={() =>
              handleUploadTrigger(teamMember?._id ? teamMember._id : "")
            }
            onViewImages={() =>
              navigate(
                `/admin/image-management/${
                  teamMember?._id ? teamMember._id : "noID"
                }`,
                {
                  state: {
                    key: "teamMember",
                    getDataEndPoint: `/teamMember/getTeamMemberById`,
                    updateDataEndPoint: `/upload/updateTeamMemberImageFile`,
                    deleteDataEndPoint: `/upload/deleteTeamMemberImageFile`,
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
        endpoint={`upload/createTeamMemberImageFile?id=${
          selectedId ? selectedId : ""
        }`}
        label="Upload TeamMember Section"
        note="Please upload a image( .jpg, .jpeg, .png ) file"
        warning="Multiple files are allowed to upload (max. 5MB per file)"
        isMultiple={true}
        onSuccess={() => dispatch(fetchAllTeamMember())}
      />
    </section>
  );
};

export default TeamMemberAdminDashboardPage;

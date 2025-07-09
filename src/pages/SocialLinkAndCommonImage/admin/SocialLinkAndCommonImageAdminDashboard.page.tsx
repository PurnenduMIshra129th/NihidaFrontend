import { useState } from "react";
import { useNavigate } from "react-router";

import EmptyState from "../../../components/EmptyState/EmptyState";
import SocialLinkAndCommonImageAdminCard from "../../../components/section/socialLinkAndCommonImage/admin/SocialLinkAndCommonImageAdminCard";
import UploadDocument from "../../../components/UploadDocument/UploadDocument";
import { useData } from "../../../contexts/context/data/DataContext";
import { ISocialLinkAndCommonImageApiResponse } from "../../../types/api/api.type";

// eslint-disable-next-line @typescript-eslint/naming-convention
const SocialLinkAndCommonImageAdminDashboardPage = () => {
  const navigate = useNavigate();
  const { data: apiData } = useData<ISocialLinkAndCommonImageApiResponse[]>();
  const [showUpload, setShowUpload] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const handleUploadTrigger = (id: string) => {
    setSelectedId(id);
    setShowUpload(true);
  };

  if (!apiData || apiData.length === 0) {
    return (
      <EmptyState
        buttonText="Create SocialLinkAndCommonImage"
      />
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-4 pt-[8rem] pb-12">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-custom_orange_1">
          Manage SocialLinkAndCommonImage
        </h2>
      </div>
      <div className="flex flex-wrap gap-6 justify-center sm:justify-start">
        {apiData.map((socialLinkAndCommonImage) => (
          <SocialLinkAndCommonImageAdminCard
            key={socialLinkAndCommonImage._id}
            data={socialLinkAndCommonImage}
            onEdit={() => navigate(`/admin/edit-socialLinkAndCommonImage/${socialLinkAndCommonImage._id}`)}
            onUpload={() => handleUploadTrigger(socialLinkAndCommonImage?._id ? socialLinkAndCommonImage._id : "")}
            onViewImages={() =>
              navigate(
                `/admin/image-management/${socialLinkAndCommonImage?._id ? socialLinkAndCommonImage._id : "noID"}`,
                {
                  state: {
                    getDataEndPoint: `/socialLinkAndCommonImage/getSocialLinkAndCommonImageById`,
                    updateDataEndPoint: `/upload/updateSocialLinkAndCommonImageFile`,
                    deleteDataEndPoint: `/upload/deleteSocialLinkAndCommonImageFile`,
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
        endpoint={`upload/createSocialLinkAndCommonImageFile?id=${selectedId ? selectedId : ""}`}
        label="Upload SocialLinkAndCommonImage Section"
        note="Please upload a image( .jpg, .jpeg, .png ) file"
        warning="Multiple files are allowed to upload (max. 5MB per file)"
        isMultiple={true}
      />
    </section>
  );
};

export default SocialLinkAndCommonImageAdminDashboardPage;

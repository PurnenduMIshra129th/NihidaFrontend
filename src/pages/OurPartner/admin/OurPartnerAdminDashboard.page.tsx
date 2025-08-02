import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

import Button from "../../../components/Button/Button";
import EmptyState from "../../../components/EmptyState/EmptyState";
import OurPartnerAdminCard from "../../../components/section/ourPartner/admin/OurPartnerAdminCard";
import UploadDocument from "../../../components/UploadDocument/UploadDocument";
import useFetch from "../../../hooks/useFetch";
import { apiRequest } from "../../../services/apiService";
import { IOurPartnerApiResponse } from "../../../types/api/api.type";

// eslint-disable-next-line @typescript-eslint/naming-convention
const OurPartnerAdminDashboardPage = () => {
  const navigate = useNavigate();
  const { data, fetchData } = useFetch<IOurPartnerApiResponse[]>(
    "partner/getAllPartner",
    "GET"
  );
  const [apiData, setApiData] = useState<IOurPartnerApiResponse[] | null>(null);
  useEffect(() => {
    if (data && data.statusCode == 1) {
      setApiData(data.data);
    } else {
      setApiData(null);
    }
  }, [data]);
  const [showUpload, setShowUpload] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const handleUploadTrigger = (id: string) => {
    setSelectedId(id);
    setShowUpload(true);
  };

  const handleDelete = async (id: string) => {
    await apiRequest(
      `partner/deletePartner/${id}`,
      "DELETE",
      undefined,
      true
    );
    await fetchData();
  };

  if (!apiData || apiData.length === 0) {
    return (
      <EmptyState
        routingPath="/admin/add-ourPartner"
        buttonText="Create"
      />
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-4 pt-[8rem] pb-12">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-custom_orange_1">
          Manage OurPartner
        </h2>
        <Button
          name="Add +"
          onClick={() => navigate("/admin/add-ourPartner")}
          className="bg-custom_orange_1 text-white px-6"
        />
      </div>
      <div className="flex flex-wrap gap-6 justify-center sm:justify-start">
        {apiData.map((ourPartner) => (
          <OurPartnerAdminCard
            key={ourPartner._id}
            data={ourPartner}
            onView={() => navigate(`/admin/view-ourPartner/${ourPartner._id}`)}
            onEdit={() => navigate(`/admin/edit-ourPartner/${ourPartner._id}`)}
            onDelete={() => handleDelete(ourPartner?._id ? ourPartner._id : "")}
            onUpload={() =>
              handleUploadTrigger(ourPartner?._id ? ourPartner._id : "")
            }
            onViewImages={() =>
              navigate(
                `/admin/image-management/${
                  ourPartner?._id ? ourPartner._id : "noID"
                }`,
                {
                  state: {
                    key: "ourPartner",
                    getDataEndPoint: `/partner/getPartnerById`,
                    updateDataEndPoint: `/upload/updatePartnerImageFile`,
                    deleteDataEndPoint: `/upload/deletePartnerImageFile`,
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
        endpoint={`upload/createPartnerImageFile?id=${
          selectedId ? selectedId : ""
        }`}
        label="Upload OurPartner Section"
        note="Please upload a image( .jpg, .jpeg, .png ) file"
        warning="Multiple files are allowed to upload (max. 5MB per file)"
        isMultiple={true}
        onSuccess={() => fetchData()}
      />
    </section>
  );
};

export default OurPartnerAdminDashboardPage;

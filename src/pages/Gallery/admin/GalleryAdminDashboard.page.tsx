import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

import Button from "../../../components/Button/Button";
import EmptyState from "../../../components/EmptyState/EmptyState";
import GalleryAdminCard from "../../../components/section/gallery/admin/GalleryAdminCard";
import UploadDocument from "../../../components/UploadDocument/UploadDocument";
import {
  fetchAllGallery,
  selectGallery,
} from "../../../contexts/slice/getAllGallery.slice";
import { AppDispatch } from "../../../contexts/store";
import { apiRequest } from "../../../services/apiService";

// eslint-disable-next-line @typescript-eslint/naming-convention
const GalleryAdminDashboardPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const data = useSelector(selectGallery);
  const [showUpload, setShowUpload] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const handleUploadTrigger = (id: string) => {
    setSelectedId(id);
    setShowUpload(true);
  };

  const handleDelete = async (id: string) => {
    await apiRequest(`gallery/deleteGallery/${id}`, "DELETE", undefined, true);
    await dispatch(fetchAllGallery());
  };

  if (!data || data.length === 0) {
    return (
      <EmptyState
        routingPath="/admin/add-gallery"
        buttonText="Create Gallery"
      />
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-4 pt-[8rem] pb-12">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-custom_orange_1">
          Manage Gallery
        </h2>
        <Button
          name="Add Gallery"
          onClick={() => navigate("/admin/add-gallery")}
          className="bg-custom_orange_1 text-white px-6"
        />
      </div>
      <div className="flex flex-wrap gap-6 justify-center sm:justify-start">
        {data.map((gallery) => (
          <GalleryAdminCard
            key={gallery._id}
            data={gallery}
            onView={() => navigate(`/admin/view-gallery/${gallery._id}`)}
            onEdit={() => navigate(`/admin/edit-gallery/${gallery._id}`)}
            onDelete={() => handleDelete(gallery?._id ? gallery._id : "")}
            onUpload={() =>
              handleUploadTrigger(gallery?._id ? gallery._id : "")
            }
            onViewImages={() =>
              navigate(
                `/admin/image-management/${
                  gallery?._id ? gallery._id : "noID"
                }`,
                {
                  state: {
                    key : "gallery",
                    getDataEndPoint: `/gallery/getGalleryById`,
                    updateDataEndPoint: `/upload/updateGalleryFile`,
                    deleteDataEndPoint: `/upload/deleteGalleryFile`,
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
        endpoint={`upload/createGalleryFile?id=${selectedId ? selectedId : ""}`}
        label="Upload Gallery Section"
        note="Please upload a image( .jpg, .jpeg, .png ) file"
        warning="Multiple files are allowed to upload (max. 5MB per file)"
        isMultiple={true}
        onSuccess={() => dispatch(fetchAllGallery())}
      />
    </section>
  );
};

export default GalleryAdminDashboardPage;

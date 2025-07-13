import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

import Button from "../../../components/Button/Button";
import EmptyState from "../../../components/EmptyState/EmptyState";
import UpcomingEventAdminCard from "../../../components/section/upcomingEvent/admin/UpcomingEventAdminCard";
import UploadDocument from "../../../components/UploadDocument/UploadDocument";
import {
  fetchAllUpcomingEvent,
  selectUpcomingEvent,
} from "../../../contexts/slice/getAllUpcomingEvent.slice";
import { AppDispatch } from "../../../contexts/store";
import { apiRequest } from "../../../services/apiService";

// eslint-disable-next-line @typescript-eslint/naming-convention
const UpcomingEventAdminDashboardPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const data = useSelector(selectUpcomingEvent);

  const [showUpload, setShowUpload] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const handleUploadTrigger = (id: string) => {
    setSelectedId(id);
    setShowUpload(true);
  };

  const handleDelete = async (id: string) => {
    await apiRequest(
      `upcomingEvent/deleteUpcomingEvent/${id}`,
      "DELETE",
      undefined,
      true
    );
    await dispatch(fetchAllUpcomingEvent());
  };

  if (!data || data.length === 0) {
    return (
      <EmptyState
        routingPath="/admin/add-upcoming-event"
        buttonText="Create Upcoming Event"
      />
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-4 pt-[8rem] pb-12">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-custom_orange_1">
          Manage Upcoming Events
        </h2>
        <Button
          name="Add Upcoming Event"
          onClick={() => navigate("/admin/add-upcoming-event")}
          className="bg-custom_orange_1 text-white px-6"
        />
      </div>
      <div className="flex flex-wrap gap-6 justify-center sm:justify-start">
        {data.map((event) => (
          <UpcomingEventAdminCard
            key={event._id}
            data={event}
            onView={() => navigate(`/admin/view-upcoming-event/${event._id}`)}
            onEdit={() => navigate(`/admin/edit-upcoming-event/${event._id}`)}
            onDelete={() => handleDelete(event?._id ? event._id : "")}
            onUpload={() => handleUploadTrigger(event?._id ? event._id : "")}
            onViewImages={() =>
              navigate(
                `/admin/image-management/${event?._id ? event._id : "noID"}`,
                {
                  state: {
                    key: "upcomingEvent",
                    getDataEndPoint: `/upcomingEvent/getUpcomingEventById`,
                    updateDataEndPoint: `/upload/updateUpcomingEventFile`,
                    deleteDataEndPoint: `/upload/deleteUpcomingEventFile`,
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
        endpoint={`upload/createUpcomingEventFile?id=${
          selectedId ? selectedId : ""
        }`}
        label="Upload Upcoming Event Section"
        note="Please upload a image( .jpg, .jpeg, .png ) file"
        warning="Multiple files are not allowed to upload (max. 5MB per file)"
        isMultiple={false}
        onSuccess={() => {
          dispatch(fetchAllUpcomingEvent());
        }}
      />
    </section>
  );
};

export default UpcomingEventAdminDashboardPage;

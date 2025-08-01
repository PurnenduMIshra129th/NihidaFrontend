import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

import EmptyState from "../../../components/EmptyState/EmptyState";
import ContactUsAdminCard from "../../../components/section/contactUs/admin/ContactUsAdminCard";
import useFetch from "../../../hooks/useFetch";
import { apiRequest } from "../../../services/apiService";
import { IContactUsApiResponse } from "../../../types/api/api.type";

// eslint-disable-next-line @typescript-eslint/naming-convention
const ContactUsAdminDashboardPage = () => {
  const navigate = useNavigate();
  const { data, fetchData } = useFetch<IContactUsApiResponse[]>(
    "contactUs/getAllContactUs",
    "GET"
  );
  const [apiData, setApiData] = useState<IContactUsApiResponse[] | null>(null);
  useEffect(() => {
    if (data && data.statusCode == 1) {
      setApiData(data.data);
    } else {
      setApiData(null);
    }
  }, [data]);
  const handleDelete = async (id: string) => {
    await apiRequest(
      `contactUs/deleteContactUs/${id}`,
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
          Manage ContactUs
        </h2>
      </div>
      <div className="flex flex-wrap gap-6 justify-center sm:justify-start">
        {apiData.map((contactUs) => (
          <ContactUsAdminCard
            key={contactUs._id}
            data={contactUs}
            onView={() => navigate(`/admin/view-contactUs/${contactUs._id}`)}
            onEdit={() => navigate(`/admin/edit-contactUs/${contactUs._id}`)}
            onDelete={() => handleDelete(contactUs?._id ? contactUs._id : "")}
          />
        ))}
      </div>
    </section>
  );
};

export default ContactUsAdminDashboardPage;

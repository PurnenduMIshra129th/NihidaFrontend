import { useEffect, useState } from "react";
import { useParams } from "react-router";

import NoDataComponent from "../../../components/EmptyState/NoData";
import useFetch from "../../../hooks/useFetch";
import { IContactUsApiResponse } from "../../../types/api/api.type";

// eslint-disable-next-line @typescript-eslint/naming-convention
export default function ContactUsDetailByIdPage() {
  const { id } = useParams();
  const { data } = useFetch<IContactUsApiResponse | null>(
    `contactUs/getContactUsById/${id}`,
    "GET",
    undefined,
    true
  );
  const [contactUs, setContactUs] = useState<IContactUsApiResponse | null>(
    null
  );

  useEffect(() => {
    if (data && data.statusCode == 1) {
      setContactUs(data.data);
    }
  }, [data]);

  if (!contactUs)
    return (
      <NoDataComponent message="No contactUs detail available at the moment" />
    );

  return (
    <div className="max-w-5xl mx-auto px-4 pt-[8rem] pb-16">
      <h1 className="text-3xl font-bold text-custom_orange_1 mb-4">
        Contact from {contactUs.fullName}
      </h1>

      {/* Type + Responded */}
      <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600 mb-4">
        {contactUs.type && (
          <span className="px-2 py-0.5 bg-orange-100 text-custom_orange_1 rounded-full capitalize">
            🧭 {contactUs.type}
          </span>
        )}
        {typeof contactUs.responded === "boolean" && (
          <span
            className={`px-2 py-0.5 rounded-full ${
              contactUs.responded
                ? "bg-green-100 text-green-600"
                : "bg-yellow-100 text-yellow-700"
            }`}
          >
            {contactUs.responded ? "Responded" : "Pending"}
          </span>
        )}
      </div>

      {/* Email + Phone */}
      <div className="mb-6 space-y-2 text-sm text-gray-700">
        <p>
          📧 <strong>Email:</strong> {contactUs.email}
        </p>
        {contactUs.phone && (
          <p>
            📞 <strong>Phone:</strong> {contactUs.phone}
          </p>
        )}
        {contactUs.subject && (
          <p>
            📝 <strong>Subject:</strong> {contactUs.subject}
          </p>
        )}
      </div>

      {/* Message */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">Message</h2>
        <p className="text-gray-700 leading-relaxed whitespace-pre-line">
          {contactUs.message}
        </p>
      </div>

      {/* Created By (optional field) */}
      {contactUs.createdBy && (
        <div className="text-sm text-gray-600 italic mb-6">
          Submitted by: {contactUs.createdBy}
        </div>
      )}
    </div>
  );
}

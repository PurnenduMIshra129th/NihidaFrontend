import { useEffect, useState } from "react";
import { useParams } from "react-router";

import NoDataComponent from "../../../components/EmptyState/NoData";
import Image from "../../../components/Image/Image";
import useFetch from "../../../hooks/useFetch";
import { IUpcomingEventApiResponse } from "../../../types/api/api.type";
import { calculateDuration,formatToLocalTime } from "../../../utils/util";

// eslint-disable-next-line @typescript-eslint/naming-convention
export default function UpcomingEventDetailByIdPage() {
  const { id } = useParams();
  const { data } = useFetch<IUpcomingEventApiResponse | null>(
    `upcomingEvent/getUpcomingEventById/${id}`,
    "GET",
    undefined,
    true
  );
  const [event, setEvent] = useState<IUpcomingEventApiResponse | null>(null);

  useEffect(() => {
    if (data && data.statusCode == 1) {
      setEvent(data.data);
    }
  }, [data]);

  if (!event)
    return (
      <NoDataComponent message="No upcoming event available at the moment" />
    );

  return (
    <div className="max-w-5xl mx-auto px-4 pt-[8rem] pb-16">
      <h1 className="text-3xl font-bold text-custom_orange_1 mb-4">
        {event.title}
      </h1>

      {event.subtitle && (
        <p className="text-lg text-gray-700 font-medium mb-2">
          {event.subtitle}
        </p>
      )}
      {/* Date Range + Duration */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-sm text-gray-600 mt-3">
        <div className="bg-orange-50 border border-orange-200 rounded-lg px-4 py-2">
          <span className="font-semibold text-custom_orange_1">From:</span>{" "}
          {event.fromDate ? formatToLocalTime(event.fromDate) : "No date"}
        </div>
        <div className="bg-orange-50 border border-orange-200 rounded-lg px-4 py-2">
          <span className="font-semibold text-custom_orange_1">To:</span>{" "}
          {event.toDate ? formatToLocalTime(event.toDate) : "No date"}
        </div>
        <div className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-2">
          🕒 <span className="font-semibold">Duration:</span>{" "}
          {calculateDuration(event?.fromDate, event?.toDate)}
        </div>
      </div>
      <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
        {event.status && (
          <span
            className={`px-2 py-0.5 rounded-full text-xs font-medium capitalize mt-3 ${
              event.status === "upcoming"
                ? "bg-yellow-100 text-yellow-700"
                : event.status === "ongoing"
                ? "bg-green-100 text-green-700"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            {event.status}
          </span>
        )}
      </div>

      {/* Description */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">
          Description
        </h2>
        <p className="text-gray-700 leading-relaxed">{event.description}</p>
      </div>

      {/* Location */}
      {event.location && (
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">Location</h2>
          <p className="text-gray-700">{event.location}</p>
        </div>
      )}

      {/* Tags */}
      {event?.tags && event?.tags?.length > 0 && (
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">Tags</h2>
          <div className="flex flex-wrap gap-2">
            {event?.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-3 py-1 text-xs bg-orange-100 text-custom_orange_1 rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Impact Goals */}
      {event?.impactGoals && event?.impactGoals?.length > 0 && (
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">
            Impact Goals
          </h2>
          <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
            {event?.impactGoals.map((goal, idx) => (
              <li key={idx}>{goal}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Contact Person */}
      {event.contactPerson && (
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">Contact</h2>
          <p className="text-gray-700 text-sm">
            {event.contactPerson.name && (
              <div>👤 {event.contactPerson.name}</div>
            )}
            {event.contactPerson.phone && (
              <div>📞 {event.contactPerson.phone}</div>
            )}
            {event.contactPerson.email && (
              <div>✉️ {event.contactPerson.email}</div>
            )}
          </p>
        </div>
      )}

      {/* CTA */}
      {event.cta?.label && event.cta?.url && (
        <div className="mb-6">
          <a
            href={event.cta.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-custom_orange_1 text-white px-5 py-2 rounded-md text-sm hover:bg-orange-600 transition"
          >
            {event.cta.label}
          </a>
        </div>
      )}

      {/* Gallery */}
      {event?.files && event?.files?.length > 0 && (
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-3">Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {event?.files.map((img) => (
              <Image
                key={img._id}
                imagePath={img.publicFilePath}
                className="w-full rounded-md border border-gray-200 shadow-sm"
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

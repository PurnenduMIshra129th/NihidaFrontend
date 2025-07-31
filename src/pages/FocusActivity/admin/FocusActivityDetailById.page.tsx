import { useEffect, useState } from "react";
import { useParams } from "react-router";

import NoDataComponent from "../../../components/EmptyState/NoData";
import Image from "../../../components/Image/Image";
import useFetch from "../../../hooks/useFetch";
import { IFocusActivityApiResponse } from "../../../types/api/api.type";
import { calculateDuration, formatToLocalTime } from "../../../utils/util";

// eslint-disable-next-line @typescript-eslint/naming-convention
export default function FocusActivityDetailByIdPage() {
  const { id } = useParams();
  const { data } = useFetch<IFocusActivityApiResponse | null>(
    `focusActivity/getFocusActivityById/${id}`,
    "GET",
    undefined,
    true
  );
  const [activity, setActivity] = useState<IFocusActivityApiResponse | null>(
    null
  );

  useEffect(() => {
    if (data && data.statusCode == 1) {
      setActivity(data.data);
    }
  }, [data]);

  if (!activity)
    return (
      <NoDataComponent message="No focus activity available at the moment" />
    );

  return (
    <div className="max-w-5xl mx-auto px-4 pt-[8rem] pb-16">
      <div className="">
        <h1 className="text-4xl font-bold text-custom_orange_1 mb-2 break-words">
          {activity.title}
        </h1>
        <p className="text-lg text-gray-700 font-medium">{activity.subtitle}</p>
      </div>

      {/* Date Range + Duration */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-sm text-gray-600 mt-3">
        <div className="bg-orange-50 border border-orange-200 rounded-lg px-4 py-2">
          <span className="font-semibold text-custom_orange_1">From:</span>{" "}
          {activity.fromDate ? formatToLocalTime(activity.fromDate) : "No date"}
        </div>
        <div className="bg-orange-50 border border-orange-200 rounded-lg px-4 py-2">
          <span className="font-semibold text-custom_orange_1">To:</span>{" "}
          {activity.toDate ? formatToLocalTime(activity.toDate) : "No date"}
        </div>
        <div className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-2">
          🕒 <span className="font-semibold">Duration:</span>{" "}
          {calculateDuration(activity?.fromDate, activity?.toDate)}
        </div>
      </div>
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">
          Description
        </h2>
        <p className="text-gray-700 leading-relaxed">{activity.description}</p>
      </div>

      {activity.location && (
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">Location</h2>
          <p className="text-gray-700">{activity.location}</p>
        </div>
      )}

      {activity.impactStats?.length > 0 && (
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-3">
            Impact Stats
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {activity.impactStats.map((stat) => (
              <li
                key={stat._id}
                className="bg-orange-50 border border-custom_orange_1 rounded-md p-3 text-sm"
              >
                <strong>{stat.label}:</strong> {stat.value} {stat.unit}
              </li>
            ))}
          </ul>
        </div>
      )}

      {activity.testimonials && activity.testimonials?.length > 0 && (
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-3">
            Testimonials
          </h2>
          <ul className="space-y-4">
            {activity.testimonials.map((t) => (
              <li
                key={t._id}
                className="bg-orange-50 border border-orange-200 rounded-md p-4 text-sm"
              >
                <p className="italic text-gray-800 mb-1">“{t.quote}”</p>
                <div className="text-gray-600">
                  – {t.name}{" "}
                  {t.role && <span className="text-xs">({t.role})</span>}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}

      {activity.files && activity.files?.length > 0 && (
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-3">Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {activity.files.map((img) => (
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

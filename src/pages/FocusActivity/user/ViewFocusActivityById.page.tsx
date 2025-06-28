import { useEffect, useState } from "react";
import { useParams } from "react-router";

import EmptyState from "../../../components/EmptyState/EmptyState";
import useFetch from "../../../hooks/useFetch";
import GallerySectionWithLimitNumberOfImages from "../../../screens/Image/GallerySectionWithLimitNumberOfImages";
import { IFocusActivityApiResponse } from "../../../types/api/api.type";

// eslint-disable-next-line @typescript-eslint/naming-convention
function ViewFocusActivityByIdPage() {
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

  if (!activity) return <EmptyState />;
  return (
    <>
      <div className="max-w-5xl mx-auto px-4 pt-[8rem] pb-16">
        <h1 className="text-3xl font-bold text-custom_orange_1 mb-4">
          {activity.title}
        </h1>
        <p className="text-lg text-gray-700 font-medium mb-2">
          {activity.subtitle}
        </p>
        <p className="text-sm text-gray-500 mb-6">
          {new Date(activity.date || "").toLocaleDateString()}
        </p>

        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">
            Description
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {activity.description}
          </p>
        </div>

        {activity.location && (
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              Location
            </h2>
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
          <GallerySectionWithLimitNumberOfImages files={activity.files} />
        )}
      </div>
    </>
  );
}

export default ViewFocusActivityByIdPage;

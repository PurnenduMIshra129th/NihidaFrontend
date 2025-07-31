import { useEffect, useState } from "react";

import InformationCard from "../../../components/Cards/InformationCard";
import EmptyState from "../../../components/EmptyState/EmptyState";
import useFetch from "../../../hooks/useFetch";
import { IUpcomingEventApiResponse } from "../../../types/api/api.type";

// eslint-disable-next-line @typescript-eslint/naming-convention
const UpcomingEventListPage = () => {
  const { data } = useFetch<IUpcomingEventApiResponse[]>(
    "upcomingEvent/getAllUpcomingEvent","GET",undefined,true
  );
  const [event, setEvent] = useState<IUpcomingEventApiResponse[]>([]);

  useEffect(() => {
    if (data && data.statusCode == 1 && data.data.length > 0) {
      setEvent(data.data);
    }
  }, [data]);
  if (event.length === 0) {
    return <EmptyState />;
  }
  return (
    <div className="max-w-7xl mx-auto px-4 pt-[8rem] pb-16">
      <h1 className="text-3xl font-bold text-custom_orange_1 mb-10 text-center">
        Explore Upcoming Events
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {event.map((item, index) => (
          <InformationCard
            key={index}
            fromDate={item.fromDate}
            toDate={item.toDate}
            textHeading={item.title}
            textDescription={item.description}
            imagePath={item?.files?.[0]?.publicFilePath || ""}
            id={item._id}
            readMoreRouting="/user/view-upcoming-event"
          />
        ))}
      </div>
    </div>
  );
};

export default UpcomingEventListPage;

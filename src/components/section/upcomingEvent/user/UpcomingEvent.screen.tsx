import { useEffect, useState } from "react";

import useFetch from "../../../../hooks/useFetch";
import { IUpcomingEventApiResponse } from "../../../../types/api/api.type";
import InformationCard from "../../../Cards/InformationCard";
import NoDataComponent from "../../../EmptyState/NoData";
import SectionDivider from "../../../SectionDivider/SectionDivider";

// eslint-disable-next-line @typescript-eslint/naming-convention
function UpcomingEventScreen() {
  const { data } = useFetch<IUpcomingEventApiResponse[]>(
    "upcomingEvent/getAllUpcomingEvent"
  );
  const [apiData, setApiData] = useState<IUpcomingEventApiResponse[]>();

  useEffect(() => {
    const manageData = () => {
      if (data && data.statusCode == 1 && data.data.length > 0) {
        setApiData(data.data);
      }
    };
    manageData();
  }, [data]);
  return (
    <>
      <div className="flex justify-center items-center flex-col sm:w-[80%] w-full">
        <SectionDivider
          textHeading="Upcoming Event Section"
          routePath="/user/view-all-upcoming-event"
        />
        <div className="flex flex-wrap gap-6 justify-center sm:justify-center w-full my-3">
          {!apiData || apiData.length === 0 ? (
            <NoDataComponent message="No upcoming event available at the moment" />
          ) : null}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {apiData?.slice(0, 3)?.map((item, index) => (
              <InformationCard
                key={index}
                textTime={item.createdAt}
                textHeading={item.title}
                textDescription={item.description}
                imagePath={item?.files?.[0]?.publicFilePath || ""}
                id={item._id}
                readMoreRouting="/user/view-upcoming-event"
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default UpcomingEventScreen;

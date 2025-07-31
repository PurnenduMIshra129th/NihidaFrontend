import { useSelector } from "react-redux";

import { selectFocusActivity } from "../../../../contexts/slice/getAllFocusActivity.slice";
import InformationCard from "../../../Cards/InformationCard";
import NoDataComponent from "../../../EmptyState/NoData";
import SectionDivider from "../../../SectionDivider/SectionDivider";

// eslint-disable-next-line @typescript-eslint/naming-convention
function FocusActivityScreen() {
  const data = useSelector(selectFocusActivity)
  return (
    <>
      <div className="flex justify-center items-center flex-col sm:w-[80%] w-full">
        <SectionDivider
          textHeading="Focus Activities Section"
          routePath="/user/view-all-focus-activity"
        />
        <div className="flex flex-wrap gap-6 justify-center sm:justify-center w-full my-3">
          {!data || data.length === 0 ? (
            <NoDataComponent message="No focus activity available at the moment" />
          ) : null}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {data?.slice(0, 3)?.map((item, index) => (
              <InformationCard
                key={index}
                fromDate={item.fromDate}
                toDate={item.toDate}
                textHeading={item.title}
                textDescription={item.description}
                imagePath={item?.files?.[0]?.publicFilePath || ""}
                id={item._id}
                readMoreRouting="/user/view-focus-activity"
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default FocusActivityScreen;

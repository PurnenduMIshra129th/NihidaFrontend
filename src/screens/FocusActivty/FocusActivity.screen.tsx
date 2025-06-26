import { useEffect,useState } from "react";

import InformationCard from "../../components/Cards/InformationCard"
import NoDataComponent from "../../components/EmptyState/NoData"
import SectionDivider from "../../components/SectionDivider/SectionDivider"
import useFetch from "../../hooks/useFetch";
import { IFocusActivityApiData } from "../../types/api/api.type";

// eslint-disable-next-line @typescript-eslint/naming-convention
function FocusActivityScreen() {
  const { data } = useFetch<IFocusActivityApiData[]>("focusActivity/getAllFocusActivity");
  const [apiData, setApiData] = useState<IFocusActivityApiData[]>();

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
        <SectionDivider textHeading="Focus Activity Section" routePath="/users/view-all-blog"/>
        <div className="flex flex-wrap gap-6 justify-center sm:justify-center w-full my-3">
          {!apiData || apiData.length === 0 ? (
            <NoDataComponent message="No focus activity available at the moment" />
          ) : null}
          {apiData?.slice(0, 3)?.map((item, index) => (
            <InformationCard
              key={index}
              textTime={item.createdAt}
              textHeading={item.title}
              textDescription={item.description}
              imagePath={item?.files?.[0]?.publicFilePath || ""}
              id={item._id}
              readMoreRouting="/users/blog"
            />
          ))}
        </div>
      </div>
   </>
  )
}

export default FocusActivityScreen
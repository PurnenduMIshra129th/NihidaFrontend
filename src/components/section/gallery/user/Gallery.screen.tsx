import { useSelector } from "react-redux";

import { selectGallery } from "../../../../contexts/slice/getAllGallery.slice";
import InformationCard from "../../../Cards/InformationCard";
import NoDataComponent from "../../../EmptyState/NoData";
import SectionDivider from "../../../SectionDivider/SectionDivider";

// eslint-disable-next-line @typescript-eslint/naming-convention
function GalleryScreen() {
  const data = useSelector(selectGallery);
  return (
    <>
      <div className="flex justify-center items-center flex-col sm:w-[80%] w-full">
        <SectionDivider
          textHeading="Gallery Section"
          routePath="/user/view-all-gallery"
        />
        <div className="flex flex-wrap gap-6 justify-center sm:justify-center w-full my-3">
          {!data || data.length === 0 ? (
            <NoDataComponent message="No Gallery available at the moment" />
          ) : null}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {data?.slice(0, 3)?.map((item, index) => (
              <InformationCard
                key={index}
                textTime={item.createdAt}
                textHeading={item.title}
                textDescription={item.description}
                imagePath={item?.files?.[0]?.publicFilePath || ""}
                id={item._id}
                readMoreRouting="/user/view-gallery"
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default GalleryScreen;

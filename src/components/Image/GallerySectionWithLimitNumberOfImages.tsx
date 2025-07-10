import { useNavigate } from "react-router";

import { IGallerySectionWithLimitNumberOfImagesProps } from "../../types/component/component.types";
import NoDataComponent from "../EmptyState/NoData";
import ImageCardGallery from "./ImageCardGallery_variant_1";

// eslint-disable-next-line @typescript-eslint/naming-convention
function GallerySectionWithLimitNumberOfImages(
  props: IGallerySectionWithLimitNumberOfImagesProps
) {
  const { files = [] } = props;

  const navigate = useNavigate();
  const handleViewAll = () => {
    navigate("/user/view-all-image", {
      state: { files },
    });
  };

  if (files?.length === 0) {
    return <NoDataComponent message="No Images Available." />;
  }
  return (
    <>
      <div className="relative">
        {/* Top-right button */}
        <div className="absolute top-0 right-0 z-10">
          <button
            onClick={handleViewAll}
            className="mt-2 mr-2 px-5 py-1.5 text-sm font-medium text-custom_orange_1 border border-custom_orange_1 rounded-md hover:bg-custom_orange_1 hover:text-white transition duration-200"
          >
            View All Images
          </button>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8 pt-12">
          <ImageCardGallery
            text="AR"
            imagePath={files?.[0]?.publicFilePath || ""}
          />
          <ImageCardGallery
            colSpan="md:col-span-2"
            text="Dev"
            imagePath={files?.[1]?.publicFilePath || ""}
          />
          <ImageCardGallery
            colSpan="md:col-span-2"
            text="Retro"
            imagePath={files?.[2]?.publicFilePath || ""}
          />
          <ImageCardGallery
            text="VR"
            imagePath={files?.[3]?.publicFilePath || ""}
          />
        </div>
      </div>
    </>
  );
}

export default GallerySectionWithLimitNumberOfImages;

import { IGalleryScreenBySectionProps } from "../../types/component/component.types";
import { formatToLocalTime } from "../../utils/util";
import Heading_1 from "../Text/Heading_1";
import Typography from "../Text/Typography";
import ImageCardGallery_variant_1 from "./ImageCardGallery_variant_1";

// eslint-disable-next-line @typescript-eslint/naming-convention
function GalleryScreenBySection(props: IGalleryScreenBySectionProps) {
  const {
    heading = "",
    description = "",
    createdAt = "",
    imagePaths = [],
  } = props;
  return (
    <>
      <div className="bg-white  h-full py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12 ">
            <div className="flex md:items-center gap-12 pt-[6rem] justify-center flex-wrap md:flex-nowrap">
              <Heading_1 text={heading} className="text-custom_orange_1" />
              <Typography text={description} className="break-all" />
            </div>
          </div>
          <div className="w-full flex justify-end">
          <div className="bg-custom_orange_2 p-4 mt-6 rounded-2xl w-fit my-5">
            <Typography
              text={formatToLocalTime(createdAt)}
              className=" text-custom_orange_1 lg:text-sm "
            />
          </div>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
            <ImageCardGallery_variant_1 text="AR" imagePath={imagePaths?.[0] || ""} />
            <ImageCardGallery_variant_1
              colSpan="md:col-span-2"
              text="Dev"
              imagePath={imagePaths?.[1] || ""}
            />
            <ImageCardGallery_variant_1
              colSpan="md:col-span-2"
              text="Retro"
              imagePath={imagePaths?.[2] || ""}
            />
            <ImageCardGallery_variant_1 text="VR" imagePath={imagePaths?.[3] || ""} />
          </div>
        </div>
      </div>
    </>
  );
}

export default GalleryScreenBySection;

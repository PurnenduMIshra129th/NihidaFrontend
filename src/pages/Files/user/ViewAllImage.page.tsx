import { useLocation } from "react-router";

import EmptyState from "../../../components/EmptyState/EmptyState";
import ImageCardGallery_variant_2 from "../../../components/Image/ImageCardGallery_variant_2";
import { IFile } from "../../../types/component/component.types";

// eslint-disable-next-line @typescript-eslint/naming-convention
function ViewAllImagePage() {
  const location = useLocation();
  const files: IFile[] = location?.state?.files || [];
  if (files && files?.length == 0) {
    return <EmptyState />;
  }
  return (
    <>
      <div className="max-w-7xl mx-auto pt-[8rem] pb-16 px-4">
        <h1 className="text-3xl font-bold text-custom_orange_1 mb-2 text-center">
          All Images
        </h1>
        <p className="text-gray-600 text-sm text-center mb-8">
          Browse through all uploaded images related to the program.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {files?.map((file: IFile, index: number) => (
            <ImageCardGallery_variant_2
              key={index}
              imagePath={file.publicFilePath}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default ViewAllImagePage;

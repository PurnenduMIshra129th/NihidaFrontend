import { useState } from "react";

import { IImageCardGalleryProps } from "../../types/component/component.types";
import Image from "./Image";
import ImagePreviewModal from "./ImagePreviewModal";

// eslint-disable-next-line @typescript-eslint/naming-convention
function ImageCardGallery_variant_1(props: IImageCardGalleryProps) {
  const { colSpan, text, imagePath = "" } = props;
  const [showPreview, setShowPreview] = useState(false);
  const handleClose = () => {
    setShowPreview(false);
  };
  return (
    <div
      className={`group relative flex h-48 md:h-80 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg cursor-pointer ${colSpan}`}
      onClick={() => {
        if (!showPreview) setShowPreview(true);
      }}
    >
      <Image
        imagePath={imagePath}
        className="absolute inset-0 h-full object-center transition duration-200 group-hover:scale-110"
      />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

      <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
        {text}
      </span>
      <ImagePreviewModal
        imageUrl={imagePath}
        onClose={handleClose}
        isOpen={showPreview}
      />
    </div>
  );
}

export default ImageCardGallery_variant_1;

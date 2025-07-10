import { useState } from "react";

import { IImageCardGalleryVariant2 } from "../../types/component/component.types";
import Image from "./Image";
import ImagePreviewModal from "./ImagePreviewModal";

// eslint-disable-next-line @typescript-eslint/naming-convention
function ImageCardGallery_variant_2(props:IImageCardGalleryVariant2) {
    const {imagePath =''} = props
    const [showPreview, setShowPreview] = useState(false);
  return (
    <>
      <div className="group cursor-pointer relative">
        <Image className="w-full h-48 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105" imagePath={imagePath}/>
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <button className="bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors" onClick={() => setShowPreview(true)}>
            View
          </button>
        </div>
      </div>
      <ImagePreviewModal imageUrl={imagePath} isOpen={showPreview} onClose={() => setShowPreview(false)}/>
    </>
  );
}

export default ImageCardGallery_variant_2;

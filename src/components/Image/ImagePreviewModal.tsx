import { IImagePreviewModalProps } from "../../types/component/component.types";

// eslint-disable-next-line @typescript-eslint/naming-convention
const ImagePreviewModal = (props: IImagePreviewModalProps) => {
  const { imageUrl = "", onClose = () => {}, isOpen = false } = props;
  
  if (isOpen == false) return null;
  return (
    <>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      >
          <button
        type="button"
        onClick={onClose}
        className="absolute z-60 top-4 right-4 text-white bg-black/40 hover:bg-black/60 rounded-full p-2 transition duration-200"
        aria-label="Close"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
        <img
          src={imageUrl}
          alt="Preview"
          className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-xl transition-transform duration-300 scale-100 hover:scale-105"
          onClick={(e) => e.stopPropagation()}
        />
      </div>
    
    </>
  );
};

export default ImagePreviewModal;

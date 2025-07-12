import { useState } from "react";

import { defaultImage } from "../../utils/constant";

// eslint-disable-next-line @typescript-eslint/naming-convention
function Image({
  imagePath = defaultImage,
  className = "",
}: {
  imagePath: string;
  className?: string;
}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => setIsLoaded(true);
  const handleError = () => {
    setHasError(true);
    setIsLoaded(true);
  };

  const imageSrc = imagePath === "" || hasError ? defaultImage : imagePath;

  return (
    <>
    <div className="relative h-auto w-full">
      {!isLoaded && (
        <div className="absolute top-0 left-0 h-full w-full animate-pulse bg-gray-200 rounded-lg" />
      )}
      <img
        src={imageSrc}
        alt="No image found"
        loading="lazy"
        onLoad={handleLoad}
        onError={handleError}
        className={`h-full w-full object-cover rounded-lg transition-opacity duration-300 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } ${className}`}
      />
    </div>
      {/* <img
        onError={handleError}
        onLoad={handleLoad}
        loading="lazy"
        className={`h-full w-full object-cover rounded-lg transition-opacity duration-300 ${className}`}
        src={imageSrc}
        alt="No image Found"
      /> */}
    </>
  );
}

export default Image;

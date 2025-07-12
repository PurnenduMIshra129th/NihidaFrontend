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
      {!isLoaded && (
        <div className="absolute top-0 left-0 h-full w-full animate-pulse bg-gray-200 rounded-lg" />
      )}
      <img
        loading="lazy"
        className={`w-full object-cover ${className}`}
        src={imageSrc}
        onLoad={handleLoad}
        onError={handleError}
        alt="No image Found"
      />
    </>
  );
}

export default Image;

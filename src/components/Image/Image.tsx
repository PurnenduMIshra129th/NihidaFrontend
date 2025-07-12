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
//   const handleLoad = () => {
//     setTimeout(() => {
//       setIsLoaded(true);
//     }, 3000);
//   };
  const handleError = () => {
    setHasError(true);
    setIsLoaded(true);
  };

  const imageSrc = imagePath === "" || hasError ? defaultImage : imagePath;

  return (
    <>
      <img
        loading="lazy"
        className={`w-full object-cover transition-opacity duration-500 ${
          isLoaded ? "opacity-100" : "opacity-20 animate-pulse bg-orange-100"
        } ${className}`}
        src={imageSrc}
        onLoad={handleLoad}
        onError={handleError}
        alt="No image Found"
      />
    </>
  );
}

export default Image;

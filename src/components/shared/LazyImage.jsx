// src/components/LazyImage.jsx

import { Image } from "astro:assets";
import React, { useState } from "react";

function LazyImage(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  const handleImageError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  return (
    <>
      {isLoading && (
        <div className="skeleton-loader">
          {/* Placeholder content while image is loading */}
        </div>
      )}
      {!hasError ? (
        <img
          src={props.src}
          alt={props.alt}
          onLoad={handleImageLoad}
          onError={handleImageError}
        />
      ) : (
        <img src={props.fallbackSrc} alt={props.alt} />
      )}
    </>
  );
}

export default LazyImage;

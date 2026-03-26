import React, { useState, useEffect } from 'react';
import projects from './ProjectsObject';
import LoadingSpinner from '../layout/LoadingSpinner';

interface LargeScreenWebsiteProjectImagesProps {
  selectedProject: (typeof projects)[0];
  images: string[];
  currentImageIndex: number;
  loading: boolean;
  imageOnLoad: () => void;
}

const LargeScreenWebsiteProjectImages: React.FC<
  LargeScreenWebsiteProjectImagesProps
> = ({ currentImageIndex, images, loading, imageOnLoad }) => {
  const [imageLoading, setImageLoading] = useState(true);

  useEffect(() => {
    setImageLoading(true);
  }, [currentImageIndex]);

  return (
    <div
      className={`align-start flex h-[60vh] max-h-[60vh] w-[60vw] flex-col items-start justify-start overflow-y-auto rounded-lg`}
    >
      {(loading || imageLoading) && (
        <div className="flex h-full w-full items-center justify-center bg-orangeflame bg-opacity-10">
          <LoadingSpinner />
        </div>
      )}
      {/* eslint-disable-next-line  */}
      <img
        src={images?.[currentImageIndex]}
        alt={`Image ${currentImageIndex}`}
        style={{
          display: loading || imageLoading ? 'none' : 'flex',
          borderRadius: '10px',
          width: 'auto',
          height: 'auto',
        }}
        onLoad={() => {
          setImageLoading(false);
          imageOnLoad();
        }}
      />
    </div>
  );
};

export default LargeScreenWebsiteProjectImages;

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import projects from '@/data/projects';
import LoadingSpinner from '../ui/LoadingSpinner';

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
    <div className="relative h-[60vh] max-h-[60vh] w-[60vw] items-center justify-center overflow-hidden rounded-lg bg-red-800 bg-opacity-50 align-middle">
      {(loading || imageLoading) && (
        <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-orangeflame bg-opacity-10">
          <LoadingSpinner />
        </div>
      )}
      {images?.[currentImageIndex] && (
        <>
          <Image
            src={images[currentImageIndex]}
            alt={`Project screenshot ${currentImageIndex + 1}`}
            fill
            style={{
              objectFit: 'contain',
              borderRadius: '10px',
              opacity: loading || imageLoading ? 0 : 1,
              justifyContent: 'center',
              alignItems: 'center',
              paddingLeft: '50%',
            }}
            onLoad={() => {
              setImageLoading(false);
              imageOnLoad();
            }}
          />
          <h1>HELLO</h1>
        </>
      )}
    </div>
  );
};

export default LargeScreenWebsiteProjectImages;

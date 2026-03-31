import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import projects from '@/data/projects';
import LoadingSpinner from '../../ui/LoadingSpinner';

interface DesktopWebsiteImagesProps {
  selectedProject: (typeof projects)[0];
  images: string[];
  currentImageIndex: number;
  loading: boolean;
  imageOnLoad: () => void;
}

const DesktopWebsiteImages: React.FC<DesktopWebsiteImagesProps> = ({
  currentImageIndex,
  images,
  loading,
  imageOnLoad,
}) => {
  const [imageLoading, setImageLoading] = useState(true);

  useEffect(() => {
    setImageLoading(true);
  }, [currentImageIndex]);

  return (
    <div
      className={`align-start relative flex h-[60vh] max-h-[60vh] w-[60vw] flex-col items-start justify-start overflow-y-auto rounded-lg`}
    >
      {(loading || imageLoading) && (
        <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-orangeflame bg-opacity-10">
          <LoadingSpinner />
        </div>
      )}
      {images?.[currentImageIndex] && (
        <Image
          src={images[currentImageIndex]}
          alt={`Image ${currentImageIndex}`}
          height={1000}
          width={1000}
          sizes="(max-width: 768px) 75vw, (max-width: 1200px) 50vw, 30vw"
          style={{
            display: loading || imageLoading ? 'none' : 'flex',
            borderRadius: '10px',
            justifyContent: 'center',
          }}
          onLoad={() => {
            setImageLoading(false);
            imageOnLoad();
          }}
        />
      )}
    </div>
  );
};

export default DesktopWebsiteImages;

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import LoadingSpinner from '../../ui/LoadingSpinner';

interface TabletWebsiteImagesProps {
  images: string[];
  currentImageIndex: number;
  imageOnLoad: () => void;
}

const TabletWebsiteImages: React.FC<TabletWebsiteImagesProps> = ({
  images,
  currentImageIndex,
  imageOnLoad,
}) => {
  const [imageLoading, setImageLoading] = useState(true);

  useEffect(() => {
    setImageLoading(true);
  }, [currentImageIndex]);

  return (
    <div className="mx-auto flex h-auto max-h-[70vh] min-h-[40vh] w-full min-w-[100%] items-center justify-center self-center overflow-x-hidden overflow-y-scroll rounded-lg p-8 align-middle md:max-h-[55vh] md:p-0 lg:max-h-[40vh]">
      <div className="flex h-full w-full justify-center">
        <div className="h-full w-full overflow-y-auto overflow-x-hidden rounded-lg">
          <div
            className={`mx-auto h-auto w-full flex-grow justify-center pl-20 sm:mx-0 sm:pl-0`}
          >
            {imageLoading && (
              <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-orangeflame bg-opacity-10 align-middle">
                <LoadingSpinner />
              </div>
            )}
            {images[currentImageIndex] && (
              <Image
                src={images[currentImageIndex]}
                alt={`Image ${currentImageIndex}`}
                height={1000}
                width={800}
                sizes="(max-width: 768px) 75vw, (max-width: 1200px) 50vw, 30vw"
                style={{
                  display: imageLoading ? 'none' : 'block',
                  borderRadius: '10px',
                  maxHeight: 'auto',
                  maxWidth: '65vw',
                  justifyContent: 'center',
                }}
                onLoad={() => {
                  setImageLoading(false);
                  imageOnLoad();
                }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabletWebsiteImages;

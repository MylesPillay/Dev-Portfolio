import React, { useState, useEffect } from 'react';
import LoadingSpinner from '../layout/LoadingSpinner';

interface WebsiteProjectImagesProps {
  images: string[];
  currentImageIndex: number;
  imageOnLoad: () => void;
}

const WebsiteProjectImages: React.FC<WebsiteProjectImagesProps> = ({
  images,
  currentImageIndex,
  imageOnLoad,
}) => {
  const [imageLoading, setImageLoading] = useState(true);

  useEffect(() => {
    setImageLoading(true);
  }, [currentImageIndex]);

  return (
    <div className="flex h-auto max-h-[70vh] min-h-[40vh] w-full min-w-[80%] items-start justify-center self-center overflow-x-hidden overflow-y-scroll rounded-lg p-8 align-middle md:max-h-[55vh] md:p-0 lg:max-h-[40vh]">
      <div className="flex h-full w-full justify-center">
        <div className="h-full w-full overflow-y-auto overflow-x-hidden rounded-lg">
          <div className={`h-auto w-full flex-grow justify-center`}>
            {imageLoading && (
              <div
                className={`mr-4 flex h-full min-h-[70vh] items-center justify-center rounded-lg bg-orangeflame bg-opacity-10 align-middle md:min-h-[55vh] lg:min-h-[40vh]`}
              >
                <LoadingSpinner />
              </div>
            )}
            {/* eslint-disable-next-line  */}
            <img
              src={images[currentImageIndex]}
              alt={`Image ${currentImageIndex}`}
              style={{
                display: imageLoading ? 'none' : 'block',
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
        </div>
      </div>
    </div>
  );
};

export default WebsiteProjectImages;

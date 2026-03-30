import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import LoadingSpinner from '../ui/LoadingSpinner';

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
    <div className="mx-auto flex h-auto max-h-[70vh] min-h-[40vh] w-full min-w-[100%] items-center justify-center self-center overflow-x-hidden overflow-y-scroll rounded-lg p-8 align-middle md:max-h-[55vh] md:p-0 lg:max-h-[40vh]">
      <div className="flex h-full w-full justify-center">
        <div className="h-full w-full overflow-y-auto overflow-x-hidden rounded-lg">
          <div className="relative h-[60vh] w-full md:h-[55vh] lg:h-[40vh]">
            {imageLoading && (
              <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-orangeflame bg-opacity-10 align-middle">
                <LoadingSpinner />
              </div>
            )}
            <Image
              src={images[currentImageIndex]}
              alt={`Project screenshot ${currentImageIndex + 1}`}
              fill
              style={{
                objectFit: 'contain',
                borderRadius: '10px',
                opacity: imageLoading ? 0 : 1,
                justifyContent: 'center',
                alignItems: 'center',
                paddingLeft: '50%',
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

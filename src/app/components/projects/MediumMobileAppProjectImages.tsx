'use client';
import React from 'react';
import Image from 'next/image';
import LoadingSpinner from '../ui/LoadingSpinner';

interface MediumMobileAppProjectImagesProps {
  smallMobileScreen?: boolean;
  images: string[];
  currentImageIndex: number;
  loading: boolean;
}

const MediumMobileAppProjectImages: React.FC<
  MediumMobileAppProjectImagesProps
> = ({ smallMobileScreen, images, currentImageIndex, loading }) => {
  const containerStyles = smallMobileScreen
    ? 'w-[49.5%] h-[55vh]'
    : 'w-[32%] h-[55vh]';

  const validImages = images.slice(0, -1);

  return (
    <div
      className={`align-start my-4 flex min-w-[80%] items-center justify-center overflow-x-scroll overflow-y-scroll rounded-lg ${
        smallMobileScreen
          ? 'h-auto max-h-[60vh] min-h-[35vh] w-[98%] px-6'
          : 'h-auto max-h-[60vh] min-h-[50vh] w-[85%]'
      }`}
    >
      {loading ? (
        <>
          <div
            className={`hidden h-full min-h-[44vh] w-[100vw] flex-row justify-start space-x-6 overflow-x-hidden pl-2 md:flex`}
          >
            <div
              className={`flex w-[65%] flex-grow items-center justify-center rounded-lg bg-orangeflame bg-opacity-10 transition-transform duration-300`}
            >
              <LoadingSpinner />
            </div>
            <div
              className={`flex w-[65%] flex-grow items-center justify-center rounded-lg bg-orangeflame bg-opacity-10 transition-transform duration-300`}
            >
              <LoadingSpinner />
            </div>
            <div
              className={`flex w-[65%] flex-grow items-center justify-center rounded-lg bg-orangeflame bg-opacity-10 transition-transform duration-300`}
            >
              <LoadingSpinner />
            </div>
          </div>
          <div
            className={`flex h-full min-h-[44vh] w-[80vw] flex-row justify-between space-x-6 overflow-x-hidden pl-2 md:hidden`}
          >
            <div
              className={`flex w-[45%] max-w-[40%] flex-grow items-center justify-center rounded-lg bg-orangeflame bg-opacity-10 transition-transform duration-300`}
            >
              <LoadingSpinner />
            </div>
            <div
              className={`flex w-[45%] max-w-[40%] flex-grow items-center justify-center rounded-lg bg-orangeflame bg-opacity-10 transition-transform duration-300`}
            >
              <LoadingSpinner />
            </div>
          </div>
        </>
      ) : (
        <div className="flex flex-row items-start justify-between space-x-4 transition-transform duration-300">
          {validImages.length > 0 &&
            validImages.map((image, index) => (
              <div
                key={index}
                className={`relative flex-shrink-0 flex-grow ${containerStyles} transition-transform duration-300`}
                style={{
                  transform: `translateX(-${currentImageIndex * 107.2}%)`,
                }}
              >
                <Image
                  src={image}
                  alt={`Mobile app screenshot ${index + 1}`}
                  fill
                  style={{
                    objectFit: 'contain',
                    borderRadius: '10px',
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingLeft: '50%',
                  }}
                />
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default MediumMobileAppProjectImages;

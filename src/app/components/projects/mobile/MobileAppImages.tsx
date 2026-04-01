'use client';
import React from 'react';
import Image from 'next/image';
import LoadingSpinner from '../../ui/LoadingSpinner';

interface MobileAppImagesProps {
  smallMobileScreen?: boolean;
  images: string[];
  currentImageIndex: number;
  loading: boolean;
}

const MobileAppImages: React.FC<MobileAppImagesProps> = ({
  smallMobileScreen,
  images,
  currentImageIndex,
  loading,
}) => {
  const containerStyles = smallMobileScreen
    ? 'w-[49.5%] h-auto'
    : 'w-[32%] h-auto';

  const validImages = images.slice(0, -1);

  return (
    <div
      className={`align-start my-4 flex h-full min-w-[80%] items-center justify-center overflow-x-scroll overflow-y-scroll rounded-lg ${
        smallMobileScreen
          ? 'h-auto max-h-[65vh] min-h-[50vh] w-[98%] px-6'
          : 'h-auto max-h-[65vh] min-h-[50vh] w-[85%]'
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
            className={`flex h-full min-h-[45vh] w-[80vw] flex-row justify-between space-x-6 overflow-x-hidden pl-2 md:hidden`}
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
        <div className="flex h-full flex-row items-start justify-between space-x-4 px-4 py-2 pb-20 transition-transform duration-300">
          {validImages.length > 0 &&
            validImages.map((image, index) => (
              <div
                key={index}
                className={`relative h-auto max-h-[70%] flex-shrink-0 flex-grow ${containerStyles} transition-transform duration-300`}
                style={{
                  transform: `translateX(-${currentImageIndex * 107.2}%)`,
                }}
              >
                <Image
                  src={image}
                  height={500}
                  width={500}
                  alt={`Mobile app screenshot ${index + 1}`}
                  sizes="(max-width: 768px) 75vw, (max-width: 1200px) 50vw, 30vw"
                  style={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: '10px',
                  }}
                />
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default MobileAppImages;

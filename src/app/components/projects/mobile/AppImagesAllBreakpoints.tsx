'use client';
import React from 'react';
import Image from 'next/image';
import LoadingSpinner from '../../ui/LoadingSpinner';

interface AppImagesAllBreakpointsProps {
  hovered: boolean;
  images: string[];
  currentImageIndex: number;
  loading: boolean;
  imageOnLoad: () => void;
}

const AppImagesAllBreakpoints: React.FC<AppImagesAllBreakpointsProps> = ({
  hovered,
  images,
  currentImageIndex,
  loading,
}) => {
  const trimmedImages = images.slice(0, -1);

  return (
    <div className="flex h-auto max-h-[80vh] min-h-[50vh] w-[100%] items-start justify-center self-center overflow-x-hidden overflow-y-scroll rounded-lg pr-2 align-middle">
      {loading ? (
        <div
          className={`flex h-full min-h-[57vh] w-full flex-row justify-start overflow-x-scroll`}
        >
          <div
            className={`mr-4 flex w-[55.5%] flex-grow items-center justify-center space-x-4 rounded-lg bg-orangeflame bg-opacity-10 transition-transform duration-300`}
            style={{
              transform: hovered
                ? `translateX(-${currentImageIndex * 99.5}%)`
                : `translateX(-${0}%)`,
            }}
          >
            <LoadingSpinner />
          </div>
          <div
            className={`flex w-[52%] flex-grow items-center justify-center rounded-lg bg-orangeflame bg-opacity-10 transition-transform duration-300`}
            style={{
              transform: hovered
                ? `translateX(-${currentImageIndex * 99.5}%)`
                : `translateX(-${0}%)`,
            }}
          >
            <LoadingSpinner />
          </div>
        </div>
      ) : (
        <>
          {/* Desktop (lg+): fill layout */}
          <div
            className={`justify-apart hidden h-full w-full flex-row space-x-4 overflow-x-scroll lg:flex`}
          >
            {trimmedImages?.map((image, index) => (
              <div
                key={index}
                className="relative min-h-[50vh] w-[50%] flex-shrink-0 flex-grow transition-transform duration-300"
                style={{
                  transform: hovered
                    ? `translateX(-${currentImageIndex * 99.5}%)`
                    : `translateX(-${0}%)`,
                }}
              >
                <Image
                  src={image}
                  alt={`Mobile app screenshot ${index + 1}`}
                  height={800}
                  width={500}
                  sizes="(max-width: 768px) 75vw, (max-width: 1200px) 50vw, 30vw"
                  style={{
                    objectFit: 'contain',
                    borderRadius: '10px',
                  }}
                />
              </div>
            ))}
          </div>

          {/* Mobile/medium (below lg): explicit dimensions */}
          <div
            className={`justify-apart flex h-full w-full flex-row space-x-4 overflow-x-scroll lg:hidden`}
          >
            {trimmedImages?.map((image, index) => (
              <div
                key={index}
                className="relative mx-auto min-h-[50vh] w-[50%] flex-shrink-0 flex-grow justify-center pl-24 transition-transform duration-300"
                style={{
                  transform: hovered
                    ? `translateX(-${currentImageIndex * 105.5}%)`
                    : `translateX(-${0}%)`,
                }}
              >
                <Image
                  src={image}
                  alt={`Mobile app screenshot ${index + 1}`}
                  height={1000}
                  width={500}
                  sizes="(max-width: 768px) 75vw, (max-width: 1200px) 50vw, 30vw"
                  style={{
                    display: 'block',
                    borderRadius: '10px',
                    justifyContent: 'center',
                  }}
                />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default AppImagesAllBreakpoints;

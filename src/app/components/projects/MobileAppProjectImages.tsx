'use client';
import React from 'react';
import LoadingSpinner from '../ui/LoadingSpinner';

interface MobileImageContainerProps {
  hovered: boolean;
  images: string[];
  currentImageIndex: number;
  loading: boolean;
  imageOnLoad: () => void;
}

const MobileImageContainer: React.FC<MobileImageContainerProps> = ({
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
        <div
          className={`justify-apart flex h-full w-full flex-row space-x-4 overflow-x-scroll`}
        >
          {trimmedImages?.map((image, index) => (
            <div
              key={index}
              className={`w-[50%] flex-shrink-0 flex-grow justify-center transition-transform duration-300`}
              style={{
                transform: hovered
                  ? `translateX(-${currentImageIndex * 99.5}%)`
                  : `translateX(-${0}%)`,
              }}
            >
              {/* eslint-disable-next-line  */}
              <img
                src={image}
                alt={`Image ${index}`}
                style={{
                  display: 'flex',
                  borderRadius: '10px',
                  width: 'auto',
                  height: 'auto',
                }}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MobileImageContainer;

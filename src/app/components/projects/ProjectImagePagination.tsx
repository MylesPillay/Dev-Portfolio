import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface ProjectImagePaginationProps {
  hovered: boolean;
  currentImageIndex: number;
  totalImages: number;
  onPageChange: (index: number) => void;
  onPrevImage: () => void;
  onNextImage: () => void;
}

const ProjectImagePagination: React.FC<ProjectImagePaginationProps> = ({
  hovered,
  currentImageIndex,
  totalImages,
  onPageChange,
  onPrevImage,
  onNextImage,
}) => {
  const getPaginationDots = () => {
    const maxDots = 5;

    const totalDots = Math.min(totalImages, maxDots);

    let startIndex = Math.max(
      0,
      Math.min(
        currentImageIndex - Math.floor(totalDots / 2),
        totalImages - totalDots
      )
    );

    return Array.from({ length: totalDots }, (_, i) => i + startIndex);
  };

  const isFirstImage = currentImageIndex === 0;
  const isLastImage = currentImageIndex === totalImages - 1;

  return (
    <div
      className={`${
        hovered ? 'flex' : 'hidden'
      } mb-12 mt-12 h-auto w-full items-center justify-center rounded-md border-2 border-tealAccent border-opacity-50 bg-slate-500 bg-opacity-20 py-2 align-middle sm:mt-8 sm:w-[80%] md:mt-6 md:w-[90%] lg:mt-4 lg:w-full`}
    >
      <button
        onClick={onPrevImage}
        disabled={isFirstImage}
        className={`mr-4 transform items-center justify-center rounded-full p-2 ${
          isFirstImage ? 'cursor-not-allowed' : ''
        }`}
      >
        <FaChevronLeft color="rgb(255, 115, 22)" size={23} />
      </button>
      {getPaginationDots().map((dotIndex) => (
        <button
          key={dotIndex}
          onClick={() => onPageChange(dotIndex)}
          className={`mx-2 h-2 w-2 rounded-full bg-white bg-opacity-85 ${
            dotIndex === currentImageIndex ? 'shadow-neon-dot' : ''
          }`}
        />
      ))}
      <button
        onClick={onNextImage}
        disabled={isLastImage}
        className={`ml-4 transform items-center justify-center rounded-full p-2 text-white ${
          isLastImage ? 'cursor-not-allowed opacity-75' : 'bg-opacity-25'
        }`}
      >
        <FaChevronRight
          color="rgb(255, 115, 22)"
          size={23}
          strokeWidth={1}
          stroke="white"
        />
      </button>
    </div>
  );
};

export default ProjectImagePagination;

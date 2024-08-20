import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface ProjectImagePaginationProps {
	currentImageIndex: number;
	totalImages: number;
	onPageChange: (index: number) => void;
	onPrevImage: () => void;
	onNextImage: () => void;
}

const ProjectImagePagination: React.FC<ProjectImagePaginationProps> = ({
	currentImageIndex,
	totalImages,
	onPageChange,
	onPrevImage,
	onNextImage
}) => {
	const maxDots = 5;
	const dots = [];

	const startIndex = Math.max(0, currentImageIndex - Math.floor(maxDots / 2));
	const endIndex = Math.min(totalImages - 2, startIndex + maxDots - 1);

	for (let i = startIndex; i <= endIndex; i++) {
		dots.push(
			<button
				key={i}
				onClick={() => onPageChange(i)}
				className={`w-2 h-2 rounded-full mx-1 ${
					i === currentImageIndex
						? "bg-white"
						: "bg-white bg-opacity-50 hover:bg-opacity-100"
				}`}
			/>
		);
	}

	return (
		<div className='flex justify-center align-middle  mt-4'>
			<button
				onClick={onPrevImage}
				disabled={currentImageIndex <= 0}
				className={`transform  text-white p-2 rounded-full mr-4 ${
					currentImageIndex <= 0
						? "opacity-50 cursor-not-allowed"
						: ""
				}`}>
				<FaChevronLeft />
			</button>
			{dots}
			<button
				onClick={onNextImage}
				disabled={currentImageIndex >= totalImages - 2}
				className={`transform  text-white p-2 rounded-full ml-4 ${
					currentImageIndex >= totalImages - 2
						? "opacity-50 cursor-not-allowed"
						: ""
				}`}>
				<FaChevronRight />
			</button>
		</div>
	);
};

export default ProjectImagePagination;

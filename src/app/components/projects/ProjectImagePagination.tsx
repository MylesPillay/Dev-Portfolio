import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

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
	onNextImage
}) => {
	const getPaginationDots = () => {
		const maxDots = 5;
		// Calculate the number of dots to display, capped at maxDots
		const totalDots = Math.min(totalImages, maxDots);

		// Calculate the sliding window for the dots
		let startIndex = Math.max(
			0,
			Math.min(
				currentImageIndex - Math.floor(totalDots / 2),
				totalImages - totalDots
			)
		);

		// Create an array representing the dot indices
		return Array.from({ length: totalDots }, (_, i) => i + startIndex);
	};

	// Determine if the previous or next button should be disabled
	const isFirstImage = currentImageIndex === 0;
	const isLastImage = currentImageIndex === totalImages - 1;

	return (
		<div
			className={`${
				hovered ? "flex" : "hidden"
			} justify-center align-middle h-auto items-center rounded-md py-2 bg-slate-500 bg-opacity-20 w-full  border-2 border-tealAccent border-opacity-50 mt-4`}>
			<button
				onClick={onPrevImage}
				disabled={isFirstImage}
				className={`transform p-2 justify-center items-center rounded-full mr-4 ${
					isFirstImage ? " cursor-not-allowed " : ""
				}`}>
				<FaChevronLeft color='rgb(255, 115, 22)' size={23} />
			</button>
			{getPaginationDots().map((dotIndex) => (
				<button
					key={dotIndex}
					onClick={() => onPageChange(dotIndex)}
					className={`w-2 h-2 rounded-full mx-2 bg-white bg-opacity-85 ${
						dotIndex === currentImageIndex ? "shadow-neon-dot" : ""
					}`}
				/>
			))}
			<button
				onClick={onNextImage}
				disabled={isLastImage}
				className={`transform text-white p-2 justify-center  items-center rounded-full ml-4 ${
					isLastImage
						? "opacity-75 cursor-not-allowed "
						: " bg-opacity-25"
				}`}>
				<FaChevronRight
					color='rgb(255, 115, 22)'
					size={23}
					strokeWidth={1}
					stroke='white'
				/>
			</button>
		</div>
	);
};

export default ProjectImagePagination;

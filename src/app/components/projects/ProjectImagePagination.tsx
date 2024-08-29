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
	const maxDots = 5;
	const isFirstImage = currentImageIndex === 0;
	const isLastImage = currentImageIndex === totalImages - 2;

	const getPaginationDots = () => {
		const startIndex = Math.max(
			0,
			Math.min(
				currentImageIndex - Math.floor(maxDots / 2),
				totalImages - 1 - maxDots
			)
		);
		return Array.from(
			{ length: Math.min(maxDots, totalImages) },
			(_, i) => i + startIndex
		);
	};

	return (
		<div
			className={`${
				hovered ? "flex" : "hidden"
			} justify-center align-middle h-[8vh] w-full max-w-[70vw] min-w-[15vw] mx-auto items-center rounded-b-xl py-4 `}>
			<button
				onClick={onPrevImage}
				disabled={isFirstImage}
				className={`transform p-2 justify-center items-center rounded-full mr-4 ${
					isFirstImage ? " cursor-not-allowed " : ""
				}`}>
				<FaChevronLeft color='rgb(255, 115, 22' size={23} />
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
					color='rgb(255, 115, 22'
					size={23}
					strokeWidth={1}
					stroke='white'
				/>
			</button>
		</div>
	);
};

export default ProjectImagePagination;

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
	const dots = [];

	const startIndex = Math.max(0, currentImageIndex - Math.floor(maxDots / 2));
	const endIndex = Math.min(totalImages - 2, startIndex + maxDots - 1);

	for (let i = startIndex; i <= endIndex; i++) {
		dots.push(
			<button
				key={i}
				onClick={() => onPageChange(i)}
				className={`w-2.5 h-2.5 rounded-full mx-2   bg-opacity-60 ${
					i === currentImageIndex ? "shadow-neon" : ""
				}`}
				style={{
					backgroundColor: "#071E2299"
				}}
			/>
		);
	}

	return (
		<div
			className={`${
				hovered ? "flex" : "hidden"
			} justify-center align-middle h-[8vh] w-auto items-center rounded-b-xl py-4 bg-black bg-opacity-50`}>
			<button
				onClick={onPrevImage}
				disabled={currentImageIndex <= 0}
				className={`transform  p-2 rounded-full mr-4 ${
					currentImageIndex <= 0
						? "opacity-50 cursor-not-allowed"
						: ""
				}`}>
				<FaChevronLeft color='#A7F3D0' size={22} />
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
				<FaChevronRight color='#A7F3D0' size={22} />
			</button>
		</div>
	);
};

export default ProjectImagePagination;

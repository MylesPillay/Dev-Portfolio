import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import projects from "./ProjectsObject";

interface ProjectControlsProps {
	selectedProject: (typeof projects)[0];
	viewMode: "web" | "mobile";
	currentImageIndex: number;
	onViewModeChange: (mode: "web" | "mobile") => void;
	onPrevImage: () => void;
	onNextImage: () => void;
}

const ProjectControls: React.FC<ProjectControlsProps> = ({
	onPrevImage,
	onNextImage
}) => {
	return (
		<div className='w-full flex-col'>
			<div className='flex flex-row justify-evenly'>
				<button
					onClick={onPrevImage}
					className='transform bg-black bg-opacity-50 text-white p-2 rounded-full'>
					<FaChevronLeft />
				</button>

				<button
					onClick={onNextImage}
					className='transform bg-black bg-opacity-50 text-white p-2 rounded-full'>
					<FaChevronRight />
				</button>
			</div>
		</div>
	);
};

export default ProjectControls;

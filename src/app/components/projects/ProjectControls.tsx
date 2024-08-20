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
	selectedProject,
	viewMode,
	currentImageIndex,
	onViewModeChange,
	onPrevImage,
	onNextImage
}) => {
	return (
		<div className='w-[20%] justify-end flex-col space-y-2'>
			{selectedProject.images.web &&
				selectedProject.images.web.length > 0 && (
					<button
						className='w-full h-auto bg-slate-800 text-white align-middle justify-center items-center text-center rounded-md p-2 hover:bg-slate-600'
						onClick={() => onViewModeChange("web")}>
						Desktop
					</button>
				)}
			{selectedProject.images.mobile &&
				selectedProject.images.mobile.length > 0 && (
					<button
						onClick={() => onViewModeChange("mobile")}
						className='w-full h-auto bg-slate-800 text-white align-middle justify-center items-center text-center rounded-md p-2 hover:bg-slate-600 mb-12'>
						Mobile
					</button>
				)}
			<div className='flex flex-row justify-center space-x-2'>
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

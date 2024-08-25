import React from "react";
import { Project } from "./ProjectsObject";

interface ProjectsHeaderProps {
	selectedProject: Project;
	viewMode: "web" | "mobile";
	setViewMode: (mode: "web" | "mobile") => void;
	isImageContainerHovered: boolean;
	setIsImageContainerHovered: (hovered: boolean) => void;
}

const ProjectsHeader: React.FC<ProjectsHeaderProps> = ({
	selectedProject,
	viewMode,
	setViewMode,
	isImageContainerHovered,
	setIsImageContainerHovered
}) => {
	return (
		<div
			className='flex flex-row justify-between w-full my-2 pl-8 pr-8 pt-6'
			onMouseEnter={() => {
				if (isImageContainerHovered) {
					setIsImageContainerHovered(false);
				}
				return;
			}}>
			<h1 className='text-2xl font-bold text-left text-white justify-start align-text-bottom w-[15%] h-full mt-3'>
				PROJECTS
			</h1>
			<h1 className='text-4xl font-bold  w-full max-w-[80vw] ml-[4vw] text-emerald-200 mt-1'>
				{selectedProject.name.toUpperCase()}
				{/* <span className='text-2xl ml-4 text-white'>
					{selectedProject.tagline}
				</span> */}
			</h1>
			<div className='flex flex-row justify-center items-center space-x-4'>
				<button
					className={`w-1/2 h-auto text-white text-lg text-left rounded-md p-2 ${
						selectedProject.images.web.length > 0
							? "bg-transparent cursor-pointer"
							: "bg-transparent opacity-50 cursor-default"
					} ${
						viewMode === "web" ? "underline underline-offset-8" : ""
					}`}
					onClick={() => setViewMode("web")}
					disabled={selectedProject.images.web.length === 0}>
					Desktop
				</button>

				<div className='h-[90%] w-px bg-white vertical-align-middle'></div>

				<button
					className={`w-1/2 h-auto text-slate-300 text-lg text-right rounded-md p-2  ${
						selectedProject.images.mobile.length > 0
							? "bg-transparent cursor-pointer"
							: "bg-transparent opacity-50 cursor-default"
					} ${
						viewMode === "mobile"
							? "underline underline-offset-4"
							: ""
					}`}
					onClick={() => setViewMode("mobile")}
					disabled={selectedProject.images.mobile.length === 0}>
					Mobile
				</button>
			</div>
		</div>
	);
};

export default ProjectsHeader;

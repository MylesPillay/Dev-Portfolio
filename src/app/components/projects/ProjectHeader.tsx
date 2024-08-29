"use client";
import React, { useState } from "react";
import { Project } from "./ProjectsObject";
import projects from "./ProjectsObject";
import ImagesFormatSelector from "./ImagesFormatSelector";

interface ProjectsHeaderProps {
	selectedProject: Project;
	viewMode: "web" | "mobile";
	setViewMode: (mode: "web" | "mobile") => void;
	isImageContainerHovered: boolean;
	setIsImageContainerHovered: (hovered: boolean) => void;
	onProjectClick: (index: number) => void;
}

const ProjectsHeader: React.FC<ProjectsHeaderProps> = ({
	selectedProject,
	viewMode,
	setViewMode,
	isImageContainerHovered,
	setIsImageContainerHovered,
	onProjectClick
}) => {
	const [projectsMenuOpen, setProjectsMenuOpen] = useState(false);

	return (
		<div
			className='flex flex-row justify-start items-center align-middle w-full sm:my-2 my-0 sm:pl-8 sm:pr-8'
			onMouseEnter={() => {
				if (isImageContainerHovered) {
					setIsImageContainerHovered(false);
				}
			}}>
			{/* PROJECTS Button */}
			<div className='flex flex-col justify-between w-auto px-6'>
				<button
					onClick={() => setProjectsMenuOpen(!projectsMenuOpen)}
					className='lg:pointer-events-none lg:cursor-default'
					disabled={window.innerWidth >= 1024}>
					<h1 className='text-2xl font-bold text-left w-auto bg-green-200  justify-start align-text-bottom  text-orangeflame'>
						PROJECTS
					</h1>
				</button>

				{/* Conditional Rendering of Project List */}
				{projectsMenuOpen && window.innerWidth < 1024 ? (
					<ul className='flex flex-col font-medium w-full pl-2 pt-2'>
						{projects.map((project, index) => (
							<li
								key={index}
								className={`cursor-pointer mb-2 text-left md:text-lg text-md ${
									selectedProject.name === project.name
										? "text-white font-bold md:text-xl text-lg"
										: "hover:text-white hover:text-opacity-80 text-emerald-200"
								}`}
								onClick={() => onProjectClick(index)}>
								{project.name}
							</li>
						))}
					</ul>
				) : null}
			</div>

			{/* Project Name Field */}
			<h1 className='text-4xl font-bold md:flex sm:flex-grow hidden  justify-start w-full text-left max-w-[90vw] ml-[4vw] mt-1 text-white'>
				{selectedProject.name.toUpperCase()}
			</h1>

			{/* Image Format Selector */}
			<ImagesFormatSelector
				selectedProject={selectedProject}
				viewMode={viewMode}
				setViewMode={setViewMode}
				headerPosition={true}
			/>

			{/* Fallback Element for Flex Positioning */}
		</div>
	);
};

export default ProjectsHeader;

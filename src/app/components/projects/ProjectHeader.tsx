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
			<div className='flex flex-col justify-between w-auto '>
				<button
					onClick={() => setProjectsMenuOpen(!projectsMenuOpen)}
					className='lg:pointer-events-none lg:cursor-default'
					disabled={window.innerWidth >= 1100}>
					<h1 className='text-2xl font-bold text-left w-auto  justify-start align-text-bottom  text-orangeflame'>
						PROJECTS
					</h1>
				</button>
				<div className='fixed  top-4 z-50'>
					{projectsMenuOpen && (
						<div className=' fixed left-0 inset-0 p-8 h-[38vh] w-[50%] ml-[10.7vw] bg-deepBlueBg z-40 border-emerald-200 border-x border-b'>
							<div className='flex flex-col items-start p-2 h-[10%]'>
								<ul className='flex flex-col font-medium w-full pl-2 pt-2'>
									{projects.map((project, index) => (
										<li
											key={index}
											className={`cursor-pointer mb-2 text-left md:text-lg text-md ${
												selectedProject.name ===
												project.name
													? "text-white font-bold md:text-xl text-lg"
													: "hover:text-white hover:text-opacity-80 text-emerald-200"
											}`}
											onClick={() => {
												onProjectClick(index);
												setProjectsMenuOpen(
													!projectsMenuOpen
												);
											}}>
											{project.name}
										</li>
									))}

									<li
										className='cursor-pointer mb-2 text-right text-lg text-orangeflame font-bold
												 hover:text-white hover:text-opacity-80 '
										onClick={() =>
											setProjectsMenuOpen(false)
										}>
										CLOSE
									</li>
								</ul>
							</div>
						</div>
					)}
				</div>

				{/* Conditional Rendering of Project List */}
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

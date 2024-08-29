"use client";
import React, { useState } from "react";
import { Project } from "./ProjectsObject";
import projects from "./ProjectsObject";

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
			className='flex flex-row justify-between w-full sm:my-2 my-0 sm:pl-8 sm:pr-8 sm:pt-6 pt-0'
			onMouseEnter={() => {
				if (isImageContainerHovered) {
					setIsImageContainerHovered(false);
				}
				return;
			}}>
			<div className='flex flex-col sm:hidden justify-between w-full px-6'>
				<button
					onClick={() => setProjectsMenuOpen(!projectsMenuOpen)}
					className=''>
					<h1
						className='text-2xl font-bold text-left justify-start align-text-bottom w-[15%] h-auto flex sm:hidden text-orangeflame'
						style={{}}>
						PROJECTS
					</h1>
				</button>
				{projectsMenuOpen ? (
					<ul
						className='md:flex flex-col flex sm:hidden
				md:font-medium w-full  pl-2 pt-2'>
						{projects.map((project, index) => (
							<li
								key={index}
								className={`cursor-pointer mb-2 text-left md:text-lg text.md ${
									selectedProject.name === project.name
										? "text-white font-bold md:text-xl text-lg"
										: "hover:text-white hover:text-opacity-80 text-emerald-200"
								}`}
								onClick={() => onProjectClick(index)}>
								{project.name}
							</li>
						))}
					</ul>
				) : (
					<></>
				)}
			</div>

			<h1
				className='text-2xl font-bold text-left justify-start align-text-bottom w-[15%] h-full mt-3 hidden sm:flex text-orangeflame'
				style={{}}>
				PROJECTS
			</h1>

			<h1 className='lg:text-4xl md:text-3xl font-bold md:flex hidden w-full max-w-[80vw] ml-[4vw] mt-1 text-white '>
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
						viewMode === "web"
							? "underline underline-offset-8 text-emerald-200"
							: ""
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
							? "underline underline-offset-4 text-emerald-200"
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

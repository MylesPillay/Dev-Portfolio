"use client";
import React, { useState } from "react";
import { Project } from "./ProjectsObject";
import projects from "./ProjectsObject";
import ImagesFormatSelector from "./ImagesFormatSelector";
import useDeviceScreenSize from "@/app/hooks/useDeviceScreenSize";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars, FaXing } from "react-icons/fa";
import MobileBurgerMenu from "../layout/MobileBurgerMenu";

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

	const [width, height] = useDeviceScreenSize();

	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (
		<div
			className=' sticky top-0 flex flex-grow flex-row justify-start items-baseline align-bottom w-full my-0 sm:pl-8 sm:pr-8 pt-8 pb-2 sm:pb-4 bg-project-title-gradient bg-opacity-100  z-50 '
			onMouseEnter={() => {
				if (isImageContainerHovered) {
					setIsImageContainerHovered(false);
				}
			}}>
			{/* PROJECTS Button */}
			<div className='flex flex-col justify-between w-auto '>
				<button
					onClick={() => {
						setProjectsMenuOpen(!projectsMenuOpen);
						setMobileMenuOpen(false);
					}}
					className='lg:pointer-events-none lg:cursor-default'
					disabled={width >= 1100}>
					<h1 className='text-2xl font-medium text-left w-[10vw] pt-2 sm:pt-0  ml-4   sm:ml-0 justify-start h-auto align-text-bottom  text-orangeflame '>
						PROJECTS
					</h1>
				</button>
				<MobileBurgerMenu
					setProjectsMenuOpen={setProjectsMenuOpen}
					mobileMenuOpen={mobileMenuOpen}
					setMobileMenuOpen={setMobileMenuOpen}
				/>

				{/* Conditional Rendering of Project List */}
			</div>
			{/* Project Name Field */}
			<h1 className='text-4xl font-semibold md:flex sm:flex-grow hidden  justify-start w-full text-left max-w-[90vw] ml-12  text-white'>
				{selectedProject.name.toUpperCase()}
			</h1>
			<MobileBurgerMenu
				setProjectsMenuOpen={setProjectsMenuOpen}
				mobileMenuOpen={mobileMenuOpen}
				setMobileMenuOpen={setMobileMenuOpen}
			/>
			{/* Image Format Selector */}
			<ImagesFormatSelector
				selectedProject={selectedProject}
				viewMode={viewMode}
				setViewMode={setViewMode}
				headerPosition={true}
			/>
			=
		</div>
	);
};

export default ProjectsHeader;

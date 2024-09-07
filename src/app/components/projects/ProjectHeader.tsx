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
	images: any[];
	setIsImageContainerHovered: (hovered: boolean) => void;
	onProjectClick: (index: number) => void;
	projectsMenuOpen: boolean;
	setProjectsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ProjectsHeader: React.FC<ProjectsHeaderProps> = ({
	selectedProject,
	viewMode,
	setViewMode,
	images,
	isImageContainerHovered,
	setIsImageContainerHovered,
	onProjectClick,
	projectsMenuOpen,
	setProjectsMenuOpen
}) => {
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
						console.log("PROJECTS MENU OPEN: ", projectsMenuOpen);
						setProjectsMenuOpen(!projectsMenuOpen);
						console.log(
							"CLICKING PROJECTS FIELD IS IT DOISABLED?? "
						);
						setMobileMenuOpen(false);
					}}
					className='lg:pointer-events-none lg:cursor-default'
					disabled={width >= 1200}>
					<h1 className='text-2xl font-medium text-left w-[10vw] pt-2 sm:pt-0  ml-4   sm:ml-0 justify-start h-auto align-text-bottom  text-orangeflame '>
						PROJECTS
					</h1>
				</button>

				{projectsMenuOpen && (
					<div className=' fixed top-0 left-0   pr-4 p-8 pb-4 h-auto w-[50%] max-w-[350px]  bg-deepBlueBg z-40 border-emerald-200 border-r border-b'>
						<div className='flex flex-col items-start p-2 h-[10%]'>
							<ul>
								{projects.map((project, index) => (
									<li
										key={index}
										className='text-orangeflame text-xl text-left font-light my-4 hover:text-white hover:text-opacity-80'
										onClick={() => onProjectClick(index)}>
										{project.name}
									</li>
								))}
							</ul>
							<button
								onClick={() => {
									setProjectsMenuOpen(false);
								}}
								className='flex text-medium  text-emerald-200  text-right items-end justify-end  w-[100%] '>
								CLOSE
							</button>
						</div>
					</div>
				)}
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
				currentProjectIndex={selectedProject.index}
				viewMode={viewMode}
				setViewMode={setViewMode}
				headerPosition={true}
			/>
		</div>
	);
};

export default ProjectsHeader;

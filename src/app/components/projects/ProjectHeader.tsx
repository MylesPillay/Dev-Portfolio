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
					<h1 className='text-2xl font-bold text-left w-[10vw] pt-2 sm:pt-0  ml-4   sm:ml-0 justify-start h-auto align-text-bottom  text-orangeflame '>
						PROJECTS
					</h1>
				</button>
				<MobileBurgerMenu
					setProjectsMenuOpen={setProjectsMenuOpen}
					mobileMenuOpen={mobileMenuOpen}
					setMobileMenuOpen={setMobileMenuOpen}
				/>
				{/* <div className='fixed  top-4 z-50'>
					{projectsMenuOpen && (
						<div className=' fixed left-0 inset-0 p-6 h-auto max-h-[32vh] max-w-[300px] w-[60%]  bg-deepBlueBg z-40 border-emerald-200 border-x border-b'>
							<div className='flex flex-col items-start pb-2 h-[10%]'>
								<ul className='flex pt-6 flex-col font-medium w-full  '>
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
										className='cursor-pointer  mt-2 text-right text-lg text-orangeflame font-bold
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
				</div> */}

				{/* Conditional Rendering of Project List */}
			</div>

			{/* Project Name Field */}
			<h1 className='text-4xl font-bold md:flex sm:flex-grow hidden  justify-start w-full text-left max-w-[90vw] ml-[8vw]  text-white'>
				{selectedProject.name.toUpperCase()}
			</h1>
			{/* <div className='md:hidden fixed top-8 right-4 z-50'>
				<button
					onClick={() => {
						setMobileMenuOpen(!mobileMenuOpen);
						setProjectsMenuOpen(false);
					}}
					className='flex flex-col items-center justify-center text-emerald-200 p-2 rounded-md'>
					{mobileMenuOpen ? (
						<FaXing className='z-50' size={30} />
					) : (
						<FaBars size={30} />
					)}
				</button>
				{mobileMenuOpen && (
					<div className='sm:hidden fixed top-0 right-0  p-8 h-auto w-[50%]  bg-deepBlueBg z-40 border-emerald-200 border-l border-b'>
						<div className='flex flex-col items-start p-2 h-[10%]'>
							{[
								{ href: "/contact", label: "CONTACT" },
								{ href: "/projects", label: "PROJECTS" },
								{ href: "/", label: "ABOUT ME" }
							].map((item) => (
								<Link
									key={item.href}
									href={item.href}
									className='text-orangeflame text-xl text-left font-semibold my-4'
									onClick={() => setMobileMenuOpen(false)}>
									{item.label}
								</Link>
							))}
						</div>
					</div>
				)}
			</div> */}
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

			{/* Fallback Element for Flex Positioning */}
		</div>
	);
};

export default ProjectsHeader;

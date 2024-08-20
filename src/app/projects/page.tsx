"use client";
import React, { useState } from "react";
import projects from "../components/projects/ProjectsObject";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import ProjectList from "../components/projects/ProjectList";
import ProjectImages from "../components/projects/WebsiteProjectImages";
import ProjectControls from "../components/projects/ProjectControls";
import ProjectsHeader from "../components/projects/ProjectHeader";
import MobileImageContainer from "../components/projects/MobileAppProjectImages";
const ProjectsDisplay = (): JSX.Element => {
	const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
	const [viewMode, setViewMode] = useState<"web" | "mobile">("mobile");
	const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

	const handleProjectClick = (index: number) => {
		const project = projects[index];
		setSelectedProjectIndex(index);
		setViewMode(
			project.images.web && project.images.web.length > 0
				? "web"
				: "mobile"
		);
		setCurrentImageIndex(0);
	};

	const selectedProject = projects[selectedProjectIndex];

	const nextImage = () => {
		const images = selectedProject?.images[viewMode];
		if (images && currentImageIndex < images.length - 1) {
			setCurrentImageIndex(currentImageIndex + 1);
		}
	};

	const prevImage = () => {
		if (currentImageIndex > 0) {
			setCurrentImageIndex(currentImageIndex - 1);
		}
	};

	return (
		<div className='bg-projects-gradient min-h-screen m-none text-slate-800 border-l-4 border-slate-200 p-8'>
			<ProjectsHeader
				selectedProject={selectedProject}
				viewMode={viewMode}
				setViewMode={setViewMode}
			/>
			<div className='flex flex-row items-start justify-start h-full w-full space-x-8'>
				<div className='w-[20%] max-w-[25%] '>
					<ProjectList
						selectedProject={selectedProject}
						onProjectClick={handleProjectClick}
					/>
					<ProjectControls
						selectedProject={selectedProject}
						viewMode={viewMode}
						currentImageIndex={currentImageIndex}
						onViewModeChange={setViewMode}
						onPrevImage={prevImage}
						onNextImage={nextImage}
					/>
				</div>
				<div className='w-full justify-end my-4'>
					<div className=' w-auto mx-auto justify-end max-h-[60vh] max-w-[45vw] '>
						{selectedProjectIndex === 0 ||
						selectedProjectIndex === 3 ? (
							<MobileImageContainer
								images={selectedProject.images.mobile}
								currentImageIndex={currentImageIndex}
							/>
						) : (
							<div className='shadow-neon rounded-lg w-auto mx-auto justify-end max-h-[63vh] max-w-[58vw] '>
								<div className='w-auto rounded-lg justify-end mx-auto overflow-scroll max-h-[55vh] max-w-[58vw]'>
									<div className='relative h-auto w-full mx-auto justify-center align-middle items-center'>
										<ProjectImages
											selectedProject={selectedProject}
											viewMode={viewMode}
											currentImageIndex={
												currentImageIndex
											}
										/>
									</div>
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
			<div>
				<div>
					<div>
						<h2 className='text-2xl font-semibold text-slate-800 text-justify'>
							Skills / CodeStack
						</h2>
						<ul
							className='flex flex-col text-lg
   font-medium w-full'>
							{selectedProject.skills.map((skill, index) => (
								<li
									key={index}
									className={`cursor-pointer mb-2 text-left text-slate-300 over:text-white
									`}>
									{skill}
								</li>
							))}
						</ul>
					</div>
					<div>
						<h2 className='text-2xl font-semibold text-slate-800 text-justify'>
							Objectives
						</h2>
						<h3 className='text-md font-normal text-slate-800 text-justify'>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Sed do eiusmod tempor incididunt ut labore et
							dolore magna aliqua. Lorem ipsum dolor sit amet,
							consectetur adipiscing elit. Sed do eiusmod tempor
							incididunt ut labore et dolore magna aliqua. Lorem
							ipsum dolor sit amet, consectetur adipiscing elit.
							Sed do eiusmod tempor incididunt ut labore et dolore
							magna aliqua. Lorem ipsum
						</h3>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectsDisplay;

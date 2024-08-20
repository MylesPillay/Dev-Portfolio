"use client";
import React, { useState } from "react";
import projects from "../components/projects/ProjectsObject";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import ProjectList from "../components/projects/ProjectList";
import ProjectImages from "../components/projects/ProjectImages";
import ProjectControls from "../components/projects/ProjectControls";
const ProjectsDisplay = (): JSX.Element => {
	const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
	const [viewMode, setViewMode] = useState<"web" | "mobile">("web");
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
		<div className='bg-yellow-500 min-h-screen m-none text-slate-800 border-l-4 border-slate-200 p-8'>
			<div className='flex flex-row space-x-8 w-full justify-start mb-4'>
				<h1 className='text-4xl font-bold text-left justify-start w-[30%]'>
					Projects
				</h1>
				<h1 className='text-4xl font-bold w-auto justify-center'>
					{selectedProject.name}
				</h1>
			</div>
			<div className='flex flex-row items-start justify-start h-full space-x-8'>
				<ProjectList
					selectedProject={selectedProject}
					onProjectClick={handleProjectClick}
				/>
				<div className='w-[70%] bg-slate-400 bg-opacity-50 rounded-lg p-2 overflow-hidden max-h-[50vh]'>
					<div className='relative h-full'>
						<ProjectImages
							selectedProject={selectedProject}
							viewMode={viewMode}
							currentImageIndex={currentImageIndex}
						/>
					</div>
				</div>
				<ProjectControls
					selectedProject={selectedProject}
					viewMode={viewMode}
					currentImageIndex={currentImageIndex}
					onViewModeChange={setViewMode}
					onPrevImage={prevImage}
					onNextImage={nextImage}
				/>
			</div>
			<h3 className='text-md font-normal text-slate-800 text-justify'>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
				eiusmod tempor incididunt ut labore et dolore magna aliqua.
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
				eiusmod tempor incididunt ut labore et dolore magna aliqua.
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
				eiusmod tempor incididunt ut labore et dolore magna aliqua.
				Lorem ipsum
			</h3>
		</div>
	);
};

export default ProjectsDisplay;

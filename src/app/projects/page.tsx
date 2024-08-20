"use client";
import React, { useState } from "react";
import projects from "../components/projects/ProjectsObject";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import ProjectList from "../components/projects/ProjectList";
import ProjectImages from "../components/projects/ProjectImages";
import ProjectControls from "../components/projects/ProjectControls";
import ProjectsHeader from "../components/projects/ProjectHeader";
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
		<div className='bg-yellow-500 min-h-screen m-none text-slate-800 border-l-4 border-slate-200 p-8'>
			{/* <div className='flex flex-row justify-between w-full mb-2'>
				<h1 className='text-4xl font-bold text-left justify-start w-[20%]'>
					Projects
				</h1>
				<h1 className='text-4xl font-bold w-auto justify-center'>
					{selectedProject.name}
				</h1>
				<div className='flex flex-row justify-center items-center space-x-4'>
					<button
						className={`w-1/2 h-auto text-white text-lg text-left rounded-md p-2  ${
							selectedProject.images.web.length > 0
								? "bg-transparent  cursor-pointer"
								: "bg-transparent opacity-50 cursor-default"
						}`}
						onClick={() => setViewMode("web")}
						disabled={selectedProject.images.web.length === 0}>
						Desktop
					</button>

					<div className='h-full w-px bg-white bg-transparent-25'></div>

					<button
						className={`w-1/2 h-auto text-white text-lg text-right rounded-md p-2 ${
							selectedProject.images.mobile.length > 0
								? "bg-transparent cursor-pointer"
								: "bg-transparent opacity-50 cursor-default"
						}`}
						onClick={() => setViewMode("mobile")}
						disabled={selectedProject.images.mobile.length === 0}>
						Mobile
					</button>
				</div>
			</div> */}
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
				<div className='w-full justify-end py-2'>
					<div className='w-auto bg-slate-400 mx-auto justify-end bg-opacity-50 rounded-lg p-2 overflow-scroll max-h-[63vh] max-w-[58vw]'>
						<div className='relative h-full w-full mx-auto justify-center align-middle items-center'>
							<ProjectImages
								selectedProject={selectedProject}
								viewMode={viewMode}
								currentImageIndex={currentImageIndex}
							/>
						</div>
					</div>
				</div>
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

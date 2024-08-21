"use client";
import React, { useState } from "react";
import projects from "../components/projects/ProjectsObject";
import ProjectList from "../components/projects/ProjectList";
import ProjectImages from "../components/projects/WebsiteProjectImages";
import ProjectsHeader from "../components/projects/ProjectHeader";
import MobileImageContainer from "../components/projects/MobileAppProjectImages";
import ProjectImagePagination from "../components/projects/ProjectImagePagination";
import ProjectTextContent from "../components/projects/ProjectTextContent";
import ProjectSkillsComponent from "../components/projects/ProjectSkills";

const ProjectsDisplay = (): JSX.Element => {
	const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
	const [viewMode, setViewMode] = useState<"web" | "mobile">("mobile");
	const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
	const [isImageContainerHovered, setIsImageContainerHovered] =
		useState(false);
	const selectedProject = projects[selectedProjectIndex];
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

	return (
		<div
			className='bg-projects-gradient overflow-hidden h-full w-full  m-none  pr-8  p-0 pt-6'
			style={{ borderColor: "#071E2201", borderWidth: "0.5px" }}>
			<ProjectsHeader
				selectedProject={selectedProject}
				viewMode={viewMode}
				setViewMode={setViewMode}
			/>
			<div className='flex flex-row items-start justify-start h-full max-h-[90vh] w-full'>
				<div className='flex flex-col h-full justify-between w-[13.5vw] z-10 max-w-[13.5vw] min-h-[85vh] pt-[6vh]'>
					<ProjectList
						selectedProject={selectedProject}
						onProjectClick={handleProjectClick}
					/>
					<ProjectSkillsComponent selectedProject={selectedProject} />
				</div>

				<div
					className={`relative flex justify-evenly mx-auto w-[74.5vw] max-w-[74.5vw] min-h-[85vh] pt-[6vh] `}>
					<ProjectTextContent
						selectedProject={selectedProject}
						isImageContainerHovered={isImageContainerHovered}
					/>

					<div
						className=' min-h-[90vh] max-h-[90vh] h-[50vh] max-w-[37vw] relative '
						style={{
							transform: isImageContainerHovered
								? "translateX(52%)"
								: "translateX(100%)",
							transition: "transform 0.5s ease-in-out"
						}}
						onMouseEnter={() => setIsImageContainerHovered(true)}
						onMouseLeave={() => setIsImageContainerHovered(false)}>
						{selectedProjectIndex === 0 ||
						selectedProjectIndex === 3 ? (
							<div className='w-full h-full min-h-[100%] items-end '>
								<MobileImageContainer
									hovered={isImageContainerHovered}
									images={selectedProject.images.mobile}
									currentImageIndex={currentImageIndex}
								/>
								<div
									className={
										"my-4 w-[100%] justify-center items-center"
									}>
									<ProjectImagePagination
										hovered={isImageContainerHovered}
										currentImageIndex={currentImageIndex}
										totalImages={
											selectedProject.images.mobile.length
										}
										onPageChange={(index) =>
											setCurrentImageIndex(index)
										}
										onPrevImage={() =>
											setCurrentImageIndex(
												(prevIndex) => prevIndex - 1
											)
										}
										onNextImage={() =>
											setCurrentImageIndex(
												(prevIndex) => prevIndex + 1
											)
										}
									/>
								</div>
							</div>
						) : (
							<div className=' rounded-lg w-auto mx-auto justify-end max-h-[63vh] max-w-[58vw] '>
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

				{/* <div className=' rounded-lg w-auto mx-auto justify-end max-h-[63vh] max-w-[58vw] '>
								<div className='w-auto rounded-lg justify-end mx-auto overflow-scroll max-h-[55vh] max-w-[58vw]'></div> */}

				{/* <div className='flex flex-row justify-around mt-8 space-x-4'>
					<div
						className='flex flex-shrink-0 w-auto mx-auto  mt-1 ml-[5vw]
					max-w-[45%] relative'>
						<ProjectTextContent
							selectedProject={selectedProject}
							isImageContainerHovered={isImageContainerHovered}
						/>
					</div>
					<div
						className='w-auto  min-h-[70vh] max-h-[90vh] h- max-w-[55vw] relative'
						style={{
							transform: isImageContainerHovered
								? "translateX(2%)"
								: "translateX(52%)",
							transition: "transform 0.5s ease-in-out"
						}}
						onMouseEnter={() => setIsImageContainerHovered(true)}
						onMouseLeave={() => setIsImageContainerHovered(false)}>
						{selectedProjectIndex === 0 ||
						selectedProjectIndex === 3 ? (
							<div className='w-full h-full min-h-[100%] items-end'>
								<MobileImageContainer
									hovered={isImageContainerHovered}
									images={selectedProject.images.mobile}
									currentImageIndex={currentImageIndex}
								/>
								<div
									className={
										"my-4 w-[100%] justify-center items-center"
									}>
									<ProjectImagePagination
										hovered={isImageContainerHovered}
										currentImageIndex={currentImageIndex}
										totalImages={
											selectedProject.images.mobile.length
										}
										onPageChange={(index) =>
											setCurrentImageIndex(index)
										}
										onPrevImage={() =>
											setCurrentImageIndex(
												(prevIndex) => prevIndex - 1
											)
										}
										onNextImage={() =>
											setCurrentImageIndex(
												(prevIndex) => prevIndex + 1
											)
										}
									/>
								</div>
							</div>
						) : (
							<div className=' rounded-lg w-auto mx-auto justify-end max-h-[63vh] max-w-[58vw] '>
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
				</div> */}
			</div>
		</div>
	);
};

export default ProjectsDisplay;

"use client";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import projects from "../components/projects/ProjectsObject";
import ProjectList from "../components/projects/ProjectList";
import ProjectImages from "../components/projects/WebsiteProjectImages";
import ProjectsHeader from "../components/projects/ProjectHeader";
import MobileImageContainer from "../components/projects/MobileAppProjectImages";
import ProjectImagePagination from "../components/projects/ProjectImagePagination";
import ProjectSkillsComponent from "../components/projects/ProjectSkills";
import ProjectTextContentMobile from "../components/projects/ProjectTextContentMobile";
import ProjectTextContentWeb from "../components/projects/ProjectTextComponentWeb";
import ProjectDetailsComponentWeb from "../components/projects/ProjectDetailsTableWeb";
import WebsiteProjectImages from "../components/projects/WebsiteProjectImages";

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

	const [showHoverPrompt, setShowHoverPrompt] = useState<boolean | null>(
		null
	);

	useEffect(() => {
		if (!isImageContainerHovered && showHoverPrompt === null) {
			const timer = setTimeout(() => {
				setShowHoverPrompt(true);
			}, 5000);
			return () => clearTimeout(timer);
		}
		if (isImageContainerHovered) {
			setShowHoverPrompt(false);
		}
	}, [isImageContainerHovered, showHoverPrompt]);

	return (
		// <div
		// 	className='bg-projects-gradient overflow-hidden  h-full w-full  m-none  pr-0  p-0 pt-6'
		// 	style={{ borderColor: "#071E2201", borderWidth: "0.5px" }}>
		<div
			className='bg-projects-gradient  h-full w-full  m-none  pr-0  p-0 '
			style={{
				borderColor: "#ff7316",
				borderWidth: 0,
				borderLeft: "0.5px solid #ff7316"
			}}>
			<ProjectsHeader
				selectedProject={selectedProject}
				viewMode={viewMode}
				setViewMode={setViewMode}
				isImageContainerHovered={isImageContainerHovered}
				setIsImageContainerHovered={setIsImageContainerHovered}
			/>
			<div className='flex flex-row items-start justify-start h-full max-h-[90vh] w-full'>
				<div
					className='flex flex-col justify-between min-w-[13.5vw] z-10 max-w-[13.5vw] h-full'
					onMouseEnter={() => {
						if (isImageContainerHovered) {
							setIsImageContainerHovered(false);
						}
						return;
					}}>
					<ProjectList
						selectedProject={selectedProject}
						onProjectClick={handleProjectClick}
					/>

					<ProjectSkillsComponent selectedProject={selectedProject} />
				</div>

				{/* Mobile application content screen  */}

				{selectedProjectIndex === 0 || selectedProjectIndex === 3 ? (
					<div
						className={`relative flex justify-evenly mx-auto h-auto overflow-y-scroll  overflow-x-hidden w-[74.5vw] max-w-[74.5vw] min-h-[85vh] pt-[4vh] `}>
						<ProjectTextContentMobile
							selectedProject={selectedProject}
							isImageContainerHovered={isImageContainerHovered}
						/>
						<div
							className='min-h-[90vh] max-h-[90vh] mt-0.5 h-[50vh] max-w-[37vw] sticky top-0 right-0'
							style={{
								transform: isImageContainerHovered
									? "translateX(51%)"
									: "translateX(97%)",
								transition: "transform 0.2s ease-in-out"
							}}
							onMouseEnter={() =>
								setIsImageContainerHovered(true)
							}
							onMouseLeave={() =>
								setIsImageContainerHovered(false)
							}>
							<div className='w-full h-full min-h-[100%] items-end'>
								<MobileImageContainer
									hovered={isImageContainerHovered}
									images={selectedProject.images.mobile}
									currentImageIndex={currentImageIndex}
								/>

								<div className=' w-[100%] justify-center items-center'>
									{showHoverPrompt ? (
										<motion.div
											initial={{ opacity: 0 }}
											animate={{ opacity: 1 }}
											transition={{
												duration: 1,
												delay: 1
											}}
											className={`flex flex-grow justify-center align-start h-1.5 w-[17.3vw] items-center mb-[10vh] -mt-3 shadow-neon-bottom px-4`}></motion.div>
									) : (
										<ProjectImagePagination
											hovered={isImageContainerHovered}
											currentImageIndex={
												currentImageIndex
											}
											totalImages={
												selectedProject.images.mobile
													.length
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
									)}
								</div>
							</div>
						</div>
					</div>
				) : (
					<></>
				)}

				{selectedProjectIndex != 0 && 3 ? (
					<div className='flex flex-row  justify-between w-auto max-w-[90vw] h-auto max-h-[90vh] '>
						<div
							className={`flex flex-col justify-between  overflow-y-scroll  overflow-x-hidden md:pt-[4vh] w-auto min-w-[68vw] max-w-[68vw]h-auto max-h-95vh`}>
							<ProjectTextContentWeb
								selectedProject={selectedProject}
								isImageContainerHovered={
									isImageContainerHovered
								}
							/>
							<ProjectDetailsComponentWeb
								selectedProject={selectedProject}
								isImageContainerHovered={
									isImageContainerHovered
								}
							/>
						</div>

						<div
							className='min-h-[75vh] max-h-[25vh] mt-[4vh] h-auto max-w-[90vw] min-w-[60vw] sticky right-0 overflow-y-auto'
							style={{
								transform:
									isImageContainerHovered &&
									viewMode === "web"
										? "translateX(-17.5%)"
										: isImageContainerHovered &&
										  viewMode === "mobile"
										? "translateX(0%)"
										: "translateX(92%)",
								transition: "transform 0.2s ease-in-out"
							}}
							onMouseEnter={() =>
								setIsImageContainerHovered(true)
							}>
							<div className='w-auto h-auto justify-center items-center'>
								<WebsiteProjectImages
									selectedProject={selectedProject}
									viewMode={viewMode}
									currentImageIndex={currentImageIndex}
								/>

								<div className='w-auto h-auto justify-center items-center'>
									{showHoverPrompt ? (
										<motion.div
											initial={{ opacity: 0 }}
											animate={{ opacity: 1 }}
											transition={{
												duration: 1,
												delay: 1
											}}
											className={`flex flex-grow justify-center align-center h-1.5 w-[53vw] items-center mb-[10vh] -mt-3 shadow-neon-bottom px-4`}></motion.div>
									) : (
										<ProjectImagePagination
											hovered={isImageContainerHovered}
											currentImageIndex={
												currentImageIndex
											}
											totalImages={
												selectedProject.images.mobile
													.length
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
									)}
								</div>
							</div>
						</div>
					</div>
				) : (
					<></>
				)}
			</div>
		</div>
	);
};

export default ProjectsDisplay;

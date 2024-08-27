"use client";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import projects from "../components/projects/ProjectsObject";
import ProjectList from "../components/projects/ProjectList";
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
	const selectedProject = projects[selectedProjectIndex];
	const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
	const images =
		viewMode === "web"
			? selectedProject.images.web
			: selectedProject.images.mobile;
	const totalImages = images.length;

	const [isImageContainerHovered, setIsImageContainerHovered] =
		useState(false);
	const handleProjectClick = (index: number) => {
		const project = projects[index];
		setSelectedProjectIndex(index);
		setViewMode(
			project.images.mobile && project.images.mobile.length > 0
				? "mobile"
				: "web"
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
			className='bg-projects-gradient  h-full w-full  m-none  pr-0  p-0  '
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
			<div className='flex flex-row items-start justify-start h-full max-h-[90vh] w-full '>
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
						className={`relative flex justify-between h-auto overflow-y-scroll w-full max-w-[100vw] min-h-[85vh] pt-[4vh] `}>
						<div
							onMouseEnter={() =>
								setIsImageContainerHovered(false)
							}
							className={`absolute flex flex-col  h-auto text-justify max-h-[85vh]
								 justify-start
								overflow-y-scroll scroll-y-hidden ${
									!isImageContainerHovered
										? "w-[54vw] "
										: "w-[37vw] "
								}`}
							style={{
								transition: "width 0.2s ease-in-out"
							}}>
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
							className='min-h-[90vh] max-h-[90vh] mt-0.5 h-[50vh] max-w-[37vw] sticky top-0 right-0'
							style={{
								transform: isImageContainerHovered
									? "translateX(37vw)"
									: "translateX(54vw)",
								transition: "transform 0.2s ease-in-out"
							}}
							onMouseEnter={() =>
								setIsImageContainerHovered(true)
							}
							onMouseLeave={() => {}}>
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
											className={`flex flex-grow justify-center align-start h-1.5 w-[17.3vw] items-center mb-[10vh] mt-[4vh] shadow-neon-bottom px-4`}></motion.div>
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

				{selectedProjectIndex != 0 && selectedProjectIndex != 3 ? (
					<div className='flex flex-row  justify-start w-auto max-w-[90vw] h-auto max-h-[90vh] '>
						<div
							className={`flex flex-col justify-start  overflow-y-scroll  overflow-x-hidden md:pt-[4vh] w-auto min-w-[68vw] max-w-[68vw] h-auto max-h-85vh`}>
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
							className='flex flex-col min-h-[75vh]  mt-[4vh] h-auto max-w-[90vw] min-w-[60vw] sticky right-0 overflow-y-auto overflow-x-hidden'
							style={{
								transform:
									isImageContainerHovered &&
									viewMode === "web"
										? "translateX(-17.5%)"
										: isImageContainerHovered &&
										  viewMode === "mobile"
										? "translateX(-17.5%)"
										: !isImageContainerHovered &&
										  viewMode === "web"
										? "translateX(92%)"
										: "translateX(71%)",
								transition: "transform 0.2s ease-in-out"
							}}
							onMouseEnter={() =>
								setIsImageContainerHovered(true)
							}>
							<div className='w-auto h-auto justify-center items-center overflow-x-hidden'>
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
											className={`flex flex-grow justify-center align-center h-1.5 w-auto items-center mb-[10vh] -mt-3 shadow-neon-bottom px-4`}></motion.div>
									) : (
										<ProjectImagePagination
											hovered={isImageContainerHovered}
											currentImageIndex={
												currentImageIndex
											}
											totalImages={totalImages}
											onPageChange={(index) =>
												setCurrentImageIndex(index)
											}
											onPrevImage={() =>
												setCurrentImageIndex(
													(prevIndex) =>
														Math.max(
															prevIndex - 1,
															0
														)
												)
											}
											onNextImage={() =>
												setCurrentImageIndex(
													(prevIndex) =>
														Math.min(
															prevIndex + 1,
															totalImages - 1
														)
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

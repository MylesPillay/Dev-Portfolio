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
import ProjectTextComponentWeb from "../components/projects/ProjectDetailsTableWeb";

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
		<div
			className='bg-projects-gradient overflow-hidden  h-full w-full  m-none  pr-0  p-0 pt-6'
			style={{ borderColor: "#071E2201", borderWidth: "0.5px" }}>
			<ProjectsHeader
				selectedProject={selectedProject}
				viewMode={viewMode}
				setViewMode={setViewMode}
			/>
			<div className='flex flex-row items-start justify-start h-full max-h-[90vh] w-full'>
				<div className='flex flex-col  h-full justify-between min-w-[13.5vw] z-10 max-w-[13.5vw] min-h-[85vh] pt-[6vh]'>
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
					<div className='flex h-full flex-row w-full mx-auto justify-evenly align-middle pt-[4vh] after:items-center'>
						<div className='flex flex-col h-[90vh] max-h-[90vh] justify-evenly'>
							<ProjectTextContentWeb
								selectedProject={selectedProject}
								isImageContainerHovered={
									isImageContainerHovered
								}
							/>
							<ProjectTextComponentWeb
								selectedProject={selectedProject}
								isImageContainerHovered={
									isImageContainerHovered
								}
							/>
						</div>

						<div
							className='min-h-[90vh] max-h-[90vh] mt-0.5 h-[50vh]  max-w-[100vw] sticky top-0 right-80 '
							style={{
								transform: isImageContainerHovered
									? "translateX(10%)"
									: "translateX(90%)",
								transition: "transform 0.2s ease-in-out"
							}}
							onMouseEnter={() =>
								setIsImageContainerHovered(true)
							}
							onMouseLeave={() =>
								setIsImageContainerHovered(false)
							}>
							<div className='w-full h-full min-h-[100%] items-end '>
								{/* <ProjectImages
									selectedProject={selectedProject}
									viewMode={viewMode}
									currentImageIndex={currentImageIndex}
								/>
								 */}
								<ProjectImages
									selectedProject={selectedProject}
									viewMode={viewMode}
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
												selectedProject.images.web
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
			{/* <div
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
					</div> */}
		</div>

		/* <div className=' rounded-lg w-auto mx-auto justify-end max-h-[63vh] max-w-[58vw] '>
								<div className='w-auto rounded-lg justify-end mx-auto overflow-scroll max-h-[55vh] max-w-[58vw]'></div> */

		/* <div className='flex flex-row justify-around mt-8 space-x-4'>
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
				</div> */
	);
};

export default ProjectsDisplay;

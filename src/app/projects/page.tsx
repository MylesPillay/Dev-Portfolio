"use client";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import projects from "../components/projects/ProjectsObject";
import ProjectList from "../components/projects/ProjectList";
import ProjectsHeader from "../components/projects/ProjectHeader";
import MobileImageContainer from "../components/projects/MobileAppProjectImages";
import ProjectImagePagination from "../components/projects/ProjectImagePagination";
import ProjectSkillsComponent from "../components/projects/ProjectSkills";
import ProjectTextContentWeb from "../components/projects/ProjectTextComponentWeb";
import ProjectDetailsComponentWeb from "../components/projects/ProjectDetailsTableWeb";
import WebsiteProjectImages from "../components/projects/WebsiteProjectImages";
import ProjectAccordionWeb from "../components/projects/ProjectAccordianWeb";
import ImagesFormatSelector from "../components/projects/ImagesFormatSelector";
import MobileProjectTitleStickyHeader from "../components/projects/MobileProjectTitleStickyHeader";
import MediumScreenProjectAccordion from "../components/projects/MediumScreenPorjectAccordian";
import MediumMobileAppProjectImages from "../components/projects/MediumMobileAppProjectImages";
import MediumScreenProjectSkillsComponent from "../components/projects/MediumScreenProjectSkillsComponent";
import MobileProjectLayout from "../components/projects/MobileProjectLayout";

const ProjectsDisplay = (): JSX.Element => {
	const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
	const [viewMode, setViewMode] = useState<"web" | "mobile">("mobile");
	const selectedProject = projects[selectedProjectIndex];
	const mobileProjectNextUp = projects[selectedProjectIndex + 1];
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
			project.images.mobile && project.images.web.length === 0
				? "mobile"
				: "web"
		);
		setCurrentImageIndex(0);
	};

	const [showHoverPrompt, setShowHoverPrompt] = useState<boolean | null>(
		null
	);

	const [activeSection, setActiveSection] = useState("Overview");
	React.useEffect(() => {
		if (isImageContainerHovered) {
			setActiveSection("Overview");
		}
	}, [isImageContainerHovered]);

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

	const selectedIndex = projects.findIndex(
		(project) => project.name === selectedProject.name
	);
	const nextProjectName = projects[selectedIndex + 1]
		? projects[selectedIndex + 1].name
		: "Back to Top";

	return (
		<div className='md:bg-projects-gradient bg-mobile-gradient  h-full w-full overflow-x-hidden  m-none  pr-0 pt-6  border-0 sm:border-l-[0.5px] border-orangeflame '>
			<ProjectsHeader
				selectedProject={selectedProject}
				viewMode={viewMode}
				setViewMode={setViewMode}
				isImageContainerHovered={isImageContainerHovered}
				setIsImageContainerHovered={setIsImageContainerHovered}
				onProjectClick={handleProjectClick}
			/>
			<div className='flex lg:flex-row flex-col items-start justify-start h-full min-h-[101vh] w-full '>
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
					<div className='hidden lg:flex sticky bottom-0'>
						<ProjectSkillsComponent
							selectedProject={selectedProject}
							activeSection={activeSection}
							isImageHovered={isImageContainerHovered}
						/>
					</div>
				</div>

				{selectedProjectIndex === 0 || selectedProjectIndex === 3 ? (
					<div
						className={`relative flex flex-col h-auto overflow-y-scroll w-screen max-w-[100vw] lg:min-h-[85vh] min-h-screen  overflow-x-hidden `}>
						{/* HIDES AT md: */}
						<div
							onMouseEnter={() =>
								setIsImageContainerHovered(false)
							}
							className={`hidden lg:flex md:flex-row justify-between lg:w-full overflow-y-scroll  overflow-x-hidden md:pt-[4vh] h-auto`}
							style={{
								transition: "width 0.2s ease-in-out"
							}}>
							<ProjectAccordionWeb
								selectedProject={selectedProject}
								imageContainerHovered={isImageContainerHovered}
								activeSection={activeSection}
								setActiveSection={setActiveSection}
								setIsImageContainerHovered={
									setIsImageContainerHovered
								}
							/>
							<div
								className={`group pointer-events-none md:pointer-events-auto lg:min-h-[100vh] lg:max-h-[100vh] mt-0.5 lg:h-auto  min-w-[30vw] h-[40vh] max-w-[49%] sticky lg:top-0 md:right-0 overflow-x-scroll lg:flex flex-col justify-center items-center ${
									isImageContainerHovered
										? "md:w-[43vw] md:translate-x-[0vw] w-auto"
										: "md:w-[23vw] md:translate-x-[11vw] w-auto"
								}`}
								style={{
									transition: "transform 0.2s ease-in-out"
								}}
								onMouseEnter={() =>
									setIsImageContainerHovered(true)
								}
								onMouseLeave={() => {}}>
								<div className='flex w-full justify-end items-center'>
									<ImagesFormatSelector
										selectedProject={selectedProject}
										viewMode={viewMode}
										setViewMode={setViewMode}
										headerPosition={false}
									/>
								</div>

								<div className='h-full w-full  mx-auto justify-center items-center pl-4'>
									<MobileImageContainer
										hovered={isImageContainerHovered}
										images={selectedProject.images.mobile}
										currentImageIndex={currentImageIndex}
									/>

									<div className='w-full justify-end items-end'>
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
									</div>
								</div>
							</div>
						</div>
						{/* md: screens to lg: screens  */}
						<div
							className={`hidden md:flex lg:hidden md:flex-col align-middle items-center justify-between lg:w-full overflow-y-scroll  overflow-x-hidden md:pt-[4vh] h-auto pb-[10vh]`}>
							<div className='w-full mx-auto h-auto justify-center items-center align-middle'>
								<MediumScreenProjectAccordion
									selectedProject={selectedProject}
									topAccordion={true}
									activeSection={activeSection}
									setActiveSection={setActiveSection}
								/>
							</div>
							<div
								// className={`group pointer-events-none md:pointer-events-auto lg:min-h-[100vh] lg:max-h-[100vh] mt-0.5 lg:h-auto lg:w-[40vw] min-w-[30vw] h-[40vh] max-w-[45%] sticky lg:top-0 md:right-0  lg:flex flex-col justify-center items-center `}
								className='w-full mx-auto h-full justify-center items-center align-middle'>
								<div className='flex w-full justify-center items-center'>
									{selectedProject.images.mobile.length > 0 &&
									selectedProject.images.web.length > 0 ? (
										<ImagesFormatSelector
											selectedProject={selectedProject}
											viewMode={viewMode}
											setViewMode={setViewMode}
											headerPosition={false}
										/>
									) : (
										<></>
									)}
								</div>
								<div className='h-auto w-[100%] overflow-x-hidden py-10  bg-slate-800 bg-opacity-50 pl-[15vw] justify-evenly align-middle items-center'>
									<div className=' flex flex-col  w-[70%] self-center items-center overflow-x-scroll'>
										<MediumMobileAppProjectImages
											// hovered={isImageContainerHovered}
											images={
												selectedProject.images.mobile
											}
											currentImageIndex={
												currentImageIndex
											}
										/>
										{/* <div className='w-full h-auto justify-center items-center'> */}
										<ProjectImagePagination
											hovered={true}
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
										{/* </div> */}
									</div>
								</div>
							</div>

							<MediumScreenProjectAccordion
								selectedProject={selectedProject}
								topAccordion={false}
								activeSection={activeSection}
								setActiveSection={setActiveSection}
							/>
							<div className='w-[100%] h-auto my-10 bg-slate-800 bg-opacity-50 border-tealAccent border-y-4'>
								<MediumScreenProjectSkillsComponent
									selectedProject={selectedProject}
								/>
							</div>
						</div>
						{/* HIDES at SCREEN ABOVE md:  */}
						<MobileProjectLayout
							selectedProject={selectedProject}
							viewMode={viewMode}
							setViewMode={setViewMode}
							currentImageIndex={currentImageIndex}
							setCurrentImageIndex={setCurrentImageIndex}
							setActiveSection={setActiveSection}
							activeSection={activeSection}
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
							loadNextProject={() =>
								setSelectedProjectIndex(
									selectedProjectIndex + 1
								)
							}
						/>
					</div>
				) : (
					<></>
				)}

				{selectedProjectIndex != 0 && selectedProjectIndex != 3 ? (
					<div className='flex lg:flex-row flex-col justify-start w-full max-w-[100vw] sm:max-w-[100vw] md:max-w-[90vw] h-auto  '>
						<div
							className={`hidden lg:flex-col lg:flex md:flex-row  lg:w-full overflow-y-scroll  overflow-x-hidden
							 flex-col justify-start  md:pt-[4vh] w-full min-w-[60vw] lg:max-w-[60vw] max-w-[100vw]  h-auto max-h-85vh`}>
							<ProjectAccordionWeb
								selectedProject={selectedProject}
								imageContainerHovered={isImageContainerHovered}
								activeSection={activeSection}
								setActiveSection={setActiveSection}
							/>
						</div>

						<div
							className='hidden lg:flex-col lg:flex lg:w-full
							 flex-col md:pt-[4vh] lg:max-w-[60vw] w-full  max-h-85vh max-h-[78vh]  justify-between mt-[4vh] h-auto in-w-[60vw] sticky right-0 overflow-y-auto overflow-x-hidden'
							style={{
								transform:
									isImageContainerHovered &&
									viewMode === "web"
										? "translateX(-22.5%)"
										: isImageContainerHovered &&
										  viewMode === "mobile"
										? "translateX(-22.5%)"
										: !isImageContainerHovered &&
										  viewMode === "web"
										? "translateX(77%)"
										: "translateX(56%)",
								transition: "transform 0.2s ease-in-out"
							}}
							onMouseEnter={() =>
								setIsImageContainerHovered(true)
							}>
							<div className='hidden md:flex w-auto h-full justify-between items-center overflow-x-hidden'>
								<WebsiteProjectImages
									selectedProject={selectedProject}
									viewMode={viewMode}
									currentImageIndex={currentImageIndex}
								/>

								<div className='w-auto h-auto flex-end justify-center items-center'>
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
						{/* md: screens to lg: screens  */}
						<div
							className={`hidden md:flex lg:hidden md:flex-col align-middle items-center justify-between lg:w-full overflow-y-scroll  overflow-x-hidden md:pt-[4vh] h-auto pb-[10vh]`}>
							<div className='w-full mx-auto h-auto justify-center items-center align-middle'>
								<MediumScreenProjectAccordion
									selectedProject={selectedProject}
									topAccordion={true}
									activeSection={activeSection}
									setActiveSection={setActiveSection}
								/>
							</div>
							<div
								// className={`group pointer-events-none md:pointer-events-auto lg:min-h-[100vh] lg:max-h-[100vh] mt-0.5 lg:h-auto lg:w-[40vw] min-w-[30vw] h-[40vh] max-w-[45%] sticky lg:top-0 md:right-0  lg:flex flex-col justify-center items-center `}
								className='w-full mx-auto h-full justify-center items-center align-middle'>
								<div className='flex w-full justify-center items-center'>
									{selectedProject.images.mobile.length > 0 &&
									selectedProject.images.web.length > 0 ? (
										<ImagesFormatSelector
											selectedProject={selectedProject}
											viewMode={viewMode}
											setViewMode={setViewMode}
											headerPosition={false}
										/>
									) : (
										<></>
									)}
								</div>
								<div className='h-auto w-[100%] overflow-x-hidden py-10  bg-slate-800 bg-opacity-50 pl-[15vw] justify-evenly align-middle items-center'>
									<div className=' flex flex-col  w-[70%] self-center items-center overflow-x-scroll'>
										<MediumMobileAppProjectImages
											// hovered={isImageContainerHovered}
											images={
												selectedProject.images.mobile
											}
											currentImageIndex={
												currentImageIndex
											}
										/>
										{/* <div className='w-full h-auto justify-center items-center'> */}
										<ProjectImagePagination
											hovered={true}
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
										{/* </div> */}
									</div>
								</div>
							</div>

							<MediumScreenProjectAccordion
								selectedProject={selectedProject}
								topAccordion={false}
								activeSection={activeSection}
								setActiveSection={setActiveSection}
							/>
							<div className='w-[100%] h-auto my-10 bg-slate-800 bg-opacity-50 border-tealAccent border-y-4'>
								<MediumScreenProjectSkillsComponent
									selectedProject={selectedProject}
								/>
							</div>
						</div>
						{/* HIDES at SCREEN ABOVE md:  */}
						<MobileProjectLayout
							selectedProject={selectedProject}
							viewMode={viewMode}
							setViewMode={setViewMode}
							currentImageIndex={currentImageIndex}
							setCurrentImageIndex={setCurrentImageIndex}
							setActiveSection={setActiveSection}
							activeSection={activeSection}
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
							loadNextProject={() =>
								setSelectedProjectIndex(
									selectedProjectIndex + 1
								)
							}
						/>
					</div>
				) : (
					<></>
				)}
				<div className='flex md:hidden'>
					<ProjectSkillsComponent
						selectedProject={selectedProject}
						activeSection={activeSection}
						isImageHovered={isImageContainerHovered}
					/>
				</div>
			</div>
		</div>
	);
};

export default ProjectsDisplay;

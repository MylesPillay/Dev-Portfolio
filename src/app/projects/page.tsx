"use client";
import React, { useEffect, useState } from "react";
import projects from "../components/projects/ProjectsObject";
import ProjectsHeader from "../components/projects/ProjectHeader";
import ProjectSkillsComponent from "../components/projects/ProjectSkills";
import MobileProjectLayout from "../components/projects/MobileProjectLayout";
import ProjectListAndSkills from "../components/projects/responsive-layout-components/ProjectListAndSkills";
import OverMediumLayout from "../components/projects/responsive-layout-components/OverMediumLayout";
import MediumToLargeLayout from "../components/projects/responsive-layout-components/MediumToLargeLayout";

const ProjectsDisplay = (): JSX.Element => {
	const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
	const [viewMode, setViewMode] = useState<"web" | "mobile">("mobile");
	const selectedProject = projects[selectedProjectIndex];
	[selectedProjectIndex + 1];
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

	return (
		<div className='relative md:bg-projects-gradient bg-mobile-gradient  h-full w-full overflow-x-hidden  m-none  pr-0   border-0 sm:border-l-[0.5px] border-orangeflame '>
			<ProjectsHeader
				selectedProject={selectedProject}
				viewMode={viewMode}
				setViewMode={setViewMode}
				isImageContainerHovered={isImageContainerHovered}
				setIsImageContainerHovered={setIsImageContainerHovered}
				onProjectClick={handleProjectClick}
			/>
			<div className='flex lg:flex-row flex-col items-start justify-start h-full min-h-[101vh] w-full'>
				<ProjectListAndSkills
					selectedProject={selectedProject}
					handleProjectClick={handleProjectClick}
					isImageContainerHovered={isImageContainerHovered}
					setIsImageContainerHovered={setIsImageContainerHovered}
					activeSection={activeSection}
					setActiveSection={setActiveSection}
				/>
				<div
					className={`relative flex flex-col h-auto overflow-y-scroll w-screen max-w-[100vw] lg:min-h-[85vh] min-h-screen  overflow-x-hidden `}>
					{/* HIDES BELOW md: */}

					<OverMediumLayout
						setIsImageContainerHovered={setIsImageContainerHovered}
						isImageContainerHovered={isImageContainerHovered}
						selectedIndex={selectedIndex}
						currentImageIndex={currentImageIndex}
						setCurrentImageIndex={setCurrentImageIndex}
						viewMode={viewMode}
						setViewMode={setViewMode}
						selectedProject={selectedProject}
						activeSection={activeSection}
						setActiveSection={setActiveSection}
					/>

					{/* md: screens to lg: screens  */}

					<MediumToLargeLayout
						setIsImageContainerHovered={setIsImageContainerHovered}
						isImageContainerHovered={isImageContainerHovered}
						selectedIndex={selectedIndex}
						currentImageIndex={currentImageIndex}
						setCurrentImageIndex={setCurrentImageIndex}
						viewMode={viewMode}
						setViewMode={setViewMode}
						selectedProject={selectedProject}
						activeSection={activeSection}
						setActiveSection={setActiveSection}
					/>
					{/* </div> */}
					{/* HIDES at SCREEN ABOVE md:  */}
					<MobileProjectLayout
						selectedProject={selectedProject}
						selectedIndex={selectedIndex}
						viewMode={viewMode}
						setViewMode={setViewMode}
						currentImageIndex={currentImageIndex}
						setCurrentImageIndex={setCurrentImageIndex}
						setActiveSection={setActiveSection}
						activeSection={activeSection}
						onPrevImage={() =>
							setCurrentImageIndex((prevIndex) => prevIndex - 1)
						}
						onNextImage={() =>
							setCurrentImageIndex((prevIndex) => prevIndex + 1)
						}
						loadNextProject={() => {
							setSelectedProjectIndex(selectedProjectIndex + 1);
							setViewMode(
								projects[selectedProjectIndex + 1].images
									?.mobile.length &&
									projects[selectedProjectIndex + 1].images
										.web.length === 0
									? "mobile"
									: "web"
							);
						}}
					/>
				</div>
				{/* // ) : (
				// 	<></>
				// )} */}

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

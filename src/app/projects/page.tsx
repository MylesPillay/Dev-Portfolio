"use client";
import React, { useEffect, useState, useCallback } from "react";
import projects from "../components/projects/ProjectsObject";
import ProjectsHeader from "../components/projects/ProjectHeader";
import ProjectSkillsComponent from "../components/projects/ProjectSkills";
import MobileProjectLayout from "../components/projects/MobileProjectLayout";
import ProjectListAndSkills from "../components/projects/responsive-layout-components/ProjectListAndSkills";
import OverMediumLayout from "../components/projects/responsive-layout-components/OverMediumLayout";
import MediumToLargeLayout from "../components/projects/responsive-layout-components/MediumToLargeLayout";
import useFetchMobileAppImages from "../hooks/useFetchMobileAppImages";

const ProjectsDisplay = (): JSX.Element => {
	const [projectsMenuOpen, setProjectsMenuOpen] = useState(false);
	const [showHoverPrompt, setShowHoverPrompt] = useState<boolean | null>(
		null
	);
	// Initial states
	const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
	const [viewMode, setViewMode] = useState<"web" | "mobile">("mobile");
	const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
	const [isImageContainerHovered, setIsImageContainerHovered] =
		useState(false);
	const [activeSection, setActiveSection] = useState("Overview");
	const [loading, setLoading] = useState(false);
	const [imageLoading, setImageLoading] = useState(false);

	// Derived state
	const selectedProject = projects[selectedProjectIndex];

	// Fetch images based on project type (mobile or web)
	const { images: imagesArray, error: mobileError } = useFetchMobileAppImages(
		{
			selectedProjectIndex,
			viewMode,
			supabaseId: selectedProject.supabaseId,
			setLoading
		}
	);

	// Determine images to display based on project type
	const images =
		selectedProjectIndex === 0 || selectedProjectIndex === 3
			? imagesArray
			: imagesArray[currentImageIndex];

	// Handle side effects for image loading
	useEffect(() => {
		if (imageLoading) {
			const timer = setTimeout(() => setImageLoading(false), 500);
			return () => clearTimeout(timer);
		}
	}, [imageLoading]);

	// Update section when hovering changes
	useEffect(() => {
		if (isImageContainerHovered) {
			setActiveSection("Overview");
		}
	}, [isImageContainerHovered]);

	// Manage hover prompt display
	useEffect(() => {
		if (!isImageContainerHovered) {
			const timer = setTimeout(() => setShowHoverPrompt(true), 5000);
			return () => clearTimeout(timer);
		}
		setShowHoverPrompt(false);
	}, [isImageContainerHovered]);

	// Handle project click logic
	const handleProjectClick = (index: number) => {
		if (index === selectedProjectIndex) return;

		setLoading(true);
		setSelectedProjectIndex(index);
		setViewMode(index === 0 || index === 3 ? "mobile" : "web");
	};

	const handleImageChange = (newIndex: number) => {
		const isValidIndex = newIndex >= 0 && newIndex < imagesArray.length;

		if (isValidIndex) {
			setImageLoading(true); // Start loading state
			setCurrentImageIndex(newIndex); // Set new index
		}
	};
	// Image onLoad event handler
	const handleImageLoad = () => {
		setLoading(false); // Image has loaded, stop loading state
		setImageLoading(false); // Image has loaded, stop loading state
	};

	return (
		<div className='relative md:bg-projects-gradient bg-mobile-gradient h-full w-full overflow-x-hidden m-none pr-0 border-0 sm:border-l-[0.5px] border-orangeflame '>
			<ProjectsHeader
				selectedProject={selectedProject}
				viewMode={viewMode}
				setViewMode={setViewMode}
				images={imagesArray}
				isImageContainerHovered={isImageContainerHovered}
				setIsImageContainerHovered={setIsImageContainerHovered}
				onProjectClick={handleProjectClick}
				projectsMenuOpen={projectsMenuOpen}
				setProjectsMenuOpen={setProjectsMenuOpen}
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
				<div className='relative flex flex-col h-auto overflow-y-scroll w-screen max-w-[100vw] lg:min-h-[85vh] min-h-screen overflow-x-hidden '>
					<OverMediumLayout
						setIsImageContainerHovered={setIsImageContainerHovered}
						isImageContainerHovered={isImageContainerHovered}
						selectedIndex={selectedProjectIndex}
						currentImageIndex={currentImageIndex}
						setCurrentImageIndex={setCurrentImageIndex}
						viewMode={viewMode}
						images={imagesArray}
						loading={loading}
						setViewMode={setViewMode}
						selectedProject={selectedProject}
						activeSection={activeSection}
						setActiveSection={setActiveSection}
						onPrevImage={() =>
							handleImageChange(currentImageIndex - 1)
						}
						onNextImage={() =>
							handleImageChange(currentImageIndex + 1)
						}
						loadNextProject={() =>
							handleProjectClick(selectedProjectIndex + 1)
						}
						imageOnLoad={handleImageLoad}
					/>
					<MediumToLargeLayout
						setIsImageContainerHovered={setIsImageContainerHovered}
						isImageContainerHovered={isImageContainerHovered}
						selectedIndex={selectedProjectIndex}
						currentImageIndex={currentImageIndex}
						setCurrentImageIndex={setCurrentImageIndex}
						viewMode={viewMode}
						images={imagesArray}
						loading={loading}
						setViewMode={setViewMode}
						selectedProject={selectedProject}
						activeSection={activeSection}
						setActiveSection={setActiveSection}
						onPrevImage={() =>
							handleImageChange(currentImageIndex - 1)
						}
						onNextImage={() =>
							handleImageChange(currentImageIndex + 1)
						}
						loadNextProject={() =>
							handleProjectClick(selectedProjectIndex + 1)
						}
						imageOnLoad={handleImageLoad}
					/>
					<MobileProjectLayout
						selectedProject={selectedProject}
						selectedIndex={selectedProjectIndex}
						viewMode={viewMode}
						setViewMode={setViewMode}
						currentImageIndex={currentImageIndex}
						images={imagesArray}
						loading={loading}
						setCurrentImageIndex={handleImageChange}
						setActiveSection={setActiveSection}
						activeSection={activeSection}
						onPrevImage={() =>
							handleImageChange(currentImageIndex - 1)
						}
						onNextImage={() =>
							handleImageChange(currentImageIndex + 1)
						}
						loadNextProject={() =>
							handleProjectClick(selectedProjectIndex + 1)
						}
						imageOnLoad={handleImageLoad}
						imageLoading={imageLoading}
						setImageLoading={setImageLoading}
						setLoading={setLoading}
					/>
				</div>
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

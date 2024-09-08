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
import useFetchWebProjectImages from "../hooks/useFetchWebProjectImages";

const ProjectsDisplay = (): JSX.Element => {
	const [projectsMenuOpen, setProjectsMenuOpen] = useState(false);
	// const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
	// const [viewMode, setViewMode] = useState<"web" | "mobile">("mobile");
	// const selectedProject = projects[selectedProjectIndex];
	// const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
	// const [isImageContainerHovered, setIsImageContainerHovered] =
	// 	useState(false);
	const [showHoverPrompt, setShowHoverPrompt] = useState<boolean | null>(
		null
	);
	// const [activeSection, setActiveSection] = useState("Overview");
	// const [pendingProjectIndex, setPendingProjectIndex] = useState<
	// 	number | null
	// >(null);
	// const [loading, setLoading] = useState(false);
	// const { images: mobileImages, error: mobileError } =
	// 	useFetchMobileAppImages({
	// 		selectedProjectIndex,
	// 		viewMode,
	// 		supabaseId: selectedProject.supabaseId,
	// 		setLoading
	// 	});

	// const {
	// 	currentImage,
	// 	totalImages,
	// 	error: webError
	// } = useFetchWebProjectImages({
	// 	supabaseId: selectedProject.supabaseId,
	// 	viewMode,
	// 	currentImageIndex,
	// 	setLoading
	// });

	// const handleImageChange = (newIndex: number) => {
	// 	if (
	// 		newIndex >= 0 &&
	// 		newIndex <
	// 			(selectedProjectIndex === 0 || selectedProjectIndex === 3
	// 				? mobileImages.length
	// 				: totalImages)
	// 	) {
	// 		setCurrentImageIndex(newIndex);
	// 	}
	// };

	// const [imageLoading, setImageLoading] = useState(false);

	// const setLoadingCallback = useCallback((isLoading: boolean) => {
	// 	setLoading(isLoading);
	// }, []);

	// const { images, error } = useFetchMobileAppImages({
	// 	selectedProjectIndex:
	// 		pendingProjectIndex !== null
	// 			? pendingProjectIndex
	// 			: selectedProjectIndex,
	// 	viewMode,
	// 	supabaseId:
	// 		pendingProjectIndex !== null
	// 			? projects[pendingProjectIndex].supabaseId
	// 			: selectedProject.supabaseId,
	// 	setLoading: setLoadingCallback
	// });

	// useEffect(() => {
	// 	if (imageLoading) {
	// 		const timer = setTimeout(() => {
	// 			setImageLoading(false);
	// 		}, 500); // Adjust this delay as needed
	// 		return () => clearTimeout(timer);
	// 	}
	// }, [imageLoading]);

	// useEffect(() => {
	// 	if (isImageContainerHovered) {
	// 		setActiveSection("Overview");
	// 	}
	// }, [isImageContainerHovered]);

	// useEffect(() => {
	// 	if (!isImageContainerHovered && showHoverPrompt === null) {
	// 		const timer = setTimeout(() => {
	// 			setShowHoverPrompt(true);
	// 		}, 5000);
	// 		return () => clearTimeout(timer);
	// 	}
	// 	if (isImageContainerHovered) {
	// 		setShowHoverPrompt(false);
	// 	}
	// }, [isImageContainerHovered, showHoverPrompt]);

	// useEffect(() => {
	// 	if (pendingProjectIndex !== null && !loading) {
	// 		setSelectedProjectIndex(pendingProjectIndex);
	// 		setPendingProjectIndex(null);
	// 		setCurrentImageIndex(0);
	// 	}
	// }, [pendingProjectIndex, loading]);

	// const handleProjectClick = (index: number) => {
	// 	if (index === selectedProjectIndex) return;

	// 	setLoading(true);
	// 	setPendingProjectIndex(index);

	// 	if (index === 0 || index === 3) {
	// 		setViewMode("mobile");
	// 	} else if (index === 2) {
	// 		setViewMode("web");
	// 	}

	// 	setProjectsMenuOpen(false);
	// };

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
	const { images: mobileImages, error: mobileError } =
		useFetchMobileAppImages({
			selectedProjectIndex,
			viewMode,
			supabaseId: selectedProject.supabaseId,
			setLoading
		});

	const {
		currentImage,
		totalImages,
		error: webError
	} = useFetchWebProjectImages({
		supabaseId: selectedProject.supabaseId,
		viewMode,
		currentImageIndex,
		setLoading
	});

	// Determine images to display based on project type
	const images =
		selectedProjectIndex === 0 || selectedProjectIndex === 3
			? mobileImages
			: [currentImage];

	// Handle image change logic
	const handleImageChange = (newIndex: number) => {
		const isValidIndex =
			newIndex >= 0 &&
			newIndex <
				(selectedProjectIndex === 0 || selectedProjectIndex === 3
					? mobileImages.length
					: totalImages);

		if (isValidIndex) {
			setCurrentImageIndex(newIndex);
			setImageLoading(true);
		}
	};

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

	return (
		// <div className='relative md:bg-projects-gradient bg-mobile-gradient  h-full w-full overflow-x-hidden  m-none  pr-0   border-0 sm:border-l-[0.5px] border-orangeflame '>
		// 	<ProjectsHeader
		// 		selectedProject={selectedProject}
		// 		viewMode={viewMode}
		// 		setViewMode={setViewMode}
		// 		images={images}
		// 		isImageContainerHovered={isImageContainerHovered}
		// 		setIsImageContainerHovered={setIsImageContainerHovered}
		// 		onProjectClick={handleProjectClick}
		// 		projectsMenuOpen={projectsMenuOpen}
		// 		setProjectsMenuOpen={setProjectsMenuOpen}
		// 	/>
		// 	<div className='flex lg:flex-row flex-col items-start justify-start h-full min-h-[101vh] w-full'>
		// 		<ProjectListAndSkills
		// 			selectedProject={selectedProject}
		// 			handleProjectClick={handleProjectClick}
		// 			isImageContainerHovered={isImageContainerHovered}
		// 			setIsImageContainerHovered={setIsImageContainerHovered}
		// 			activeSection={activeSection}
		// 			setActiveSection={setActiveSection}
		// 		/>
		// 		<div
		// 			className={`relative flex flex-col h-auto overflow-y-scroll w-screen max-w-[100vw] lg:min-h-[85vh] min-h-screen  overflow-x-hidden `}>
		// 			{/* HIDES BELOW md: */}

		// 			<OverMediumLayout
		// 				setIsImageContainerHovered={setIsImageContainerHovered}
		// 				isImageContainerHovered={isImageContainerHovered}
		// 				selectedIndex={selectedProjectIndex}
		// 				currentImageIndex={currentImageIndex}
		// 				setCurrentImageIndex={setCurrentImageIndex}
		// 				viewMode={viewMode}
		// 				images={images}
		// 				loading={loading}
		// 				setViewMode={setViewMode}
		// 				selectedProject={selectedProject}
		// 				activeSection={activeSection}
		// 				setActiveSection={setActiveSection}
		// 			/>

		// 			{/* md: screens to lg: screens  */}

		// 			<MediumToLargeLayout
		// 				setIsImageContainerHovered={setIsImageContainerHovered}
		// 				isImageContainerHovered={isImageContainerHovered}
		// 				selectedIndex={selectedProjectIndex}
		// 				currentImageIndex={currentImageIndex}
		// 				setCurrentImageIndex={setCurrentImageIndex}
		// 				viewMode={viewMode}
		// 				images={images}
		// 				loading={loading}
		// 				setViewMode={setViewMode}
		// 				selectedProject={selectedProject}
		// 				activeSection={activeSection}
		// 				setActiveSection={setActiveSection}
		// 			/>
		// 			{/* </div> */}
		// 			{/* HIDES at SCREEN ABOVE md:  */}
		// 			<MobileProjectLayout
		// 				selectedProject={selectedProject}
		// 				selectedIndex={selectedProjectIndex}
		// 				viewMode={viewMode}
		// 				setViewMode={setViewMode}
		// 				currentImageIndex={currentImageIndex}
		// 				images={images}
		// 				loading={loading || imageLoading}
		// 				setCurrentImageIndex={handleImageChange}
		// 				setActiveSection={setActiveSection}
		// 				activeSection={activeSection}
		// 				onPrevImage={() =>
		// 					setCurrentImageIndex((prevIndex) => prevIndex - 1)
		// 				}
		// 				onNextImage={() =>
		// 					setCurrentImageIndex((prevIndex) => prevIndex + 1)
		// 				}
		// 				loadNextProject={() => {
		// 					setSelectedProjectIndex(selectedProjectIndex + 1);
		// 					setViewMode(
		// 						selectedProjectIndex + 1 === 1
		// 							? "web"
		// 							: selectedProjectIndex + 1 === 3
		// 							? "mobile"
		// 							: viewMode
		// 					);
		// 				}}
		// 			/>
		// 		</div>
		// 		{/* // ) : (
		// 		// 	<></>
		// 		// )} */}

		// 		<div className='flex md:hidden'>
		// 			<ProjectSkillsComponent
		// 				selectedProject={selectedProject}
		// 				activeSection={activeSection}
		// 				isImageHovered={isImageContainerHovered}
		// 			/>
		// 		</div>
		// 	</div>
		// </div>
		<div className='relative md:bg-projects-gradient bg-mobile-gradient h-full w-full overflow-x-hidden m-none pr-0 border-0 sm:border-l-[0.5px] border-orangeflame '>
			<ProjectsHeader
				selectedProject={selectedProject}
				viewMode={viewMode}
				setViewMode={setViewMode}
				images={images}
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
						images={images}
						loading={loading}
						setViewMode={setViewMode}
						selectedProject={selectedProject}
						activeSection={activeSection}
						setActiveSection={setActiveSection}
					/>
					<MediumToLargeLayout
						setIsImageContainerHovered={setIsImageContainerHovered}
						isImageContainerHovered={isImageContainerHovered}
						selectedIndex={selectedProjectIndex}
						currentImageIndex={currentImageIndex}
						setCurrentImageIndex={setCurrentImageIndex}
						viewMode={viewMode}
						images={images}
						loading={loading}
						setViewMode={setViewMode}
						selectedProject={selectedProject}
						activeSection={activeSection}
						setActiveSection={setActiveSection}
					/>
					<MobileProjectLayout
						selectedProject={selectedProject}
						selectedIndex={selectedProjectIndex}
						viewMode={viewMode}
						setViewMode={setViewMode}
						currentImageIndex={currentImageIndex}
						images={images}
						loading={loading || imageLoading}
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

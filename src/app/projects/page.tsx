"use client";
import React, { useEffect, useState } from "react";
import projects from "../components/projects/ProjectsObject";
import ProjectsHeader from "../components/projects/ProjectHeader";
import ProjectSkillsComponent from "../components/projects/ProjectSkills";
import MobileProjectLayout from "../components/projects/MobileProjectLayout";
import ProjectListAndSkills from "../components/projects/responsive-layout-components/ProjectListAndSkills";
import OverMediumLayout from "../components/projects/responsive-layout-components/OverMediumLayout";
import MediumToLargeLayout from "../components/projects/responsive-layout-components/MediumToLargeLayout";
import { createClient } from "@supabase/supabase-js";

const ProjectsDisplay = (): JSX.Element => {
	const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
	const [viewMode, setViewMode] = useState<"web" | "mobile">("mobile");
	const [projectsMenuOpen, setProjectsMenuOpen] = useState(false);
	const selectedProject = projects[selectedProjectIndex];
	[selectedProjectIndex + 1];
	const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
	const [images, setImages] = useState<any[]>([]);

	const [isImageContainerHovered, setIsImageContainerHovered] =
		useState(false);
	const [handleProjectClicked, setHandleProjectClicked] = useState(false);

	const handleProjectClick = (index: number) => {
		setHandleProjectClicked(true);
		const project = projects[index];

		setSelectedProjectIndex(index);
		setViewMode(
			selectedProjectIndex + 1 === 1
				? "web"
				: selectedProjectIndex + 1 === 3
				? "mobile"
				: viewMode
		);
		setCurrentImageIndex(0);
		setProjectsMenuOpen(false);
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

	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchImage = async () => {
			const supabase = createClient(
				"https://mgbwyyztxdknsphcbtof.supabase.co",
				"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1nYnd5eXp0eGRrbnNwaGNidG9mIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcyNTU1MzAxMywiZXhwIjoyMDQxMTI5MDEzfQ.wo4aqOWfpGLlNWO9_KgFrLTW5nUHwIDux0AG9TV1TdI"
			);
			setLoading(true);

			try {
				let imageList: any[] = [];

				if (selectedProjectIndex === 1 || selectedProjectIndex === 3) {
					// Fetch images for mobile-only projects
					const { data: images, error } = await supabase.storage
						.from("portfolio_images")
						.list(
							`projects/${selectedProject.supabaseId}/${viewMode}`,
							{ limit: 10 }
						);

					if (error) throw error;

					if (images) {
						// Generate public URLs for each image
						imageList = images.map(
							(image) =>
								supabase.storage
									.from("portfolio_images")
									.getPublicUrl(
										`projects/${selectedProject.supabaseId}/${viewMode}/${image.name}`
									).data.publicUrl
						);
					}
				} else {
					// Fetch images for web projects or other types
					const { data: images, error } = await supabase.storage
						.from("portfolio_images")
						.list(
							`projects/${selectedProject.supabaseId}/${viewMode}`,
							{ limit: 10 }
						);

					if (error) throw error;

					if (images) {
						// Generate public URLs for each image
						imageList = images.map(
							(image) =>
								supabase.storage
									.from("portfolio_images")
									.getPublicUrl(
										`projects/${selectedProject.supabaseId}/${viewMode}/${image.name}`
									).data.publicUrl
						);
					}
				}
				if (handleProjectClicked) {
					setImages(imageList as any[]);
					setLoading(false);
				}

				setImages(imageList as any[]);
				setLoading(false);
			} catch (error) {
				setError("Failed to fetch images");
				console.error(error);
			}
		};
		fetchImage();
	}, [selectedProjectIndex, viewMode, handleProjectClicked]);

	return (
		<div className='relative md:bg-projects-gradient bg-mobile-gradient  h-full w-full overflow-x-hidden  m-none  pr-0   border-0 sm:border-l-[0.5px] border-orangeflame '>
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
						images={images}
						loading={loading}
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
						images={images}
						loading={loading}
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
						images={images}
						loading={loading}
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
								selectedProjectIndex + 1 === 1
									? "web"
									: selectedProjectIndex + 1 === 3
									? "mobile"
									: viewMode
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

"use client";
import React, { useEffect, useRef, useState } from "react";
import projects from "../components/projects/ProjectsObject";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import ProjectList from "../components/projects/ProjectList";
import ProjectImages from "../components/projects/WebsiteProjectImages";
import ProjectControls from "../components/projects/ProjectImageChevrons";
import ProjectsHeader from "../components/projects/ProjectHeader";
import MobileImageContainer from "../components/projects/MobileAppProjectImages";
import ProjectImagePagination from "../components/projects/ProjectImagePagination";
import ProjectTextContent from "../components/projects/ProjectTextContent";
import ProjectSkillsComponent from "../components/projects/ProjectSkills";

const ProjectsDisplay = (): JSX.Element => {
	const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
	const [viewMode, setViewMode] = useState<"web" | "mobile">("mobile");
	const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
	const [isHovered, setIsHovered] = useState(false);
	const [isImageContainerHovered, setIsImageContainerHovered] =
		useState(false);
	// const [isSkillsHovered, setIsSkillsHovered] = useState(false);
	// const skillsTimeoutRef = useRef<NodeJS.Timeout | null>(null);

	// // useEffect(() => {
	// // 	if (isSkillsHovered && skillsTimeoutRef.current === null) {
	// // 		skillsTimeoutRef.current = setTimeout(() => {
	// // 			skillsTimeoutRef.current = null;
	// // 		}, 100);
	// // 	}
	// // }, [isSkillsHovered]);

	// const handleSkillsHover = () => {
	// 	if (skillsTimeoutRef.current === null) {
	// 		setIsSkillsHovered(true);
	// 	}
	// 	setIsSkillsHovered(true);
	// };

	// const handleSkillsLeave = () => {
	// 	setIsSkillsHovered(false);
	// 	skillsTimeoutRef.current = setTimeout(() => {
	// 		skillsTimeoutRef.current = null;
	// 	}, 500);
	// };

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
		<div
			className='bg-projects-gradient overflow-hidden min-h-screen m-none  pr-8  p-0 pt-11'
			style={{ borderColor: "#071E2201", borderWidth: "0.5px" }}>
			<ProjectsHeader
				selectedProject={selectedProject}
				viewMode={viewMode}
				setViewMode={setViewMode}
			/>
			<div className='flex flex-row items-start justify-center h-full min-h-[100%] w-full '>
				<div className='flex flex-col h-full justify-between w-[17vw] max-w-[13.5vw] min-h-[85vh] pt-[6vh]'>
					<ProjectList
						selectedProject={selectedProject}
						onProjectClick={handleProjectClick}
					/>

					<ProjectSkillsComponent selectedProject={selectedProject} />
				</div>
				<div className='flex flex-row justify-around mt-8 space-x-4'>
					<div
						className='flex flex-shrink-0 w-auto mx-auto  mt-1 ml-[5vw]
					max-w-[45%] relative'
						// style={{
						// 	transform: isImageContainerHovered
						// 		? "translateX(-20%)"
						// 		: "translateX(20%)",
						// 	transition: "transform 0.5s ease-in-out"
						// } }
					>
						<ProjectTextContent
							selectedProject={selectedProject}
							isImageContainerHovered={isImageContainerHovered}
						/>
					</div>
					<div
						className='w-auto mt-1  bg-yellow-300  self-right min-h-[70vh] max-h-[90vh] h- max-w-[55vw] relative'
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
							<div className='shadow-neon rounded-lg w-auto mx-auto justify-end max-h-[63vh] max-w-[58vw] '>
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
			</div>
			{/* <div className='-mt-16'> */}
			{/* <div>
				<h2 className='text-xl font-bold mb-2 text-slate-800 text-justify'>
					Skills / CodeStack
				</h2>
				<ul
					className='flex flex-col text-md
   font-semibold w-full'>
					{selectedProject.skills.map((skill, index) => (
						<li
							key={index}
							className={`cursor-pointer mb-2 text-left text-slate-300 over:text-white
									`}>
							{skill}
						</li>
					))}
				</ul>
			</div> */}
			{/* <div>
						<h2 className='text-2xl font-semibold text-slate-800 text-justify'>
							Objectives
						</h2>
						<h3 className='text-md font-normal text-slate-800 text-justify'>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Sed do eiusmod tempor incididunt ut labore et
							dolore magna aliqua. Lorem ipsum dolor sit amet,
							consectetur adipiscing elit. Sed do eiusmod tempor
							incididunt ut labore et dolore magna aliqua. Lorem
							ipsum dolor sit amet, consectetur adipiscing elit.
							Sed do eiusmod tempor incididunt ut labore et dolore
							magna aliqua. Lorem ipsum
						</h3>
					</div> */}
		</div>
	);
};

export default ProjectsDisplay;

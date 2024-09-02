import React, { useState } from "react";
import { Project } from "./ProjectsObject";

interface ProjectAccordionWebProps {
	selectedProject: Project;
	selectedIndex: number;
	imageContainerHovered: boolean;
	activeSection: string;
	setActiveSection: (section: string) => void;
	setIsImageContainerHovered?: (hovered: boolean) => void;
}

const ProjectAccordionWeb: React.FC<ProjectAccordionWebProps> = ({
	selectedProject,
	selectedIndex,
	imageContainerHovered,
	setIsImageContainerHovered,
	activeSection,
	setActiveSection
}) => {
	const getCategoryContent = (category: string) => {
		switch (category) {
			case "Tech Stack":
				return [
					{
						title: "FrontEnd",
						item: selectedProject.details.techStack?.frontend
					},
					{
						title: "State Management",
						item: selectedProject.details.techStack?.stateManagement
					},
					{
						title: "Backend",
						item: selectedProject.details.techStack?.backend
					}
				];
			case "Key Features":
				return selectedProject.details.keyFeatures?.features?.map(
					(feature) => `${feature.title}: ${feature.text}`
				);
			case "Outcomes":
				return selectedProject.details.outcomes?.outcome.map(
					(outcome) => `${outcome.title}: ${outcome.text}`
				);
			default:
				return [];
		}
	};

	const sections = [
		{ title: "Overview", content: selectedProject.details.overview },
		{ title: "Objectives", content: selectedProject.details.objective },
		{ title: "Tech Stack", content: getCategoryContent("Tech Stack") },
		{ title: "Key Features", content: getCategoryContent("Key Features") },
		{ title: "Outcomes", content: getCategoryContent("Outcomes") }
	];

	const renderContent = (section: any) => {
		if (typeof section.content === "string") {
			return <p>{section.content}</p>;
		}

		if (section.title === "Tech Stack") {
			return section.content.map((item: any, index: number) => (
				<div
					key={index}
					className='flex flex-col px-6 pl-5 justify-start align-top items-start pb-2 text-white'>
					<div className='text-lg mb-2 font-semibold pr-2 text-emerald-200 w-auto'>
						{item.title}
					</div>
					<div>{item.item}</div>
				</div>
			));
		}

		if (section.title === "Key Features" || section.title === "Outcomes") {
			return section.content.map((item: string, index: number) => (
				<div
					key={index}
					className='flex flex-col px-6 pl-5 justify-start align-top items-start pb-2 text-white'>
					<div className='text-lg mb-2 font-semibold pr-2 text-emerald-200 w-auto'>
						{item.split(": ")[0]}
					</div>
					<div>{item.split(": ")[1]}</div>
				</div>
			));
		}

		return null;
	};

	return (
		<div
			className={`flex flex-grow flex-col   border-t ${
				activeSection === "Overview" ? "border-t-0" : ""
			} border-orangeflame space-y-2 ${
				(selectedIndex === 0 || selectedIndex === 3) &&
				imageContainerHovered
					? "lg:max-w-[51%] w-auto"
					: (selectedIndex === 0 || selectedIndex === 3) &&
					  !imageContainerHovered
					? "min-w-[73%] lg:max-w-[73%] w-auto"
					: "lg:min-w-[78%] w-auto"
			}`}
			onMouseEnter={() => {
				if (imageContainerHovered) {
					setIsImageContainerHovered
						? setIsImageContainerHovered(false)
						: null;
				}
			}}>
			{sections.map((section, index) => (
				<div
					key={section.title}
					className={` px-2 ${
						activeSection === section.title
							? "border-orangeflame border-y"
							: ""
					}`}>
					<button
						className={`w-full text-left text-2xl p-4 py-2 font-semibold ${
							activeSection === section.title
								? "text-orangeflame"
								: "text-emerald-400"
						}`}
						onClick={() => setActiveSection(section.title)}>
						{section.title}
						<span className='text-orangeflame text-xl'>
							{" "}
							{activeSection !== section.title ? " ..." : ""}
						</span>
					</button>
					{activeSection === section.title && (
						<div className='p-4 text-white'>
							{renderContent(section)}
						</div>
					)}
				</div>
			))}
		</div>
	);
};

export default ProjectAccordionWeb;

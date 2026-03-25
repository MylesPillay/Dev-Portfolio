import React from "react";
import { Project } from "./ProjectsObject";

interface ProjectAccordionWebProps {
	selectedProject: Project;
	activeSection: string;
	setActiveSection: (section: string) => void;
	topAccordion: boolean;
	screenSize?: string;
}

const MediumScreenProjectAccordion: React.FC<ProjectAccordionWebProps> = ({
	screenSize,
	selectedProject,
	topAccordion,
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

	const filteredSections = topAccordion
		? sections.filter(
				(section) =>
					section.title === "Overview" ||
					section.title === "Objectives" ||
					section.title === "Key Features"
			)
		: sections.filter(
				(section) =>
					section.title === "Tech Stack" ||
					section.title === "Outcomes"
			);

	const renderContent = (section: any) => {
		if (typeof section.content === "string") {
			return (
				<div className='font-thin'>
					{section.content}
					{section.title === "Overview" && selectedProject.url && (
						<>
							{" "}
							<a
								href={selectedProject.url}
								target='_blank'
								rel='noopener noreferrer'
								className='underline text-emerald-300 hover:text-emerald-200 transition-colors'>
								View the live site here.
							</a>
						</>
					)}
				</div>
			);
		}

		if (section.title === "Tech Stack") {
			return section.content.map((item: any, index: number) => (
				<div
					key={index}
					className='flex flex-col px-6 pl-5 justify-start align-top items-start pb-2 text-white'>
					<div className='text-lg mb-2 font-light pr-2 text-emerald-200 w-auto'>
						{item.title}
					</div>
					<div className='font-thin'>{item.item}</div>
				</div>
			));
		}

		if (section.title === "Key Features" || section.title === "Outcomes") {
			return section.content.map((item: string, index: number) => (
				<div
					key={index}
					className='flex flex-col px-6 pl-5 justify-start align-top items-start pb-2 text-white'>
					<div className='text-lg mb-2 font-light pr-2 text-emerald-200 w-auto'>
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
			className={`flex flex-grow flex-col py-14 w-full border-y ${
				activeSection === "Overview" ? "border-t-0" : ""
			} border-orangeflame space-y-2`}
			style={{ borderTopWidth: topAccordion ? undefined : 1 }}>
			{filteredSections.map((section) => (
				<div
					key={section.title}
					className={`px-[3%] ${
						activeSection === section.title
							? "border-orangeflame border-y"
							: ""
					}`}>
					<button
						className={`w-full md:text-left text-justify text-2xl p-4 py-2 font-light ${
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
						<div className='p-4 text-white font-thin justify-start ml-[2vw] md:w-[80%] w-[100%]'>
							{renderContent(section)}
						</div>
					)}
				</div>
			))}
		</div>
	);
};

export default MediumScreenProjectAccordion;

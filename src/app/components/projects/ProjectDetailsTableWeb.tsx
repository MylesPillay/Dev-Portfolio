import React, { useState } from "react";
import { Project } from "./ProjectsObject";

interface ProjectTextContentWebProps {
	selectedProject: Project;
	isImageContainerHovered: boolean;
}

const ProjectTextComponentWeb: React.FC<ProjectTextContentWebProps> = ({
	selectedProject,
	isImageContainerHovered
}) => {
	const [activeCategory, setActiveCategory] = useState("Overview");

	const categories = ["Overview", "Tech Stack", "Key Features", "Outcomes"];

	const getCategoryContent = (category: any) => {
		switch (category) {
			case "Overview":
				return [
					selectedProject.details.overview,
					selectedProject.details.objective,
					selectedProject.details.motivation
				];
			case "Tech Stack":
				return [
					`Frontend: ${selectedProject.details.techStack?.frontend}`,
					`State Management: ${selectedProject.details.techStack?.stateManagement}`,
					`Backend: ${selectedProject.details.techStack?.backend}`
				];
			case "Key Features":
				return selectedProject.details.keyFeatures?.map(
					(feature) => `${feature.title}: ${feature.text}`
				);
			case "Outcomes":
				return selectedProject.details.outcomes?.map(
					(outcome) => `${outcome.title}: ${outcome.text}`
				);
			default:
				return [];
		}
	};

	return (
		<div
			className={` flex flex-col left-[1vw] p-8 py-4 m-6 mt-0 rounded-lg bg-black bg-opacity-40 h-auto text-justify max-h-[35vh] overflow-y-scroll scroll-y-hidden ${
				!isImageContainerHovered ? "w-[60vw] " : "w-[45vw] "
			}`}
			style={{
				transition: "width 0.2s ease-in-out"
			}}>
			<div className='flex justify-between mb-4'>
				{categories.map((category) => (
					<button
						key={category}
						className={`px-4 py-2 rounded ${
							activeCategory === category
								? "bg-emerald-500 text-white"
								: "bg-gray-200 text-black"
						}`}
						onClick={() => setActiveCategory(category)}>
						{category}
					</button>
				))}
			</div>
			<div className='mt-4'>
				<ul className='list-disc pl-5'>
					{getCategoryContent(activeCategory)?.map((item, index) => (
						<li key={index} className='text-white mb-2'>
							{item}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default ProjectTextComponentWeb;

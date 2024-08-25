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
	const [activeItemIndex, setActiveItemIndex] = useState(0);

	const categories = ["Overview", "Tech Stack", "Key Features", "Outcomes"];

	const getCategoryContent = (category: string) => {
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
	const currentCategoryContent = getCategoryContent(activeCategory);

	return (
		<div
			className={`flex flex-col left-[1vw]  m-6 mt-0 w-auto rounded-lg bg-black bg-opacity-40 h-auto text-justify max-h-[35vh] overflow-y-scroll scroll-y-hidden `}
			style={{
				transition: "width 0.2s ease-in-out",
				borderColor: "#FF6600",
				borderWidth: "2px"
			}}>
			<div className='flex justify-between mb-4 '>
				{categories.map((category) => (
					<button
						key={category}
						className={` w-full  p-4 h-auto text-lg border-b-2 border-b-emerald-200 text-center   ${
							selectedProject.images.web.length > 0
								? "bg-transparent cursor-pointer"
								: "bg-transparent opacity-50 cursor-default"
						} ${
							activeCategory === category
								? " text-emerald-200"
								: "text-slate-600"
						}`}
						onClick={() => {
							setActiveCategory(category), setActiveItemIndex(0);
						}}>
						{category}
					</button>
				))}
			</div>
			<div className=' flex flex-row  justify-center items-center py-2'>
				<div className='flex flex-col justify-center py-2'>
					{currentCategoryContent?.map((_, index) => (
						<button
							key={index}
							className={`w-3 h-3 rounded-full mr-2 my-4 ml-6 ${
								index === activeItemIndex
									? "bg-white"
									: "bg-gray-400"
							}`}
							onClick={() => setActiveItemIndex(index)}
						/>
					))}
				</div>
				<div className='text-white px-8 '>
					{currentCategoryContent?.[activeItemIndex]}
				</div>
			</div>
		</div>
	);
};

export default ProjectTextComponentWeb;

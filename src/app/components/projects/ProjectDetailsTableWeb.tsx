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
			className={`flex flex-col left-[1vw]  m-6 mt-0 w-auto rounded-lg bg-black bg-opacity-40 h-auto text-justify max-h-40vh] overflow-y-scroll scroll-y-hidden `}
			style={{
				transition: "width 0.2s ease-in-out"
			}}>
			<div className='flex justify-between  '>
				{categories.map((category) => (
					<button
						key={category}
						style={{
							borderColor:
								activeCategory === category
									? "#ff7316"
									: "#A7F3D0",
							color:
								activeCategory === category
									? "#ff7316"
									: "#A7F3D0"
						}}
						className={` w-full  p-4 h-auto text-lg border-b-2 text-center   ${
							selectedProject.images.web.length > 0
								? "bg-transparent cursor-pointer"
								: "bg-transparent opacity-50 cursor-default"
						} ${
							activeCategory === category ? "" : "text-slate-600"
						}`}
						onClick={() => {
							setActiveCategory(category), setActiveItemIndex(0);
						}}>
						{category}
					</button>
				))}
			</div>
			<div className=' flex flex-row justify-center '>
				<div className='flex flex-col justify-center py-8'>
					{currentCategoryContent?.map((_, index) => (
						<button
							key={index}
							className={`w-2.5 h-2.5 rounded-full px-8 py-4 `}
							onClick={() => setActiveItemIndex(index)}>
							<div
								className={`w-2.5 h-2.5 rounded-full`}
								style={{
									backgroundColor:
										index === activeItemIndex
											? "#ff7316"
											: "#A7F3D0"
								}}></div>
						</button>
					))}
				</div>
				<div className='text-white px-6 justify-start align-top items-start  pt-[4.5vh]'>
					{currentCategoryContent?.[activeItemIndex]}
				</div>
			</div>
		</div>
	);
};

export default ProjectTextComponentWeb;

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
	const [activeCategory, setActiveCategory] = useState("Tech Stack");
	const [activeItemIndex, setActiveItemIndex] = useState(0);

	const categories = ["Tech Stack", "Key Features", "Outcomes"];

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
	const currentCategoryContent = getCategoryContent(activeCategory);

	return (
		<div
			className={`flex flex-col left-[1vw]  m-6 mt-0 w-auto rounded-lg  pb-4 bg-black bg-opacity-40 h-auto text-justify  overflow-y-scroll scroll-y-hidden ${
				isImageContainerHovered ? "max-h-[25vh]" : "max-h-[45vh]"
			}`}
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
								: " cursor-default"
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
			<div className=' flex flex-row justify-start'>
				<div className='flex flex-col justify-start py-8'>
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
				{activeCategory === "Tech Stack" ? (
					currentCategoryContent &&
					currentCategoryContent[activeItemIndex] && (
						<div className='flex flex-col px-6 pl-5 justify-start align-top items-start pt-[4.5vh] text-white'>
							{typeof currentCategoryContent[activeItemIndex] ===
								"object" &&
								currentCategoryContent[activeItemIndex]
									.title && (
									<div className='text-lg mb-2 font-semibold pr-2 text-emerald-200 w-auto'>
										{
											currentCategoryContent[
												activeItemIndex
											].title
										}
									</div>
								)}
							{typeof currentCategoryContent[activeItemIndex] ===
							"object"
								? currentCategoryContent[activeItemIndex].item
								: currentCategoryContent[activeItemIndex]}
						</div>
					)
				) : activeCategory === "Key Features" ||
				  activeCategory === "Outcomes" ? (
					<div className='flex flex-col px-6 pl-5 justify-start align-top items-start pt-[4.5vh] text-white'>
						{currentCategoryContent &&
							currentCategoryContent[activeItemIndex] && (
								<>
									<div className='text-lg mb-2 font-semibold pr-2 text-emerald-200 w-auto'>
										{typeof currentCategoryContent[
											activeItemIndex
										] === "string"
											? currentCategoryContent[
													activeItemIndex
											  ].split(": ")[0]
											: currentCategoryContent[
													activeItemIndex
											  ].title}
									</div>
									<div>
										{typeof currentCategoryContent[
											activeItemIndex
										] === "string"
											? currentCategoryContent[
													activeItemIndex
											  ].split(": ")[1]
											: currentCategoryContent[
													activeItemIndex
											  ].title}
									</div>
								</>
							)}
					</div>
				) : (
					<div className='text-white px-6 justify-start align-top items-start  pt-[4.5vh]'>
						{typeof currentCategoryContent?.[activeItemIndex] ===
						"object"
							? (
									currentCategoryContent[activeItemIndex] as {
										title: string;
										item: string | undefined;
									}
							  ).item
							: currentCategoryContent?.[activeItemIndex]}
					</div>
				)}
			</div>
		</div>
	);
};

export default ProjectTextComponentWeb;

import React from "react";

interface ProjectTextContentProps {
	selectedProject: {
		details: {
			objective: string;
			keyResults: string[];
		};
	};
	isImageContainerHovered: boolean;
}

const ProjectTextContent: React.FC<ProjectTextContentProps> = ({
	selectedProject,
	isImageContainerHovered
}) => {
	return (
		<div
			className='p-4  rounded-lg  bg-black bg-opacity-40 h-auto '
			style={{
				transform: isImageContainerHovered
					? "translateX(20%)"
					: "translateX(20%)",
				transition: "transform 500ms ease-in-out",
				width: isImageContainerHovered ? "80%" : "100%"
			}}>
			<h2 className='text-2xl font-semibold text-white text-justify'>
				Objectives
			</h2>
			<p className='text-md font-normal text-white text-justify mb-4'>
				{selectedProject.details.objective}
			</p>
			<h2 className='text-2xl font-semibold text-white text-justify'>
				Key Results
			</h2>
			<ul className='list-disc list-inside text-white text-justify'>
				{selectedProject.details.keyResults.map((result, index) => (
					<li key={index} className='text-md font-normal mb-2'>
						{result}
					</li>
				))}
			</ul>
		</div>
	);
};

export default ProjectTextContent;

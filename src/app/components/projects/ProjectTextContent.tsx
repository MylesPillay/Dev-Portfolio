import React from "react";
import { Project } from "./ProjectsObject";

interface ProjectTextContentProps {
	selectedProject: Project;
	isImageContainerHovered: boolean;
}

const ProjectTextContent: React.FC<ProjectTextContentProps> = ({
	selectedProject,
	isImageContainerHovered
}) => {
	return (
		<div
			className={`absolute flex flex-col left-[2vw] bg-black bg-opacity-40 h-auto max-w-[50vw] ${
				!isImageContainerHovered ? "w-[50vw] " : "w-[33vw] "
			}`}>
			<h2 className='text-2xl w-full font-semibold text-white underline underline-offset-1'>
				Overview
			</h2>
			<p className='text-md font-normal text-white mb-4 w-full'>
				{selectedProject.details.overview}
			</p>
			<h3 className='text-xl font-semibold text-white w-full'>
				Objective:
			</h3>
			<p className='text-md font-normal text-white mb-4 w-full'>
				{selectedProject.details.objective}
			</p>
			<h3 className='text-xl font-semibold text-white w-full'>
				Motivation:
			</h3>
			<p className='text-md font-normal text-white mb-4 w-full'>
				{selectedProject.details.motivation}
			</p>
			<h3 className='text-xl font-semibold text-white w-full'>
				Tech Stack:
			</h3>
			<h4 className='text-lg font-semibold text-white w-full'>
				Frontend:
			</h4>
			<p className='text-md font-normal text-white mb-2 w-full'>
				{selectedProject.details.techStack?.frontend}
			</p>
			<h4 className='text-lg font-semibold text-white w-full'>
				State Management:
			</h4>
			<p className='text-md font-normal text-white mb-2 w-full'>
				{selectedProject.details.techStack?.stateManagement}
			</p>
			<h4 className='text-lg font-semibold text-white w-full'>
				Backend:
			</h4>
			<p className='text-md font-normal text-white mb-4 w-full'>
				{selectedProject.details.techStack?.backend}
			</p>
			<h3 className='text-xl font-semibold text-white w-full'>
				Key Features:
			</h3>
			{selectedProject.details.keyFeatures?.map((feature, index) => (
				<div key={index}>
					<h4 className='text-lg font-semibold text-white w-full'>
						{feature.title}
					</h4>
					<p className='text-md font-normal text-white mb-2 w-full'>
						{feature.text}
					</p>
				</div>
			))}
			<h3 className='text-xl font-semibold text-white w-full'>
				Outcomes:
			</h3>
			{selectedProject.details.outcomes?.map((outcome, index) => (
				<div key={index}>
					<h4 className='text-lg font-semibold text-white w-full'>
						{outcome.title}
					</h4>
					<p className='text-md font-normal text-white mb-2 w-full'>
						{outcome.text}
					</p>
				</div>
			))}
		</div>
	);
};

export default ProjectTextContent;

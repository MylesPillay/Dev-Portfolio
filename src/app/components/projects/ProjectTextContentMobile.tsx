import React from "react";
import { Project } from "./ProjectsObject";

interface ProjectTextContentMobileProps {
	selectedProject: Project;
	isImageContainerHovered: boolean;
}

const ProjectTextContentMobile: React.FC<ProjectTextContentMobileProps> = ({
	selectedProject,
	isImageContainerHovered
}) => {
	return (
		<div
			className={`absolute flex flex-col left-[2vw] p-8 py-4 rounded-lg bg-black bg-opacity-40 h-auto max-w-[50vw] text-justify max-h-[82vh] overflow-y-scroll scroll-y-hidden ${
				!isImageContainerHovered ? "w-[49vw] " : "w-[33vw] "
			}`}
			style={{
				transition: "width 0.2s ease-in-out"
			}}>
			<div className='project-text-section'>
				<h2 className='text-xl w-auto mb-2 font-semibold text-emerald-200 underline underline-offset-1'>
					Overview
				</h2>
				<p className='text-md font-normal text-white mb-4 w-auto'>
					{selectedProject.details.overview}
				</p>
			</div>
			<div className='project-text-section'>
				<h3 className='text-xl mb-2 font-semibold text-emerald-200 w-auto underline underline-offset-1'>
					Objective:
				</h3>
				<p className='text-md font-normal text-white mb-4 w-auto'>
					{selectedProject.details.objective}
				</p>
			</div>
			<div className='project-text-section'>
				<h3 className='text-xl mb-2 font-semibold text-emerald-200 w-auto underline underline-offset-1'>
					Motivation:
				</h3>
				<p className='text-md font-normal text-white mb-4 w-auto'>
					{selectedProject.details.motivation}
				</p>
			</div>
			<div className='project-text-section text-justify'>
				<h3 className='text-xl font-semibold text-white my-4 w-auto underline underline-offset-1'>
					Tech Stack:
				</h3>
				<div className='ml-8'>
					<div className='project-text-section'>
						<h4 className='text-lg font-semibold text-emerald-200 w-auto'>
							Frontend:
						</h4>
						<p className='text-md font-normal text-white mb-2 w-auto ml-4'>
							{selectedProject.details.techStack?.frontend}
						</p>
					</div>
					<div className='project-text-section'>
						<h4 className='text-lg font-semibold text-emerald-200 w-auto'>
							State Management:
						</h4>
						<p className='text-md font-normal text-white mb-2 w-auto ml-4'>
							{selectedProject.details.techStack?.stateManagement}
						</p>
					</div>
					<div className='project-text-section'>
						<h4 className='text-lg font-semibold text-emerald-200 w-auto'>
							Backend:
						</h4>
						<p className='text-md font-normal text-white mb-4 w-auto ml-4'>
							{selectedProject.details.techStack?.backend}
						</p>
					</div>
				</div>
			</div>

			<h3 className='text-xl font-semibold text-white my-4 w-auto underline underline-offset-1'>
				Key Features:
			</h3>
			{selectedProject.details.keyFeatures?.features?.map(
				(feature: any, index: number) => (
					<div key={index} className='project-text-section'>
						<h4 className='text-lg font-semibold text-emerald-200 w-auto ml-8'>
							{feature.title}
						</h4>
						<p className='text-md font-normal text-white mb-2 w-auto ml-12'>
							{feature.text}
						</p>
					</div>
				)
			)}

			<div className='project-text-section'>
				<h3 className='text-xl font-semibold text-white my-4 w-auto underline underline-offset-1'>
					Outcomes:
				</h3>
				{selectedProject.details.outcomes?.outcome?.map(
					(outcome: any, index: number) => (
						<div key={index} className='project-text-section'>
							<h4 className='text-lg font-semibold text-emerald-200 w-auto ml-8'>
								{outcome.title}
							</h4>
							<p className='text-md font-normal text-white mb-2 w-auto ml-12'>
								{outcome.text}
							</p>
						</div>
					)
				)}
			</div>
		</div>
	);
};

export default ProjectTextContentMobile;

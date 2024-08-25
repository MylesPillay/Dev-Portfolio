import React from "react";
import { Project } from "./ProjectsObject";

interface ProjectTextContentWebProps {
	selectedProject: Project;
	isImageContainerHovered: boolean;
}

const ProjectTextContentWeb: React.FC<ProjectTextContentWebProps> = ({
	selectedProject,
	isImageContainerHovered
}) => {
	return (
		<div
			className={`flex flex-col left-[1vw] p-8 py-4 m-6 mt-0 w-auto rounded-lg bg-black bg-opacity-40 h-auto  text-justify overflow-y-scroll max-h-[50vh] scroll-y-hidden
			`}
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
				<h3 className='text-xl mb-2  font-semibold text-emerald-200 w-auto underline underline-offset-1'>
					Objective:
				</h3>
				<p className='text-md font-normal text-white mb-4 w-auto'>
					{selectedProject.details.objective}
				</p>
			</div>
			{/* <div className='project-text-section'>
				<h3 className='text-xl mb-2 font-semibold text-emerald-200 w-auto underline underline-offset-1'>
					Motivation:
				</h3>

				<p className='text-md font-normal text-white mb-4 w-auto'>
					{selectedProject.details.motivation}
				</p>
			</div>
			<div className='project-text-section text-justify '>
				<h3 className='text-xl font-semibold text-white my-4 w-auto underline underline-offset-1'>
					Tech Stack:
				</h3>
				<div className='ml-8'>
					<div className='project-text-section'>
						<div className='project-text-section'>
							<h4 className='text-lg font-semibold text-emerald-200 w-auto'>
								Frontend:
							</h4>
						</div>
						<p className='text-md font-normal text-white mb-2 w-auto'></p>
						<p className='text-md font-normal text-white mb-2 w-auto ml-4'>
							{selectedProject.details.techStack?.frontend}
						</p>
					</div>
					<div className='project-text-section'>
						<div className='project-text-section'>
							<h4 className='text-lg font-semibold text-emerald-200 w-auto '>
								State Management:
							</h4>
						</div>
						<p className='text-md font-normal text-white mb-2 w-auto ml-4'>
							{selectedProject.details.techStack?.stateManagement}
						</p>
					</div>
					<div className='project-text-section'>
						<div className='project-text-section'>
							<h4 className='text-lg font-semibold text-emerald-200 w-auto '>
								Backend:
							</h4>
						</div>
						<p className='text-md font-normal text-white mb-4 w-auto ml-4'>
							{selectedProject.details.techStack?.backend}
						</p>
					</div>
				</div>
			</div>

			<h3 className='text-xl font-semibold text-white my-4 w-auto underline underline-offset-1'>
				Key Features:
			</h3>
			{selectedProject.details.keyFeatures?.map((feature, index) => (
				<div className='project-text-section '>
					<div className='project-text-section'>
						<div key={index}>
							<div className='project-text-section ml-8'>
								<h4 className='text-lg font-semibold text-emerald-200 w-auto'>
									{feature.title}
								</h4>
							</div>
						</div>
					</div>
					<div className='project-text-section ml-12'>
						<p className='text-md font-normal text-white mb-2 w-auto'>
							{feature.text}
						</p>
					</div>
				</div>
			))}

			<div className='project-text-section '>
				<div className='project-text-section text-justify'>
					<h3 className='text-xl font-semibold text-white w-auto my-4 underline underline-offset-1'>
						Outcomes:
					</h3>
				</div>
				{selectedProject.details.outcomes?.map((outcome, index) => (
					<div className='project-text-section text-justify'>
						<div key={index}>
							<h4 className='text-lg font-semibold text-emerald-200 w-auto ml-8 my-4 '>
								{outcome.title}
							</h4>

							<div className='project-text-section text-justify'>
								<p className='text-md font-normal text-white mb-2 w-auto ml-12'>
									{outcome.text}
								</p>
							</div>
						</div>
					</div>
				))}
			</div> */}
		</div>
	);
};

export default ProjectTextContentWeb;

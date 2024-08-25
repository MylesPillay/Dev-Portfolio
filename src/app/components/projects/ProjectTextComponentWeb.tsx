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
		</div>
	);
};

export default ProjectTextContentWeb;

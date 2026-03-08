import React from "react";
import { Project } from "./ProjectsObject";

interface ProjectTextContentWebProps {
	selectedProject: Project;
}

const ProjectTextContentWeb: React.FC<ProjectTextContentWebProps> = ({
	selectedProject
}) => {
	return (
		<div
			className={`flex flex-col left-[1vw]  py-4 m-6 mt-0 w-auto rounded-lg h-auto  text-justify overflow-y-scroll max-h-[50vh] scroll-y-hidden
			`}
			style={{
				transition: "width 0.2s ease-in-out",
				backgroundColor: "#0B154111"
			}}>
			<div className='project-text-section'>
				<h2 className='text-xl w-auto mb-2 font-semibold text-emerald-200 underline underline-offset-1'>
					Overview
				</h2>
				<p className='text-md font-normal text-white mb-4 w-auto'>
					{selectedProject.details.overview}
					{selectedProject.url && (
						<>
							{" "}
							<a
								href={selectedProject.url}
								target='_blank'
								rel='noopener noreferrer'
								className='underline'>
								View the live site here.
							</a>
						</>
					)}
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

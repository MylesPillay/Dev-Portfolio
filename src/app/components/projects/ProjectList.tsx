import React from "react";

import { Project } from "next/dist/build/swc";
import projects from "./ProjectsObject";

interface ProjectListProps {
	selectedProject: (typeof projects)[0];
	onProjectClick: (index: number) => void;
}

const ProjectList: React.FC<ProjectListProps> = ({
	selectedProject,
	onProjectClick
}) => {
	return (
		<div className='w-[20%] ml-2 rounded-lg'>
			<ul className='flex flex-col font-medium'>
				{projects.map((project, index) => (
					<li
						key={index}
						className={`cursor-pointer my-2 text-left ${
							selectedProject.name === project.name
								? " text-white"
								: "hover:text-white"
						}`}
						onClick={() => onProjectClick(index)}>
						{project.name}
					</li>
				))}
			</ul>
		</div>
	);
};

export default ProjectList;

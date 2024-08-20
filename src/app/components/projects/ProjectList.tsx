import React from "react";
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
		<ul
			className='flex flex-col text-lg
   font-medium w-full'>
			{projects.map((project, index) => (
				<li
					key={index}
					className={`cursor-pointer mb-2 text-left text-slate-300 ${
						selectedProject.name === project.name
							? ""
							: "hover:text-white"
					}`}
					onClick={() => onProjectClick(index)}>
					{project.name}
				</li>
			))}
		</ul>
	);
};

export default ProjectList;

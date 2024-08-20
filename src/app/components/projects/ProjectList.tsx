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
   font-medium w-full h-1/2 min-h-[50%]'>
			{projects.map((project, index) => (
				<li
					key={index}
					className={`cursor-pointer mb-2 text-left  ${
						selectedProject.name === project.name
							? "text-white"
							: "hover:text-white hover:text-opacity-80 text-slate-300"
					}`}
					onClick={() => onProjectClick(index)}>
					{project.name}
				</li>
			))}
		</ul>
	);
};

export default ProjectList;

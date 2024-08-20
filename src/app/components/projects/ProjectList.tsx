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
			className='flex flex-col
   font-medium w-full h-1/2 min-h-[50%] pl-8'>
			{projects.map((project, index) => (
				<li
					key={index}
					className={`cursor-pointer mb-2 text-left text-lg ${
						selectedProject.name === project.name
							? "text-white font-bold text-xl"
							: "hover:text-white hover:text-opacity-80 text-emerald-200"
					}`}
					onClick={() => onProjectClick(index)}>
					{project.name}
				</li>
			))}
		</ul>
	);
};

export default ProjectList;

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
			className='lg:flex flex-col hidden
   md:font-medium w-auto h-auto min-h-[50%] pl-8 pt-[6vh]'>
			{projects.map((project, index) => (
				<li
					key={index}
					className={`cursor-pointer mb-2 text-left responsive-text-md ${
						selectedProject.name === project.name
							? "text-white font-bold "
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

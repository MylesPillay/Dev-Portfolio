import React from 'react';
import projects from './ProjectsObject';

interface ProjectListProps {
  selectedProject: (typeof projects)[0];
  onProjectClick: (index: number) => void;
}

const ProjectList: React.FC<ProjectListProps> = ({
  selectedProject,
  onProjectClick,
}) => {
  return (
    <ul className="sticky top-0 hidden w-auto min-w-[220px] flex-col items-start justify-center px-8 text-left md:font-light lg:flex">
      {projects.map((project, index) => (
        <li
          key={index}
          className={`md:text-responsive-xl mb-2 text-left text-lg ${
            selectedProject.name === project.name
              ? 'cursor-default text-xl text-white'
              : 'cursor-pointer text-emerald-200 hover:text-white hover:text-opacity-80'
          }`}
          onClick={() => onProjectClick(index)}
        >
          {project.name}
        </li>
      ))}
    </ul>
  );
};

export default ProjectList;

import React, { useState } from 'react';
import { motion } from 'motion/react';
interface ProjectDetailsProps {
  selectedProject: {
    skills: string[];
  };
  activeSection: string;
  isImageHovered: boolean;
}

const ProjectSkillsComponent: React.FC<ProjectDetailsProps> = ({
  selectedProject,
  activeSection,
  isImageHovered,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const isExpanded =
    isHovered ||
    (!isImageHovered && !isHovered && activeSection == 'Overview') ||
    (!isHovered && activeSection == 'Objectives');

  return (
    <div className="space-between item hidden flex-row justify-end align-bottom md:flex">
      <motion.div
        className="flex h-auto w-full flex-col justify-center rounded-r-lg border-black border-opacity-50 py-[3vh] pl-8 pr-2"
        initial={false}
        animate={{ minWidth: isExpanded ? '65vw' : '13.5vw' }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        style={{
          backgroundColor: '#070e2d',
          borderColor: '#FF7D11',
          borderWidth: 1,
          borderLeft: 'none',
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <h2 className="text-md mb-3 text-left font-medium text-white">
          Skills / CodeStack
        </h2>

        <ul
          className={`md:text-md text-md flex flex-wrap justify-start text-left font-light`}
        >
          {isExpanded
            ? selectedProject.skills.map((skill, index) => (
                <li
                  key={index}
                  className={`mb-2 mr-4 text-justify text-emerald-200`}
                >
                  {skill}
                </li>
              ))
            : selectedProject.skills.slice(0, 2).map((skill, index) => (
                <li
                  key={index}
                  className={`mb-2 mr-4 text-justify text-emerald-200`}
                >
                  {skill} {' ...'}
                </li>
              ))}
        </ul>
      </motion.div>
    </div>
  );
};

export default ProjectSkillsComponent;

'use client';
import React, { useState } from 'react';
import { Project } from '@/data/projects';
import projects from '@/data/projects';
import { ProjectViewToggle } from './ProjectViewToggle';
import useDeviceScreenSize from '@/hooks/useDeviceScreenSize';
import MobileBurgerMenu from '../../ui/MobileBurgerMenu';

interface ProjectsHeaderProps {
  selectedProject: Project;
  viewMode: 'web' | 'mobile';
  setViewMode: (mode: 'web' | 'mobile') => void;
  isImageContainerHovered: boolean;
  setIsImageContainerHovered: (hovered: boolean) => void;
  onProjectClick: (index: number) => void;
  projectsMenuOpen: boolean;
  setProjectsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ProjectsHeader: React.FC<ProjectsHeaderProps> = ({
  selectedProject,
  viewMode,
  setViewMode,
  isImageContainerHovered,
  setIsImageContainerHovered,
  onProjectClick,
  projectsMenuOpen,
  setProjectsMenuOpen,
}) => {
  const [width] = useDeviceScreenSize();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div
      className="sticky top-0 z-50 my-0 flex w-full flex-grow flex-row items-baseline justify-start bg-opacity-100 bg-project-title-gradient pb-2 pt-8 align-bottom sm:pb-4 sm:pl-8 sm:pr-8"
      onMouseEnter={() => {
        if (isImageContainerHovered) {
          setIsImageContainerHovered(false);
        }
      }}
    >
      <div className="flex w-auto flex-col justify-between">
        <button
          onClick={() => {
            setProjectsMenuOpen(!projectsMenuOpen);
            setMobileMenuOpen(false);
          }}
          className="ml-4 h-auto w-auto min-w-[10vw] justify-start pt-2 text-left align-text-bottom text-2xl font-medium text-orangeflame sm:ml-0 sm:pt-0 lg:pointer-events-none lg:cursor-default"
          disabled={width >= 1200}
        >
          PROJECTS
        </button>

        {projectsMenuOpen && (
          <div className="fixed left-0 top-0 z-40 h-full w-[50%] max-w-[350px] border-b border-r border-emerald-200 bg-deepBlueBg p-8 pb-4 pr-4">
            <div className="flex h-[10%] flex-col items-start p-2">
              <ul>
                {projects
                  .filter((project) => project.index !== selectedProject.index)
                  .map((project, index) => (
                    <li
                      key={index}
                      className="my-4 text-left text-xl font-light text-orangeflame hover:text-white hover:text-opacity-80"
                      onClick={() => onProjectClick(project.index)}
                    >
                      {project.name}
                    </li>
                  ))}
              </ul>
              <button
                onClick={() => {
                  setProjectsMenuOpen(false);
                }}
                className="text-medium flex w-[100%] items-end justify-end text-right text-emerald-200"
              >
                CLOSE
              </button>
            </div>
          </div>
        )}
      </div>
      <h1 className="ml-12 hidden w-full max-w-[90vw] justify-start text-left text-4xl font-semibold text-white sm:flex-grow md:flex">
        {selectedProject.name.toUpperCase()}
      </h1>
      <MobileBurgerMenu
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      <ProjectViewToggle
        isMobileOnly={selectedProject.isMobileOnly}
        isWebOnly={selectedProject.isWebOnly}
        viewMode={viewMode}
        setViewMode={setViewMode}
        headerPosition={true}
      />
    </div>
  );
};

export default ProjectsHeader;

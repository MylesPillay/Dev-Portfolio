import React from 'react';
import { Project } from '@/data/projects';

type TechStackItem = { title: string; item: string | undefined };
type ProjectSection = {
  title: string;
  content: string | TechStackItem[] | string[] | undefined;
};

interface ProjectAccordionWebProps {
  selectedProject: Project;
  imageContainerHovered: boolean;
  activeSection: string;
  setActiveSection: (section: string) => void;
  setIsImageContainerHovered?: (hovered: boolean) => void;
}

const ProjectAccordionWeb: React.FC<ProjectAccordionWebProps> = ({
  selectedProject,
  imageContainerHovered,
  setIsImageContainerHovered,
  activeSection,
  setActiveSection,
}) => {
  const getCategoryContent = (category: string) => {
    switch (category) {
      case 'Tech Stack':
        return [
          {
            title: 'FrontEnd',
            item: selectedProject.details.techStack?.frontend,
          },
          {
            title: 'State Management',
            item: selectedProject.details.techStack?.stateManagement,
          },
          {
            title: 'Backend',
            item: selectedProject.details.techStack?.backend,
          },
        ];
      case 'Key Features':
        return selectedProject.details.keyFeatures?.features?.map(
          (feature) => `${feature.title}: ${feature.text}`
        );
      case 'Outcomes':
        return selectedProject.details.outcomes?.outcome.map(
          (outcome) => `${outcome.title}: ${outcome.text}`
        );
      default:
        return [];
    }
  };

  const sections = [
    { title: 'Overview', content: selectedProject.details.overview },
    { title: 'Objectives', content: selectedProject.details.objective },
    { title: 'Tech Stack', content: getCategoryContent('Tech Stack') },
    { title: 'Key Features', content: getCategoryContent('Key Features') },
    { title: 'Outcomes', content: getCategoryContent('Outcomes') },
  ];

  const renderContent = (section: ProjectSection) => {
    if (typeof section.content === 'string') {
      return (
        <p>
          {section.content}
          {section.title === 'Overview' && selectedProject.url && (
            <>
              {' '}
              <a
                href={selectedProject.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-300 underline transition-colors hover:text-emerald-200"
              >
                View the live site here.
              </a>
            </>
          )}
        </p>
      );
    }

    if (section.title === 'Tech Stack') {
      return (section.content as TechStackItem[]).map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-start justify-start px-6 pb-2 pl-5 align-top text-white"
        >
          <div className="mb-2 w-auto pr-2 text-lg font-light text-emerald-200">
            {item.title}
          </div>
          <div>{item.item}</div>
        </div>
      ));
    }

    if (section.title === 'Key Features' || section.title === 'Outcomes') {
      return (section.content as string[]).map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-start justify-start px-6 pb-2 pl-5 align-top text-white"
        >
          <div className="mb-2 w-auto pr-2 text-lg font-light text-emerald-200">
            {item.split(': ')[0]}
          </div>
          <div>{item.split(': ')[1]}</div>
        </div>
      ));
    }

    return null;
  };

  return (
    <div
      className={`flex flex-grow flex-col border-t ${
        activeSection === 'Overview' ? 'border-t-0' : ''
      } space-y-2 border-orangeflame ${
        selectedProject.isMobileOnly && imageContainerHovered
          ? 'w-auto lg:max-w-[51%]'
          : selectedProject.isMobileOnly && !imageContainerHovered
            ? 'w-auto min-w-[73%] lg:max-w-[73%]'
            : 'w-auto lg:min-w-[78%]'
      }`}
      onMouseEnter={() => {
        if (imageContainerHovered) {
          setIsImageContainerHovered ? setIsImageContainerHovered(false) : null;
        }
      }}
    >
      {sections.map((section) => (
        <div
          key={section.title}
          className={`px-2 ${
            activeSection === section.title ? 'border-y border-orangeflame' : ''
          }`}
        >
          <button
            className={`w-full p-4 py-2 text-left text-xl font-light ${
              activeSection === section.title
                ? 'cursor-default text-orangeflame'
                : 'text-emerald-400 hover:text-emerald-200'
            }`}
            onClick={() => setActiveSection(section.title)}
          >
            {section.title}
            <span className="text-xl text-orangeflame">
              {' '}
              {activeSection !== section.title ? ' ...' : ''}
            </span>
          </button>
          {activeSection === section.title && (
            <div className="p-4 text-lg font-thin text-white">
              {renderContent(section)}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProjectAccordionWeb;

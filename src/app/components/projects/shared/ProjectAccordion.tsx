import React from 'react';
import { Project } from '@/data/projects';
import type { ProjectSection } from '@/constants';

type TechStackItem = { title: string; item: string | undefined };
type AccordionSection = {
  title: string;
  content: string | TechStackItem[] | string[] | undefined;
};

interface ProjectAccordionProps {
  selectedProject: Project;
  activeSection: ProjectSection;
  setActiveSection: (section: ProjectSection) => void;
  /** 'desktop' renders all sections with hover-expand behaviour.
   *  'compact' renders a filtered half (top or bottom) for tablet/mobile layouts. */
  variant: 'desktop' | 'compact';
  // desktop-only
  imageContainerHovered?: boolean;
  setIsImageContainerHovered?: (hovered: boolean) => void;
  // compact-only
  topAccordion?: boolean;
}

const ProjectAccordion: React.FC<ProjectAccordionProps> = ({
  selectedProject,
  activeSection,
  setActiveSection,
  variant,
  imageContainerHovered = false,
  setIsImageContainerHovered,
  topAccordion,
}) => {
  const getCategoryContent = (category: string) => {
    switch (category) {
      case 'Tech Stack':
        return [
          { title: 'FrontEnd', item: selectedProject.details.techStack?.frontend },
          { title: 'State Management', item: selectedProject.details.techStack?.stateManagement },
          { title: 'Backend', item: selectedProject.details.techStack?.backend },
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

  const allSections = [
    { title: 'Overview', content: selectedProject.details.overview },
    { title: 'Objectives', content: selectedProject.details.objective },
    { title: 'Tech Stack', content: getCategoryContent('Tech Stack') },
    { title: 'Key Features', content: getCategoryContent('Key Features') },
    { title: 'Outcomes', content: getCategoryContent('Outcomes') },
  ];

  const sections =
    variant === 'compact'
      ? allSections.filter((s) =>
          topAccordion
            ? ['Overview', 'Objectives', 'Key Features'].includes(s.title)
            : ['Tech Stack', 'Outcomes'].includes(s.title)
        )
      : allSections;

  const renderContent = (section: AccordionSection) => {
    if (typeof section.content === 'string') {
      return (
        <div className="font-thin">
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
        </div>
      );
    }

    if (section.title === 'Tech Stack') {
      return (section.content as TechStackItem[]).map((item, index) => (
        <div key={index} className="flex flex-col items-start justify-start px-6 pb-2 pl-5 align-top text-white">
          <div className="mb-2 w-auto pr-2 text-lg font-light text-emerald-200">{item.title}</div>
          <div className="font-thin">{item.item}</div>
        </div>
      ));
    }

    if (section.title === 'Key Features' || section.title === 'Outcomes') {
      return (section.content as string[]).map((item, index) => (
        <div key={index} className="flex flex-col items-start justify-start px-6 pb-2 pl-5 align-top text-white">
          <div className="mb-2 w-auto pr-2 text-lg font-light text-emerald-200">{item.split(': ')[0]}</div>
          <div>{item.split(': ')[1]}</div>
        </div>
      ));
    }

    return null;
  };

  if (variant === 'desktop') {
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
            setIsImageContainerHovered?.(false);
          }
        }}
      >
        {sections.map((section) => (
          <div
            key={section.title}
            className={`px-2 ${activeSection === section.title ? 'border-y border-orangeflame' : ''}`}
          >
            <button
              className={`w-full p-4 py-2 text-left text-xl font-light ${
                activeSection === section.title
                  ? 'cursor-default text-orangeflame'
                  : 'text-emerald-400 hover:text-emerald-200'
              }`}
              onClick={() => setActiveSection(section.title as ProjectSection)}
            >
              {section.title}
              <span className="text-xl text-orangeflame">
                {' '}
                {activeSection !== section.title ? ' ...' : ''}
              </span>
            </button>
            {activeSection === section.title && (
              <div className="p-4 text-lg font-thin text-white">{renderContent(section)}</div>
            )}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div
      className={`flex w-full flex-grow flex-col border-y py-14 ${
        activeSection === 'Overview' ? 'border-t-0' : ''
      } space-y-2 border-orangeflame`}
      style={{ borderTopWidth: topAccordion ? undefined : 1 }}
    >
      {sections.map((section) => (
        <div
          key={section.title}
          className={`px-[3%] ${activeSection === section.title ? 'border-y border-orangeflame' : ''}`}
        >
          <button
            className={`w-full p-4 py-2 text-justify text-2xl font-light md:text-left ${
              activeSection === section.title ? 'text-orangeflame' : 'text-emerald-400'
            }`}
            onClick={() => setActiveSection(section.title as ProjectSection)}
          >
            {section.title}
            <span className="text-xl text-orangeflame">
              {' '}
              {activeSection !== section.title ? ' ...' : ''}
            </span>
          </button>
          {activeSection === section.title && (
            <div className="ml-[2vw] w-[100%] justify-start p-4 font-thin text-white md:w-[80%]">
              {renderContent(section)}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProjectAccordion;

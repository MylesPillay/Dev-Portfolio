import React from 'react';
import { Project } from '@/data/projects';

type TechStackItem = { title: string; item: string | undefined };
type ProjectSection = {
  title: string;
  content: string | TechStackItem[] | string[] | undefined;
};

interface TabletProjectAccordionProps {
  selectedProject: Project;
  activeSection: string;
  setActiveSection: (section: string) => void;
  topAccordion: boolean;
}

const TabletProjectAccordion: React.FC<TabletProjectAccordionProps> = ({
  selectedProject,
  topAccordion,
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

  const filteredSections = topAccordion
    ? sections.filter(
        (section) =>
          section.title === 'Overview' ||
          section.title === 'Objectives' ||
          section.title === 'Key Features'
      )
    : sections.filter(
        (section) =>
          section.title === 'Tech Stack' || section.title === 'Outcomes'
      );

  const renderContent = (section: ProjectSection) => {
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
        <div
          key={index}
          className="flex flex-col items-start justify-start px-6 pb-2 pl-5 align-top text-white"
        >
          <div className="mb-2 w-auto pr-2 text-lg font-light text-emerald-200">
            {item.title}
          </div>
          <div className="font-thin">{item.item}</div>
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
      className={`flex w-full flex-grow flex-col border-y py-14 ${
        activeSection === 'Overview' ? 'border-t-0' : ''
      } space-y-2 border-orangeflame`}
      style={{ borderTopWidth: topAccordion ? undefined : 1 }}
    >
      {filteredSections.map((section) => (
        <div
          key={section.title}
          className={`px-[3%] ${
            activeSection === section.title ? 'border-y border-orangeflame' : ''
          }`}
        >
          <button
            className={`w-full p-4 py-2 text-justify text-2xl font-light md:text-left ${
              activeSection === section.title
                ? 'text-orangeflame'
                : 'text-emerald-400'
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
            <div className="ml-[2vw] w-[100%] justify-start p-4 font-thin text-white md:w-[80%]">
              {renderContent(section)}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default TabletProjectAccordion;

import ProjectList from './ProjectList';
import ProjectSkillsComponent from './ProjectSkills';
import { Project } from '@/data/projects';
import type { ProjectSection } from '@/constants';

interface ProjectSidebarProps {
  selectedProject: Project;
  handleProjectClick: (index: number) => void;
  isImageContainerHovered: boolean;
  setIsImageContainerHovered: (hovered: boolean) => void;
  activeSection: ProjectSection;
}

const ProjectSidebar = ({
  selectedProject,
  handleProjectClick,
  isImageContainerHovered,
  setIsImageContainerHovered,
  activeSection,
}: ProjectSidebarProps) => {
  return (
    <div
      className="] flex h-full min-w-[13.5vw] max-w-[13.5vw] flex-col justify-between lg:mr-[3vw] lg:mt-7"
      style={{ position: 'relative', zIndex: 10 }}
      onMouseEnter={() => {
        if (isImageContainerHovered) {
          setIsImageContainerHovered(false);
        }
        return;
      }}
    >
      <div className="sticky top-0 flex">
        <ProjectList
          selectedProject={selectedProject}
          onProjectClick={handleProjectClick}
        />
      </div>
      <div className="sticky bottom-0 hidden lg:flex">
        <ProjectSkillsComponent
          selectedProject={selectedProject}
          activeSection={activeSection}
          isImageHovered={isImageContainerHovered}
        />
      </div>
    </div>
  );
};

export default ProjectSidebar;

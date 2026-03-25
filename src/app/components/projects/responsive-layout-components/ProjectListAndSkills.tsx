import ProjectList from "../ProjectList";
import ProjectSkillsComponent from "../ProjectSkills";
import { Project } from "../ProjectsObject";

interface ProjectListAndSkillsProps {
	selectedProject: Project;
	handleProjectClick: (index: number) => void;
	isImageContainerHovered: boolean;
	setIsImageContainerHovered: (hovered: boolean) => void;
	activeSection: string;
	setActiveSection: (section: string) => void;
}

const ProjectListAndSkills = ({
	selectedProject,
	handleProjectClick,
	isImageContainerHovered,
	setIsImageContainerHovered,
	activeSection
}: ProjectListAndSkillsProps) => {
	return (
		<div
			className='flex flex-col justify-between min-w-[13.5vw] max-w-[13.5vw] h-full lg:mr-[3vw] lg:mt-7 ]'
			onMouseEnter={() => {
				if (isImageContainerHovered) {
					setIsImageContainerHovered(false);
				}
				return;
			}}>
			<div className='flex top-0 sticky'>
				<ProjectList
					selectedProject={selectedProject}
					onProjectClick={handleProjectClick}
				/>
			</div>
			<div className='hidden lg:flex sticky bottom-0'>
				<ProjectSkillsComponent
					selectedProject={selectedProject}
					activeSection={activeSection}
					isImageHovered={isImageContainerHovered}
				/>
			</div>
		</div>
	);
};

export default ProjectListAndSkills;

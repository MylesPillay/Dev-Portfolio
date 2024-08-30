import React, { Dispatch, SetStateAction } from "react";
import MobileProjectTitleStickyHeader from "../../components/projects/MobileProjectTitleStickyHeader";
import MediumScreenProjectAccordion from "../../components/projects/MediumScreenPorjectAccordian";
import MediumMobileAppProjectImages from "../../components/projects/MediumMobileAppProjectImages";
import MediumScreenProjectSkillsComponent from "../../components/projects/MediumScreenProjectSkillsComponent";
import ProjectImagePagination from "../../components/projects/ProjectImagePagination";
import ImagesFormatSelector from "../../components/projects/ImagesFormatSelector";
import { Project } from "./ProjectsObject";
import { on } from "events";

interface MobileProjectLayoutProps {
	selectedProject: Project;
	viewMode: "web" | "mobile";
	setViewMode: (mode: "web" | "mobile") => void;
	currentImageIndex: number;
	setCurrentImageIndex: Dispatch<SetStateAction<number>>;
	setActiveSection: (section: string) => void;
	activeSection: string;
	onPrevImage: () => void;
	onNextImage: () => void;
}
const MobileProjectLayout = ({
	selectedProject,
	viewMode,
	setViewMode,
	currentImageIndex,
	setCurrentImageIndex,
	activeSection,
	setActiveSection,
	onPrevImage,
	onNextImage
}: MobileProjectLayoutProps) => {
	return (
		<div className='md:hidden flex  flex-col w-full mx-auto h-auto'>
			<MobileProjectTitleStickyHeader
				projectTitle={selectedProject.name}
			/>
			<div
				className={`md:hidden flex  flex-col align-middle items-center justify-between w-full overflow-y-scroll  overflow-x-hidden `}>
				<div className='w-full mx-auto h-auto justify-center items-center align-middle'>
					<MediumScreenProjectAccordion
						selectedProject={selectedProject}
						topAccordion={true}
						activeSection={activeSection}
						setActiveSection={setActiveSection}
					/>
				</div>
				<div
					// className={`group pointer-events-none md:pointer-events-auto lg:min-h-[100vh] lg:max-h-[100vh] mt-0.5 lg:h-auto lg:w-[40vw] min-w-[30vw] h-[40vh] max-w-[45%] sticky lg:top-0 md:right-0  lg:flex flex-col justify-center items-center `}
					className='w-full mx-auto h-full justify-center items-center align-middle'>
					<div className='flex w-full justify-center items-center'>
						{selectedProject.images.mobile.length > 0 &&
						selectedProject.images.web.length > 0 ? (
							<ImagesFormatSelector
								selectedProject={selectedProject}
								viewMode={viewMode}
								setViewMode={setViewMode}
								headerPosition={false}
							/>
						) : (
							<></>
						)}
					</div>
					<div className='h-auto w-[100%] overflow-x-hidden py-10  bg-slate-800 bg-opacity-50 pl-[20vw] justify-evenly align-middle items-center'>
						<div className=' flex flex-col  w-[70%] self-center items-center overflow-x-scroll'>
							<MediumMobileAppProjectImages
								// hovered={isImageContainerHovered}
								images={selectedProject.images.mobile}
								currentImageIndex={currentImageIndex}
							/>
							{/* <div className='w-full h-auto justify-center items-center'> */}
							<ProjectImagePagination
								hovered={true}
								currentImageIndex={currentImageIndex}
								totalImages={
									selectedProject.images.mobile.length
								}
								onPageChange={(index) =>
									setCurrentImageIndex(index)
								}
								onPrevImage={onPrevImage}
								onNextImage={onNextImage}
							/>
							{/* </div> */}
						</div>
					</div>
				</div>

				<MediumScreenProjectAccordion
					selectedProject={selectedProject}
					topAccordion={false}
					activeSection={activeSection}
					setActiveSection={setActiveSection}
				/>
				<div className='w-[100%] h-auto my-10 bg-slate-800 bg-opacity-50 border-emerald-600 border-y-4'>
					<MediumScreenProjectSkillsComponent
						selectedProject={selectedProject}
					/>
				</div>
			</div>
		</div>
	);
};

export default MobileProjectLayout;

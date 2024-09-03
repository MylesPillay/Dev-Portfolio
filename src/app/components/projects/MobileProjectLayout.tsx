import React, { Dispatch, SetStateAction } from "react";
import MobileProjectTitleStickyHeader from "../../components/projects/MobileProjectTitleStickyHeader";
import MediumScreenProjectAccordion from "../../components/projects/MediumScreenPorjectAccordian";
import MediumMobileAppProjectImages from "../../components/projects/MediumMobileAppProjectImages";
import MediumScreenProjectSkillsComponent from "../../components/projects/MediumScreenProjectSkillsComponent";
import ProjectImagePagination from "../../components/projects/ProjectImagePagination";
import ImagesFormatSelector from "../../components/projects/ImagesFormatSelector";
import { Project } from "./ProjectsObject";
import { on } from "events";
import WebsiteProjectImages from "./WebsiteProjectImages";

interface MobileProjectLayoutProps {
	selectedProject: Project;
	selectedIndex: number;
	viewMode: "web" | "mobile";
	setViewMode: (mode: "web" | "mobile") => void;
	currentImageIndex: number;
	setCurrentImageIndex: Dispatch<SetStateAction<number>>;
	setActiveSection: (section: string) => void;
	activeSection: string;
	onPrevImage: () => void;
	onNextImage: () => void;
	loadNextProject: () => void;
}
const MobileProjectLayout = ({
	selectedProject,
	selectedIndex,
	viewMode,
	setViewMode,
	currentImageIndex,
	setCurrentImageIndex,
	activeSection,
	setActiveSection,
	onPrevImage,
	onNextImage,
	loadNextProject
}: MobileProjectLayoutProps) => {
	return (
		<>
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
					<div className='w-full mx-auto h-full justify-center items-center align-middle'>
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
						<div className='flex flex-grow h-auto bg-slate-800  w-[100%] overflow-x-hidden  bg-opacity-50  justify-start align-start items-start'>
							<div className=' flex flex-col justify-center h-auto w-[100%]   items-start overflow-x-scroll'>
								<div className=''>
									{selectedIndex === 0 ||
									selectedIndex === 3 ? (
										<MediumMobileAppProjectImages
											smallMobileScreen={true}
											images={
												selectedProject.images[viewMode]
											}
											currentImageIndex={
												currentImageIndex
											}
										/>
									) : (
										<WebsiteProjectImages
											images={
												selectedProject.images[viewMode]
											}
											currentImageIndex={
												currentImageIndex
											}
											selectedProject={selectedProject}
										/>
									)}
								</div>
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
							</div>
						</div>
					</div>

					<MediumScreenProjectAccordion
						selectedProject={selectedProject}
						topAccordion={false}
						activeSection={activeSection}
						setActiveSection={setActiveSection}
					/>
					<div className='w-[100%] h-auto mt-10 mb-6 bg-slate-800 bg-opacity-50 border-emerald-600 border-y-4'>
						<MediumScreenProjectSkillsComponent
							selectedProject={selectedProject}
						/>
					</div>
				</div>
			</div>
			<div className='flex md:hidden justify-center items-center w-full h-auto'>
				<button
					className='justify-center  w-[60%]   self-end py-2 px-8 rounded-md mb-8 bg-orangeflame  text-white border border-white lg:text-lg text-md font-bold  hover:bg-opacity-80'
					onClick={() => loadNextProject()}>
					Next Project
				</button>
			</div>
		</>
	);
};

export default MobileProjectLayout;

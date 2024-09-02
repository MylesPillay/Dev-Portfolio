import ImagesFormatSelector from "../ImagesFormatSelector";
import MediumMobileAppProjectImages from "../MediumMobileAppProjectImages";
import MediumScreenProjectAccordion from "../MediumScreenPorjectAccordian";
import MediumScreenProjectSkillsComponent from "../MediumScreenProjectSkillsComponent";
import MobileImageContainer from "../MobileAppProjectImages";
import ProjectAccordionWeb from "../ProjectAccordianWeb";
import ProjectImagePagination from "../ProjectImagePagination";
import { Project } from "../ProjectsObject";
import WebsiteProjectImages from "../WebsiteProjectImages";

interface MediumToLargeLayoutProps {
	setIsImageContainerHovered: (hovered: boolean) => void;
	isImageContainerHovered: boolean;
	selectedIndex: number;
	currentImageIndex: number;
	setCurrentImageIndex: React.Dispatch<React.SetStateAction<number>>;
	viewMode: "web" | "mobile";
	setViewMode: (mode: "web" | "mobile") => void;
	selectedProject: Project;
	activeSection: string;
	setActiveSection: (section: string) => void;
}

const MediumToLargeLayout = ({
	setIsImageContainerHovered,
	isImageContainerHovered,
	selectedIndex,
	currentImageIndex,
	setCurrentImageIndex,
	viewMode,
	setViewMode,
	selectedProject,
	activeSection,
	setActiveSection
}: MediumToLargeLayoutProps) => {
	let screenSize = "Medium to Large Layout";

	return (
		<div
			className={`hidden md:flex lg:hidden md:flex-col align-middle items-center justify-between lg:w-full overflow-y-scroll  overflow-x-hidden md:pt-[4vh] h-auto pb-[10vh]`}>
			<div className='w-full mx-auto h-auto justify-center items-center align-middle'>
				<MediumScreenProjectAccordion
					screenSize={screenSize}
					selectedProject={selectedProject}
					topAccordion={true}
					activeSection={activeSection}
					setActiveSection={setActiveSection}
				/>

				{/* <div className='h-auto w-[100%] overflow-x-hidden py-10  bg-slate-800 bg-opacity-50  justify-evenly align-middle items-center'>
					<div className=' flex flex-col justify-center h-auto w-[100%] self-center align-top items-center overflow-x-scroll'> */}
				<div className='h-auto w-full overflow-x-hidden py-10 bg-slate-800 bg-opacity-50 flex flex-col items-center justify-center'>
					<div className='flex flex-col justify-center items-center w-[90%] self-center overflow-x-scroll'>
						<div className='w-full flex justify-center'>
							{selectedIndex === 0 || selectedIndex === 3 ? (
								<MediumMobileAppProjectImages
									images={selectedProject.images[viewMode]}
									currentImageIndex={currentImageIndex}
								/>
							) : (
								<div className='w-[100%]  pr-[15%] h-auto max-h-[50vh]'>
									<WebsiteProjectImages
										images={
											selectedProject.images[viewMode]
										}
										currentImageIndex={currentImageIndex}
										selectedProject={selectedProject}
									/>
								</div>
							)}
						</div>
						<div className='w-[100%]  pr-[15%] justify-center items-center mt-2'>
							<ProjectImagePagination
								hovered={true}
								currentImageIndex={currentImageIndex}
								totalImages={
									selectedProject.images.mobile.length
								}
								onPageChange={(index) =>
									setCurrentImageIndex(index)
								}
								onPrevImage={() =>
									setCurrentImageIndex(
										(prevIndex) => prevIndex - 1
									)
								}
								onNextImage={() =>
									setCurrentImageIndex(
										(prevIndex) => prevIndex + 1
									)
								}
							/>
						</div>
					</div>
				</div>
			</div>

			<MediumScreenProjectAccordion
				selectedProject={selectedProject}
				topAccordion={false}
				activeSection={activeSection}
				setActiveSection={setActiveSection}
			/>
			<div className='w-[100%] h-auto my-10 bg-slate-800 bg-opacity-50 border-tealAccent border-y-4'>
				<MediumScreenProjectSkillsComponent
					selectedProject={selectedProject}
				/>
			</div>
		</div>
	);
};

export default MediumToLargeLayout;

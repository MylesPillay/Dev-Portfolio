import LoadingSpinner from "../../layout/LoadingSpinner";
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
	images: any;
	loading: boolean;
	setViewMode: (mode: "web" | "mobile") => void;
	selectedProject: Project;
	activeSection: string;
	setActiveSection: (section: string) => void;
}

const MediumToLargeLayout = ({
	selectedIndex,
	currentImageIndex,
	setCurrentImageIndex,
	viewMode,
	images,
	loading,
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

				<div className='h-auto w-full overflow-x-hidden  bg-slate-800 bg-opacity-50 flex flex-col items-center justify-center'>
					<div className=' flex-col justify-center items-center align-middle'>
						{/* {images?.length > 0 && images?.length > 0 ? ( */}
						<ImagesFormatSelector
							currentProjectIndex={selectedProject.index}
							viewMode={viewMode}
							setViewMode={setViewMode}
							headerPosition={false}
						/>
						{/* ) : (
							<></>
						)} */}

						<div className='flex flex-col flex-grow h-auto   overflow-x-hidden  bg-opacity-50  justify-center align-middle items-center w-auto'>
							<div className=' flex flex-col justify-center h-auto w-[85%] max-h-[100%]  items-start overflow-x-scroll'>
								{selectedIndex === 0 || selectedIndex === 3 ? (
									<MediumMobileAppProjectImages
										smallMobileScreen={false}
										images={images}
										currentImageIndex={currentImageIndex}
										loading={loading}
									/>
								) : (
									<div className='w-[100%]  pr-[15%] h-auto max-h-[50vh]'>
										<WebsiteProjectImages
											images={images}
											currentImageIndex={
												currentImageIndex
											}
											selectedProject={selectedProject}
										/>
									</div>
								)}
							</div>
							<div className='w-full justify-center items-center mt-2'>
								<ProjectImagePagination
									hovered={true}
									currentImageIndex={currentImageIndex}
									totalImages={images?.length}
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
		</div>
	);
};

export default MediumToLargeLayout;

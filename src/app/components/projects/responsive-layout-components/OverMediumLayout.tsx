import ImagesFormatSelector from "../ImagesFormatSelector";
import MobileImageContainer from "../MobileAppProjectImages";
import ProjectAccordionWeb from "../ProjectAccordianWeb";
import ProjectImagePagination from "../ProjectImagePagination";
import { Project } from "../ProjectsObject";
import LargeScreenWebsiteProjectImages from "../LargeScreenWebsiteProjectImages";
import LoadingSpinner from "../../layout/LoadingSpinner";

interface OverMediumLayoutProps {
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
	onPrevImage: () => void;
	onNextImage: () => void;
	loadNextProject: () => void;
	imageOnLoad: () => void;
}

const OverMediumLayout = ({
	setIsImageContainerHovered,
	isImageContainerHovered,
	selectedIndex,
	currentImageIndex,
	setCurrentImageIndex,
	viewMode,
	loading,
	images,
	setViewMode,
	selectedProject,
	activeSection,
	setActiveSection,
	imageOnLoad
}: OverMediumLayoutProps) => {
	return (
		// <div
		// 	onMouseEnter={() => setIsImageContainerHovered(false)}
		// 	className={`hidden lg:flex md:flex-row justify-between lg:w-full overflow-y-scroll  overflow-x-hidden  h-auto   `}
		// 	style={{
		// 		transition: "width 0.2s ease-in-out"
		// 	}}>
		<div
			onMouseEnter={() => setIsImageContainerHovered(false)}
			className={`hidden lg:flex md:flex-row justify-between lg:w-full overflow-y-scroll  overflow-x-hidden md:pt-4 h-auto   `}
			style={{
				transition: "width 0.2s ease-in-out"
			}}>
			<ProjectAccordionWeb
				selectedProject={selectedProject}
				selectedIndex={selectedIndex}
				imageContainerHovered={isImageContainerHovered}
				activeSection={activeSection}
				setActiveSection={setActiveSection}
				setIsImageContainerHovered={setIsImageContainerHovered}
			/>

			{selectedIndex === 0 || selectedIndex === 3 ? (
				<div
					className={`group pointer-events-none md:pointer-events-auto lg:min-h-[100vh] lg:max-h-[100vh] mt-0.5 lg:h-full  min-w-[30vw] h-[60vh]] max-w-[60%] sticky lg:top-0 md:right-0 overflow-x-scroll lg:flex flex-col justify-center items-center ${
						isImageContainerHovered
							? "md:w-[43vw] md:translate-x-[0vw] w-auto"
							: "md:w-[23vw] md:translate-x-[11vw] w-auto"
					}`}
					style={{
						transition: "transform 0.2s ease-in-out"
					}}
					onMouseEnter={() => setIsImageContainerHovered(true)}
					onMouseLeave={() => {}}>
					<div className='flex w-full justify-end items-center'>
						<ImagesFormatSelector
							currentProjectIndex={selectedProject.index}
							viewMode={viewMode}
							setViewMode={setViewMode}
							headerPosition={false}
						/>
					</div>
					<div className='h-[100vh] w-[99%] mx-auto justify-end items-center  ml-4'>
						<MobileImageContainer
							hovered={isImageContainerHovered}
							images={images}
							loading={loading}
							currentImageIndex={currentImageIndex}
							imageOnLoad={imageOnLoad}
						/>

						<div className='w-full justify-end items-end'>
							<ProjectImagePagination
								hovered={isImageContainerHovered}
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
			) : (
				// 	<div
				// 		className={` flex flex-col  mb-[40%] w-full h-full items-start align-top justify-around  self-start overflow-y-hidden bg-pink-100
				// `}>
				<div
					className={`min-h-[59vh] max-h-[90vh] mt-0.5 lg:h-auto  min-w-[90.5vw] h-[80vh] max-w-[90vw] sticky  right-0 overflow-x-scroll flex flex-col justify-center items-center ${
						isImageContainerHovered
							? " md:translate-x-[-15vw] "
							: " md:translate-x-[51vw] "
					}`}
					style={{
						transition: "transform 0.2s ease-in-out"
					}}
					onMouseEnter={() => setIsImageContainerHovered(true)}
					onMouseLeave={() => {}}>
					<div className='flex w-full justify-end items-center'>
						<ImagesFormatSelector
							viewMode={viewMode}
							setViewMode={setViewMode}
							headerPosition={false}
							currentProjectIndex={selectedProject.index}
						/>
					</div>
					<div className='h-auto w-auto flex-grow-0 flex-shrink-0'>
						<LargeScreenWebsiteProjectImages
							selectedProject={selectedProject}
							images={images}
							loading={loading}
							currentImageIndex={currentImageIndex}
							isImageContainerHovered={isImageContainerHovered}
							imageOnLoad={imageOnLoad}
						/>
						<div className='w-[60vw] mx-auto '>
							<ProjectImagePagination
								hovered={isImageContainerHovered}
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
			)}
		</div>
		// </div>
	);
};

export default OverMediumLayout;

import ImagesFormatSelector from "../ImagesFormatSelector";
import MobileImageContainer from "../MobileAppProjectImages";
import ProjectAccordionWeb from "../ProjectAccordianWeb";
import ProjectImagePagination from "../ProjectImagePagination";
import { Project } from "../ProjectsObject";
import LargeScreenWebsiteProjectImages from "../LargeScreenWebsiteProjectImages";

interface OverMediumLayoutProps {
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

const OverMediumLayout = ({
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
}: OverMediumLayoutProps) => {
	let screenSize = "Over Medium Layout";
	return (
		<div
			onMouseEnter={() => setIsImageContainerHovered(false)}
			className={`hidden lg:flex md:flex-row justify-between lg:w-full overflow-y-scroll  overflow-x-hidden md:pt-[4vh] h-auto   `}
			style={{
				transition: "width 0.2s ease-in-out"
			}}>
			<div
				onMouseEnter={() => setIsImageContainerHovered(false)}
				className={`hidden lg:flex md:flex-row justify-between lg:w-full overflow-y-scroll  overflow-x-hidden md:pt-[4vh] h-auto   `}
				style={{
					transition: "width 0.2s ease-in-out"
				}}>
				<ProjectAccordionWeb
					screenSize={screenSize}
					selectedProject={selectedProject}
					selectedIndex={selectedIndex}
					imageContainerHovered={isImageContainerHovered}
					activeSection={activeSection}
					setActiveSection={setActiveSection}
					setIsImageContainerHovered={setIsImageContainerHovered}
				/>
				<div
					className={`group pointer-events-none md:pointer-events-auto lg:min-h-[100vh] lg:max-h-[100vh] mt-0.5 lg:h-auto  min-w-[30vw] h-[40vh] max-w-[49%] sticky lg:top-0 md:right-0 overflow-x-scroll lg:flex flex-col justify-center items-center ${
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
							selectedProject={selectedProject}
							viewMode={viewMode}
							setViewMode={setViewMode}
							headerPosition={false}
						/>
					</div>

					{selectedIndex === 0 || selectedIndex === 3 ? (
						<div className='h-full w-full mx-auto justify-center items-center pl-4'>
							<MobileImageContainer
								hovered={isImageContainerHovered}
								images={selectedProject.images.mobile}
								currentImageIndex={currentImageIndex}
							/>
							<div className='w-full justify-end items-end'>
								<ProjectImagePagination
									hovered={isImageContainerHovered}
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
					) : (
						<div
							className={` absolute right-0 flex flex-col  mb-[40%] w-[200%] h-[70%] items-start align-top justify-around  self-start overflow-y-hidden bg-pink-100 transition-transform duration-300  ease-in-out ${
								isImageContainerHovered
									? "lg:translate-x-[-3vw] "
									: "  lg:translate-x-[0vw] "
							}`}>
							<LargeScreenWebsiteProjectImages
								selectedProject={selectedProject}
								images={
									viewMode === "web"
										? selectedProject.images.web
										: selectedProject.images.mobile
								}
								currentImageIndex={currentImageIndex}
								isImageContainerHovered={
									isImageContainerHovered
								}
							/>
							<div className='w-full justify-end items-end'>
								<ProjectImagePagination
									hovered={isImageContainerHovered}
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
					)}
				</div>
			</div>
		</div>
	);
};

export default OverMediumLayout;

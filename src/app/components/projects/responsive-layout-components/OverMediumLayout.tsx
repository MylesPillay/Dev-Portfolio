import { ImagesFormatSelector } from '../ImagesFormatSelector';
import MobileImageContainer from '../MobileAppProjectImages';
import ProjectAccordionWeb from '../ProjectAccordianWeb';
import ProjectImagePagination from '../ProjectImagePagination';
import { Project } from '@/data/projects';
import LargeScreenWebsiteProjectImages from '../LargeScreenWebsiteProjectImages';

interface OverMediumLayoutProps {
  setIsImageContainerHovered: (hovered: boolean) => void;
  isImageContainerHovered: boolean;
  selectedIndex: number;
  currentImageIndex: number;
  setCurrentImageIndex: React.Dispatch<React.SetStateAction<number>>;
  viewMode: 'web' | 'mobile';
  images: any;
  loading: boolean;
  setViewMode: (mode: 'web' | 'mobile') => void;
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
  imageOnLoad,
}: OverMediumLayoutProps) => {
  return (
    <div
      onMouseEnter={() => setIsImageContainerHovered(false)}
      className={`hidden h-auto justify-between overflow-x-hidden overflow-y-scroll md:flex-row md:pt-4 lg:flex lg:w-full`}
      style={{
        transition: 'width 0.2s ease-in-out',
      }}
    >
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
          className={`h-[60vh]] group pointer-events-none sticky mt-0.5 min-w-[30vw] max-w-[60%] flex-col items-center justify-center overflow-x-scroll md:pointer-events-auto md:right-0 lg:top-0 lg:flex lg:h-full lg:max-h-[100vh] lg:min-h-[100vh] ${
            isImageContainerHovered
              ? 'w-auto md:w-[43vw] md:translate-x-[0vw]'
              : 'w-auto md:w-[23vw] md:translate-x-[11vw]'
          }`}
          style={{
            transition: 'transform 0.2s ease-in-out',
          }}
          onMouseEnter={() => setIsImageContainerHovered(true)}
          onMouseLeave={() => {}}
        >
          <div className="flex w-full items-center justify-end">
            <ImagesFormatSelector
              currentProjectIndex={selectedProject.index}
              viewMode={viewMode}
              setViewMode={setViewMode}
              headerPosition={false}
            />
          </div>
          <div className="mx-auto ml-4 h-[100vh] w-[99%] items-center justify-end">
            <MobileImageContainer
              hovered={isImageContainerHovered}
              images={images}
              loading={loading}
              currentImageIndex={currentImageIndex}
              imageOnLoad={imageOnLoad}
            />

            <div className="w-full items-end justify-end">
              <ProjectImagePagination
                hovered={isImageContainerHovered}
                currentImageIndex={currentImageIndex}
                totalImages={images?.length}
                onPageChange={(index) => setCurrentImageIndex(index)}
                onPrevImage={() =>
                  setCurrentImageIndex((prevIndex) => prevIndex - 1)
                }
                onNextImage={() =>
                  setCurrentImageIndex((prevIndex) => prevIndex + 1)
                }
              />
            </div>
          </div>
        </div>
      ) : (
        <div
          className={`sticky right-0 mt-0.5 flex h-[80vh] max-h-[90vh] min-h-[59vh] min-w-[90.5vw] max-w-[90vw] flex-col items-center justify-center overflow-x-scroll lg:h-auto ${
            isImageContainerHovered
              ? 'md:translate-x-[-15vw]'
              : 'md:translate-x-[51vw]'
          }`}
          style={{
            transition: 'transform 0.2s ease-in-out',
          }}
          onMouseEnter={() => setIsImageContainerHovered(true)}
          onMouseLeave={() => {}}
        >
          <div className="flex w-full items-center justify-end">
            <ImagesFormatSelector
              viewMode={viewMode}
              setViewMode={setViewMode}
              headerPosition={false}
              currentProjectIndex={selectedProject.index}
            />
          </div>
          <div className="h-auto w-auto flex-shrink-0 flex-grow-0">
            <LargeScreenWebsiteProjectImages
              selectedProject={selectedProject}
              images={images}
              loading={loading}
              currentImageIndex={currentImageIndex}
              imageOnLoad={imageOnLoad}
            />
            <div className="mx-auto w-[60vw]">
              <ProjectImagePagination
                hovered={isImageContainerHovered}
                currentImageIndex={currentImageIndex}
                totalImages={images?.length}
                onPageChange={(index) => setCurrentImageIndex(index)}
                onPrevImage={() =>
                  setCurrentImageIndex((prevIndex) => prevIndex - 1)
                }
                onNextImage={() =>
                  setCurrentImageIndex((prevIndex) => prevIndex + 1)
                }
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OverMediumLayout;

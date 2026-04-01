import { ProjectViewToggle } from '../shared/ProjectViewToggle';
import AppImagesAllBreakpoints from '../mobile/AppImagesAllBreakpoints';
import ProjectAccordion from '../shared/ProjectAccordion';
import ProjectImagePagination from '../shared/ProjectImagePagination';
import { Project } from '@/data/projects';
import type { ProjectSection } from '@/constants';
import DesktopWebsiteImages from '../desktop/DesktopWebsiteImages';

interface DesktopLayoutProps {
  setIsImageContainerHovered: (hovered: boolean) => void;
  isImageContainerHovered: boolean;
  currentImageIndex: number;
  setCurrentImageIndex: React.Dispatch<React.SetStateAction<number>>;
  viewMode: 'web' | 'mobile';
  images: string[];
  loading: boolean;
  setViewMode: (mode: 'web' | 'mobile') => void;
  selectedProject: Project;
  activeSection: ProjectSection;
  setActiveSection: (section: ProjectSection) => void;
  imageOnLoad: () => void;
}

const DesktopLayout = ({
  setIsImageContainerHovered,
  isImageContainerHovered,
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
}: DesktopLayoutProps) => {
  return (
    <div
      onMouseEnter={() => setIsImageContainerHovered(false)}
      className={`hidden h-auto justify-between overflow-x-hidden overflow-y-scroll md:flex-row md:pt-4 lg:flex lg:w-full`}
      style={{
        transition: 'width 0.2s ease-in-out',
      }}
    >
      <ProjectAccordion
        variant="desktop"
        selectedProject={selectedProject}
        imageContainerHovered={isImageContainerHovered}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        setIsImageContainerHovered={setIsImageContainerHovered}
      />

      {selectedProject.isMobileOnly ? (
        <div
          className={`px-auto group pointer-events-none sticky mt-0.5 h-auto min-w-[30vw] max-w-[60%] flex-col items-center justify-start overflow-x-scroll md:pointer-events-auto md:right-0 lg:top-0 lg:flex lg:h-full lg:max-h-[80vh] lg:min-h-[80vh] ${
            isImageContainerHovered
              ? 'w-auto md:w-[43vw] md:translate-x-[0vw]'
              : 'w-auto md:w-[23vw] md:translate-x-[11vw]'
          }`}
          style={{
            transition: 'transform 0.2s ease-in-out',
          }}
          onMouseEnter={() => setIsImageContainerHovered(true)}
        >
          <div className="flex w-full items-center justify-end">
            <ProjectViewToggle
              isMobileOnly={selectedProject.isMobileOnly}
              isWebOnly={selectedProject.isWebOnly}
              viewMode={viewMode}
              setViewMode={setViewMode}
              headerPosition={false}
            />
          </div>
          <div className="mx-auto flex h-full w-full flex-col items-start justify-start">
            <AppImagesAllBreakpoints
              hovered={isImageContainerHovered}
              images={images}
              loading={loading}
              currentImageIndex={currentImageIndex}
              imageOnLoad={imageOnLoad}
            />
            <div className="w-full">
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
          className={`sticky right-0 mt-0.5 flex h-[80vh] max-h-[90vh] min-h-[59vh] min-w-[90.5vw] max-w-[90vw] flex-col items-center justify-center overflow-x-scroll lg:h-full ${
            isImageContainerHovered
              ? 'md:translate-x-[-15vw]'
              : 'md:translate-x-[51vw]'
          }`}
          style={{
            transition: 'transform 0.2s ease-in-out',
          }}
          onMouseEnter={() => setIsImageContainerHovered(true)}
        >
          <div className="flex w-full items-center justify-end">
            <ProjectViewToggle
              viewMode={viewMode}
              setViewMode={setViewMode}
              headerPosition={false}
              isMobileOnly={selectedProject.isMobileOnly}
              isWebOnly={selectedProject.isWebOnly}
            />
          </div>
          <div className="mx-auto flex w-[60vw] flex-col items-center justify-center">
            <DesktopWebsiteImages
              images={images}
              loading={loading}
              currentImageIndex={currentImageIndex}
              imageOnLoad={imageOnLoad}
            />
            <div className="w-full">
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

export default DesktopLayout;

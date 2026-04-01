import React from 'react';
import LoadingSpinner from '../../ui/LoadingSpinner';
import { ProjectViewToggle } from '../shared/ProjectViewToggle';
import MobileAppImages from '../mobile/MobileAppImages';
import ProjectAccordion from '../shared/ProjectAccordion';
import TabletProjectSkills from '../tablet/TabletProjectSkills';
import TabletWebsiteImages from '../tablet/TabletWebsiteImages';
import ProjectImagePagination from '../shared/ProjectImagePagination';
import { Project } from '@/data/projects';
import type { ProjectSection } from '@/constants';

interface TabletLayoutProps {
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

const TabletLayout = ({
  currentImageIndex,
  setCurrentImageIndex,
  viewMode,
  images,
  loading,
  setViewMode,
  selectedProject,
  activeSection,
  setActiveSection,
  imageOnLoad,
}: TabletLayoutProps) => {
  return (
    <div
      className={`hidden h-auto items-start justify-between overflow-x-hidden overflow-y-scroll pb-[10vh] align-middle md:flex md:flex-col md:pt-[4vh] lg:hidden lg:w-full`}
    >
      <div className="mx-auto h-auto w-full items-center justify-center align-middle">
        <ProjectAccordion
          variant="compact"
          selectedProject={selectedProject}
          topAccordion={true}
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />

        <div className="flex h-auto w-full flex-col items-center justify-center overflow-x-hidden bg-slate-800 bg-opacity-50">
          <div className="flex-col items-center justify-center align-middle">
            <ProjectViewToggle
              isMobileOnly={selectedProject.isMobileOnly}
              isWebOnly={selectedProject.isWebOnly}
              viewMode={viewMode}
              setViewMode={setViewMode}
              headerPosition={false}
            />

            <div className="flex h-auto w-auto flex-grow flex-col items-center justify-center overflow-x-hidden bg-opacity-50 align-middle">
              <div className="flex h-auto max-h-[100%] w-auto flex-col items-start justify-center overflow-x-scroll">
                {loading ? (
                  <LoadingSpinner />
                ) : selectedProject.isMobileOnly ? (
                  <MobileAppImages
                    smallMobileScreen={false}
                    images={images}
                    currentImageIndex={currentImageIndex}
                    loading={loading}
                  />
                ) : (
                  <div className="mx-auto mr-0 h-auto max-h-[65vh] w-auto items-center justify-center align-middle md:mr-20">
                    <TabletWebsiteImages
                      images={images}
                      currentImageIndex={currentImageIndex}
                      imageOnLoad={imageOnLoad}
                    />
                  </div>
                )}
              </div>
              <div className="mt-2 w-auto items-center justify-center">
                <ProjectImagePagination
                  hovered={true}
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
        </div>

        <ProjectAccordion
          variant="compact"
          selectedProject={selectedProject}
          topAccordion={false}
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
        <div className="my-10 h-auto w-[100%] border-y-4 border-tealAccent bg-slate-800 bg-opacity-50">
          <TabletProjectSkills
            selectedProject={selectedProject}
          />
        </div>
      </div>
    </div>
  );
};

export default TabletLayout;

import React, { useEffect } from 'react';

const LOADING_TIMEOUT_MS = 2000;
import MobileStickyTitle from '../mobile/MobileStickyTitle';
import ProjectAccordion from '../shared/ProjectAccordion';
import MobileAppImages from '../mobile/MobileAppImages';
import TabletProjectSkills from '../tablet/TabletProjectSkills';
import ProjectImagePagination from '../shared/ProjectImagePagination';
import { ProjectViewToggle } from '../shared/ProjectViewToggle';
import { Project } from '@/data/projects';
import type { ProjectSection } from '@/constants';
import TabletWebsiteImages from '../tablet/TabletWebsiteImages';

interface MobileLayoutProps {
  selectedProject: Project;
  viewMode: 'web' | 'mobile';
  setViewMode: (mode: 'web' | 'mobile') => void;
  images: string[];
  loading: boolean;
  currentImageIndex: number;
  setCurrentImageIndex: (newIndex: number) => void;
  setActiveSection: (section: ProjectSection) => void;
  activeSection: ProjectSection;
  loadNextProject: () => void;
  imageOnLoad: () => void;
  setLoading: (loading: boolean) => void;
}
const MobileLayout = ({
  selectedProject,
  viewMode,
  images,
  loading,
  setLoading,
  setViewMode,
  currentImageIndex,
  setCurrentImageIndex,
  activeSection,
  setActiveSection,
  loadNextProject,
  imageOnLoad,
}: MobileLayoutProps) => {
  useEffect(() => {
    if (!loading) return;

    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, LOADING_TIMEOUT_MS);

    return () => clearTimeout(timeoutId);
  }, [loading, setLoading]);

  return (
    <>
      <div className="mx-auto flex h-auto w-full flex-col md:hidden">
        <MobileStickyTitle projectTitle={selectedProject.name} />
        <div
          className={`flex w-full flex-col items-start justify-between overflow-x-hidden overflow-y-scroll align-middle md:hidden`}
        >
          <div className="mx-auto h-auto w-full items-center justify-center align-middle">
            <ProjectAccordion
              variant="compact"
              selectedProject={selectedProject}
              topAccordion={true}
              activeSection={activeSection}
              setActiveSection={setActiveSection}
            />
          </div>
          <div className="mx-auto h-full w-full min-w-[70vw] items-center justify-center align-middle">
            <div className="flex w-full min-w-[70vw] items-center justify-center">
              <ProjectViewToggle
                viewMode={viewMode}
                setViewMode={setViewMode}
                headerPosition={false}
                isMobileOnly={selectedProject.isMobileOnly}
                isWebOnly={selectedProject.isWebOnly}
              />
            </div>
            <div className="align-start flex h-auto w-[100%] min-w-[70vw] flex-grow items-start justify-start overflow-x-hidden bg-slate-800 bg-opacity-50">
              <div className="flex h-auto w-[100%] flex-col items-center justify-center overflow-x-scroll">
                {selectedProject.isMobileOnly ? (
                  <MobileAppImages
                    smallMobileScreen={true}
                    images={images}
                    currentImageIndex={currentImageIndex}
                    loading={loading}
                  />
                ) : (
                  <TabletWebsiteImages
                    images={images}
                    currentImageIndex={currentImageIndex}
                    imageOnLoad={imageOnLoad}
                  />
                )}
                <ProjectImagePagination
                  hovered={true}
                  currentImageIndex={currentImageIndex}
                  totalImages={images?.length}
                  onPageChange={(index) => setCurrentImageIndex(index)}
                  onPrevImage={() =>
                    setCurrentImageIndex(currentImageIndex - 1)
                  }
                  onNextImage={() =>
                    setCurrentImageIndex(currentImageIndex + 1)
                  }
                />
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
          <div className="mb-6 mt-10 h-auto w-[100%] border-y-4 border-emerald-600 bg-slate-800 bg-opacity-50">
            <TabletProjectSkills
              selectedProject={selectedProject}
            />
          </div>
        </div>
      </div>
      <div className="flex h-auto w-full items-center justify-center md:hidden">
        <button
          className="text-md mb-8 w-[60%] justify-center self-end rounded-md border border-white bg-orangeflame px-8 py-2 font-bold text-white hover:bg-opacity-80 lg:text-lg"
          onClick={() => loadNextProject()}
        >
          Next Project
        </button>
      </div>
    </>
  );
};

export default MobileLayout;

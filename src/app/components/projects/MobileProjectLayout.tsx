import React, { useEffect } from 'react';

const LOADING_TIMEOUT_MS = 2000;
import MobileProjectTitleStickyHeader from './MobileProjectTitleStickyHeader';
import MediumScreenProjectAccordion from './MediumScreenProjectAccordion';
import MediumMobileAppProjectImages from './MediumMobileAppProjectImages';
import MediumScreenProjectSkillsComponent from './MediumScreenProjectSkillsComponent';
import ProjectImagePagination from './ProjectImagePagination';
import { ImagesFormatSelector } from './ImagesFormatSelector';
import { Project } from '@/data/projects';
import WebsiteProjectImages from './WebsiteProjectImages';

interface MobileProjectLayoutProps {
  selectedProject: Project;
  viewMode: 'web' | 'mobile';
  setViewMode: (mode: 'web' | 'mobile') => void;
  images: string[];
  loading: boolean;
  currentImageIndex: number;
  setCurrentImageIndex: (newIndex: number) => void;
  setActiveSection: (section: string) => void;
  activeSection: string;
  loadNextProject: () => void;
  imageOnLoad: () => void;
  imageLoading: boolean;
  setLoading: (loading: boolean) => void;
}
const MobileProjectLayout = ({
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
}: MobileProjectLayoutProps) => {
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
        <MobileProjectTitleStickyHeader projectTitle={selectedProject.name} />
        <div
          className={`flex w-full flex-col items-center justify-between overflow-x-hidden overflow-y-scroll align-middle md:hidden`}
        >
          <div className="mx-auto h-auto w-full items-center justify-center align-middle">
            <MediumScreenProjectAccordion
              selectedProject={selectedProject}
              topAccordion={true}
              activeSection={activeSection}
              setActiveSection={setActiveSection}
            />
          </div>
          <div className="mx-auto h-full w-full min-w-[70vw] items-center justify-center align-middle">
            <div className="flex w-full min-w-[70vw] items-center justify-center">
              <ImagesFormatSelector
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
                  <MediumMobileAppProjectImages
                    smallMobileScreen={true}
                    images={images}
                    currentImageIndex={currentImageIndex}
                    loading={loading}
                  />
                ) : (
                  <WebsiteProjectImages
                    images={images}
                    currentImageIndex={currentImageIndex}
                    imageOnLoad={imageOnLoad}
                  />
                )}
                {/* </div> */}
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

          <MediumScreenProjectAccordion
            selectedProject={selectedProject}
            topAccordion={false}
            activeSection={activeSection}
            setActiveSection={setActiveSection}
          />
          <div className="mb-6 mt-10 h-auto w-[100%] border-y-4 border-emerald-600 bg-slate-800 bg-opacity-50">
            <MediumScreenProjectSkillsComponent
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

export default MobileProjectLayout;

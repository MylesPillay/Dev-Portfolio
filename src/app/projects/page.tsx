'use client';
import React, { useCallback, useEffect, useState } from 'react';
import projects from '@/data/projects';
import ProjectsHeader from '../components/projects/shared/ProjectHeader';
import ProjectSkillsComponent from '../components/projects/sidebar/ProjectSkills';
import MobileLayout from '../components/projects/layouts/MobileLayout';
import ProjectSidebar from '../components/projects/sidebar/ProjectSidebar';
import DesktopLayout from '../components/projects/layouts/DesktopLayout';
import TabletLayout from '../components/projects/layouts/TabletLayout';
import useFetchMobileAppImages from '@/hooks/useFetchMobileAppImages';

const ProjectsDisplay = (): React.ReactElement => {
  const [projectsMenuOpen, setProjectsMenuOpen] = useState(false);
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  const [viewMode, setViewMode] = useState<'web' | 'mobile'>('mobile');
  const [mobileImageIndex, setMobileImageIndex] = useState<number>(0);
  const [webImageIndex, setWebImageIndex] = useState<number>(0);

  const currentImageIndex = viewMode === 'mobile' ? mobileImageIndex : webImageIndex;
  const setCurrentImageIndex = viewMode === 'mobile' ? setMobileImageIndex : setWebImageIndex;
  const [isImageContainerHovered, setIsImageContainerHovered] = useState(false);
  const [activeSection, setActiveSection] = useState('Overview');
  const [loading, setLoading] = useState(false);
  const [imageLoading, setImageLoading] = useState(false);

  const selectedProject = projects[selectedProjectIndex];

  const { images: imagesArray } = useFetchMobileAppImages({
    selectedProjectIndex,
    viewMode,
    supabaseId: selectedProject.supabaseId,
    setLoading,
  });

  useEffect(() => {
    if (imageLoading) {
      const timer = setTimeout(() => setImageLoading(false), 300);
      return () => clearTimeout(timer);
    }
  }, [imageLoading]);

  useEffect(() => {
    if (isImageContainerHovered) {
      setActiveSection('Overview');
    }
  }, [isImageContainerHovered]);

  const handleProjectClick = (index: number) => {
    if (index === selectedProjectIndex) return;
    setLoading(true);
    setMobileImageIndex(0);
    setWebImageIndex(0);
    setSelectedProjectIndex(index);
    setViewMode(projects[index].isMobileOnly ? 'mobile' : 'web');
    setProjectsMenuOpen(false);
  };

  const handleImageChange = useCallback((newIndex: number) => {
    const isValidIndex = newIndex >= 0 && newIndex < imagesArray.length;

    if (isValidIndex) {
      setImageLoading(true);
      (viewMode === 'mobile' ? setMobileImageIndex : setWebImageIndex)(newIndex);
    }
  }, [imagesArray.length, viewMode]);

  const handleImageLoad = useCallback(() => {
    setLoading(false);
    setImageLoading(false);
  }, []);

  return (
    <div className="m-none relative h-full w-full overflow-x-hidden border-0 border-orangeflame bg-mobile-gradient pr-0 sm:border-l-[0.5px] md:bg-projects-gradient">
      <ProjectsHeader
        selectedProject={selectedProject}
        viewMode={viewMode}
        setViewMode={setViewMode}
        isImageContainerHovered={isImageContainerHovered}
        setIsImageContainerHovered={setIsImageContainerHovered}
        onProjectClick={handleProjectClick}
        projectsMenuOpen={projectsMenuOpen}
        setProjectsMenuOpen={setProjectsMenuOpen}
      />
      <div className="flex h-full min-h-[101vh] w-full flex-col items-start justify-start lg:flex-row">
        <ProjectSidebar
          selectedProject={selectedProject}
          handleProjectClick={handleProjectClick}
          isImageContainerHovered={isImageContainerHovered}
          setIsImageContainerHovered={setIsImageContainerHovered}
          activeSection={activeSection}
        />
        <div className="relative flex h-auto min-h-screen w-screen max-w-[100vw] flex-col overflow-x-hidden overflow-y-scroll lg:min-h-[85vh]">
          <DesktopLayout
            setIsImageContainerHovered={setIsImageContainerHovered}
            isImageContainerHovered={isImageContainerHovered}
            currentImageIndex={currentImageIndex}
            setCurrentImageIndex={setCurrentImageIndex}
            viewMode={viewMode}
            images={imagesArray}
            loading={loading}
            setViewMode={setViewMode}
            selectedProject={selectedProject}
            activeSection={activeSection}
            setActiveSection={setActiveSection}
            imageOnLoad={handleImageLoad}
          />
          <TabletLayout
            isImageContainerHovered={isImageContainerHovered}
            currentImageIndex={currentImageIndex}
            setCurrentImageIndex={setCurrentImageIndex}
            viewMode={viewMode}
            images={imagesArray}
            loading={loading}
            setViewMode={setViewMode}
            selectedProject={selectedProject}
            activeSection={activeSection}
            setActiveSection={setActiveSection}
            imageOnLoad={handleImageLoad}
          />
          <MobileLayout
            selectedProject={selectedProject}
            viewMode={viewMode}
            setViewMode={setViewMode}
            currentImageIndex={currentImageIndex}
            images={imagesArray}
            loading={loading}
            setCurrentImageIndex={handleImageChange}
            setActiveSection={setActiveSection}
            activeSection={activeSection}
            loadNextProject={() => handleProjectClick(selectedProjectIndex + 1)}
            imageOnLoad={handleImageLoad}
            imageLoading={imageLoading}
            setLoading={setLoading}
          />
        </div>
        <div className="flex md:hidden">
          <ProjectSkillsComponent
            selectedProject={selectedProject}
            activeSection={activeSection}
            isImageHovered={isImageContainerHovered}
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectsDisplay;

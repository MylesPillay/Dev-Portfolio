import React from "react";
import Image from "next/image";
import projects from "./ProjectsObject";

interface ProjectImagesProps {
	selectedProject: (typeof projects)[0];
	viewMode: "web" | "mobile";
	currentImageIndex: number;
}

const ProjectImages: React.FC<ProjectImagesProps> = ({
	selectedProject,
	viewMode,
	currentImageIndex
}) => {
	if (!selectedProject) return null;

	const images =
		viewMode === "web"
			? selectedProject.images.web
			: selectedProject.images.mobile;

	if (!images || images.length === 0) return null;

	const currentImage = images[currentImageIndex % images.length];

	return (
		<div className='right-0 overflow-hidden'>
			<div className='rounded-lg'>
				{viewMode === "web" ? (
					<div className='w-[80%] h-2/3 flex-shrink-0 pr-3 flex-grow-0 rounded-lg'>
						<Image
							src={currentImage}
							style={{
								borderRadius: "12px"
							}}
							alt={`${selectedProject.name} web screenshot ${
								currentImageIndex + 1
							}`}
							layout='responsive'
							width={1920}
							height={1080}
							objectFit='contain'
							quality={100}
						/>
					</div>
				) : (
					<div className='relative'>
						<Image
							src={currentImage}
							alt={`${selectedProject.name} mobile screenshot ${
								currentImageIndex + 1
							}`}
							layout='responsive'
							width={375}
							height={812}
							objectFit='contain'
							quality={100}
						/>
					</div>
				)}
			</div>
		</div>
	);
};

export default ProjectImages;

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
		<div className='rounded-lg align-middle  justify-center items-center self-center max-h-[69vh] min-h-[69vh] overflow-y-hidden overflow-x-hidden'>
			{viewMode === "web" ? (
				<div className='w-full h-full rounded-lg  overflow-hidden'>
					<Image
						src={currentImage}
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
				<div className='justify-center items-center align-middle w-auto h-auto rounded-lg  overflow-hidden'>
					<Image
						src={currentImage}
						className='rounded-lg max-w-[35vw] mx-auto'
						alt={`${selectedProject.name} mobile screenshot ${
							currentImageIndex + 1
						}`}
						layout='responsive'
						width={455.5}
						height={890}
						objectFit='contain'
						quality={100}
					/>
				</div>
			)}
		</div>
	);
};

export default ProjectImages;

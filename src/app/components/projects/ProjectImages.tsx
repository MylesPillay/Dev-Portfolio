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
	return (
		<div className='relative w-full h-full overflow-auto'>
			{viewMode === "web" && selectedProject.images.web && (
				<div>
					{selectedProject.images.web.map(
						(image, index) =>
							currentImageIndex === index && (
								<div key={index} className='relative'>
									<Image
										src={image}
										alt={`${
											selectedProject.name
										} web screenshot ${index + 1}`}
										layout='responsive'
										width={1920}
										height={1080}
										objectFit='contain'
										quality={100}
									/>
								</div>
							)
					)}
				</div>
			)}
			{viewMode === "mobile" && selectedProject.images.mobile && (
				<div>
					{selectedProject.images.mobile.map(
						(image, index) =>
							currentImageIndex === index && (
								<div key={index} className='relative'>
									<Image
										src={image}
										alt={`${
											selectedProject.name
										} mobile screenshot ${index + 1}`}
										layout='responsive'
										width={375}
										height={812}
										objectFit='contain'
										quality={100}
									/>
								</div>
							)
					)}
				</div>
			)}
		</div>
	);
};

export default ProjectImages;

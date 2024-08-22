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
		// <div className='relative w-full h-full overflow-auto'>
		// 	{viewMode === "web" && selectedProject.images.web && (
		// 		<div>
		// 			{selectedProject.images.web.map(
		// 				(image, index) =>
		// 					currentImageIndex === index && (
		// 						<div key={index} className='relative'>
		// <Image
		// 	src={image}
		// 	alt={`${
		// 		selectedProject.name
		// 	} web screenshot ${index + 1}`}
		// 	layout='responsive'
		// 	width={1920}
		// 	height={1080}
		// 	objectFit='contain'
		// 	quality={100}
		// 							/>
		// 						</div>
		// 					)
		// 			)}
		// 		</div>
		// 	)}
		// 	{viewMode === "mobile" && selectedProject.images.mobile && (
		// 		<div>
		// 			{selectedProject.images.mobile.map(
		// 				(image, index) =>
		// 					currentImageIndex === index && (
		// 						<div key={index} className='relative'>
		// 							<Image
		// 								src={image}
		// 								alt={`${
		// 									selectedProject.name
		// 								} mobile screenshot ${index + 1}`}
		// 								layout='responsive'
		// 								width={375}
		// 								height={812}
		// 								objectFit='contain'
		// 								quality={100}
		// 							/>
		// 						</div>
		// 					)
		// 			)}
		// 		</div>
		// 	)}
		// </div>
		<div
			className={`
									right-0 overflow-hidden`}>
			<div
				className='flex flex-row transition-transform duration-300 rounded-lg'
				style={{
					transform: `translateX(-${currentImageIndex * 500}%)`
				}}>
				{viewMode === "web" && selectedProject.images.web && (
					<div>
						{selectedProject.images.web.map((image, index) => (
							<div
								key={index}
								className={`w-[80%]  h-2/3 flex-shrink-0 pr-3 flex-grow-0 rounded-lg`}>
								<Image
									src={image}
									style={{
										borderRadius: "12px"
									}}
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
						))}
					</div>
				)}
				({" "}
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
				)
			</div>
		</div>
	);
};

export default ProjectImages;

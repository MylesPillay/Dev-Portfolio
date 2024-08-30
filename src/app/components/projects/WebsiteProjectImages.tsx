import React from "react";
import Image from "next/image";
import projects from "./ProjectsObject";

interface WebsiteProjectImagesProps {
	selectedProject: (typeof projects)[0];
	images: string[];
	currentImageIndex: number;
}

const WebsiteProjectImages: React.FC<WebsiteProjectImagesProps> = ({
	selectedProject,
	images,
	currentImageIndex
}) => {
	if (!selectedProject) return null;

	if (!images || images.length === 0) return null;

	const currentImage = images[currentImageIndex % images.length];

	return (
		<div className='rounded-lg align-middle  justify-center items-center self-center max-h-[69vh] min-h-[69vh] overflow-y-scroll overflow-x-hidden'>
			<div
				className={`
									flex justify-center  w-full `}>
				<div
					className='flex justify-center transition-transform duration-300'
					// style={{
					// 	transform: hovered
					// 		? `translateX(-${currentImageIndex * 51.5}%)`
					// 		: `translateX(-${0}%)`
					// }}>
				>
					{images.map((image, index) => (
						<div
							key={index}
							className={`w-[100%]  h-auto flex-shrink-0 pr-5 flex-grow-0`}>
							<Image
								src={image}
								className='rounded-lg'
								alt={`Project screenshot ${index + 1}`}
								layout='responsive'
								objectFit='contain'
								width={800}
								height={580}
								style={{ minHeight: 400 }}
								quality={100}
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default WebsiteProjectImages;

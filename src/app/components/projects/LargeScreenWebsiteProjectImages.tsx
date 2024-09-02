import React from "react";
import Image from "next/image";
import projects from "./ProjectsObject";

interface LargeScreenWebsiteProjectImagesProps {
	selectedProject: (typeof projects)[0];
	images: string[];
	currentImageIndex: number;
	isImageContainerHovered: boolean;
}

const LargeScreenWebsiteProjectImages: React.FC<
	LargeScreenWebsiteProjectImagesProps
> = ({ currentImageIndex, images, isImageContainerHovered }) => {
	return (
		<div className='flex  w-auto h-full  rounded-lg align-start justify-start items-start self-start  overflow-y-scroll overflow-x-hidden bg-yellow-200'>
			<div className='rounded-lg overflow-y-scroll '>
				<div className={`w-full justify-center h-auto flex-grow`}>
					<Image
						src={images[currentImageIndex]}
						className='rounded-lg'
						alt={`Project screenshot `}
						layout='responsive'
						width={100}
						height={90}
						objectFit='cover'
						style={{
							maxHeight: 1500
						}}
						quality={100}
					/>
				</div>
			</div>
		</div>
	);
};

export default LargeScreenWebsiteProjectImages;

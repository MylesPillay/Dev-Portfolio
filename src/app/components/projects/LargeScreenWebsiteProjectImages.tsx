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
> = ({ currentImageIndex, images }) => {
	return (
		<div
			className={`flex flex-col rounded-lg align-start justify-start items-start h-[60vh] max-h-[60vh] w-[60vw] overflow-y-auto`}>
			{/* <Image
				src={images[currentImageIndex]}
				className='rounded-lg'
				alt={`Project screenshot `}
				layout='responsive'
				width={1000}
				height={1500}
				objectFit='contain'
				quality={100}
				style={{
					width: "100%", // Ensure image always takes full width of the container
					height: "auto" // Height will auto-adjust to maintain aspect ratio
				}}
			/> */}
			{/* eslint-disable-next-line @next/next/no-img-element */}
			<img
				src={images?.[currentImageIndex]}
				alt={`Image ${currentImageIndex}`}
				style={{
					display: "flex",

					borderRadius: "10px",
					width: "auto",
					height: "auto"
				}}
			/>
		</div>
	);
};

export default LargeScreenWebsiteProjectImages;

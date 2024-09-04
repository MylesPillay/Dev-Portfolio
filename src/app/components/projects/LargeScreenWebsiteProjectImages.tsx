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
			<Image
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
			/>
		</div>
	);
};

export default LargeScreenWebsiteProjectImages;
// "use client";
// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import projects from "./ProjectsObject";
// import LoadingSpinner from "../layout/LoadingSpinner";

// interface LargeScreenWebsiteProjectImagesProps {
// 	selectedProject: (typeof projects)[0];
// 	images: string[];
// 	currentImageIndex: number;
// 	isImageContainerHovered: boolean;
// }

// const LargeScreenWebsiteProjectImages: React.FC<
// 	LargeScreenWebsiteProjectImagesProps
// > = ({ currentImageIndex, images }) => {
// 	const [isLoading, setIsLoading] = useState(true);
// 	const [imageSrc, setImageSrc] = useState<string>("");

// 	useEffect(() => {
// 		// Convert the image to an Object URL and reset loading state
// 		const objectURL = URL.createObjectURL(images[currentImageIndex);
// 		setImageSrc(objectURL);
// 		setIsLoading(true);

// 		return () => {
// 			// Clean up Object URL to avoid memory leaks
// 			URL.revokeObjectURL(objectURL);
// 		};
// 	}, [currentImageIndex, images]);

// 	return (
// 		<div
// 			className={`flex flex-col rounded-lg align-start justify-start items-start h-[60vh] max-h-[60vh] w-[60vw] overflow-y-auto`}>
// 			{isLoading && <LoadingSpinner />}
// 			{/* Render spinner while loading */}
// 			{imageSrc && (
// 				<Image
// 					src={imageSrc}
// 					className={`rounded-lg ${isLoading ? "hidden" : "block"}`} // Hide image until loaded
// 					alt={`Project screenshot`}
// 					layout='responsive'
// 					width={1000}
// 					height={1500}
// 					objectFit='contain'
// 					quality={100}
// 					style={{
// 						width: "100%", // Ensure image always takes full width of the container
// 						height: "auto" // Height will auto-adjust to maintain aspect ratio
// 					}}
// 					loading='lazy'
// 					onLoadingComplete={() => setIsLoading(false)} // Trigger spinner to disappear when loading is complete
// 				/>
// 			)}
// 		</div>
// 	);
// };

// export default LargeScreenWebsiteProjectImages;

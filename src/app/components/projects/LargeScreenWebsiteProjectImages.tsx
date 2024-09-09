import React, { useState, useEffect } from "react";
import Image from "next/image";
import projects from "./ProjectsObject";
import LoadingSpinner from "../layout/LoadingSpinner";

interface LargeScreenWebsiteProjectImagesProps {
	selectedProject: (typeof projects)[0];
	images: string[];
	currentImageIndex: number;
	isImageContainerHovered: boolean;
	loading: boolean;
	imageOnLoad: () => void;
}

const LargeScreenWebsiteProjectImages: React.FC<
	LargeScreenWebsiteProjectImagesProps
> = ({ currentImageIndex, images, loading, imageOnLoad }) => {
	const [imageLoading, setImageLoading] = useState(true);

	useEffect(() => {
		setImageLoading(true);
	}, [currentImageIndex]);

	return (
		<div
			className={`flex flex-col rounded-lg align-start   justify-start items-start h-[60vh] max-h-[60vh] w-[60vw] overflow-y-auto`}>
			{(loading || imageLoading) && (
				<div className='flex justify-center items-center w-full h-full bg-orangeflame bg-opacity-10'>
					<LoadingSpinner />
				</div>
			)}
			<img
				src={images?.[currentImageIndex]}
				alt={`Image ${currentImageIndex}`}
				style={{
					display: loading || imageLoading ? "none" : "flex",
					borderRadius: "10px",
					width: "auto",
					height: "auto"
				}}
				onLoad={() => {
					setImageLoading(false);
					imageOnLoad();
				}}
			/>
		</div>
	);
};

export default LargeScreenWebsiteProjectImages;

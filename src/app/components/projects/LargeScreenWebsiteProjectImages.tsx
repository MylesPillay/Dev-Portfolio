import React from "react";
import Image from "next/image";
import projects from "./ProjectsObject";
import LoadingSpinner from "../layout/LoadingSpinner";

interface LargeScreenWebsiteProjectImagesProps {
	selectedProject: (typeof projects)[0];
	images: string[];
	currentImageIndex: number;
	isImageContainerHovered: boolean;
	loading: boolean;
}

const LargeScreenWebsiteProjectImages: React.FC<
	LargeScreenWebsiteProjectImagesProps
> = ({ currentImageIndex, images, loading }) => {
	return (
		<div
			className={`flex flex-col rounded-lg align-start justify-start items-start h-[60vh] max-h-[60vh] w-[60vw] overflow-y-auto`}>
			{loading ? (
				<LoadingSpinner />
			) : (
				// eslint-disable-next-line @next/next/no-img-element
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
			)}
		</div>
	);
};

export default LargeScreenWebsiteProjectImages;

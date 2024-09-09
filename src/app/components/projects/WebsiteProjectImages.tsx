import React, { useState, useEffect } from "react";
import LoadingSpinner from "../layout/LoadingSpinner";
import { Project } from "./ProjectsObject";

interface WebsiteProjectImagesProps {
	images: string[];
	currentImageIndex: number;
	selectedProject: Project;
	imageOnLoad: () => void;
}

const WebsiteProjectImages: React.FC<WebsiteProjectImagesProps> = ({
	images,
	currentImageIndex,
	selectedProject,
	imageOnLoad
}) => {
	const [imageLoading, setImageLoading] = useState(true);

	// Handle loading state whenever the currentImageIndex changes
	useEffect(() => {
		setImageLoading(true); // Start loading when the index changes
	}, [currentImageIndex]);

	return (
		<div className='flex w-full  rounded-lg align-middle justify-center items-start self-center h-auto lg:max-h-[40vh] md:max-h-[55vh] min-h-[40vh] max-h-[70vh] overflow-y-scroll overflow-x-hidden p-8 md:p-0 '>
			<div className='flex justify-center h-full w-full'>
				<div className='rounded-lg h-full w-full overflow-y-auto overflow-x-hidden'>
					<div className={`w-full justify-center h-auto flex-grow`}>
						{imageLoading && (
							<div
								className={`flex justify-center   lg:min-h-[40vh] md:min-h-[55vh] min-h-[70vh]  items-center align-middle h-full  mr-4 rounded-lg bg-orangeflame bg-opacity-10 `}>
								<LoadingSpinner />
							</div>
						)}
						{/* Show spinner while loading */}
						<img
							src={images[currentImageIndex]}
							alt={`Image ${currentImageIndex}`}
							style={{
								display: imageLoading ? "none" : "block", // Hide image while loading
								borderRadius: "10px",
								width: "auto",
								height: "auto"
							}}
							onLoad={() => {
								setImageLoading(false); // Set loading to false once image loads
								imageOnLoad();
							}}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default WebsiteProjectImages;

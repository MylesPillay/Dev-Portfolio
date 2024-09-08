import React, { useState } from "react";
import Image from "next/image";
import projects from "./ProjectsObject";
import LoadingSpinner from "../layout/LoadingSpinner";

interface WebsiteProjectImagesProps {
	selectedProject: (typeof projects)[0];
	images: any[];
	currentImageIndex: number;
}

const WebsiteProjectImages: React.FC<WebsiteProjectImagesProps> = ({
	currentImageIndex,
	images
}) => {
	const [imageLoading, setImageLoading] = useState(true);

	return (
		<div className='flex w-[100%] rounded-lg align-middle justify-center items-start self-center h-auto max-h-[40vh] min-h-[40vh] overflow-y-scroll overflow-x-hidden '>
			<div
				className={`
									flex justify-center  h-full w-full `}>
				<div className='rounded-lg  h-full  w-full overflow-y-auto overflow-x-hidden'>
					<div className={`w-full justify-center h-auto  flex-grow`}>
						{images.length > 0 && (
							<>
								{imageLoading && <LoadingSpinner />}
								<img
									src={images?.[currentImageIndex]}
									alt={`Image ${currentImageIndex}`}
									style={{
										display: imageLoading ? "none" : "flex",
										borderRadius: "10px",
										width: "auto",
										height: "auto"
									}}
									onLoad={() => setImageLoading(false)}
								/>
							</>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default WebsiteProjectImages;

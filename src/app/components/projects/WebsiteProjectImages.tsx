import React from "react";
import Image from "next/image";
import projects from "./ProjectsObject";

interface WebsiteProjectImagesProps {
	selectedProject: (typeof projects)[0];
	images: string[];
	currentImageIndex: number;
}

const WebsiteProjectImages: React.FC<WebsiteProjectImagesProps> = ({
	currentImageIndex,
	images
}) => {
	return (
		<div className='flex w-[100%] rounded-lg align-middle justify-center items-center self-center max-h-[110vh] h-full overflow-y-hidden overflow-x-hidden'>
			<div
				className={`
									flex justify-center  w-full `}>
				<div className='rounded-lg  max-h-[85vh]  w-auto overflow-y-auto overflow-x-hidden'>
					<div
						className={`w-[100%] justify-center h-full flex-shrink-0 flex-grow`}>
						<Image
							src={images[currentImageIndex]}
							className='rounded-lg'
							alt={`Project screenshot `}
							layout='responsive'
							objectFit='contain'
							width={1000}
							height={450}
							style={{ minHeight: 400 }}
							quality={100}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default WebsiteProjectImages;

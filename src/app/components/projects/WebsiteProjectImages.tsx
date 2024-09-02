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
		<div className='flex w-[100%] rounded-lg align-middle justify-center items-start self-center h-auto max-h-[40vh] min-h-[40vh] overflow-y-scroll overflow-x-hidden '>
			<div
				className={`
									flex justify-center  h-full w-full `}>
				<div className='rounded-lg  h-full  w-full overflow-y-auto overflow-x-hidden'>
					<div className={`w-full justify-center h-auto  flex-grow`}>
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

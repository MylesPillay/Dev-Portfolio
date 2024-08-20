import React from "react";
import Image from "next/image";

interface MobileImageContainerProps {
	images: string[];
	currentImageIndex: number;
}

const MobileImageContainer: React.FC<MobileImageContainerProps> = ({
	images,
	currentImageIndex
}) => {
	return (
		<div className='relative overflow-hidden'>
			<div
				className='flex flex-row transition-transform duration-300'
				style={{
					transform: `translateX(-${currentImageIndex * 33}%)`
				}}>
				{images.map((image, index) => (
					<div
						key={index}
						className='w-[33%]  h-1/2 flex-shrink-0  flex-grow-0 px-2'>
						<Image
							src={image}
							alt={`Mobile screenshot ${index + 1}`}
							layout='responsive'
							width={280}
							height={300}
							style={{ minHeight: 300 }}
							quality={100}
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export default MobileImageContainer;

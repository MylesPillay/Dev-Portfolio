"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

interface MediumMobileAppProjectImagesProps {
	// hovered: boolean;
	smallMobileScreen?: boolean;
	images: string[];
	currentImageIndex: number;
}

const MediumMobileAppProjectImages: React.FC<
	MediumMobileAppProjectImagesProps
> = ({ smallMobileScreen, images, currentImageIndex }) => {
	return (
		<div
			className={`flex w-[100%] bg-pink-200 rounded-lg align-start justify-center items-center mt-4 overflow-y-scroll overflow-x-scroll ${
				smallMobileScreen
					? " h-auto max-h-[50vh] min-h-[35vh]"
					: "h-auto max-h-[40vh] min-h-[40vh]"
			} `}>
			<div className='flex flex-row space-x-4 justify-between  align-top items-start transition-transform duration-300'>
				{images.map((image, index) => (
					<div
						className={`w-[50%] justify-center h-[50%]flex-grow flex-shrink-0  `}
						style={{
							transform: `translateX(-${
								currentImageIndex * 99.5
							}%)`
						}}>
						<Image
							src={image}
							className='rounded-lg'
							alt={`Project screenshot `}
							layout='responsive'
							objectFit='contain'
							width={500}
							height={450}
							style={{ minHeight: 200 }}
							quality={100}
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export default MediumMobileAppProjectImages;

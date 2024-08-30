"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

interface MediumMobileAppProjectImagesProps {
	// hovered: boolean;
	images: string[];
	currentImageIndex: number;
}

const MediumMobileAppProjectImages: React.FC<
	MediumMobileAppProjectImagesProps
> = ({ images, currentImageIndex }) => {
	return (
		<div
			className={`
									flex justify-center  w-full `}>
			<div
				className='flex flex-row justify-between transition-transform duration-300'
				// style={{
				// 	transform: hovered
				// 		? `translateX(-${currentImageIndex * 51.5}%)`
				// 		: `translateX(-${0}%)`
				// }}>
			>
				{images.map((image, index) => (
					<div
						key={index}
						className={`w-[50%]  h-auto flex-shrink-0 pr-5 flex-grow-0`}>
						<Image
							src={image}
							className='rounded-lg'
							alt={`Mobile screenshot ${index + 1}`}
							layout='responsive'
							objectFit='contain'
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

export default MediumMobileAppProjectImages;

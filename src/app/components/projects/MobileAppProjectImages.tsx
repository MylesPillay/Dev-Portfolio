"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

interface MobileImageContainerProps {
	hovered: boolean;
	images: string[];
	currentImageIndex: number;
}

const MobileImageContainer: React.FC<MobileImageContainerProps> = ({
	hovered,
	images,
	currentImageIndex
}) => {
	return (
		<div
			className={`
									right-0 overflow-x-hidden w-auto `}>
			<div
				className='flex flex-row transition-transform duration-300'
				style={{
					transform: hovered
						? `translateX(-${currentImageIndex * 50}%)`
						: `translateX(-${0}%)`
				}}>
				{images.map((image, index) => (
					<div
						key={index}
						className={`w-[33vh]  h-1/2 flex-shrink-0 pr-3 flex-grow-0`}>
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

export default MobileImageContainer;

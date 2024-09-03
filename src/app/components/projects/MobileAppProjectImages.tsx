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
		<div className='flex w-[100%] rounded-lg align-middle justify-center items-start self-center h-auto max-h-[70vh] min-h-[40vh] overflow-y-scroll overflow-x-hidden '>
			<div
				className={`
									flex flex-row justify-apart  h-[70%] w-full overflow-x-scroll`}>
				{images.map((image, index) => (
					<div
						key={index}
						className={`w-[27vh] flex-shrink-0 pr-3
					transition-transform duration-300`}
						style={{
							transform: hovered
								? `translateX(-${currentImageIndex * 99.5}%)`
								: `translateX(-${0}%)`
						}}>
						<Image
							src={image}
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
				))}
			</div>
		</div>
	);
};

export default MobileImageContainer;

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
		// <div
		// 	className={`flex w-[96%]  px-4 rounded-lg align-start justify-center items-center my-4 overflow-y-scroll overflow-x-scroll ${
		// 		smallMobileScreen
		// 			? " h-auto max-h-[55vh] min-h-[35vh]"
		// 			: "h-auto max-h-[40vh] min-h-[40vh]"
		// 	} `}>
		// 	<div className='flex flex-row space-x-4  justify-between  align-top items-start transition-transform duration-300'>
		// 		{images?.map((image, index) => (
		// 			<div
		// 				className={`w-[49.5%] h-auto  justify-center flex-grow flex-shrink-0  `}
		// 				style={{
		// 					transform: `translateX(-${
		// 						currentImageIndex * 107.2
		// 					}%)`
		// 				}}>
		// 				<Image
		// 					src={image}
		// 					className='rounded-lg'
		// 					alt={`Project screenshot `}
		// 					layout='responsive'
		// 					objectFit='contain'
		// 					width={500}
		// 					height={450}
		// 					style={{ minHeight: 200 }}
		// 					quality={100}
		// 				/>
		// 			</div>
		// 		))}
		// 	</div>
		// </div>
		<div
			className={`flex rounded-lg align-start justify-center items-center my-4 overflow-y-scroll overflow-x-scroll ${
				smallMobileScreen
					? " h-auto max-h-[60vh] min-h-[35vh] w-[98%] px-6 "
					: "h-auto max-h-[60vh] min-h-[50vh] w-[85%]"
			} `}>
			<div className='flex flex-row space-x-4 justify-between  align-top items-start transition-transform duration-300'>
				{images.length > 0 &&
					images?.map((image, index) => (
						<div
							key={index}
							className={` justify-center flex-grow flex-shrink-0
							${smallMobileScreen ? " w-auto max-h-[60vh] min-h-[35vh]" : " w-[33%] "}  `}
							// ml-[5vw] w-auto mb-2
							style={{
								transform: `translateX(-${
									currentImageIndex * 107.2
								}%)`
							}}>
							{/* eslint-disable-next-line @next/next/no-img-element */}
							<img
								src={image}
								alt={`Image ${currentImageIndex}`}
								style={{
									display: "block",
									minHeight: 200,
									maxHeight: 500,
									borderRadius: "10px",
									width: "auto",
									height: "auto"
								}}
							/>
						</div>
					))}
			</div>
		</div>
	);
};

export default MediumMobileAppProjectImages;

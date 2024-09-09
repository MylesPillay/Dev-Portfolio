"use client";
import React from "react";
import LoadingSpinner from "../layout/LoadingSpinner";

interface MediumMobileAppProjectImagesProps {
	smallMobileScreen?: boolean;
	images: string[];
	currentImageIndex: number;
	loading: boolean;
}

const MediumMobileAppProjectImages: React.FC<
	MediumMobileAppProjectImagesProps
> = ({ smallMobileScreen, images, currentImageIndex, loading }) => {
	// Common styles for both loading cards and images
	const containerStyles = smallMobileScreen
		? "w-[49.5%] max-h-[60vh] min-h-[35vh]"
		: "w-[32%] max-h-[60vh] min-h-[50vh]";

	const validImages = images.slice(0, -1);

	return (
		<div
			className={`flex rounded-lg align-start justify-center items-center my-4 overflow-y-scroll overflow-x-scroll ${
				smallMobileScreen
					? "h-auto max-h-[60vh] min-h-[35vh] w-[98%] px-6"
					: "h-auto max-h-[60vh] min-h-[50vh] w-[85%]"
			}`}>
			{loading ? (
				<>
					<div
						className={`md:flex hidden  flex-row space-x-6 pl-2 justify-start min-h-[44vh] h-full w-[100vw] overflow-x-hidden`}>
						<div
							className={`flex justify-center items-center flex-grow  w-[65%] rounded-lg bg-orangeflame bg-opacity-10 transition-transform duration-300`}>
							<LoadingSpinner />
						</div>
						<div
							className={`flex justify-center items-center flex-grow  w-[65%] rounded-lg bg-orangeflame bg-opacity-10 transition-transform duration-300`}>
							<LoadingSpinner />
						</div>
						<div
							className={`flex justify-center items-center flex-grow  w-[65%] rounded-lg bg-orangeflame bg-opacity-10 transition-transform duration-300`}>
							<LoadingSpinner />
						</div>
					</div>
					<div
						className={`flex md:hidden  flex-row space-x-6 pl-2 justify-between min-h-[44vh] h-full w-[80vw] overflow-x-hidden`}>
						<div
							className={`flex justify-center items-center flex-grow  w-[45%] max-w-[40%] rounded-lg bg-orangeflame bg-opacity-10 transition-transform duration-300`}>
							<LoadingSpinner />
						</div>
						<div
							className={`flex justify-center items-center flex-grow  w-[45%] max-w-[40%]  rounded-lg bg-orangeflame bg-opacity-10 transition-transform duration-300`}>
							<LoadingSpinner />
						</div>
					</div>
				</>
			) : (
				<div className='flex flex-row space-x-4 justify-between items-start transition-transform duration-300'>
					{validImages.length > 0 &&
						validImages.map((image, index) => (
							<div
								key={index}
								className={`flex justify-center flex-grow flex-shrink-0 w-[33%] items-center ${containerStyles} transition-transform duration-300`}
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
			)}
		</div>
	);
};

export default MediumMobileAppProjectImages;

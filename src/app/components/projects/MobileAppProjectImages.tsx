"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import LoadingSpinner from "../layout/LoadingSpinner";

interface MobileImageContainerProps {
	hovered: boolean;
	images: string[];
	currentImageIndex: number;
	loading: boolean;
	imageOnLoad: () => void;
}

const MobileImageContainer: React.FC<MobileImageContainerProps> = ({
	hovered,
	images,
	currentImageIndex,
	loading,
	imageOnLoad
}) => {
	const trimmedImages = images.slice(0, -1);

	return (
		<div className='flex w-[100%] rounded-lg align-middle justify-center items-start self-center h-auto max-h-[80vh] min-h-[50vh] overflow-y-scroll overflow-x-hidden pr-2'>
			{loading ? (
				<div
					className={`flex  flex-row  justify-start min-h-[57vh] h-full w-full overflow-x-scroll`}>
					<div
						className={`flex justify-center  space-x-4 items-center flex-grow  w-[55.5%] mr-4 rounded-lg bg-orangeflame bg-opacity-10 transition-transform duration-300`}
						style={{
							transform: hovered
								? `translateX(-${currentImageIndex * 99.5}%)`
								: `translateX(-${0}%)`
						}}>
						<LoadingSpinner />
					</div>
					<div
						className={`flex justify-center items-center flex-grow  w-[52%] rounded-lg bg-orangeflame bg-opacity-10 transition-transform duration-300`}
						style={{
							transform: hovered
								? `translateX(-${currentImageIndex * 99.5}%)`
								: `translateX(-${0}%)`
						}}>
						<LoadingSpinner />
					</div>
				</div>
			) : (
				<div
					className={`
									flex flex-row justify-apart space-x-4 h-full w-full overflow-x-scroll`}>
					{/* {images?.length > 0 && */}
					{trimmedImages?.map((image, index) => (
						<div
							key={index}
							className={` justify-center flex-grow flex-shrink-0 w-[50%] transition-transform duration-300`}
							style={{
								transform: hovered
									? `translateX(-${
											currentImageIndex * 99.5
									  }%)`
									: `translateX(-${0}%)`
							}}>
							{/* eslint-disable-next-line @next/next/no-img-element */}
							<img
								src={image}
								alt={`Image ${index}`} // Use 'index' for individual alt text
								style={{
									display: "flex",
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

export default MobileImageContainer;

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
		<div className='flex w-[100%] rounded-lg align-middle justify-center items-start self-center h-auto max-h-[80vh] min-h-[50vh] overflow-y-scroll overflow-x-hidden '>
			<div
				className={`
									flex flex-row justify-apart  space-x-4 h-full w-full overflow-x-scroll`}>
				{images?.length > 0 &&
					images?.map((image, index) => (
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
								alt={`Image ${currentImageIndex}`}
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
		</div>
	);
};

export default MobileImageContainer;

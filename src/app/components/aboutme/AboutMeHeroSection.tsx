import Image from "next/image";
import Link from "next/link";
import AnimatedText from "./AnimatedTexts";
import { useState } from "react";
import LoadingSpinner from "../layout/LoadingSpinner";
// import { on } from "events";
import portrait from "/images/profile.jpg";

const AboutMeHeroSection = ({
	image,
	loading
}: {
	image: string;
	loading: boolean;
}) => {
	// const [isImageLoaded, setIsImageLoaded] = useState<boolean>(true);

	// Handler for when the image has fully loaded

	return (
		<div className='flex w-full h-auto justify-center p-10'>
			<div className='flex w-auto align-middle rounded-lg  justify-center items-center self-center h-auto '>
				{/* <div
					className={`
								flex flex-2 bg-green-200 justify-end rounded-lg h-auto max-h-[50vh] flex-grow-0 ml-[5vw] w-auto mb-2 overflow-y-hidden`}>
					<div className={`h-full justify-end rounded-lg`}> */}
				{/* {!isImageLoaded && <LoadingSpinner />} */}
				{/* <div className={`${!isImageLoaded ? "block" : "hidden"}`}>
					{/* <LoadingSpinner /> */}
				{loading ? (
					<div
						className={`h-auto justify-end rounded-lg 	flex flex-1 bg-orangeflame bg-opacity-10	max-h-[62vh] min-w-auto min-h-[50vh] flex-grow-0 ml-[5vw] w-auto mb-2 overflow-y-hidden`}>
						<LoadingSpinner />
					</div>
				) : (
					<></>
				)}
				{/* Image with overlay */}
				<div className='relative  ml-[5vw] rounded-lg  max-h-[50vh] mb-2 overflow-y-hidden'>
					{/* Image */}
					<img
						src={image}
						className='h-auto justify-end flex flex-2 pb-20 flex-grow-0 w-auto '
						alt='Profile'
						style={{
							maxHeight: "62vh",
							borderRadius: "10px",
							width: "auto",
							height: "auto"
						}}
					/>
					{/* Overlay */}
					<div className='absolute inset-0 bg-orangeflame bg-opacity-20 rounded-lg'></div>
				</div>
			</div>

			<div className='flex sm:flex-grow md:hidden justify-start w-full text-left max-w-[90vw] ml-[8vw] '>
				<h1 className='text-4xl font-bold  text-white'>MYLES PILLAY</h1>
			</div>

			<div className='flex w-auto flex-1  h-full  lg:max-w-[75%] xl:max-w-[50%] justify-center items-center py-8 px-[5vw]'>
				<div
					className={`
					 justify-center `}>
					<div className='flex flex-row flex-wrap w-full min-w-[105%] mr-8 align-middle items-center justify-center space-x-2 '>
						<div
							className={`flex flex-wrap   items-center text-wrap text-center
							`}>
							<span className='flex-1 justify-center items-center'>
								<span
									className={`flex-wrap text-wrap w-auto transition-opacity  md:text-3xl lg:text-4xl xl:text-3xl text-2xl font-light  flex-grow text-center lg:text-center text-emerald-200
					`}>
									React Native
								</span>
							</span>
						</div>
						<div className=' text-white text-3xl'>/</div>
						<div
							className={`flex flex-wrap   items-center text-wrap text-center
							`}>
							<span className='flex-1 justify-center items-center'>
								<span
									className={`flex-nowrap text-wrap w-auto transition-opacity  md:text-3xl lg:text-4xl xl:text-3xl text-2xl font-light  flex-grow text-center lg:text-center text-orangeflame
					`}>
									Full Stack
								</span>
							</span>
						</div>
						<h3 className='md:text-3xl lg:text-4xl xl:text-5xl text-wrap  text-center font-thin text-white '>
							Developer
						</h3>
					</div>
					<div className='flex flex-row flex-grow flex-wrap w-full min-w-[100%] mx-auto align-middle items-center justify-center  my-8'>
						<AnimatedText
							texts={[
								"Versatile",
								"Dedicated",
								"Creative  ",
								"Passionate",
								"Ambitious",
								"Adaptable"
							]}
							interval={3000}
							animationDuration={500}
							baseClassName='md:text-2xl lg:text-3xl text-xl font-light '
							containerClassName='h-auto  align-top items-start  mr-1 w-auto max-w-[11rem] '
							textContent='dev with 2+ years experience creating scalable high-impact applications.'
						/>
					</div>

					<div className='flex flex-row justify-end items-center w-full h-auto '>
						<Link
							className='justify-center items-center self-center w-auto mx-auto p-2 px-8  mt-[7vh] rounded-lg  bg-orangeflame  text-white border border-white lg:text-lg text-md font-medium  hover:bg-opacity-80'
							href={"/projects"}>
							LEARN MORE
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutMeHeroSection;

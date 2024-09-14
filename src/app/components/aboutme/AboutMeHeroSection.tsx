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
	return (
		<div className='flex w-[100vw] flex-auto h-auto justify-around py-10'>
			{/* {loading ? (
				<div
					className={`hidden md:flex justify-end rounded-xl  bg-orangeflame bg-opacity-90	 h-auto flex-grow-0 overflow-y-hidden
 xl:flex-1   xl:min-h-[63vh] xl:max-w-[40vw]  lg:flex-2   lg:min-h-[50vh] lg:max-w-[30vw] md:flex-wrap   md:min-h-[45vh] md:max-h-[45vw]


					`}>
					<LoadingSpinner />
				</div>
			) : (
				<></>
			)} */}

			<div className='relative  lg:min-w-[30vw] min-w-[50%]  ml-0 mr-0 md:ml-[6vw] md:mr-[2vw] rounded-xl max-h-[62vh] mb-2 '>
				<img
					src={image}
					className={`h-auto justify-end flex flex-2 flex-grow-0 w-auto ${
						loading ? "hidden" : "flex"
					}`}
					alt='Profile'
					style={{
						maxHeight: "62vh",
						borderRadius: "10px",
						width: "auto",
						height: "auto"
					}}
				/>

				<div
					className={` inset-0   flex-grow-0  flex-2 h-auto	 max-w-[385px]  sm:max-w-[370px] md:max-w-[45vh] w-auto   m-4 bg-orangeflame bg-opacity-10 rounded-lg ${
						loading ? "hidden" : "absolute"
					}`}></div>
				{loading ? (
					<div
						className={` flex flex-2 flex-grow  justify-center align-middle min-h-[65vh]items-center min-w-[45vh] max-w-[45vh] bg-orangeflame bg-opacity-10 h-full  w-full
							${loading ? "flex" : "hidden"}
					`}>
						<LoadingSpinner />
					</div>
				) : (
					<></>
				)}
			</div>

			<div className='flex sm:flex-grow md:hidden justify-start w-full text-left max-w-[90vw] ml-[8vw] '>
				<h1 className='text-4xl font-bold  text-white'>MYLES PILLAY</h1>
			</div>

			<div
				className={`flex w-full flex-1 flex-grow   h-full  justify-start items-center py-8

				`}>
				<div
					className={`
					 justify-center  w-[40vw] min-w-[40vw]`}>
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

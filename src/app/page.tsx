"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<div
			className='bg-projects-gradient  h-screen w-full overflow-x-hidden overflow-y-hidden  m-none  pr-0    py-6  '
			style={{
				borderColor: "#FF7D11",
				borderWidth: 0,
				borderLeft: "0.5px solid #FF7D11"
			}}>
			<div className='flex flex-col justify-between w-full'>
				<div className='flex flex-row justify-between w-full'>
					<div className='flex flex-col space-x-2 h-full w-2/6 justify-start align-middle items-start my-[1vh]'>
						{/* Left container - 80% height */}
						<div className='flex flex-col w-2/6 h-[70vh] ml-8 rounded-lg items-start justify-start'>
							<h1
								className='text-2xl font-bold text-left justify-start align-text-bottom w-auto h-[5vh] mt-3 text-orangeflame '
								style={{}}>
								ABOUT ME
							</h1>
							<div className=' justify-center align-middle relative h-full w-[350px] mt-[4vh] overflow-hidden'>
								<Image
									src='/images/profile.jpg'
									alt='profile'
									layout='fill'
									objectFit='cover'
									objectPosition='center'
									quality={100}
								/>
							</div>
						</div>
					</div>
					<div className='w-[55%] h-[45vh] m-auto mr-[10%]'>
						<div className=' h-[100%] p-4'>
							<div className='flex flex-col space-2-2 align-middle items-center justify-evenly my-3'>
								<div className='flex flex-row space-x-3 align-middle items-center justify-evenly my-3'>
									<h3 className='text-5xl font-semibold text-white'>
										Full Stack
									</h3>
									<h3 className='text-4xl text-emerald-600 font-semibold '>
										/
									</h3>
									<h3 className='text-5xl font-semibold text-orangeflame'>
										React Native
									</h3>
								</div>
								<h3 className='text-5xl font-semibold text-emerald-200'>
									Developer
								</h3>
							</div>
							<h3 className='text-xl m-auto mt-[12.5%] font-normal text-white text-wrap text-center'>
								I’m a versatile Full Stack Developer with a
								passion for creating scalable, high-impact
								applications. With expertise in both front-end
								and back-end technologies, I thrive on bringing
								innovative solutions to life, whether it's a
								sophisticated web platform or a cutting-edge
								mobile app.
							</h3>
						</div>
					</div>
				</div>
				<div className='w-full h-auto justify-center align-middle items-center my-5 '>
					<div className='bg-slate-400 bg-opacity-50 rounded-lg h-[100%] p-4 pr-10'>
						<div className='flex flex-row space-x-2 w-full '>
							<h2 className='text-2xl font-semibold mr-8'>
								Links:
							</h2>
							<div className='flex flex-row  w-full justify-between align-middle items-center'>
								<div>Item 1</div>
								<div>Item 2</div>
								<div>Item 3</div>
								<div>Item 4</div>
								<div>Item 5</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Right container - 40% height, aligned with the start of left container */}
			{/* <div className='w-2/3 h-[45vh] ]'>
					<div className='bg-slate-400 bg-opacity-50 rounded-lg h-[100%] p-4'>

									<div className='flex flex-col space-2-2 align-middle items-center justify-evenly my-3'>
									<div className='flex flex-row space-x-4 align-middle items-center justify-evenly my-3'>
							<h3 className='text-2xl font-semibold text-emerald-200'>
								Full Stack
							</h3>
							<h3 className='text-2xl text-white font-semibold '>
								/
							</h3>
								<h3 className='text-2xl font-semibold text-orangeflame'>
								React Native
							</h3></div>
							<h3 className='text-2xl font-semibold text-slate-500'>
								Developer
							</h3>
						</div>
						<h3 className='text-xl font-normal text-slate-800'>
						I’m a versatile Full Stack Developer with a passion for creating scalable, high-impact applications. With expertise in both front-end and back-end technologies, I thrive on bringing innovative solutions to life, whether it's a sophisticated web platform or a cutting-edge mobile app.
						</h3>
					</div>
					<div className='w-full h-auto justify-center align-middle items-center my-5 '>
						<div className='bg-slate-400 bg-opacity-50 rounded-lg h-[100%] p-4 pr-10'>
							<div className='flex flex-row space-x-2 w-full '>
								<h2 className='text-2xl font-semibold mr-8'>
									Links:
								</h2>
								<div className='flex flex-row  w-full justify-between align-middle items-center'>
									<div>Item 1</div>
									<div>Item 2</div>
									<div>Item 3</div>
									<div>Item 4</div>
									<div>Item 5</div>
								</div>
							</div>
						</div>
					</div>
				</div> */}

			{/* </div> */}
		</div>
	);
}

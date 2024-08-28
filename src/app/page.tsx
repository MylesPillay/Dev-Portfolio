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
			{/* <div className='flex flex-row justify-between w-full my-2 pl-8 pr-8 pt-6'> */}

			<div className='flex flex-col space-x-2 h-full justify-start align-middle items-start my-[1vh]'>
				{/* Left container - 80% height */}
				<div className='flex flex-col w-2/6 h-[70vh] ml-8 rounded-lg items-start justify-start'>
					<h1
						className='text-2xl font-bold text-left justify-start align-text-bottom w-auto h-[5vh] mt-3 text-orangeflame '
						style={{}}>
						ABOUT ME
					</h1>
					<div className=' justify-center align-middle relative h-full w-[350px] overflow-hidden'>
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

				{/* Right container - 40% height, aligned with the start of left container */}
				<div className='w-2/3 h-[45vh] ]'>
					<div className='bg-slate-400 bg-opacity-50 rounded-lg h-[100%] p-4'>
						<div className='flex flex-row space-x-4 align-middle items-center justify-evenly my-3'>
							<h3 className='text-2xl font-semibold '>
								Full Stack Dev
							</h3>
							<h3 className='text-2xl font-semibold text-slate-500'>
								React Native Dev
							</h3>
						</div>
						<h3 className='text-xl font-normal text-slate-800'>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Sed do eiusmod tempor incididunt ut labore et
							dolore magna aliqua. Lorem ipsum dolor sit amet,
							consectetur adipiscing elit. Sed do eiusmod tempor
							incididunt ut labore et dolore magna aliqua. \Lorem
							ipsum dolor sit amet, consectetur adipiscing elit.
							Sed do eiusmod tempor incididunt ut labore et dolore
							magna aliqua. Lorem ipsum
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
				</div>
			</div>
			{/* </div> */}
		</div>
	);
}

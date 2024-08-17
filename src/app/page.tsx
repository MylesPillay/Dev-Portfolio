"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<div className='bg-yellow-500 min-h-screen m-none text-slate-800 border-l-4 border-slate-200 p-8'>
			<h1 className='text-4xl font-bold mb-4'>Myles Pillay</h1>
			<div className='flex flex-row space-x-8 h-full'>
				{/* Left container - 80% height */}
				<div className='w-2/6 h-[80vh] bg-slate-400 bg-opacity-50 rounded-lg  items-center justify-start'>
					<div className='relative h-[400px] w-[350px] overflow-hidden'>
						<Image
							src='/images/profile.jpg'
							alt='profile'
							layout='fill'
							objectFit='cover'
							objectPosition='center'
							quality={100}
						/>
					</div>
					<div
						className='relative h-auto p-8 w-full justify-center align-middle items-center my-6 bg-green-300'
						onMouseEnter={() => setIsHovered(true)}
						onMouseLeave={() => setIsHovered(false)}>
						CodeStack
						<div
							className={`absolute left-full top-0 h-full bg-blue-300 overflow-hidden transition-all duration-300 ${
								isHovered ? "w-[205%]" : "w-0"
							}`}>
							<div className='p-8 whitespace-nowrap'>
								Expanded content goes here. This can be as wide
								as needed.
							</div>
						</div>
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
		</div>
	);
}

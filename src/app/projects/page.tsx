"use client";
import Image from "next/image";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Projects() {
	const [currentImageIndex, setCurrentImageIndex] = useState(0);
	const [selectedProject, setSelectedProject] = useState(0);
	const images = [
		"/images/profile.jpg",
		"/images/project1.jpg",
		"/images/project2.jpg",
		"/images/project3.jpg"
		// Add more image paths as needed
	];
	const projects = [
		{
			name: "Project 1",
			images: ["/images/project1_1.jpg", "/images/project1_2.jpg"]
		},
		{
			name: "Project 2",
			images: ["/images/project2_1.jpg", "/images/project2_2.jpg"]
		},
		{
			name: "Project 3",
			images: ["/images/project3_1.jpg", "/images/project3_2.jpg"]
		},
		{
			name: "Project 4",
			images: ["/images/project4_1.jpg", "/images/project4_2.jpg"]
		}
	];

	const nextImage = () => {
		setCurrentImageIndex((prevIndex) =>
			prevIndex === projects[selectedProject].images.length - 1
				? 0
				: prevIndex + 1
		);
	};

	const prevImage = () => {
		setCurrentImageIndex((prevIndex) =>
			prevIndex === 0
				? projects[selectedProject].images.length - 1
				: prevIndex - 1
		);
	};

	return (
		<div className='bg-yellow-500 min-h-screen m-none text-slate-800 border-l-4 border-slate-200 p-8'>
			<div className='flex flex-row space-x-8 w-full justify-start mb-4'>
				<h1 className='text-4xl font-bold text-left justify-start w-[30%]'>
					Projects
				</h1>
				<h1 className='text-4xl font-bold w-auto justify-center'>
					{projects[selectedProject].name}
				</h1>
			</div>
			<div className='flex flex-row items-start justify-start h-full space-x-8'>
				<div className='w-[20%] bg-slate-400 bg-opacity-50 rounded-lg p-4'>
					<ul className='flex flex-col space-y-4'>
						{projects.map((project, index) => (
							<li
								key={index}
								className={`cursor-pointer p-2 rounded ${
									selectedProject === index
										? "bg-blue-500 text-white"
										: "hover:bg-blue-200"
								}`}
								onClick={() => {
									setSelectedProject(index);
									setCurrentImageIndex(0);
								}}>
								{project.name}
							</li>
						))}
					</ul>
				</div>
				<div className='w-[70%] bg-slate-400 bg-opacity-50 rounded-lg p-2'>
					<div className='relative h-[400px] w-full overflow-hidden mb-4'>
						<Image
							src={images[currentImageIndex]}
							alt={`project image ${currentImageIndex + 1}`}
							layout='fill'
							objectFit='contain'
							quality={100}
						/>
						<button
							onClick={prevImage}
							className='absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full'>
							<FaChevronLeft />
						</button>
						<button
							onClick={nextImage}
							className='absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full'>
							<FaChevronRight />
						</button>
					</div>
					<div className='flex justify-center space-x-2 mb-4 '>
						{images.map((_, index) => (
							<button
								key={index}
								onClick={() => setCurrentImageIndex(index)}
								className={`w-3 h-3 rounded-full ${
									index === currentImageIndex
										? "bg-blue-500"
										: "bg-gray-300"
								}`}
							/>
						))}
					</div>

					{/* <div className='relative h-[400px] w-full overflow-hidden mb-4'>
						<Image
							src={
								projects[selectedProject].images[
									currentImageIndex
								]
							}
							alt={`${projects[selectedProject].name} image ${
								currentImageIndex + 1
							}`}
							layout='fill'
							objectFit='contain'
							quality={100}
						/>
						<button
							onClick={prevImage}
							className='absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full'>
							<FaChevronLeft />
						</button>
						<button
							onClick={nextImage}
							className='absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full'>
							<FaChevronRight />
						</button>
					</div> */}

					<h3 className='text-md font-normal text-slate-800 text-justify'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua. Lorem ipsum dolor sit amet, consectetur
						adipiscing elit. Sed do eiusmod tempor incididunt ut
						labore et dolore magna aliqua. Lorem ipsum dolor sit
						amet, consectetur adipiscing elit. Sed do eiusmod tempor
						incididunt ut labore et dolore magna aliqua. Lorem ipsum
					</h3>
				</div>
			</div>
		</div>
	);
}

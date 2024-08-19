"use client";
import React, { useState } from "react";
import projects from "../components/projects/ProjectsObject";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ProjectsDisplay = (): JSX.Element => {
	const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
	const [viewMode, setViewMode] = useState<"web" | "mobile">("web");
	const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

	const handleProjectClick = (index: number) => {
		const project = projects[index];
		setSelectedProjectIndex(index);
		setViewMode(
			project.images.web && project.images.web.length > 0
				? "web"
				: "mobile"
		);
		setCurrentImageIndex(0);
	};

	const selectedProject = projects[selectedProjectIndex];

	const nextImage = (currentImageIndex: number) => {
		const images = selectedProject?.images[viewMode];
		if (images && currentImageIndex < images.length - 1) {
			setCurrentImageIndex(currentImageIndex + 1);
		}
	};
	const prevImage = (currentImageIndex: number | null) => {
		if (currentImageIndex && currentImageIndex > 0) {
			setCurrentImageIndex(currentImageIndex - 1);
		}
	};

	return (
		<div className='bg-yellow-500 min-h-screen m-none text-slate-800 border-l-4 border-slate-200 p-8'>
			<div className='flex flex-row space-x-8 w-full justify-start mb-4'>
				<h1 className='text-4xl font-bold text-left justify-start w-[30%]'>
					Projects
				</h1>
				<h1 className='text-4xl font-bold w-auto justify-center'>
					{selectedProject.name}
				</h1>
			</div>
			<div className='flex flex-row items-start justify-start h-full space-x-8'>
				<div className='w-[20%] ml-2  rounded-lg '>
					<ul className='flex flex-col font-medium'>
						{projects.map((project, index) => (
							<li
								key={index}
								className={`cursor-pointer my-2 text-left ${
									selectedProject.name === project.name
										? " text-white"
										: "hover:text-white"
								}`}
								onClick={() => handleProjectClick(index)}>
								{project.name}
							</li>
						))}
					</ul>
				</div>
				<div className='w-[70%] bg-slate-400 bg-opacity-50 rounded-lg p-2'>
					<div className='relative h-[400px] w-full overflow-hidden mb-4'>
						{viewMode === "web" && selectedProject.images.web && (
							<div>
								{selectedProject.images.web.map(
									(image, index) =>
										currentImageIndex === index && (
											<Image
												key={index}
												src={image}
												alt={`${
													selectedProject.name
												} web screenshot ${index + 1}`}
												layout='fill'
												objectFit='contain'
												quality={100}
											/>
										)
								)}
							</div>
						)}
						{viewMode === "mobile" &&
							selectedProject.images.mobile && (
								<div>
									{selectedProject.images.mobile.map(
										(image, index) =>
											currentImageIndex === index && (
												<Image
													key={index}
													src={image}
													alt={`${
														selectedProject.name
													} mobile screenshot ${
														index + 1
													}`}
													layout='fill'
													objectFit='contain'
													quality={100}
												/>
											)
									)}
								</div>
							)}
					</div>
				</div>
				<div className='w-[20%] justify-end flex-col space-y-2'>
					{selectedProject.images.web &&
						selectedProject.images.web.length > 0 && (
							<button
								className='w-full h-auto bg-slate-800 text-white align-middle justify-center items-center text-center rounded-md p-2 hover:bg-slate-600'
								onClick={() => setViewMode("web")}>
								Desktop
							</button>
						)}
					{selectedProject.images.mobile &&
						selectedProject.images.mobile.length > 0 && (
							<button
								onClick={() => setViewMode("mobile")}
								className='w-full h-auto bg-slate-800 text-white align-middle justify-center items-center text-center rounded-md p-2 hover:bg-slate-600 mb-12'>
								Mobile
							</button>
						)}
					<div className='flex flex-row justify-center space-x-2'>
						<button
							onClick={() => {
								console.log(currentImageIndex);
								return prevImage(currentImageIndex);
							}}
							className='transform  bg-black bg-opacity-50 text-white p-2 rounded-full'>
							<FaChevronLeft />
						</button>

						<button
							onClick={() => {
								nextImage(currentImageIndex);
							}}
							className=' transform  bg-black bg-opacity-50 text-white p-2 rounded-full'>
							<FaChevronRight />
						</button>
					</div>
				</div>
			</div>
			<h3 className='text-md font-normal text-slate-800 text-justify'>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
				eiusmod tempor incididunt ut labore et dolore magna aliqua.
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
				eiusmod tempor incididunt ut labore et dolore magna aliqua.
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
				eiusmod tempor incididunt ut labore et dolore magna aliqua.
				Lorem ipsum
			</h3>
		</div>
	);
};

export default ProjectsDisplay;

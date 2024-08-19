"use client";
import Image from "next/image";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Projects() {
	const [currentImageIndex, setCurrentImageIndex] = useState(0);
	const [selectedProject, setSelectedProject] = useState(0);
	const [viewMode, setViewMode] = useState<"web" | "mobile">("web"); // 'web' for desktop, 'mobile' for mobile

	interface Project {
		name: string;
		images: {
			web?: string[];
			mobile?: string[];
		};
		url?: string;
	}
	const projects: Project[] = [
		{
			name: "Air Oasis - Loving the Air Your Breath",
			images: {
				mobile: ["/images/project1_1.jpg", "/images/project1_2.jpg"]
			}
		},
		{
			name: "WhoCo - The People Company",
			images: {
				web: [
					"/images/whoco/web1.jpg",
					"/images/whoco/web2.jpg",
					"/images/whoco/web3.jpg",
					"/images/whoco/web4.jpg"
				],
				mobile: [
					"/images/whoco/mobile1.jpg",
					"/images/whoco/mobile2.jpg",
					"/images/whoco/mobile3.jpg",
					"/images/whoco/mobile4.jpg"
				]
			},
			url: "https://web.archive.org/web/20230216050654/https://whoco.com/"
		},
		{
			name: "Fluent Outreach - AI Lead Converter",
			images: {
				web: [
					"/images/fluent_outreach/web1.jpg",
					"/images/fluent_outreach/web2.jpg",
					"/images/fluent_outreach/web3.jpg",
					"/images/fluent_outreach/web4.jpg"
				],
				mobile: [
					"/images/fluent_outreach/mobile1.jpg",
					"/images/fluent_outreach/mobile2.jpg",
					"/images/fluent_outreach/mobile3.jpg",
					"/images/fluent_outreach/mobile4.jpg"
				]
			},
			url: "https://web.archive.org/web/20230216050654/https://whoco.com/"
		},
		{
			name: "Vibe-A-Day - Daily Song Selections",
			images: {
				web: [],
				mobile: [
					"/images/vibe_a_day/mobile1.jpg",
					"/images/vibe_a_day/mobile2.jpg",
					"/images/vibe_a_day/mobile3.jpg",
					"/images/vibe_a_day/mobile4.jpg"
				]
			},
			url: ""
		},
		{
			name: "usahi - Home Improvement",
			images: {
				web: [
					"/images/usahi/web1.jpg",
					"/images/usahi/web2.jpg",
					"/images/usahi/web3.jpg",
					"/images/usahi/web4.jpg"
				],
				mobile: [
					"/images/usahi/mobile1.jpg",
					"/images/usahi/mobile2.jpg",
					"/images/usahi/mobile3.jpg",
					"/images/usahi/mobile4.jpg"
				]
			},
			url: "https://usahomeimprovement.com/"
		},
		{
			name: "Tuition Covered - AI maintained Scholarship Database",
			images: {
				web: [
					"/images/tuition_covered/web1.jpg",
					"/images/tuition_covered/web2.jpg",
					"/images/tuition_covered/web3.jpg",
					"/images/tuition_covered/web4.jpg"
				],
				mobile: [
					"/images/tuition_covered/mobile1.jpg",
					"/images/tuition_covered/mobile2.jpg",
					"/images/tuition_covered/mobile3.jpg",
					"/images/tuition_covered/mobile4.jpg"
				]
			},
			url: "https://tuitioncovered.com/"
		}
	];
	// Updated nextImage and prevImage functions
	const nextImage = () => {
		const images = projects[selectedProject].images[viewMode] || [];
		setCurrentImageIndex((prevIndex) =>
			prevIndex === images.length - 1 ? 0 : prevIndex + 1
		);
	};
	const prevImage = () => {
		const images = projects[selectedProject].images[viewMode] || [];
		setCurrentImageIndex((prevIndex) =>
			prevIndex === 0 ? images.length - 1 : prevIndex - 1
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
					<div className='flex justify-center space-x-4 mb-4'>
						<button
							onClick={() => setViewMode("web")}
							className={`px-4 py-2 rounded ${
								viewMode === "web"
									? "bg-blue-500 text-white"
									: "bg-gray-300"
							}`}>
							Desktop
						</button>
						<button
							onClick={() => setViewMode("mobile")}
							className={`px-4 py-2 rounded ${
								viewMode === "mobile"
									? "bg-blue-500 text-white"
									: "bg-gray-300"
							}`}>
							Mobile
						</button>
					</div>
					<div className='relative h-[400px] w-full overflow-hidden mb-4'>
						{(viewMode === "web" &&
							projects[selectedProject].images.web) ||
						(viewMode === "mobile" &&
							projects[selectedProject].images.mobile) ? (
							<Image
								src={
									projects[selectedProject]?.images[
										viewMode
									]?.[currentImageIndex] || ""
								}
								alt={`${projects[selectedProject].name} image ${
									currentImageIndex + 1
								}`}
								layout='fill'
								objectFit='contain'
								quality={100}
							/>
						) : (
							<div className='flex items-center justify-center h-full'>
								No {viewMode} images available
							</div>
						)}
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
					<div className='flex justify-center space-x-2 mb-4'>
						{projects[selectedProject].images[
							viewMode as "web" | "mobile"
						] &&
							projects[selectedProject].images[
								viewMode as "web" | "mobile"
							]?.map((_, index) => (
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

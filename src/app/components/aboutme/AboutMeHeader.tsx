"use client";
import useDeviceScreenSize from "@/app/hooks/useDeviceScreenSize";
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaXing } from "react-icons/fa";

const AboutMeHeader = () => {
	const [projectsMenuOpen, setProjectsMenuOpen] = useState(false);

	const [width, height] = useDeviceScreenSize();

	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (
		<div className=' sticky top-0 flex flex-grow flex-row md:pl-8 sm:pl-6 pl-0 bg-project-title-gradient bg-opacity-100  justify-start items-baseline align-bottom w-full pt-10 pb-2 ]bg-project-title-gradient border-b border-orangeflame  z-50 '>
			<div className='flex flex-row flex-0 justify-start  '>
				<h1 className='md:text-2xl text-xl font-bold text-left w-auto  ml-6  sm:ml-0 justify-start h-auto min-w-[7vw] max-w-[18vw]  pb-4  mb  pt-1 align-text-bottom  text-orangeflame '>
					ABOUT ME
				</h1>

				{/* Conditional Rendering of Project List */}

				{/* Project Name Field */}
				<h1 className='text-4xl md:flex-1 font-bold md:flex flex-grow hidden ml-4 justify-start w-full align-text-top text-left min-w-[50%] text-white'>
					MYLES PILLAY
				</h1>
				<div className='md:hidden fixed top-8 right-4 z-50'>
					<button
						onClick={() => {
							setMobileMenuOpen(!mobileMenuOpen);
							setProjectsMenuOpen(false);
						}}
						className='flex flex-col items-center justify-center text-emerald-200 p-2 rounded-md'>
						{mobileMenuOpen ? (
							<FaXing className='z-50' size={30} />
						) : (
							<FaBars size={30} />
						)}
					</button>
					{mobileMenuOpen && (
						<div className='md:hidden fixed top-0 right-0  p-8 h-auto w-[50%]  bg-deepBlueBg z-40 border-emerald-200 border-l border-b'>
							<div className='flex flex-col items-start p-2 h-[10%]'>
								{[
									{ href: "/contact", label: "CONTACT" },
									{ href: "/projects", label: "PROJECTS" },
									{ href: "/", label: "ABOUT ME" }
								].map((item) => (
									<Link
										key={item.href}
										href={item.href}
										className='text-orangeflame text-xl text-left font-semibold my-4'
										onClick={() =>
											setMobileMenuOpen(false)
										}>
										{item.label}
									</Link>
								))}
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};
export default AboutMeHeader;

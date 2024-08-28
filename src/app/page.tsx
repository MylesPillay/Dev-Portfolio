"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import SoftSkillsSection from "./components/aboutme/SoftSkillsComponent";
import TechSkillsSection from "./components/aboutme/TechSkillsComponent";

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
					<div className='flex flex-col space-x-2 h-full w-3/6 justify-start align-middle items-start my-[1vh]'>
						{/* Left container - 80% height */}
						<div className='flex flex-col w-auto h-[70vh] ml-8 rounded-lg items-start justify-start'>
							<div className='flex flex-row justify-start'>
								<h1
									className='text-2xl font-bold text-left justify-start align-text-bottom w-auto h-[5vh] mt-3 text-orangeflame '
									style={{}}>
									ABOUT ME
								</h1>
								<h1 className='text-4xl font-bold  w-auto ml-[4vw]  mt-1 text-white '>
									Myles Pillay
								</h1>
							</div>
							<div className=' justify-center align-middle relative  w-auto ml-[25%] rounded-md border border-tealAccent mt-[4vh] h-[55vh] overflow-hidden'>
								<Image
									src='/images/profile.jpg'
									alt='profile'
									layout='contain'
									width={280}
									height={350}
									objectFit='cover'
									objectPosition='center'
									quality={100}
								/>
							</div>
						</div>
					</div>
					<div className='justify-center items-center w-[55%] h-[35vh] mx-auto mr-[15%] mt-[10%]'>
						<div className='h-[100%] p-4'>
							<div className='flex flex-col space-y-2 align-middle items-center justify-evenly '>
								<div className='flex flex-row space-x-3 align-middle items-center justify-evenly '>
									<h3 className='text-4xl font-semibold text-white'>
										Full Stack
									</h3>
									<h3 className='text-3xl text-emerald-600 font-semibold '>
										/
									</h3>
									<h3 className='text-4xl font-semibold text-orangeflame'>
										React Native
									</h3>
								</div>
								<h3 className='text-4xl font-semibold text-emerald-200'>
									Developer
								</h3>
							</div>
							<h3 className='text-lg m-auto mt-[6%] font-normal text-white text-wrap text-center'>
								Hi I'm Myles, a versatile Full Stack Developer
								with a passion for creating scalable,
								high-impact applications.
								<br></br>
								<br></br>With expertise in both front-end and
								back-end technologies, I thrive on bringing
								innovative solutions to life, whether it's a
								sophisticated
								<span className='text-emerald-200 font-semibold'>
									{" "}
									web platform{" "}
								</span>
								or a cutting-edge{" "}
								<span className='text-orangeflame font-semibold'>
									{" "}
									mobile app.
								</span>
							</h3>
							<div className='flex flex-row justify-end items-center w-full h-auto mt-[6%]'>
								<Link
									className='justify-center items-center self-center w-auto mx-auto p-2 px-8  rounded-lg  bg-orangeflame  text-white border border-white text-lg font-bold  hover:bg-opacity-80 hover:border-2 '
									href={"/projects"}>
									LEARN MORE
								</Link>
							</div>
						</div>
					</div>
				</div>
				<div className='w-full h-auto justify-center align-middle items-center  space-y-2'>
					<div className='bg-slate-800 bg-opacity-50  h-[100%] p-4 border-t border-b border-orangeflame pr-[6vw]'>
						<div className='flex flex-row space-x-2 w-full items-center'>
							<h2 className='text-2xl font-semibold mr-8 text-emerald-200'>
								Links:
							</h2>
							<div className='flex flex-row w-full justify-between align-middle items-center'>
								<a
									href='https://linkedin.com/in/myles-pillay-361868123'
									target='_blank'
									rel='noopener noreferrer'
									className='flex items-center space-x-2 text-white hover:text-orangeflame transition-colors duration-200'>
									<svg
										className='w-6 h-6'
										fill='currentColor'
										viewBox='0 0 24 24'
										aria-hidden='true'>
										<path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' />
									</svg>
									<span>LinkedIn</span>
								</a>
								<a
									href='mailto:myles.pillay@gmail.com'
									className='flex items-center space-x-2 text-white hover:text-orangeflame transition-colors duration-200'>
									<svg
										className='w-6 h-6'
										fill='none'
										stroke='currentColor'
										viewBox='0 0 24 24'
										xmlns='http://www.w3.org/2000/svg'>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth={2}
											d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
										/>
									</svg>
									<span>Email</span>
								</a>
								<a
									href='https://open.spotify.com/user/YOUR_SPOTIFY_USERNAME'
									target='_blank'
									rel='noopener noreferrer'
									className='flex items-center space-x-2 text-white hover:text-orangeflame transition-colors duration-200'>
									<svg
										className='w-6 h-6'
										fill='currentColor'
										viewBox='0 0 24 24'
										aria-hidden='true'>
										<path d='M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z' />
									</svg>
									<span>Spotify</span>
								</a>
								<a
									href='https://github.com/YOUR_GITHUB_USERNAME'
									target='_blank'
									rel='noopener noreferrer'
									className='flex items-center space-x-2 text-white hover:text-orangeflame transition-colors duration-200'>
									<svg
										className='w-6 h-6'
										fill='currentColor'
										viewBox='0 0 24 24'
										aria-hidden='true'>
										<path
											fillRule='evenodd'
											d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z'
											clipRule='evenodd'
										/>
									</svg>
									<span>GitHub</span>
								</a>
								<a
									href='https://apps.apple.com/us/app/vibeaday/id1607743282'
									target='_blank'
									rel='noopener noreferrer'
									className='flex items-center space-x-2 text-white hover:text-orangeflame transition-colors duration-200'>
									<svg
										className='w-6 h-6'
										fill='currentColor'
										viewBox='0 0 24 24'
										aria-hidden='true'>
										<path d='M12 2C6.477 2 2 6.477 2 12c0 5.522 4.477 10 10 10s10-4.478 10-10c0-5.523-4.477-10-10-10zm5.92 14.78c-.232.384-.728.587-1.13.442-3.036-.934-6.41-.45-8.732.692-.413.207-.915.06-1.175-.31-.26-.37-.144-.84.25-1.106 3.253-1.894 7.853-2.377 11.753-1.305.515.146.79.705.598 1.205-.115.307-.388.522-.705.573-.316.05-.636-.074-.86-.26zm-1.248-3.143c-3.333-1.01-7.446-.495-9.82.73-.385.202-.842.07-1.076-.27-.233-.34-.112-.802.27-1.05 3.41-1.88 8.105-2.52 11.903-1.355.532.164.86.75.727 1.29-.133.53-.692.85-1.226.72-.26-.065-.508-.175-.736-.32zm-1.634-3.274c-3.74-1.135-9.395-.538-12.104.946-.367.2-.848.052-1.074-.284-.224-.334-.095-.768.25-.993 3.868-2.137 10.308-2.654 14.624-1.327.435.133.75.525.697.995-.055.47-.447.842-.944.91-.263.035-.52-.04-.746-.21-.225-.17-.437-.366-.63-.583z' />
									</svg>
									<span>VibeADay</span>
								</a>
							</div>
						</div>
					</div>
					{/* Tech Skills Section */}
					<TechSkillsSection />

					{/* Soft Skills Section */}
					{/* <div className='bg-slate-800 bg-opacity-50  h-[100%] p-4 border-t border-b border-orangeflame overflow-hidden transition-all duration-300 ease-in-out hover:h-auto hover:-translate-y-[10vh] group hover:pb-[8vh] hover:bg-deepBlueBg hover:bg-opacity-100'>
						<h2 className='text-2xl font-semibold mr-8 text-emerald-200'>
							Soft Skills:{" "}
							<div
								className={`text-emerald-600 text-xl ml-2  hover:inline-block-hidden inline-block hover:text-transparent`}>
								...
							</div>
						</h2>
						<div className='hidden group-hover:block '>
							{[
								"Agile Development",
								"User Access & Permissions",
								"Image Optimization",
								"Navigation Routing",
								"CTAs and Lead Conversion",
								"Client Collaboration",
								"Figma"
							].map((skill, index) => (
								<span
									key={index}
									className='inline-block  text-white text-lg font-semibold mr-3 mb-2'>
									{skill} ,
								</span>
							))}
						</div>
					</div> */}
					<SoftSkillsSection />
				</div>
			</div>
		</div>
	);
}

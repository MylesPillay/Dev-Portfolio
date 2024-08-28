"use client";
import Image from "next/image";
import Link from "next/link";
import SoftSkillsSection from "./components/aboutme/SoftSkillsComponent";
import TechSkillsSection from "./components/aboutme/TechSkillsComponent";
import LinksComponent from "./components/aboutme/LinksComponent";

export default function Home() {
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
									MYLES PILLAY
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
								Passionate about creating scalable high-impact
								applications.
								<br></br>
								<br></br>
								Whether it's a sophisticated
								<span className='text-emerald-200 font-semibold'>
									{" "}
									web platform{" "}
								</span>
								or cutting-edge{" "}
								<span className='text-orangeflame font-semibold'>
									{" "}
									mobile app
								</span>
								, I love bringing exciting ideas to life.
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
				<LinksComponent />

				<TechSkillsSection />

				<SoftSkillsSection />
			</div>
		</div>
	);
}

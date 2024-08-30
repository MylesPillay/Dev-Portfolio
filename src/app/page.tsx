"use client";
import Image from "next/image";
import Link from "next/link";
import SoftSkillsSection from "./components/aboutme/SoftSkillsComponent";
import TechSkillsSection from "./components/aboutme/TechSkillsComponent";
import LinksComponent from "./components/aboutme/LinksComponent";

export default function Home() {
	return (
		<div
			className='bg-projects-gradient lg:h-screen h-auto w-full overflow-x-hidden lg:overflow-y-hidden  overflow-y-scroll m-none  pr-0   lg:py-6 py-4  '
			style={{
				borderColor: "#FF7D11",
				borderWidth: 0,
				borderLeft: "0.5px solid #FF7D11"
			}}>
			<div className='flex flex-col justify-between w-full'>
				<div className='flex lg:flex-row flex-col lg:justify-between justify-evenly lg:w-full  w-[80%] lg:px-2 '>
					<div className='flex flex-col space-x-2 h-full lg:w-3/6  w-auto justify-start align-middle items-start lg:my-[1vh]'>
						{/* Left container - 80% height */}
						<div className='flex flex-col w-auto h-auto ml-8 rounded-lg items-start justify-start'>
							<div className='flex flex-row justify-start align-middle items-center'>
								<h1
									className='lg:text-2xl text-lg font-bold text-left justify-start align-text-bottom w-auto h-[5vh] mt-3 text-orangeflame '
									style={{}}>
									ABOUT ME
								</h1>
								<h1 className='lg:text-4xl md:-text-2xl text-lg font-bold  w-auto ml-[4vw]  mt-1 text-white '>
									MYLES PILLAY
								</h1>
							</div>
							<div className='hidden lg:flex justify-center align-middle relative lg:ml-[15%]  rounded-md border border-tealAccent mt-[4vh] lg:h-auto h-auto lg:overflow-hidden '>
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
					<div className='justify-center items-center  w-[100vw] h-auto lg:w-[55%] lg:h-[35vh] lg:mr-[15%] lg:mt-[10%]'>
						<div className='lg:h-[100%] h-auto px-2 py-4'>
							<div className='flex flex-row flex-wrap w-auto  align-middle items-center justify-center '>
								<h3 className='md:text-2xl text-lg lg:text-3xl font-semibold text-emerald-200'>
									Full Stack
								</h3>
								<h3 className='text-3xl mx-2 text-emerald-600 font-semibold '>
									/
								</h3>
								<h3 className='md:text-2xl text-lg lg:text-3xl font-semibold text-orangeflame mr-2'>
									React Native
								</h3>

								<h3 className='md:text-2xl text-lg lg:text-3xl font-semibold text-white'>
									Developer
								</h3>
							</div>

							<h3 className=' md:text:lg text-md lg:text-xl m-auto mt-[6%]  justify-center  lg:w-max-w[40%] w-auto max-w[55%] font-normal text-white text-wrap lg:text-left text-center px-10'>
								<span className='text-left'>
									Dedicated dev with 2+ years experience
									creating scalable high-impact applications.
								</span>
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
									className='justify-center items-center self-center w-auto mx-auto p-2 px-8  mt-[7vh] rounded-lg  bg-orangeflame  text-white border border-white text-lg font-bold  hover:bg-opacity-80 hover:border-2 '
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

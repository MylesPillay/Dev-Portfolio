"use client";
import Image from "next/image";
import Link from "next/link";
import SoftSkillsSection from "./components/aboutme/SoftSkillsComponent";
import TechSkillsSection from "./components/aboutme/TechSkillsComponent";
import LinksComponent from "./components/aboutme/LinksComponent";
import AboutMeHeroSection from "./components/aboutme/AboutMeHeroSection";
import AboutMeHeader from "./components/aboutme/AboutMeHeader";

export default function Home() {
	return (
		<div
			className='bg-projects-gradient lg:h-screen h-full w-full overflow-x-hidden lg:overflow-y-hidden  overflow-y-scroll  '
			style={{
				borderColor: "#FF7D11",
				borderWidth: 0,
				borderLeft: "0.5px solid #FF7D11"
			}}>
			<div className='flex flex-col justify-between w-full'>
				<div className='flex lg:flex-row flex-col lg:justify-between justify-evenly  '>
					<div className='flex flex-col space-x-2 w-full justify-start align-middle items-start '>
						<div className='flex flex-col w-full h-auto ml-8 rounded-lg items-start justify-start'>
							<AboutMeHeader />
							<AboutMeHeroSection />
						</div>
					</div>
				</div>
				<div className='flex flex-col justify-start items-center w-full h-auto lg:w-[55%] lg:h-[35vh] lg:mr-[15%] lg:mt-[10%]'>
					<LinksComponent />

					<TechSkillsSection />

					<SoftSkillsSection />
				</div>
			</div>
		</div>
	);
}

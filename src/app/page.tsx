"use client";
import Image from "next/image";
import Link from "next/link";
import SoftSkillsSection from "./components/aboutme/SoftSkillsComponent";
import TechSkillsSection from "./components/aboutme/TechSkillsComponent";
import LinksComponent from "./components/aboutme/LinksComponent";
import AboutMeHeroSection from "./components/aboutme/AboutMeHeroSection";
import AboutMeHeader from "./components/aboutme/AboutMeHeader";
import MobileAboutMeHeroSection from "./components/aboutme/MobileBaoutMeHeroSection";
import MobileTechSkillsSection from "./components/aboutme/MobileSkillsSections";
import MobileSoftSkillsSection from "./components/aboutme/MobileSoftSkillsSection";

export default function Home() {
	return (
		<div className='bg-projects-gradient lg:h-screen h-full w-full overflow-x-hidden lg:overflow-y-hidden  overflow-y-scroll  border-0 sm:border-l border-orangeflame '>
			<div className='flex flex-col justify-between w-full'>
				<div className='flex lg:flex-row flex-col lg:justify-between justify-evenly  '>
					<div className='flex flex-col  w-full justify-start align-middle items-start '>
						<div className='flex flex-col w-full h-auto rounded-lg items-start justify-start'>
							<AboutMeHeader />
							<div className='hidden md:flex w-[90%]'>
								<AboutMeHeroSection />
							</div>
							<div className='md:hidden flex w-[90%]'>
								<MobileAboutMeHeroSection />
							</div>
						</div>
						<MobileTechSkillsSection />

						<MobileSoftSkillsSection />
					</div>
				</div>

				<div className='flex flex-col justify-start items-center w-full h-auto lg:w-[55%] lg:h-[35vh] lg:mr-[15%] lg:mt-[10%]'>
					<div className='hidden md:flex '>
						<LinksComponent mobileScreen={false} />

						<TechSkillsSection />

						<SoftSkillsSection />
					</div>
				</div>
			</div>
		</div>
	);
}

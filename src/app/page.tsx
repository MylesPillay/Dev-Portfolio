"use client";
import LinksComponent from "./components/aboutme/LinksComponent";
import AboutMeHeroSection from "./components/aboutme/AboutMeHeroSection";
import AboutMeHeader from "./components/aboutme/AboutMeHeader";
import MobileAboutMeHeroSection from "./components/aboutme/MobileAboutMeHeroSection";
import MobileTechSkillsSection from "./components/aboutme/MobileSkillsSections";
import MobileSoftSkillsSection from "./components/aboutme/MobileSoftSkillsSection";

export default function Home() {
	return (
		<div className='bg-projects-gradient lg:h-screen h-screen w-full overflow-x-hidden lg:overflow-y-scroll  overflow-y-scroll  border-0 sm:border-l border-orangeflame '>
			<div className='flex flex-col justify-between w-full'>
				<AboutMeHeader />
				<div className='flex lg:flex-row flex-col lg:justify-between justify-evenly  '>
					<div className='flex flex-col  w-full justify-start align-middle items-start '>
						<div className='flex flex-col w-full h-auto rounded-lg items-start justify-start'>
							<div className='hidden md:flex w-[100%]'>
								<AboutMeHeroSection />
							</div>
							<div className='md:hidden flex w-[100%]'>
								<MobileAboutMeHeroSection />
							</div>
							{/* <div className='lg:hidden flex w-[100%]'>
								<MobileAboutMeHeroSection />
							</div> */}
							<div className=' sm:my-8 md:my-2 w-full'>
								<LinksComponent mobileScreen={false} />
							</div>
						</div>
						<MobileTechSkillsSection />

						<MobileSoftSkillsSection />
					</div>
				</div>

				{/* <TechSkillsSection />

						<SoftSkillsSection /> */}
			</div>
		</div>
	);
}

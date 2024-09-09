"use client";
import LinksComponent from "./components/aboutme/LinksComponent";
import AboutMeHeroSection from "./components/aboutme/AboutMeHeroSection";
import AboutMeHeader from "./components/aboutme/AboutMeHeader";
import MobileAboutMeHeroSection from "./components/aboutme/MobileAboutMeHeroSection";
import MobileTechSkillsSection from "./components/aboutme/MobileSkillsSections";
import MobileSoftSkillsSection from "./components/aboutme/MobileSoftSkillsSection";
import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
	process.env.SUPABASE_API_URL as string,
	process.env.SUPABASE_API_SECRET_ACCESS_TOKEN as string
);

export default function Home() {
	const [singularExpansion, setSingularExpansion] = useState("none");
	const [loading, setLoading] = useState<boolean>(false);
	const [image, setImage] = useState<string>("");
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchImage = async () => {
			try {
				setLoading(true);

				const image = await supabase.storage
					.from("portfolio_images")
					.getPublicUrl(`profile/profile.jpg`).data.publicUrl;
				if (image) {
					setImage(image);
					setLoading(false);
				}
			} catch (error) {
				setError("Failed to fetch image");
				console.error(error);
			} finally {
				setLoading(false);
			}
		};

		fetchImage();
	}, [image, loading, setLoading]);

	return (
		<div className='bg-projects-gradient lg:h-screen h-screen w-full overflow-x-hidden lg:overflow-y-scroll  overflow-y-scroll  border-0 sm:border-l border-orangeflame '>
			<div className='flex flex-col justify-between w-full'>
				<AboutMeHeader />
				<div className='flex lg:flex-row flex-col lg:justify-between justify-evenly  '>
					<div className='flex flex-col  w-full justify-start align-middle items-start '>
						<div className='flex flex-col w-full h-auto rounded-lg items-start justify-start'>
							<div className='hidden md:flex w-[100%]'>
								<AboutMeHeroSection
									image={image}
									loading={loading}
								/>
							</div>
							<div className='md:hidden flex w-[100%]'>
								<MobileAboutMeHeroSection
									image={image}
									loading={loading}
								/>
							</div>
							{/* <div className='lg:hidden flex w-[100%]'>
								<MobileAboutMeHeroSection />
							</div> */}
							<div className='hidden md:flex sm:my-8 md:my-2 w-full'>
								<LinksComponent mobileScreen={false} />
							</div>
						</div>
						<MobileTechSkillsSection
							singularExpansion={singularExpansion}
							setSingularExpansion={setSingularExpansion}
						/>

						<MobileSoftSkillsSection
							singularExpansion={singularExpansion}
							setSingularExpansion={setSingularExpansion}
						/>
					</div>
				</div>

				{/* <TechSkillsSection />

						<SoftSkillsSection /> */}
			</div>
		</div>
	);
}

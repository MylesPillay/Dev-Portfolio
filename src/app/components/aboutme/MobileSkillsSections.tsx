"use  client";
import { useState } from "react";

const MobileTechSkillsSection = () => {
	const [isHovered, setIsHovered] = useState(false);

	const techSkills = [
		"React Native",
		"TypeScript",
		"Firebase",
		"Cloud Firestore",
		"Xcode",
		"Android Studio",
		"Android SDKs",
		"Jest",
		"JavaScript",
		"Bluetooth Low Energy",
		"React Native Maps",
		"XState",
		"Zustand",
		"React Native Testing Library",
		"Next.js",
		"Next-Auth",
		"Supabase",
		"Supabase Client API",
		"PostgreSQL",
		"Tailwind CSS",
		"ChatGPT API",
		"React Hook Form",
		"REST APIs",
		"SQL",
		"Google Analytics",
		"SEO Optimization",
		"Responsive Design",
		"AI Integration",
		"HTML",
		"CSS",
		"XML Sitemaps",
		"HubSpot",
		"HubL",
		"HubDb",
		"Salesforce",
		"Expo",
		"Auth",
		"OAuth2.0",
		"Spotify API",
		"Spotify Auth",
		"SoundCloud API",
		"SoundCloud Auth",
		"Bandcamp API",
		"Bandcamp Auth",
		"Firebase-Auth",
		"Upstash",
		"Twilio",
		"SCSS"
	];

	return (
		<button
			className={`w-full  justify-between h-auto p-4 border-t border-b border-orangeflame overflow-hidden transition-all duration-300 ease-in-out ${
				isHovered
					? "pb-2 bg-deepBlueBg bg-opacity-100"
					: "bg-slate-800 bg-opacity-50"
			}`}
			onClick={() => setIsHovered(!isHovered)}>
			<h2 className='text-xl  mr-8 font-medium text-left  text-emerald-200 pb-2'>
				Tech Skills:
				{!isHovered && (
					<span className='text-emerald-600  ml-8 text-right font-light'>
						Tap to Expand ....
					</span>
				)}
			</h2>
			<div
				className={
					isHovered ? "flex flex-wrap text-left py-6" : "hidden"
				}>
				{techSkills.map((skill, index) => (
					<span
						key={index}
						className=' text-wrap  text-white text-md font-semibold mr-3 mb-2'>
						{skill}
						{index < techSkills.length - 1 ? "," : ""}
					</span>
				))}
			</div>
		</button>
	);
};

export default MobileTechSkillsSection;

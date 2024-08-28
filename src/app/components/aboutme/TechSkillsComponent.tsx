import { useState } from "react";

const TechSkillsSection = () => {
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
		<div
			className={` h-[100%] p-4 border-t border-b border-orangeflame overflow-hidden transition-all duration-300 ease-in-out ${
				isHovered
					? "h-auto -translate-y-[10vh] pb-[8vh] bg-deepBlueBg bg-opacity-100"
					: "bg-slate-800 bg-opacity-50"
			}`}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}>
			<h2 className='text-2xl font-semibold mr-8 text-emerald-200 pb-2'>
				Tech Skills:
				{!isHovered && (
					<span className='text-emerald-600 text-xl ml-2 inline-block'>
						...
					</span>
				)}
			</h2>
			<div className={isHovered ? "block" : "hidden"}>
				{techSkills.map((skill, index) => (
					<span
						key={index}
						className='inline-block text-white text-md font-semibold mr-3 mb-2'>
						{skill}
						{index < techSkills.length - 1 ? "," : ""}
					</span>
				))}
			</div>
		</div>
	);
};

export default TechSkillsSection;

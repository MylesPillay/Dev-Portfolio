"use client";
import { useState } from "react";

const MobileTechSkillsSection = ({
	singularExpansion,
	setSingularExpansion
}: {
	singularExpansion: string;
	setSingularExpansion: React.Dispatch<React.SetStateAction<string>>;
}) => {
	const [isHovered, setIsHovered] = useState(false);

	const techSkills = [
		"React",
		"React Native",
		"TypeScript",
		"Firebase",
		"Cloud Firestore",
		"Xcode",
		"Android Studio",
		"Jest",
		"JavaScript",
		"Bluetooth LE",
		"Bluetooth Classic",
		"RN Maps",
		"RN Hook Form",
		"XState",
		"Zustand",
		"ZOD",
		"Redux",
		"RN Testing Library",
		"PostgreSQL",
		"REST APIs",
		"Next.js",
		"Next-Auth",
		"Supabase",
		"Tailwind",
		"Google Analytics",
		"SEO Optimization",
		"Responsive Design",
		"AI Integration",
		"HubSpot",
		"HubL",
		"HubDb",
		"Salesforce",
		"Django",
		"Expo",
		"OAuth2.0",
		"Upstash",
		"Twilio"
	];

	return (
		<button
			className={`w-full  justify-between h-auto p-4 border-t border-b border-orangeflame overflow-hidden transition-all duration-300 ease-in-out ${
				isHovered
					? "pb-2 -translate-y-[8vh] bg-deepBlueBg bg-opacity-100"
					: "bg-slate-800 bg-opacity-50"
			}`}
			onMouseLeave={() => {
				setSingularExpansion("none");
				setIsHovered(false);
			}}
			onClick={() => {
				if (isHovered) {
					return (setSingularExpansion("none"), setIsHovered(false));
				}
				setSingularExpansion("tech");
				setIsHovered(true);
			}}>
			<h2 className='text-xl  mr-8 font-light text-left  text-emerald-200'>
				Tech Skills:
				{!isHovered && (
					<span className='text-emerald-600  ml-8 text-right font-light'>
						Tap to Expand ....
					</span>
				)}
			</h2>
			<div
				className={
					isHovered && singularExpansion === "tech"
						? "flex flex-wrap text-left py-4"
						: "hidden"
				}>
				{techSkills.map((skill, index) => (
					<span
						key={index}
						className=' text-wrap  text-white text-md font-thin mr-3 mb-2'>
						{skill}
						{index < techSkills.length - 1 ? "," : ""}
					</span>
				))}
			</div>
		</button>
	);
};

export default MobileTechSkillsSection;

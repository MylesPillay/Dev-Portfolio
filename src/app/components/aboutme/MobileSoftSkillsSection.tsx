"use client";
import { useState } from "react";

const MobileSoftSkillsSection = ({
	singularExpansion,
	setSingularExpansion
}: {
	singularExpansion: string;
	setSingularExpansion: React.Dispatch<React.SetStateAction<string>>;
}) => {
	const [isHovered, setIsHovered] = useState(false);

	const softSkills = [
		"Agile Development",
		"User Access & Permissions",
		"Image Optimization",
		"Navigation Routing",
		"CTAs and Lead Conversion",
		"Client Collaboration",
		"Figma"
	];

	return (
		<button
			className={`w-full justify-between text-left  h-auto p-4 border-t border-b border-orangeflame overflow-hidden my-2 transition-all duration-300 ease-in-out ${
				isHovered
					? " pb-2 -translate-y-[8vh] bg-deepBlueBg bg-opacity-100"
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
				setSingularExpansion("soft");
				setIsHovered(true);
			}}>
			<h2 className='text-xl  mr-8 text-emerald-200 font-light'>
				Soft Skills:
				{!isHovered && (
					<span className='font-light text-emerald-600 ml-10  '>
						Tap to Expand ....
					</span>
				)}
			</h2>
			<div
				className={
					isHovered && singularExpansion === "soft"
						? "flex flex-wrap text-left py-4"
						: "hidden"
				}>
				{softSkills.map((skill, index) => (
					<span
						key={index}
						className=' text-wrap  text-white text-md font-thin mr-3 mb-2'>
						{skill}
						{index < softSkills.length - 1 ? "," : ""}
					</span>
				))}
			</div>
		</button>
	);
};

export default MobileSoftSkillsSection;

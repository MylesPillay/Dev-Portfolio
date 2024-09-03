"use client";
import { useState } from "react";

const MobileSoftSkillsSection = () => {
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
			className={`w-full justify-between text-left  h-[100%] p-4 border-t border-b border-orangeflame overflow-hidden my-8 transition-all duration-300 ease-in-out ${
				isHovered
					? "h-auto pb-4  bg-deepBlueBg bg-opacity-100"
					: "bg-slate-800 bg-opacity-50"
			}`}
			onClick={() => setIsHovered(!isHovered)}>
			<h2 className='text-2xl font-semibold mr-8 text-emerald-200 pb-2'>
				Soft Skills:
				{!isHovered && (
					<span className='text-emerald-600 text-xl ml-10 '>
						Tap to Expand ....
					</span>
				)}
			</h2>
			<div
				className={
					isHovered ? "flex flex-wrap text-left py-6" : "hidden"
				}>
				{softSkills.map((skill, index) => (
					<span
						key={index}
						className=' text-wrap  text-white text-md font-semibold mr-3 mb-2'>
						{skill}
						{index < softSkills.length - 1 ? "," : ""}
					</span>
				))}
			</div>
		</button>
	);
};

export default MobileSoftSkillsSection;

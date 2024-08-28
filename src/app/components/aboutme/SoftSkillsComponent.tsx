import { useState } from "react";

const SoftSkillsSection = () => {
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
		<div
			className={` h-[100%] p-4 border-t border-b border-orangeflame overflow-hidden transition-all duration-300 ease-in-out ${
				isHovered
					? "h-auto -translate-y-[10vh] pb-[8vh] bg-deepBlueBg bg-opacity-100"
					: "bg-slate-800 bg-opacity-50"
			}`}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}>
			<h2 className='text-2xl font-semibold mr-8 text-emerald-200 pb-2'>
				Soft Skills:
				{!isHovered && (
					<span className='text-emerald-600 text-xl ml-2 inline-block'>
						...
					</span>
				)}
			</h2>
			<div className={isHovered ? "block" : "hidden"}>
				{softSkills.map((skill, index) => (
					<span
						key={index}
						className='inline-block text-white text-lg font-semibold mr-3 mb-2'>
						{skill}
						{index < softSkills.length - 1 ? "," : ""}
					</span>
				))}
			</div>
		</div>
	);
};

export default SoftSkillsSection;

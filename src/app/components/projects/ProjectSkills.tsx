import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
interface ProjectDetailsProps {
	selectedProject: {
		skills: string[];
	};
}

const ProjectSkills: React.FC<ProjectDetailsProps> = ({ selectedProject }) => {
	const [isHovered, setIsHovered] = useState(false);

	const [showHoverPrompt, setShowHoverPrompt] = useState<boolean | null>(
		null
	);

	useEffect(() => {
		if (!isHovered && showHoverPrompt === null) {
			const timer = setTimeout(() => {
				setShowHoverPrompt(true);
			}, 5000);
			return () => clearTimeout(timer);
		}
		if (isHovered) {
			setShowHoverPrompt(false);
		}
	}, [isHovered, showHoverPrompt]);

	const containerVariants = {
		initial: { width: "100%", transition: { duration: 0.25 } },
		hovered: { width: "65vw", transition: { duration: 0.25 } }
	};

	return (
		<motion.div
			className='flex flex-row space-between relative  overflow-hidden'
			initial='initial'
			animate={isHovered ? "hovered" : "initial"}
			variants={containerVariants}>
			<div
				className={`flex flex-col w-full h-[20vh] z-20 pl-8  justify-start pr-2 py-[2vh] rounded-r-lg border-black border-opacity-50 border-l-0 border-r-2 border-b-2 border-t-2 $
				`}
				style={{
					backgroundColor: isHovered ? "#071E22" : "#071E2299",
					borderColor: "#1D7874"
				}}
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}>
				<h2 className='text-lg text-left font-bold mb-3 text-white'>
					Skills / CodeStack
				</h2>

				<ul
					className={`flex flex-wrap text-left justify-start text-md font-medium`}>
					{selectedProject.skills.map((skill, index) => (
						<li
							key={index}
							className={`mb-3 mr-4 text-emerald-200 text-justify`}>
							{skill} {index <= 2 && !isHovered ? " ..." : ""}
						</li>
					))}
				</ul>
			</div>
		</motion.div>
	);
};
export default ProjectSkills;

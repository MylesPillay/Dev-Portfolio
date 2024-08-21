import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
interface ProjectDetailsProps {
	selectedProject: {
		skills: string[];
	};
}

const ProjectSkillsComponent: React.FC<ProjectDetailsProps> = ({
	selectedProject
}) => {
	const [isHovered, setIsHovered] = useState(false);

	const [showHoverPrompt, setShowHoverPrompt] = useState<boolean | null>(
		null
	);

	useEffect(() => {
		if (!isHovered && showHoverPrompt === null) {
			const timer = setTimeout(() => {
				setShowHoverPrompt(true);
			}, 800);
			return () => clearTimeout(timer);
		}
		if (isHovered) {
			setShowHoverPrompt(false);
		}
	}, [isHovered, showHoverPrompt]);

	return (
		<div className='flex flex-row space-between relative'>
			<div
				className={`flex flex-col w-full h-[20vh] z-20 pl-8 justify-center pr-2  py-[3vh] rounded-r-lg border-black border-opacity-50 border-l-0 border-r-2 border-b-2 border-t-2   ${
					isHovered
						? "hover-expand min-w-[65vw] z-30"
						: showHoverPrompt
						? "pr-3"
						: ""
				}`}
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
					className={`flex flex-wrap  text-left  justify-start text-md font-medium`}>
					{selectedProject.skills.map((skill, index) => (
						<li
							key={index}
							className={`mb-2 mr-4  text-emerald-200 ${
								!isHovered && index >= 2
									? "hidden"
									: " text-justify"
							}`}>
							{skill} {index <= 2 && !isHovered ? " ..." : ""}
						</li>
					))}
				</ul>
			</div>
			{showHoverPrompt ? (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						duration: 1,
						delay: 1
					}}
					className={`right-0 w-[1px] z-1 justify-center align-start h-[20vh] bg-none items-center -ml-1 -mt-3 shadow-neon-right `}
					style={{
						border: "none",
						backgroundColor: "none"
					}}
				/>
			) : (
				<></>
			)}
		</div>
	);
};

export default ProjectSkillsComponent;

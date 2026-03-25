import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface ProjectDetailsProps {
	selectedProject: {
		skills: string[];
	};
	activeSection: string;
	isImageHovered: boolean;
}

const ProjectSkillsComponent: React.FC<ProjectDetailsProps> = ({
	selectedProject,
	activeSection,
	isImageHovered
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
		<div className='md:flex hidden flex-row space-between justify-end align-bottom item '>
			<div
				className={`flex flex-col w-full h-auto z-20 pl-8 justify-center pr-2 py-[3vh] rounded-r-lg border-black border-opacity-50   ${
					isHovered ||
					(!isImageHovered &&
						!isHovered &&
						activeSection == "Overview") ||
					(!isHovered && activeSection == "Objectives")
						? "hover-expand min-w-[65vw] z-30  "
						: showHoverPrompt
						? "pr-3"
						: ""
				}

					`}
				style={{
					backgroundColor: "#070e2d",
					borderColor: "#FF7D11",
					borderWidth: 1,
					borderLeft: "none"
				}}
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}>
				<h2 className='text-md text-left font-medium mb-3 text-white'>
					Skills / CodeStack
				</h2>

				<ul
					className={`flex flex-wrap  text-left  justify-start md:text-md text-md font-light`}>
					{(!isImageHovered &&
						!isHovered &&
						activeSection == "Overview") ||
					(!isHovered && activeSection == "Objectives") ||
					isHovered
						? selectedProject.skills.map((skill, index) => (
								<li
									key={index}
									className={`mb-2 mr-4  text-emerald-200 text-justify`}>
									{skill}
								</li>
						  ))
						: selectedProject.skills
								.slice(0, 2)
								.map((skill, index) => (
									<li
										key={index}
										className={`mb-2 mr-4  text-emerald-200
									 text-justify
							`}>
										{skill} {" ..."}
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
					className={`right-0 w-[1px] z-1 justify-center align-start h-[19vh] bg-none items-center -ml-1.5 -mt-4 shadow-neon-right `}
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

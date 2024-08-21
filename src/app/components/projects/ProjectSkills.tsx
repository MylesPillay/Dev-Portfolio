import React, { useState } from "react";

interface ProjectDetailsProps {
	selectedProject: {
		skills: string[];
	};
}

const ProjectSkillsComponent: React.FC<ProjectDetailsProps> = ({
	selectedProject
}) => {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<div
			className={`flex flex-col w-full h-[20vh] pl-8 justify-center align-middle pr-2 py-4 rounded-r-lg border-black border-opacity-50 border-l-0 border-r-2 border-b-2 border-t-2 bg-black bg-opacity-40 ${
				isHovered ? "hover-expand z-10" : ""
			}`}
			style={{
				backgroundColor: isHovered ? "#071E22" : "",
				borderBlockColor: isHovered ? "#1D7874" : "",
				width: isHovered
					? `${selectedProject.skills.length * 8}rem`
					: "auto"
			}}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}>
			<h2 className='text-lg text-left font-bold mb-2 text-white'>
				Skills / CodeStack
			</h2>

			<ul
				className={`flex flex-wrap space-x-4 items-center justify-start text-md font-medium  ${
					isHovered ? "" : " overflow-hidden"
				}`}>
				{selectedProject.skills.map((skill, index) => (
					<li
						key={index}
						className={`mb-2 text-left text-emerald-200 ${
							!isHovered && index >= 4 ? "hidden" : ""
						}`}>
						{skill}
					</li>
				))}
			</ul>
		</div>
	);
};

export default ProjectSkillsComponent;

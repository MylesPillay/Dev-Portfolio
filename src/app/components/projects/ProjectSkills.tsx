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
			className={`flex flex-col w-full h-[20vh]  pl-8 justify-center pr-2  py-[3vh] rounded-r-lg border-black border-opacity-50 border-l-0 border-r-2 border-b-2 border-t-2 bg-black bg-opacity-40  ${
				isHovered ? "hover-expand w-auto z-10 min-w-[65vw] " : ""
			}`}
			style={{
				backgroundColor: isHovered ? "#071E22" : "",
				borderColor: "#1D7874"
			}}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}>
			<h2 className='text-lg text-left font-bold mb-3 text-white'>
				Skills / CodeStack
			</h2>

			<ul
				className={`flex flex-wrap  text-left  justify-start text-md font-medium  ${
					isHovered ? "" : " overflow-hidden"
				}`}>
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
	);
};

export default ProjectSkillsComponent;

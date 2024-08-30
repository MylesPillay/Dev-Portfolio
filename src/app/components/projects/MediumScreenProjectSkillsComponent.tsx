import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
interface ProjectDetailsProps {
	selectedProject: {
		skills: string[];
	};
}

const MediumScreenProjectSkillsComponent: React.FC<ProjectDetailsProps> = ({
	selectedProject
}) => {
	return (
		<div
			className={`flex flex-col w-full px-[5%]  h-auto max-w-[88%] justify-start pr-2  py-[3vh] rounded-r-lg

    `}
			style={{
				borderLeft: "none"
			}}>
			<h2 className='lg:text-lg text-md text-left font-bold mb-3 text-orangeflame'>
				Skills / CodeStack
			</h2>

			<ul
				className={`flex flex-wrap  text-left  justify-start  text-md font-medium`}>
				{selectedProject.skills.map((skill, index) => (
					<li
						key={index}
						className={`mb-2 mr-4  text-white text-justify

      `}>
						{skill}
					</li>
				))}
			</ul>
		</div>
	);
};

export default MediumScreenProjectSkillsComponent;

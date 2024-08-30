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
			className={`flex flex-col w-full px-[5%]   h-auto md:max-w-[88%] max-w-[100%] justify-start pr-2  py-[3vh] rounded-r-lg

    `}
			style={{
				borderLeft: "none"
			}}>
			<h2 className='lg:text-lg text-md text- font-bold mb-3 text-orangeflame'>
				Skills / CodeStack
			</h2>

			<ul className={` flex flex-wrap text-center  text-md font-medium`}>
				{selectedProject.skills.map((skill, index) => (
					<li
						key={index}
						className={`mb-2 mr-4  text-white

      `}>
						{skill}
					</li>
				))}
			</ul>
		</div>
	);
};

export default MediumScreenProjectSkillsComponent;

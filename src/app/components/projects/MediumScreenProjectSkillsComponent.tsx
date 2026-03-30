import React from 'react';
interface ProjectDetailsProps {
  selectedProject: {
    skills: string[];
  };
}

const MediumScreenProjectSkillsComponent: React.FC<ProjectDetailsProps> = ({
  selectedProject,
}) => {
  return (
    <div
      className={`flex h-auto w-full max-w-[100%] flex-col justify-start rounded-r-lg px-[5%] py-[3vh] pr-2 md:max-w-[88%]`}
      style={{
        borderLeft: 'none',
      }}
    >
      <h2 className="mb-3 text-lg font-medium text-orangeflame md:text-xl">
        Skills / CodeStack
      </h2>

      <ul className={`text-md flex flex-wrap text-center font-thin`}>
        {selectedProject.skills.map((skill, index) => (
          <li key={index} className={`mb-2 mr-4 text-white`}>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MediumScreenProjectSkillsComponent;

'use client';
import { useState } from 'react';

const SoftSkillsSection = ({
  singularExpansion,
  setSingularExpansion,
}: {
  singularExpansion: string;
  setSingularExpansion: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const softSkills = [
    'Agile Development',
    'User Access & Permissions',
    'Image Optimization',
    'Navigation Routing',
    'CTAs and Lead Conversion',
    'Client Collaboration',
    'Figma',
  ];

  return (
    <button
      className={`my-2 h-auto w-full justify-between overflow-hidden border-b border-t border-orangeflame p-4 text-left transition-all duration-300 ease-in-out ${
        isHovered
          ? '-translate-y-[8vh] bg-deepBlueBg bg-opacity-100 pb-2'
          : 'bg-slate-800 bg-opacity-50'
      }`}
      onMouseLeave={() => {
        setSingularExpansion('none');
        setIsHovered(false);
      }}
      onClick={() => {
        if (isHovered) {
          return (setSingularExpansion('none'), setIsHovered(false));
        }
        setSingularExpansion('soft');
        setIsHovered(true);
      }}
    >
      <h2 className="mr-8 text-xl font-light text-emerald-200">
        Soft Skills:
        {!isHovered && (
          <span className="ml-10 font-light text-emerald-600">
            Tap to Expand ....
          </span>
        )}
      </h2>
      <div
        className={
          isHovered && singularExpansion === 'soft'
            ? 'flex flex-wrap py-4 text-left'
            : 'hidden'
        }
      >
        {softSkills.map((skill, index) => (
          <span
            key={index}
            className="text-md mb-2 mr-3 text-wrap font-thin text-white"
          >
            {skill}
            {index < softSkills.length - 1 ? ',' : ''}
          </span>
        ))}
      </div>
    </button>
  );
};

export default SoftSkillsSection;

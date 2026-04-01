'use client';
import { useState } from 'react';
import { handleClickSkillsContainer, handleCloseSkillsContainer } from './helpers/helpers';

interface SkillsSectionProps {
  title: string;
  sectionKey: string;
  skills: string[];
  singularExpansion: string;
  setSingularExpansion: React.Dispatch<React.SetStateAction<string>>;
  className?: string;
}

const SkillsSection = ({
  title,
  sectionKey,
  skills,
  singularExpansion,
  setSingularExpansion,
  className = '',
}: SkillsSectionProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      className={`h-auto w-full justify-between overflow-hidden border-b border-t border-orangeflame p-4 text-left transition-all duration-300 ease-in-out ${
        isHovered
          ? '-translate-y-[8vh] bg-deepBlueBg bg-opacity-100 pb-2'
          : 'bg-slate-800 bg-opacity-50'
      } ${className}`}
      onMouseLeave={() => handleCloseSkillsContainer({ setSingularExpansion, setIsHovered })}
      onClick={() =>
        handleClickSkillsContainer({ setSingularExpansion, setIsHovered, isHovered, section: sectionKey })
      }
    >
      <h2 className="mr-8 text-left text-xl font-light text-emerald-200">
        {title}
        {!isHovered && (
          <span className="ml-8 font-light text-emerald-600">
            Tap to Expand ....
          </span>
        )}
      </h2>
      <div
        className={
          isHovered && singularExpansion === sectionKey
            ? 'flex flex-wrap py-4 text-left'
            : 'hidden'
        }
      >
        {skills.map((skill, index) => (
          <span key={index} className="text-md mb-2 mr-3 text-wrap font-thin text-white">
            {skill}
            {index < skills.length - 1 ? ',' : ''}
          </span>
        ))}
      </div>
    </button>
  );
};

export default SkillsSection;

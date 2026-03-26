'use client';
import { useState } from 'react';

const TechSkillsSection = ({
  singularExpansion,
  setSingularExpansion,
}: {
  singularExpansion: string;
  setSingularExpansion: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const techSkills = [
    'React',
    'React Native',
    'TypeScript',
    'Firebase',
    'Cloud Firestore',
    'Xcode',
    'Android Studio',
    'Jest',
    'JavaScript',
    'Bluetooth LE',
    'Bluetooth Classic',
    'RN Maps',
    'RN Hook Form',
    'XState',
    'Zustand',
    'ZOD',
    'Redux',
    'RN Testing Library',
    'PostgreSQL',
    'REST APIs',
    'Next.js',
    'Next-Auth',
    'Supabase',
    'Tailwind',
    'Google Analytics',
    'SEO Optimization',
    'Responsive Design',
    'AI Integration',
    'HubSpot',
    'HubL',
    'HubDb',
    'Salesforce',
    'Django',
    'Expo',
    'OAuth2.0',
    'Upstash',
    'Twilio',
  ];

  return (
    <button
      className={`h-auto w-full justify-between overflow-hidden border-b border-t border-orangeflame p-4 transition-all duration-300 ease-in-out ${
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
        setSingularExpansion('tech');
        setIsHovered(true);
      }}
    >
      <h2 className="mr-8 text-left text-xl font-light text-emerald-200">
        Tech Skills:
        {!isHovered && (
          <span className="ml-8 text-right font-light text-emerald-600">
            Tap to Expand ....
          </span>
        )}
      </h2>
      <div
        className={
          isHovered && singularExpansion === 'tech'
            ? 'flex flex-wrap py-4 text-left'
            : 'hidden'
        }
      >
        {techSkills.map((skill, index) => (
          <span
            key={index}
            className="text-md mb-2 mr-3 text-wrap font-thin text-white"
          >
            {skill}
            {index < techSkills.length - 1 ? ',' : ''}
          </span>
        ))}
      </div>
    </button>
  );
};

export default TechSkillsSection;

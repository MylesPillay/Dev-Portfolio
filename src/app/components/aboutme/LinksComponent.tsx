import { FaEnvelope, FaGithub, FaLinkedin, FaSpotify } from 'react-icons/fa';
import { PERSONAL_LINKS } from '@/constants';

interface IconLinkProps {
  href: string;
  icon: React.ReactElement;
  label: string;
  mobileScreen: boolean;
}

const IconLink: React.FC<IconLinkProps> = ({
  href,
  icon,
  label,
  mobileScreen,
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center space-x-2 text-emerald-200 transition-colors duration-200 hover:text-opacity-50"
  >
    {icon}
    <span
      className={`pt-2 align-text-bottom font-light text-white ${
        mobileScreen ? 'text-md' : 'text-lg'
      }`}
    >
      {label}
    </span>
  </a>
);

const LinksComponent: React.FC<{ mobileScreen: boolean }> = ({
  mobileScreen,
}) => {
  const iconSize = mobileScreen ? 28 : 30;

  return (
    <div className="h-auto w-full border-b border-t border-orangeflame bg-slate-800 bg-opacity-50 sm:py-4 md:py-0">
      <div className="flex w-full flex-row items-start justify-between space-x-2 px-6 sm:items-center sm:px-4 lg:justify-start">
        <div className="h-full w-auto pt-7 align-baseline text-xl font-medium text-orangeflame sm:pt-0 md:mr-12 lg:mb-0">
          Links:
        </div>
        <div className="flex flex-grow snap-always flex-wrap justify-evenly gap-4 py-6 pr-6 align-baseline md:pr-10 lg:flex-1 lg:gap-8 lg:py-4 lg:pr-20">
          <IconLink
            href={PERSONAL_LINKS.linkedin}
            icon={<FaLinkedin size={iconSize} />}
            label="LinkedIn"
            mobileScreen={mobileScreen}
          />
          <IconLink
            href={PERSONAL_LINKS.email}
            icon={<FaEnvelope size={iconSize} />}
            label="Email"
            mobileScreen={mobileScreen}
          />
          <IconLink
            href={PERSONAL_LINKS.spotify}
            icon={<FaSpotify size={iconSize} />}
            label="Spotify"
            mobileScreen={mobileScreen}
          />
          <IconLink
            href={PERSONAL_LINKS.github}
            icon={<FaGithub size={iconSize} />}
            label="GitHub"
            mobileScreen={mobileScreen}
          />
        </div>
      </div>
    </div>
  );
};

export default LinksComponent;

import {
	FaAppStoreIos,
	FaEnvelope,
	FaGithub,
	FaLinkedin,
	FaSpotify
} from "react-icons/fa";

interface IconLinkProps {
	href: string;
	icon: JSX.Element;
	label: string;
	mobileScreen: boolean;
}

const IconLink: React.FC<IconLinkProps> = ({
	href,
	icon,
	label,
	mobileScreen
}) => (
	<a
		href={href}
		target='_blank'
		rel='noopener noreferrer'
		className='flex items-center space-x-2 text-emerald-200  hover:text-opacity-50 transition-colors duration-200 '>
		{icon}
		<span
			className={`align-text-bottom pt-2 text-white font-light ${
				mobileScreen ? "text-md" : "text-lg"
			}`}>
			{label}
		</span>
	</a>
);

const LinksComponent: React.FC<{ mobileScreen: boolean }> = ({
	mobileScreen
}) => {
	const iconSize = mobileScreen ? 28 : 30;

	return (
		<div className='bg-slate-800 bg-opacity-50 h-auto sm:py-4 md:py-0 border-t border-b border-orangeflame w-full'>
			<div className='flex flex-row w-full space-x-2 justify-between   items-start sm:items-center lg:justify-start px-6 sm:px-4'>
				<div className='text-xl font-medium  text-orangeflame align-baseline h-full w-auto pt-7 sm:pt-0 lg:mb-0 md:mr-12'>
					Links:
				</div>
				<div className='flex lg:flex-1 flex-wrap justify-evenly flex-grow   pr-6 md:pr-10 lg:pr-20 py-6 lg:py-4 gap-4 lg:gap-8  snap-always align-baseline  '>
					<IconLink
						href='https://linkedin.com/in/myles-pillay-361868123'
						icon={<FaLinkedin size={iconSize} />}
						label='LinkedIn'
						mobileScreen={mobileScreen}
					/>
					<IconLink
						href='mailto:mpillaydev@gmail.com'
						icon={<FaEnvelope size={iconSize} />}
						label='Email'
						mobileScreen={mobileScreen}
					/>
					<IconLink
						href='https://open.spotify.com/artist/2R49hNeoiCEqa3obgMLV5E?si=GcrDwpr4TAuLOYEizmxtSw'
						icon={<FaSpotify size={iconSize} />}
						label='Spotify'
						mobileScreen={mobileScreen}
					/>
					<IconLink
						href='https://github.com/MylesPillay'
						icon={<FaGithub size={iconSize} />}
						label='GitHub'
						mobileScreen={mobileScreen}
					/>
					{/* <IconLink
						href='https://apps.apple.com/us/app/vibeaday/id1607743282'
						icon={<FaAppStoreIos size={iconSize} />}
						label='VibeADay'
						mobileScreen={mobileScreen}
					/> */}
				</div>
			</div>
		</div>
	);
};

export default LinksComponent;

// import {
// 	FaAppStore,
// 	FaAppStoreIos,
// 	FaEnvelope,
// 	FaGithub,
// 	FaLinkedin,
// 	FaSpotify
// } from "react-icons/fa";

// const LinksComponent = ({ mobileScreen }: { mobileScreen: boolean }) => {
// 	return (
// 		<div className='bg-slate-800 bg-opacity-50  h-[100%] p-4 border-t border-b border-orangeflame  w-[110vw]'>
// 			<div className='flex flex-row w-[90%] space-x-2 px-4 pl-[15%] items-center'>
// 				<h2 className='text-2xl font-semibold mr-4 text-emerald-200'>
// 					Links:
// 				</h2>
// 				<div className='flex flex-col space-y-2 '>
// 					<div className='flex flex-row w-[80%] space-x-4 justify-evenly align-middle items-center'>
// 						<a
// 							href='https://linkedin.com/in/myles-pillay-361868123'
// 							target='_blank'
// 							rel='noopener noreferrer'
// 							className='flex items-center space-x-2 ml-4 text-white hover:text-orangeflame transition-colors duration-200'>
// 							<FaLinkedin size={mobileScreen ? 28 : 30} />
// 							<span>LinkedIn</span>
// 						</a>
// 						<a
// 							href='mailto:myles.pillay@gmail.com'
// 							className='flex items-center space-x-2 ml-4 text-white hover:text-orangeflame transition-colors duration-200'>
// 							<FaEnvelope size={mobileScreen ? 28 : 30} />

// 							<span>Email</span>
// 						</a>
// 						<a
// 							href='https://open.spotify.com/user/YOUR_SPOTIFY_USERNAME'
// 							target='_blank'
// 							rel='noopener noreferrer'
// 							className='flex items-center space-x-2 ml-4 text-white hover:text-orangeflame transition-colors duration-200'>
// 							<FaSpotify size={mobileScreen ? 28 : 30} />

// 							<span>Spotify</span>
// 						</a>
// 					</div>
// 					<div className='flex flex-row w-[100%]  justify-evenly align-middle items-center'>
// 						<a
// 							href='https://github.com/YOUR_GITHUB_USERNAME'
// 							target='_blank'
// 							rel='noopener noreferrer'
// 							className='flex items-center space-x-2 ml-4 text-white hover:text-orangeflame transition-colors duration-200'>
// 							<FaGithub size={mobileScreen ? 28 : 30} />

// 							<span>GitHub</span>
// 						</a>
// 						<a
// 							href='https://apps.apple.com/us/app/vibeaday/id1607743282'
// 							target='_blank'
// 							rel='noopener noreferrer'
// 							className='flex items-center space-x-2 ml-4 text-white hover:text-orangeflame transition-colors duration-200'>
// 							<FaAppStoreIos size={mobileScreen ? 28 : 30} />

// 							<span>VibeADay</span>
// 						</a>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };
// export default LinksComponent;
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
			className={`align-text-bottom pt-2 text-white ${
				mobileScreen ? "text-lg" : "text-xl"
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
		<div className='bg-slate-800 bg-opacity-50 h-[100%] py-4 md:py-0 border-t border-b border-orangeflame w-full'>
			<div className='flex flex-row w-full space-x-2 justify-around  items-center lg:justify-start px-6 lg:px-4'>
				<h2 className='text-2xl font-semibold  text-orangeflame align-baseline h-full lg:mb-0 lg:mr-20'>
					Links:
				</h2>
				<div className='flex flex-wrap justify-center  py-6 lg:py-4 gap-4 lg:gap-8  snap-always align-baseline  '>
					<IconLink
						href='https://linkedin.com/in/myles-pillay-361868123'
						icon={<FaLinkedin size={iconSize} />}
						label='LinkedIn'
						mobileScreen={mobileScreen}
					/>
					<IconLink
						href='mailto:myles.pillay@gmail.com'
						icon={<FaEnvelope size={iconSize} />}
						label='Email'
						mobileScreen={mobileScreen}
					/>
					<IconLink
						href='https://open.spotify.com/user/YOUR_SPOTIFY_USERNAME'
						icon={<FaSpotify size={iconSize} />}
						label='Spotify'
						mobileScreen={mobileScreen}
					/>
					<IconLink
						href='https://github.com/YOUR_GITHUB_USERNAME'
						icon={<FaGithub size={iconSize} />}
						label='GitHub'
						mobileScreen={mobileScreen}
					/>
					<IconLink
						href='https://apps.apple.com/us/app/vibeaday/id1607743282'
						icon={<FaAppStoreIos size={iconSize} />}
						label='VibeADay'
						mobileScreen={mobileScreen}
					/>
				</div>
			</div>
		</div>
	);
};

export default LinksComponent;

import {
	FaAppStore,
	FaAppStoreIos,
	FaEnvelope,
	FaGithub,
	FaLinkedin,
	FaSpotify
} from "react-icons/fa";

const LinksComponent = ({ mobileScreen }: { mobileScreen: boolean }) => {
	return (
		<div className='bg-slate-800 bg-opacity-50  h-[100%] p-4 border-t border-b border-orangeflame  w-[110vw]'>
			<div className='flex flex-row w-[90%] space-x-2 px-4 pl-[15%] items-center'>
				<h2 className='text-2xl font-semibold mr-4 text-emerald-200'>
					Links:
				</h2>
				<div className='flex flex-col space-y-2 '>
					<div className='flex flex-row w-[80%] space-x-4 justify-evenly align-middle items-center'>
						<a
							href='https://linkedin.com/in/myles-pillay-361868123'
							target='_blank'
							rel='noopener noreferrer'
							className='flex items-center space-x-2 ml-4 text-white hover:text-orangeflame transition-colors duration-200'>
							<FaLinkedin size={mobileScreen ? 28 : 30} />
							<span>LinkedIn</span>
						</a>
						<a
							href='mailto:myles.pillay@gmail.com'
							className='flex items-center space-x-2 ml-4 text-white hover:text-orangeflame transition-colors duration-200'>
							<FaEnvelope size={mobileScreen ? 28 : 30} />

							<span>Email</span>
						</a>
						<a
							href='https://open.spotify.com/user/YOUR_SPOTIFY_USERNAME'
							target='_blank'
							rel='noopener noreferrer'
							className='flex items-center space-x-2 ml-4 text-white hover:text-orangeflame transition-colors duration-200'>
							<FaSpotify size={mobileScreen ? 28 : 30} />

							<span>Spotify</span>
						</a>
					</div>
					<div className='flex flex-row w-[100%]  justify-evenly align-middle items-center'>
						<a
							href='https://github.com/YOUR_GITHUB_USERNAME'
							target='_blank'
							rel='noopener noreferrer'
							className='flex items-center space-x-2 ml-4 text-white hover:text-orangeflame transition-colors duration-200'>
							<FaGithub size={mobileScreen ? 28 : 30} />

							<span>GitHub</span>
						</a>
						<a
							href='https://apps.apple.com/us/app/vibeaday/id1607743282'
							target='_blank'
							rel='noopener noreferrer'
							className='flex items-center space-x-2 ml-4 text-white hover:text-orangeflame transition-colors duration-200'>
							<FaAppStoreIos size={mobileScreen ? 28 : 30} />

							<span>VibeADay</span>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};
export default LinksComponent;

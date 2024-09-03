import Image from "next/image";
import Link from "next/link";
import AnimatedText from "./AnimatedTexts";

const AboutMeHeroSection = () => {
	return (
		<div className='flex w-full h-full justify-center p-10'>
			<div className='flex w-auto align-middle  justify-center items-center self-center h-auto '>
				<div
					className={`
								flex bg-green-200 justify-center rounded-lg h-auto max-h-[550px] flex-grow-0  w-[65%] mb-2 overflow-y-hidden`}>
					<div className={`h-full rounded-lg`}>
						<Image
							src={"/images/profile.jpg"}
							className='rounded-lg'
							alt={`Project screenshot `}
							objectFit=''
							width={500}
							height={1000}
							style={{ maxHeight: 800, borderRadius: 10 }}
							quality={100}
						/>
					</div>
				</div>
			</div>

			<div className='flex sm:flex-grow md:hidden justify-start w-full text-left max-w-[90vw] ml-[8vw] '>
				<h1 className='text-4xl font-bold  text-white'>MYLES PILLAY</h1>
			</div>

			{/* <div className='flex flex-col justify-center= items-center w-full h-auto lg:w-[55%] lg:h-[35vh] lg:mr-[15%] lg:mt-[10%]'>
				<div className='lg:h-[100%] h-auto p-8 w-full min-w-[100%]'> */}
			<div className='flex w-auto flex-1 h-full lg:max-w-[50%]justify-center items-center py-8 px-4'>
				<div
					className={`
					 justify-center `}>
					{/* <div className={`h-full`}></div> */}
					<div className='flex lg:flex-row flex-col flex-wrap w-full min-w-[105%] mr-8 align-middle items-center justify-center space-x-2 '>
						<AnimatedText
							texts={["Full Stack", "React Native"]}
							interval={2500}
							animationDuration={200}
							baseClassName='md:text-3xl lg:text-4xl xl:text-5xl text-2xl font-semibold w-full w-full min-w-[100%] flex-grow text-center lg:text-right '
							containerClassName='h-auto  mr-1 w-auto lg:text-right  pr-2'
							colourFlip
						/>

						<h3 className='md:text-3xl lg:text-5xl text-3xl text-wrap flex-1 text-left font-medium text-white '>
							Developer
						</h3>
					</div>
					<div className='flex flex-row flex-grow flex-wrap w-full min-w-[100%] mx-auto align-middle items-center justify-center  mx-auto my-8'>
						<AnimatedText
							texts={[
								"Versatile",
								"Dedicated",
								"Creative  ",
								"Passionate",
								"Ambitious",
								"Adaptable"
							]}
							interval={2500}
							animationDuration={200}
							baseClassName='md:text-2xl lg:text-3xl text-xl font-semibold '
							containerClassName='h-auto  align-top items-start  mr-1 w-auto max-w-[11rem] '
							textContent='dev with 2+ years experience creating scalable high-impact applications.'
						/>
					</div>

					<h3 className='md:text-xl lg:text-2xl text-lg text-wrap flex-1 text-center font-medium text-white '>
						Whether a sophisticated
						<span className='text-emerald-200 font-semibold'>
							{" "}
							web platform{" "}
						</span>
						or cutting-edge{" "}
						<span className='text-orangeflame font-semibold'>
							{" "}
							mobile app
						</span>
						, I love bringing exciting ideas to life.
					</h3>
					<div className='flex flex-row justify-end items-center w-full h-auto '>
						<Link
							className='justify-center items-center self-center w-auto mx-auto p-2 px-8  mt-[7vh] rounded-lg  bg-orangeflame  text-white border border-white lg:text-lg text-md font-bold  hover:bg-opacity-80'
							href={"/projects"}>
							LEARN MORE
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutMeHeroSection;

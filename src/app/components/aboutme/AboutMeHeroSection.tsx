import Image from "next/image";
import Link from "next/link";

const AboutMeHeroSection = () => {
	return (
		<div className='bg-red-400 flex w-full h-full justify-around px-10'>
			<div className='flex w-[100%] rounded-lg align-middle bg-yellow-200 justify-center items-center self-center h-full '>
				<div
					className={`
									flex flex-grow justify-center bg-pink-200 rounded-lg h-[80%] w-auto overflow-x-scroll overflow-y-hidden`}>
					<div
						className={`h-auto pr-3 rounded-lg
					transition-transform duration-300`}>
						<Image
							src={"/images/profile.jpg"}
							className='rounded-lg'
							alt={`Project screenshot `}
							layout='responsive'
							objectFit='cover'
							width={400}
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

			<div className='flex flex-col justify-center bg-green-200 items-center w-full h-auto lg:w-[55%] lg:h-[35vh] lg:mr-[15%] lg:mt-[10%]'>
				<div className='lg:h-[100%] h-auto px-2 py-4'>
					<div className='flex flex-row flex-wrap w-auto  align-middle items-center justify-center '>
						<h3 className='md:text-2xl text-lg lg:text-3xl font-semibold text-emerald-200'>
							Full Stack
						</h3>
						<h3 className='text-3xl mx-2 text-emerald-600 font-semibold '>
							/
						</h3>
						<h3 className='md:text-2xl text-lg lg:text-3xl font-semibold text-orangeflame mr-2'>
							React Native
						</h3>

						<h3 className='md:text-2xl text-lg lg:text-3xl font-semibold text-white'>
							Developer
						</h3>
					</div>

					<h3 className=' md:text:lg text-md lg:text-xl m-auto mt-[6%]  justify-center  lg:w-max-w[40%] w-auto max-w[55%] font-normal text-white text-wrap lg:text-left text-center px-10'>
						<span className='text-left'>
							Dedicated dev with 2+ years experience creating
							scalable high-impact applications.
						</span>
						<br></br>
						<br></br>
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
					<div className='flex flex-row justify-end items-center w-full h-auto mt-[6%]'>
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

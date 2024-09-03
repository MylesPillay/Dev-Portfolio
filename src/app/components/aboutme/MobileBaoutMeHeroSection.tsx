import Image from "next/image";
import Link from "next/link";
import LinksComponent from "./LinksComponent";

const MobileAboutMeHeroSection = () => {
	return (
		<div className='flex flex-col  h-full justify-center  py-8  w-full'>
			<h1 className='text-4xl font-bold h-full items-center justify-center align-middle text-white  pl-6 '>
				MYLES PILLAY
			</h1>

			<h3 className=' text-lg my-8  justify-start   w-full font-normal text-white text-wrap  text-left px-6'>
				<span className='text-left'>
					Dedicated dev with 2+ years experience creating scalable
					high-impact applications.
				</span>
			</h3>

			<div className='sticky top-0 bg-slate-800 bg-opacity-80 w-[105vw] p-4 pr-4  my-4 mb-10 border-t border-b border-orangeflame z-10'>
				<div className='w-full justify-center'>
					<div className='flex flex-row flex-wrap w-auto   align-middle items-center justify-center '>
						<h3 className=' text-2xl font-semibold text-emerald-200'>
							Full Stack
						</h3>
						<h3 className='text-2xl mx-4 text-emerald-600 font-semibold '>
							/
						</h3>
						<h3 className=' text-2xl  mr-6 font-semibold text-orangeflame '>
							React Native
						</h3>

						<h3 className=' text-2xl  font-semibold text-white'>
							Developer
						</h3>
					</div>
				</div>
			</div>
			<div className='flex w-[100%] rounded-lg align-middle   justify-center items-center self-center h-full '>
				<div
					className={`
									flex flex-grow justify-center   rounded-lg max-h-[40vh] h-auto py-6 mb-8 m-auto w-auto  overflow-y-hidden`}>
					<div
						className={`h-full  rounded-lg mb-8
`}>
						<Image
							src={"/images/profile.jpg"}
							className='rounded-lg'
							alt={`Project screenshot `}
							layout='responsive'
							objectFit='cover'
							width={500}
							height={1000}
							style={{ maxHeight: 575, borderRadius: 10 }}
							quality={100}
						/>
					</div>
				</div>
			</div>

			<div className='flex flex-col justify-start my-8 items-center w-full h-auto '>
				<LinksComponent mobileScreen={true} />
			</div>
			<div className='flex w-[80%] rounded-lg  justify-center items-center self-center h-full text-center '>
				<div className='flex flex-col justify-center   py-4  pt-6'>
					<h3 className='text-lg my-8  justify-start   w-full font-normal text-white text-wrap   px-6'>
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
					<div className='flex flex-row justify-end items-center w-full h-auto mt-4'>
						<Link
							className='justify-center items-center self-center w-auto mx-auto p-3 px-8  my-6 rounded-lg  bg-orangeflame  text-white border border-white lg:text-lg text-md font-bold  hover:bg-opacity-80'
							href={"/projects"}>
							LEARN MORE
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MobileAboutMeHeroSection;

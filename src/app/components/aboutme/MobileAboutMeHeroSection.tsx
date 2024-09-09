import Image from "next/image";
import Link from "next/link";
import LinksComponent from "./LinksComponent";
import LoadingSpinner from "../layout/LoadingSpinner";

const MobileAboutMeHeroSection = ({
	image,
	loading
}: {
	image: string;
	loading: boolean;
}) => {
	return (
		<div className='flex flex-col  h-full justify-center  py-8  w-full'>
			<h1 className='text-4xl font-thin h-full items-center justify-center align-middle text-emerald-200 text-center  '>
				MYLES PILLAY
			</h1>

			<h3 className=' text-lg my-8  justify-start   w-full font-thin text-white text-wrap  text-left px-8'>
				<span className='text-left'>
					Dedicated dev with 2+ years experience creating scalable
					high-impact applications.
				</span>
			</h3>

			<div className='sticky top-0 bg-slate-800 bg-opacity-80 w-full p-4  px-6 my-4 mb-10 border-t border-b border-orangeflame z-10'>
				<div className='w-full justify-center'>
					<div className='flex flex-row flex-wrap w-auto   align-middle items-center justify-center '>
						<h3 className=' text-2xl font-light text-emerald-200'>
							Full Stack
						</h3>
						<h3 className='text-2xl mx-4 text-emerald-600 font-light '>
							/
						</h3>
						<h3 className=' text-2xl  mr-6 font-light text-orangeflame '>
							React Native
						</h3>

						<h3 className=' text-2xl  font-light text-white'>
							Developer
						</h3>
					</div>
				</div>
			</div>
			<div className='flex w-auto align-middle  rounded-lg  justify-center items-center self-center h-auto '>
				{loading ? (
					<div
						className={`h-auto justify-end rounded-lg 	flex flex-1 bg-orangeflame bg-opacity-10	max-h-[62vh] min-w-auto min-h-[50vh] flex-grow-0 ml-[5vw] w-auto mb-2 overflow-y-hidden`}>
						<LoadingSpinner />
					</div>
				) : (
					<></>
				)}
				<div className='relative  ml-[5vw] rounded-lg   max-h-[50vh] mb-2 overflow-y-hidden'>
					{/* Image */}
					<img
						src={image}
						className='h-auto justify-end flex flex-2 pb-20 flex-grow-0 w-auto '
						alt='Profile'
						style={{
							maxHeight: "62vh",
							borderRadius: "10px",
							width: "auto",
							height: "auto"
						}}
					/>
					{/* Overlay */}
					<div className='absolute inset-0 bg-orangeflame bg-opacity-20 rounded-lg'></div>
				</div>
			</div>

			<div className='justify-center mt-14 items-center w-full h-auto '>
				<LinksComponent mobileScreen={true} />
			</div>
			<div className='flex w-[80%] rounded-lg  justify-center items-center self-center h-full text-center '>
				<div className='flex flex-col justify-center   py-4  pt-6'>
					<h3 className='text-lg my-8  justify-start   w-full font-thin text-white text-wrap   px-6'>
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
							className='justify-center items-center self-center w-auto mx-auto p-3 px-8  my-6 rounded-lg  bg-orangeflame  text-white border border-white lg:text-lg text-md font-medium  hover:bg-opacity-80'
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

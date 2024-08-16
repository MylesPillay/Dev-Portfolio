import Image from "next/image";

export default function Home() {
	return (
		<div className='bg-yellow-200 min-h-screen m-none text-slate-800 border-l-4 border-slate-200 p-8'>
			<div className='flex flex-row space-x-8 h-full'>
				{/* Left container - 80% height */}
				<div className='w-2/3 h-[80vh] bg-slate-400 bg-opacity-50 rounded-lg flex items-center justify-center'>
					s
					<div className='p-8'>
						<h1 className='text-4xl font-bold mb-4'>About Me</h1>
						<p className='text-lg'>
							{/* Add your about me content here */}
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Sed do eiusmod tempor incididunt ut labore et
							dolore magna aliqua.
						</p>
					</div>
				</div>

				{/* Right container - 40% height, aligned with the start of left container */}
				<div className='w-1/3 h-[40vh] mt-[10vh]'>
					<div className='bg-slate-400 bg-opacity-50 rounded-lg h-full p-6'>
						<h2 className='text-2xl font-semibold mb-4'>
							Additional Info
						</h2>
						<ul className='list-disc list-inside'>
							<li>Item 1</li>
							<li>Item 2</li>
							<li>Item 3</li>
						</ul>
					</div>
				</div>
			</div>

			{/* Third section - below the main containers */}
			<div className='mt-8 bg-slate-400 bg-opacity-50 rounded-lg p-6'>
				<h2 className='text-2xl font-semibold mb-4'>More About Me</h2>
				<p className='text-lg'>
					{/* Add more content here */}
					Ut enim ad minim veniam, quis nostrud exercitation ullamco
					laboris nisi ut aliquip ex ea commodo consequat.
				</p>
			</div>
		</div>
	);
}

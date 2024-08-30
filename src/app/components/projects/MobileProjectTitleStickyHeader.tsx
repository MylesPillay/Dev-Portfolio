const MobileProjectTitleStickyHeader = ({
	projectTitle
}: {
	projectTitle: string;
}) => {
	return (
		<div className='sticky top-0 bg-slate-800 bg-opacity-50 w-full p-4 border-t border-b border-orangeflame z-10'>
			<div className='w-full justify-center'>
				<h1 className=' text-xl font-semibold text-center text-white'>
					{projectTitle.toUpperCase()}
				</h1>
			</div>
		</div>
	);
};

export default MobileProjectTitleStickyHeader;

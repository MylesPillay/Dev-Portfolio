import { Project } from "./ProjectsObject";

const ImagesFormatSelector = ({
	viewMode,
	setViewMode,
	headerPosition,
	currentProjectIndex
}: {
	viewMode: "web" | "mobile";
	setViewMode: (mode: "web" | "mobile") => void;
	headerPosition: boolean;
	currentProjectIndex: number;
}) => {
	// FORMAT BUTTON COMPONENT

	const FormatButton = ({
		text,
		isActive,
		onClick,
		isDisabled
	}: {
		text: string;
		isActive: boolean;
		onClick: () => void;
		isDisabled: boolean;
	}) => {
		return (
			<button
				className={`w-auto min-w-[100px] flex-shrink-0 h-auto flex-grow text-xl justify-center font-light rounded-md p-2 ${
					isDisabled
						? "bg-transparent opacity-20 text-white cursor-default"
						: "bg-transparent cursor-pointer"
				} ${
					isActive
						? "underline underline-offset-4 text-emerald-200"
						: "text-orangeflame"
				}`}
				onClick={onClick}
				disabled={isDisabled}>
				{text}
			</button>
		);
	};

	return (
		<>
			<div
				className={`flex flex-row flex-grow items-center justify-end   sm:py-8 py-12  align-middle ${
					headerPosition ? "lg:flex hidden" : "flex lg:hidden"
				}`}>
				{/* Desktop Button */}
				<FormatButton
					text='Desktop'
					isActive={viewMode === "web"}
					onClick={() => setViewMode("web")}
					isDisabled={
						currentProjectIndex === 0 || currentProjectIndex === 3
							? true
							: false
					}
				/>

				{/* Divider */}
				{/* <div className='h-[90%] w-[2px] bg-white vertical-align-middle'></div> */}

				{/* Mobile Button */}
				<FormatButton
					text='Mobile'
					isActive={viewMode === "mobile"}
					onClick={() => setViewMode("mobile")}
					isDisabled={currentProjectIndex === 2 ? true : false}
				/>
			</div>
		</>
	);
};
export default ImagesFormatSelector;

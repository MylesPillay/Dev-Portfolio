import { Project } from "./ProjectsObject";

const ImagesFormatSelector = ({
	selectedProject,
	viewMode,
	setViewMode,
	headerPosition,
	images
}: {
	selectedProject: Project;
	viewMode: "web" | "mobile";
	setViewMode: (mode: "web" | "mobile") => void;
	headerPosition: boolean;

	images: any[];
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
				className={`w-1/2 h-auto text-lg rounded-md p-2 ${
					isDisabled
						? "bg-transparent opacity-50 cursor-default"
						: "bg-transparent cursor-pointer"
				} ${
					isActive
						? "underline underline-offset-4 text-emerald-200"
						: "text-white"
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
				className={`flex-row justify-center items-center space-x-4 ${
					headerPosition ? "lg:flex hidden" : "flex lg:hidden"
				}`}>
				{/* Desktop Button */}
				<FormatButton
					text='Desktop'
					isActive={viewMode === "web"}
					onClick={() => setViewMode("web")}
					isDisabled={images?.length === 0}
				/>

				{/* Divider */}
				<div className='h-[90%] w-px bg-white vertical-align-middle'></div>

				{/* Mobile Button */}
				<FormatButton
					text='Mobile'
					isActive={viewMode === "mobile"}
					onClick={() => setViewMode("mobile")}
					isDisabled={images?.length === 0}
				/>
			</div>
		</>
	);
};
export default ImagesFormatSelector;

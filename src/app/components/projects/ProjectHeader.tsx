import React from "react";

interface ProjectsHeaderProps {
	selectedProject: {
		name: string;
		images: {
			web: string[];
			mobile: string[];
		};
	};
	viewMode: "web" | "mobile";
	setViewMode: (mode: "web" | "mobile") => void;
}

const ProjectsHeader: React.FC<ProjectsHeaderProps> = ({
	selectedProject,
	viewMode,
	setViewMode
}) => {
	return (
		<div className='flex flex-row justify-between w-full mb-2 pl-8'>
			<h1 className='text-2xl font-bold text-left text-white justify-start align-text-bottom w-[15%] h-full mt-3'>
				PROJECTS
			</h1>
			<h1 className='text-4xl font-bold  w-[37vw] max-w-[50vw] justify-center text-emerald-200 mt-1'>
				{selectedProject.name.toUpperCase()}
			</h1>
			<div className='flex flex-row justify-center items-center space-x-4'>
				<button
					className={`w-1/2 h-auto text-white text-lg text-left rounded-md p-2 ${
						selectedProject.images.web.length > 0
							? "bg-transparent cursor-pointer"
							: "bg-transparent opacity-50 cursor-default"
					} ${
						viewMode === "web" ? "underline underline-offset-8" : ""
					}`}
					onClick={() => setViewMode("web")}
					disabled={selectedProject.images.web.length === 0}>
					Desktop
				</button>

				<div className='h-[90%] w-px bg-white vertical-align-middle'></div>

				<button
					className={`w-1/2 h-auto text-slate-300 text-lg text-right rounded-md p-2  ${
						selectedProject.images.mobile.length > 0
							? "bg-transparent cursor-pointer"
							: "bg-transparent opacity-50 cursor-default"
					} ${
						viewMode === "mobile"
							? "underline underline-offset-4"
							: ""
					}`}
					onClick={() => setViewMode("mobile")}
					disabled={selectedProject.images.mobile.length === 0}>
					Mobile
				</button>
			</div>
		</div>
	);
};

export default ProjectsHeader;

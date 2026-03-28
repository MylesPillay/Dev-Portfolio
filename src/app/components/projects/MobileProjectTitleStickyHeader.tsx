const MobileProjectTitleStickyHeader = ({
  projectTitle,
}: {
  projectTitle: string;
}) => {
  return (
    <div className="sticky top-0 z-10 w-full border-b border-t border-orangeflame bg-slate-800 bg-opacity-80 p-4">
      <div className="w-full justify-center">
        <h1 className="text-center text-xl font-light text-white">
          {projectTitle.toUpperCase()}
        </h1>
      </div>
    </div>
  );
};

export default MobileProjectTitleStickyHeader;

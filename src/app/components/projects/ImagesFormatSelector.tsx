export const ImagesFormatSelector = ({
  viewMode,
  setViewMode,
  headerPosition,
  currentProjectIndex,
}: {
  viewMode: 'web' | 'mobile';
  setViewMode: (mode: 'web' | 'mobile') => void;
  headerPosition: boolean;
  currentProjectIndex: number;
}) => {
  const FormatButton = ({
    text,
    isActive,
    onClick,
    isDisabled,
  }: {
    text: string;
    isActive: boolean;
    onClick: () => void;
    isDisabled: boolean;
  }) => {
    return (
      <button
        className={`h-auto w-auto min-w-[100px] flex-shrink-0 flex-grow justify-center rounded-md p-2 text-xl font-light ${
          isDisabled
            ? 'cursor-default bg-transparent text-white opacity-20'
            : 'cursor-pointer bg-transparent'
        } ${
          isActive
            ? 'text-emerald-200 underline underline-offset-4'
            : 'text-orangeflame'
        }`}
        onClick={onClick}
        disabled={isDisabled}
      >
        {text}
      </button>
    );
  };

  return (
    <>
      <div
        className={`flex flex-grow flex-row items-center justify-end py-12 align-middle sm:py-8 ${
          headerPosition ? 'hidden lg:flex' : 'flex lg:hidden'
        }`}
      >
        {/* Desktop Button */}
        <FormatButton
          text="Desktop"
          isActive={viewMode === 'web'}
          onClick={() => setViewMode('web')}
          isDisabled={
            currentProjectIndex === 0 || currentProjectIndex === 3
              ? true
              : false
          }
        />

        {/* Mobile Button */}
        <FormatButton
          text="Mobile"
          isActive={viewMode === 'mobile'}
          onClick={() => setViewMode('mobile')}
          isDisabled={currentProjectIndex === 2 ? true : false}
        />
      </div>
    </>
  );
};

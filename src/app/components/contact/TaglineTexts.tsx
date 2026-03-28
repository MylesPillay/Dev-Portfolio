const TaglineText = () => {
  return (
    <div className="mx-[5%] my-6 h-full w-[90%] justify-start text-center text-xl font-light sm:my-0 sm:text-left sm:text-2xl md:text-lg lg:w-[80%] lg:text-xl">
      <h1 className="w-auto text-2xl font-thin text-white md:ml-4 lg:ml-[8vw]">
        Have you dreamt up the next big thing?
      </h1>
      <h1 className="my-8 w-auto text-center text-2xl font-thin text-white md:mr-4 lg:mr-[8vw] lg:text-right">
        Whatever challenge needs solving or app needs building...
      </h1>
      <div className="sm:[60%] mb-2 mt-10 text-center text-2xl text-emerald-200 md:w-[80%] md:text-5xl lg:w-[100%]">
        Lets turn it into
        <span className="ml-2.5 text-orangeflame">reality.</span>
      </div>
    </div>
  );
};
export default TaglineText;

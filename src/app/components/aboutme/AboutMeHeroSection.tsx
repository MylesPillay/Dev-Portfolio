import Link from 'next/link';
import AnimatedText from './AnimatedText';
import LoadingSpinner from '../ui/LoadingSpinner';

const AboutMeHeroSection = ({
  image,
  loading,
}: {
  image: string;
  loading: boolean;
}) => {
  return (
    <div className="flex h-auto w-[100vw] flex-auto justify-around py-10">
      <div className="relative mb-2 ml-0 mr-0 max-h-[62vh] min-w-[45%] rounded-xl md:ml-[3vw] md:mr-[2vw] lg:min-w-[30vw]">
        {/* eslint-disable-next-line  */}
        <img
          src={image}
          className={`flex-2 flex h-auto w-auto flex-grow-0 justify-end ${
            loading ? 'hidden' : 'flex'
          }`}
          alt="Profile"
          style={{
            maxHeight: '54vh',
            borderRadius: '10px',
            width: 'auto',
            height: 'auto',
          }}
        />
        <div
          className={`flex-2 inset-0 m-4 h-auto w-auto max-w-[385px] flex-grow-0 rounded-lg bg-orangeflame bg-opacity-10 sm:max-w-[370px] md:max-w-[39vh] ${
            loading ? 'hidden' : 'absolute'
          }`}
        ></div>
        {loading ? (
          <div
            className={`flex-2 flex h-full min-h-[65vh] w-full min-w-[45vh] max-w-[45vh] flex-grow items-center justify-center bg-orangeflame bg-opacity-10 align-middle ${loading ? 'flex' : 'hidden'} `}
          >
            <LoadingSpinner />
          </div>
        ) : (
          <></>
        )}
      </div>
      <div className="ml-[8vw] mr-[2vw] flex w-full max-w-[90vw] justify-start text-left sm:flex-grow md:hidden">
        <h1 className="text-4xl font-bold text-white">MYLES PILLAY</h1>
      </div>
      <div
        className={`flex h-full w-full flex-1 flex-grow items-center justify-start py-8`}
      >
        <div className={`w-[40vw] min-w-[40vw] justify-center`}>
          <div className="mr-8 flex w-full min-w-[105%] flex-row flex-wrap items-center justify-center space-x-2 align-middle">
            <div
              className={`flex flex-wrap items-center text-wrap text-center`}
            >
              <span className="flex-1 items-center justify-center">
                <span
                  className={`w-auto flex-grow flex-wrap text-wrap text-center text-2xl font-light text-emerald-200 transition-opacity md:text-3xl lg:text-center lg:text-4xl xl:text-4xl`}
                >
                  React Native
                </span>
              </span>
            </div>
            <div className="text-3xl text-white">/</div>
            <div
              className={`flex flex-wrap items-center text-wrap text-center`}
            >
              <span className="flex-1 items-center justify-center">
                <span
                  className={`w-auto flex-grow flex-nowrap text-wrap text-center text-2xl font-light text-orangeflame transition-opacity md:text-3xl lg:text-center lg:text-4xl xl:text-4xl`}
                >
                  Full Stack
                </span>
              </span>
            </div>
            <h3 className="text-wrap text-center font-thin text-white md:text-3xl lg:text-4xl xl:text-4xl">
              Developer
            </h3>
          </div>
          <div className="mx-auto my-8 flex w-full min-w-[100%] flex-grow flex-row flex-wrap items-center justify-center align-middle">
            <AnimatedText
              textArray={[
                'Versatile',
                'Dedicated',
                'Creative',
                'Passionate',
                'Ambitious',
                'Adaptable',
              ]}
              baseClassName="md:text-2xl lg:text-3xl text-xl font-light "
              textContent="dev with 2+ years experience creating scalable high-impact applications."
            />
          </div>

          <div className="flex h-auto w-full flex-row items-center justify-end">
            <Link
              className="text-md mx-auto mt-[7vh] w-auto items-center justify-center self-center rounded-lg border border-white bg-orangeflame p-2 px-8 font-medium text-white hover:bg-opacity-80 lg:text-lg"
              href={'/projects'}
            >
              LEARN MORE
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMeHeroSection;

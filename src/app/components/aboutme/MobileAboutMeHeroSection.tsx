import Link from 'next/link';
import LinksComponent from './LinksComponent';
import LoadingSpinner from '../ui/LoadingSpinner';

const MobileAboutMeHeroSection = ({
  image,
  loading,
}: {
  image: string;
  loading: boolean;
}) => {
  return (
    <div className="flex h-full w-full flex-col justify-center py-8">
      <h1 className="h-full items-center justify-center text-center align-middle text-4xl font-thin text-emerald-200">
        MYLES PILLAY
      </h1>

      <h3 className="my-8 w-full justify-start text-wrap px-8 text-left text-lg font-thin text-white">
        <span className="text-left">
          Dedicated dev with 2+ years experience creating scalable high-impact
          applications.
        </span>
      </h3>

      <div className="sticky top-0 z-10 my-4 mb-10 w-full border-b border-t border-orangeflame bg-slate-800 bg-opacity-80 p-4 px-6">
        <div className="w-full justify-center">
          <div className="flex w-auto flex-row flex-wrap items-center justify-center align-middle">
            <h3 className="text-2xl font-light text-emerald-200">Full Stack</h3>
            <h3 className="mx-4 text-2xl font-light text-emerald-600">/</h3>
            <h3 className="mr-6 text-2xl font-light text-orangeflame">
              React Native
            </h3>

            <h3 className="text-2xl font-light text-white">Developer</h3>
          </div>
        </div>
      </div>
      <div className="flex h-auto w-auto items-center justify-center self-center rounded-xl align-middle">
        <div className="relative h-auto max-h-[50vh] w-auto min-w-[75vw] overflow-y-hidden rounded-xl">
          {/* eslint-disable-next-line  */}
          <img
            src={image}
            className={`flex-2 flex h-auto w-full flex-grow-0 justify-center ${
              loading ? 'hidden' : 'flex'
            }`}
            alt="Profile"
            style={{
              maxHeight: '62vh',
              borderRadius: '10px',
              width: 'auto',
              height: 'auto',
            }}
          />

          <div
            className={`flex-2 flex-2 inset-0 m-[2.5vw] flex h-auto w-auto max-w-[45vh] flex-grow-0 rounded-lg bg-orangeflame bg-opacity-10 ${
              loading ? 'hidden' : 'absolute'
            }`}
          ></div>
          {loading ? (
            <div
              className={`flex-2 max-[50vh] flex h-full min-h-[45vh] w-full min-w-[75vw] flex-grow items-center justify-center bg-orangeflame bg-opacity-10 align-middle ${loading ? 'flex' : 'hidden'} `}
            >
              <LoadingSpinner />
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>

      <div className="mt-14 h-auto w-full items-center justify-center">
        <LinksComponent mobileScreen={true} />
      </div>
      <div className="flex h-full w-[80%] items-center justify-center self-center rounded-lg text-center">
        <div className="flex flex-col justify-center py-4 pt-6">
          <h3 className="my-8 w-full justify-start text-wrap px-6 text-lg font-thin text-white">
            Whether a sophisticated
            <span className="font-semibold text-emerald-200">
              {' '}
              web platform{' '}
            </span>
            or cutting-edge{' '}
            <span className="font-semibold text-orangeflame"> mobile app</span>,
            I love bringing exciting ideas to life.
          </h3>
          <div className="mt-4 flex h-auto w-full flex-row items-center justify-end">
            <Link
              className="text-md mx-auto my-6 w-auto items-center justify-center self-center rounded-lg border border-white bg-orangeflame p-3 px-8 font-medium text-white hover:bg-opacity-80 lg:text-lg"
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

export default MobileAboutMeHeroSection;

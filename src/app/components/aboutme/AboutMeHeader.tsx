'use client';
import Link from 'next/link';
import { useState } from 'react';
import { FaBars, FaXing } from 'react-icons/fa';

const AboutMeHeader = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 flex w-full flex-grow flex-row items-baseline justify-start border-b border-orangeflame bg-opacity-100 bg-project-title-gradient pb-4 pt-8 align-bottom sm:border-0 sm:pl-8 sm:pr-8">
      <div className="flex w-auto flex-1 flex-row justify-between">
        <h1 className="ml-4 h-auto flex-shrink-0 justify-start pt-2 text-left text-2xl font-medium text-orangeflame sm:ml-0">
          ABOUT ME
        </h1>
        <h1 className="ml-20 hidden w-full max-w-[90vw] justify-start text-left text-4xl font-medium text-white md:flex md:max-w-[69vw] md:flex-grow lg:max-w-[90vw]">
          MYLES PILLAY
        </h1>
        <div className="fixed right-4 top-8 z-50 md:hidden">
          <button
            onClick={() => {
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="flex flex-col items-center justify-center rounded-md p-2 text-emerald-200"
          >
            {mobileMenuOpen ? (
              <FaXing className="z-50" size={30} />
            ) : (
              <FaBars size={30} />
            )}
          </button>
          {mobileMenuOpen && (
            <div className="fixed right-0 top-0 z-40 h-auto w-[50%] border-b border-l border-emerald-200 bg-deepBlueBg p-8 md:hidden">
              <div className="flex h-[10%] flex-col items-start p-2">
                {[
                  { href: '/contact', label: 'CONTACT' },
                  { href: '/projects', label: 'PROJECTS' },
                  { href: '/', label: 'ABOUT ME' },
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="my-4 text-left text-xl font-semibold text-orangeflame"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default AboutMeHeader;

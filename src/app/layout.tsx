'use client';
import './globals.css';
import Link from 'next/link';
import { FaEnvelope, FaLaptopCode, FaPortrait } from 'react-icons/fa';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [hovered, setHovered] = useState<string | null>(null);
  const pathname = usePathname();

  return (
    <html lang="en">
      <body className="min-w-screen flex min-h-screen p-0">
        <nav className="hidden h-full flex-wrap font-bold text-black sm:flex-col md:flex md:w-auto md:min-w-[130px] md:max-w-[350px] md:items-center md:justify-center md:text-justify md:align-top">
          <ul className="h-full w-full max-w-[150px] bg-nav-gradient pr-1 text-white md:flex md:flex-row">
            {[
              {
                href: '/contact',
                label: 'CONTACT',
                backgroundColor: 'transparent',

                icon: (
                  <FaEnvelope
                    size={hovered === '/contact' ? 32 : 30}
                    opacity={1}
                    color="#A7F3D0"
                  />
                ),
              },
              {
                href: '/projects',
                label: 'PROJECTS',
                backgroundColor: 'transparent',
                icon: (
                  <FaLaptopCode
                    size={hovered === '/projects' ? 32 : 30}
                    color="#A7F3D0"
                  />
                ),
              },
              {
                href: '/',
                label: 'ABOUT ME',
                backgroundColor: 'transparent',
                icon: (
                  <FaPortrait
                    size={hovered === '/' ? 32 : 30}
                    color="#A7F3D0"
                  />
                ),
              },
            ]
              .filter((item) => item.href !== pathname)
              .map((item) => (
                <li
                  key={item.href}
                  className={`flex h-full w-[50%] flex-col justify-start border-r-2 border-r-slate-950 border-opacity-40 pb-4 pt-10`}
                  style={{
                    backgroundColor: item.backgroundColor,
                  }}
                  onMouseEnter={() => setHovered(item.href)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <Link
                    href={item.href}
                    className={`flex h-auto w-full flex-col items-center justify-center text-start tracking-widest md:text-xl lg:text-2xl`}
                  >
                    <div
                      className="flex items-center"
                      style={{
                        paddingTop: hovered === item.href ? 1 : 2,
                      }}
                    >
                      <div
                        className="p-auto w-auto justify-center"
                        style={{
                          paddingLeft: hovered === item.href ? 3 : 4,
                          paddingRight: hovered === item.href ? 3 : 4,
                          marginBottom: hovered === item.href ? 0 : 1,
                        }}
                      >
                        {item.icon}
                      </div>
                      <div className="h-10 w-auto"></div>
                      <div
                        className={`writing-vertical flex flex-row justify-between py-8 transition-opacity duration-500 ease-in-out ${
                          hovered === item.href ? 'opacity-100' : 'opacity-0'
                        } `}
                      >
                        {item.label
                          .toUpperCase()
                          .split('')
                          .map((letter, index) => (
                            <div
                              key={index}
                              className={`-rotate-90 transform transition-opacity duration-150 ${
                                letter === ' ' ? 'py-3' : 'py-2'
                              }`}
                              style={{
                                transitionDelay: `${index * 30}ms`,
                                opacity: hovered === item.href ? 1 : 0,
                              }}
                            >
                              {letter}
                            </div>
                          ))}
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
          </ul>
        </nav>
        <main className="h-full w-auto bg-projects-gradient">{children}</main>
      </body>
    </html>
  );
}

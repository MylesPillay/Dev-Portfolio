"use client";
import { Metadata } from "next";
import Link from "next/link";
import { Inter } from "next/font/google";
import "./globals.css";
import {
	FaEnvelope,
	FaMicrophone,
	FaLaptopCode,
	FaPortrait
} from "react-icons/fa";
import { useState } from "react";

export default function RootLayout({
	children
}: {
	children: React.ReactNode;
}) {
	const [hovered, setHovered] = useState<string | null>(null);

	return (
		<html lang='en'>
			<body className='flex h-screen w-screen p-0'>
				<nav className='flex flex-col h-full w-auto max-w-[13%] text-black font-bold text-justify'>
					<ul className='flex flex-row h-full w-full  text-white'>
						{[
							{
								href: "/contact",
								label: "Contact",
								backgroundColor: "#1D787450",
								icon: <FaEnvelope size={30} color='white' />
							},
							{
								href: "/interests",
								label: "Interests",
								backgroundColor: "#1D787475",
								icon: <FaMicrophone size={29} />
							},
							{
								href: "/projects",
								label: "Projects",
								backgroundColor: "#1D787499",
								icon: <FaLaptopCode size={30} />
							},
							{
								href: "/",
								label: "About Me",
								backgroundColor: "#1D7874",
								icon: <FaPortrait size={30} />
							}
						]
							.filter(
								(item) =>
									item.href !== window?.location.pathname
							)
							.map((item) => (
								<li
									key={item.href}
									className='h-full flex flex-col justify-start pt-12 pb-4 px-2'
									style={{
										backgroundColor: item.backgroundColor
									}}
									onMouseEnter={() => setHovered(item.href)}
									onMouseLeave={() => setHovered(null)}>
									<Link
										href={item.href}
										className={`flex flex-col items-center  justify-start h-auto text-2xl tracking-widest text-center writing-vertical width-[25%] ${
											hovered === item.href
												? "text-white"
												: "text-white opacity-65"
										}`}>
										<div className='flex  items-center'>
											<div className='justify-self-center w-auto px-[3.5px]'>
												{item.icon}
											</div>
											<div className='w-auto h-10'></div>
											{hovered === item.href && (
												<div className=' py-8 justify-between'>
													{item.label
														.toUpperCase()
														.split("")
														.map(
															(letter, index) => (
																<div
																	key={index}
																	className={` inline-block transform -rotate-90  ${
																		letter ===
																		" "
																			? "py-2"
																			: "py-1"
																	}`}>
																	{letter}
																</div>
															)
														)}
												</div>
											)}
										</div>
									</Link>
								</li>
							))}
					</ul>
				</nav>
				<main className=' overflow-y-auto flex-grow '>{children}</main>
			</body>
		</html>
	);
}

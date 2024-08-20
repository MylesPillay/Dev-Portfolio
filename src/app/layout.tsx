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
					<ul className='flex flex-row h-full w-full  text-white bg-nav-gradient'>
						{[
							{
								href: "/contact",
								label: "Contact",
								// backgroundColor: "#1D787440",
								backgroundColor: "transparent",

								icon: (
									<FaEnvelope
										size={hovered === "/contact" ? 32 : 30}
										color='white'
									/>
								)
							},
							{
								href: "/interests",
								label: "Interests",
								// backgroundColor: "#1D787450",
								backgroundColor: "transparent",
								icon: (
									<FaMicrophone
										size={
											hovered === "/interests" ? 32 : 30
										}
									/>
								)
							},
							{
								href: "/projects",
								label: "Projects",
								// backgroundColor: "#1D787490",
								backgroundColor: "transparent",
								icon: (
									<FaLaptopCode
										size={hovered === "/projects" ? 32 : 30}
									/>
								)
							},
							{
								href: "/",
								label: "About Me",
								// backgroundColor: "#1D787490",
								// backgroundColor: "#071E2280",
								backgroundColor: "transparent",
								icon: (
									<FaPortrait
										size={hovered === "/" ? 32 : 30}
									/>
								)
							}
						]
							.filter(
								(item) =>
									item.href !== window?.location.pathname
							)
							.map((item) => (
								<li
									key={item.href}
									className='h-full flex flex-col justify-start pt-12 pb-4 px-2.5 border-r-slate-950 border-opacity-40 border-r-2'
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
											<div
												className='justify-self-center w-auto'
												style={{
													paddingLeft:
														hovered === item.href
															? 3
															: 3.5,
													paddingRight:
														hovered === item.href
															? 3
															: 3.5
												}}>
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

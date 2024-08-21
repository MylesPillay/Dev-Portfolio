"use client";
import Link from "next/link";
import "./globals.css";
import {
	FaEnvelope,
	FaMicrophone,
	FaLaptopCode,
	FaPortrait
} from "react-icons/fa";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function RootLayout({
	children
}: {
	children: React.ReactNode;
}) {
	const [hovered, setHovered] = useState<string | null>(null);
	const pathname = usePathname();

	return (
		<html lang='en'>
			<body className='flex min-h-screen min-w-screen p-0'>
				<nav className='flex flex-col h-full w-auto max-w-[12vw] min-w-[12vw] text-black font-bold text-justify'>
					<ul className='flex flex-row h-full w-full  text-white bg-nav-gradient'>
						{[
							{
								href: "/contact",
								label: "CONTACT",
								backgroundColor: "transparent",

								icon: (
									<FaEnvelope
										size={hovered === "/contact" ? 32 : 30}
										opacity={1}
										color='#A7F3D0'
									/>
								)
							},
							{
								href: "/interests",
								label: "INTERESTS",
								backgroundColor: "transparent",
								icon: (
									<FaMicrophone
										size={
											hovered === "/interests" ? 32 : 30
										}
										color='#A7F3D0'
									/>
								)
							},
							{
								href: "/projects",
								label: "PROJECTS",
								backgroundColor: "transparent",
								icon: (
									<FaLaptopCode
										size={hovered === "/projects" ? 32 : 30}
										color='#A7F3D0'
									/>
								)
							},
							{
								href: "/",
								label: "ABOUT ME",
								backgroundColor: "transparent",
								icon: (
									<FaPortrait
										size={hovered === "/" ? 32 : 30}
										color='#A7F3D0'
									/>
								)
							}
						]
							.filter((item) => item.href !== pathname)
							.map((item) => (
								<li
									key={item.href}
									className={`h-full flex flex-col justify-start pt-10 pb-4 px-2.5 border-r-slate-950 border-opacity-40 border-r-2`}
									style={{
										backgroundColor: item.backgroundColor
									}}
									onMouseEnter={() => setHovered(item.href)}
									onMouseLeave={() => setHovered(null)}>
									<Link
										href={item.href}
										className={`flex flex-col items-center  justify-start h-auto text-2xl tracking-widest text-center  width-[25%]

										`}>
										<div
											className='flex  items-center'
											style={{
												paddingTop:
													hovered === item.href
														? 1
														: 2
											}}>
											<div
												className='justify-center w-auto p-auto'
												style={{
													paddingLeft:
														hovered === item.href
															? 3
															: 4,
													paddingRight:
														hovered === item.href
															? 3
															: 4,
													marginBottom:
														hovered === item.href
															? 0
															: 1
												}}>
												{item.icon}
											</div>
											<div className='w-auto h-10'></div>
											<div
												className={`py-8 justify-between flex flex-row transition-opacity duration-500 ease-in-out writing-vertical ${
													hovered === item.href
														? "opacity-100"
														: "opacity-0"
												}  ${
													item.label == "INTERESTS"
														? "pt-10"
														: ""
												}`}>
												{item.label
													.toUpperCase()
													.split("")
													.map((letter, index) => (
														<div
															key={index}
															className={`transform -rotate-90 transition-opacity duration-150   ${
																letter === " "
																	? "py-3"
																	: "py-2"
															}`}
															style={{
																transitionDelay: `${
																	index * 30
																}ms`,
																opacity:
																	hovered ===
																	item.href
																		? 1
																		: 0
															}}>
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
				<main className='h-full w-auto max-w-[89vw] min-w-[89vw]'>
					{children}
				</main>
			</body>
		</html>
	);
}

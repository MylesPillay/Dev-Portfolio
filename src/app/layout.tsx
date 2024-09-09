"use client";
import Link from "next/link";
import "./globals.css";
import {
	FaEnvelope,
	FaMicrophone,
	FaLaptopCode,
	FaPortrait,
	FaLine,
	FaBars,
	FaXing
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
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (
		<html lang='en'>
			<body className='flex min-h-screen min-w-screen p-0'>
				<nav className='hidden md:flex flex-wrap sm:flex-col h-full md:w-auto md:max-w-[350px] md:min-w-[130px]   text-black font-bold md:text-justify md:justify-center md:align-top md:items-center'>
					<ul className='md:flex md:flex-row h-full w-full max-w-[150px] text-white bg-nav-gradient pr-1'>
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
							// {
							// 	href: "/interests",
							// 	label: "INTERESTS",
							// 	backgroundColor: "transparent",
							// 	icon: (
							// 		<FaMicrophone
							// 			size={
							// 				hovered === "/interests" ? 32 : 30
							// 			}
							// 			color='#A7F3D0'
							// 		/>
							// 	)
							// },
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
									className={`h-full w-[50%] flex flex-col justify-start pt-10 pb-4  border-r-slate-950 border-opacity-40 border-r-2`}
									style={{
										backgroundColor: item.backgroundColor
									}}
									onMouseEnter={() => setHovered(item.href)}
									onMouseLeave={() => setHovered(null)}>
									<Link
										href={item.href}
										className={`flex flex-col items-center  justify-center w-full h-auto lg:text-2xl md:text-xl tracking-widest text-start

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
												}

												`}>
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
				<main className='h-full w-auto bg-projects-gradient '>
					{children}
				</main>
			</body>
		</html>
	);
}

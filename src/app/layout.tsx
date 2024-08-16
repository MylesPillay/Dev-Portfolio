"use client";
import { Metadata } from "next";
import Link from "next/link";
import { Inter } from "next/font/google";
import "./globals.css";
import { FaUser, FaEnvelope, FaMicrophone, FaLaptopCode } from "react-icons/fa";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
	children
}: {
	children: React.ReactNode;
}) {
	const [hovered, setHovered] = useState<string | null>(null);

	return (
		<html lang='en'>
			<body className={inter.className}>
				<div className='flex h-screen'>
					<nav className='flex flex-col h-full w-auto min-w-14 p-4 bg-yellow-500 text-black font-bold text-justify'>
						<ul className='flex flex-row h-full w-full space-x-1'>
							{[
								{
									href: "/",
									label: "About Me",
									icon: <FaUser />
								},
								{
									href: "/projects",
									label: "Projects",
									icon: <FaLaptopCode />
								},
								{
									href: "/interests",
									label: "Interests",
									icon: <FaMicrophone />
								},
								{
									href: "/contact",
									label: "Contact",
									icon: <FaEnvelope />
								}
							].map((item) => (
								<li
									key={item.href}
									className='h-full flex flex-col justify-start '
									onMouseEnter={() => setHovered(item.href)}
									onMouseLeave={() => setHovered(null)}>
									<Link
										href={item.href}
										className='flex items-center justify-center text-3xl tracking-widest text-left writing-vertical min-width-[25%]'>
										{hovered === item.href ? (
											<span className='animate-bounce-in-top'>
												{item.label
													.toUpperCase()
													.split("")
													.reverse()
													.map((letter, index) => (
														<span
															key={index}
															className={`inline-block rotate-90 ${
																letter === " "
																	? "py-2"
																	: "py-1"
															}`}>
															{letter}
														</span>
													))}
											</span>
										) : (
											<span className='px-[3px]'>
												{item.icon}
											</span>
										)}
									</Link>
								</li>
							))}
						</ul>
					</nav>
					<main className='flex-grow overflow-y-auto p-8'>
						{children}
					</main>
				</div>
			</body>
		</html>
	);
}

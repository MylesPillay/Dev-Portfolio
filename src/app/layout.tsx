import { Metadata } from "next";
import Link from "next/link";
import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Myles Pillay - Portfolio",
	description: "Software Developer Portfolio"
};

export default function RootLayout({
	children
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<div className='flex h-screen'>
					<nav className='flex flex-col h-full w-[10%] bg-yellow-500 text-black font-bold text-justify'>
						<div className='flex items-center justify-center h-20'>
							<h1 className='text-xl text-center'>
								Myles Pillay
							</h1>
						</div>
						<ul className='flex flex-row h-full'>
							<li className='h-full flex flex-col justify-end pb-4'>
								<Link
									href='/'
									className='text-3xl tracking-widest text-left writing-vertical'>
									About Me
								</Link>
							</li>
							<li className='h-full flex flex-col justify-end pb-4'>
								<Link
									href='/projects'
									className='text-3xl tracking-widest text-left writing-vertical'>
									Projects
								</Link>
							</li>
							<li className='h-full flex flex-col justify-end pb-4'>
								<Link
									href='/interests'
									className='text-3xl tracking-widest text-left writing-vertical'>
									Interests
								</Link>
							</li>
							<li className='h-full flex flex-col justify-end pb-4'>
								<Link
									href='/contact'
									className='text-3xl tracking-widest text-left writing-vertical'>
									Contact
								</Link>
							</li>
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

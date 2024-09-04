"use client";
import { useState } from "react";
import ContactForm from "../components/contact/ContactForm";
import TaglineText from "../components/contact/TaglineTexts";
import MobileBurgerMenu from "../components/layout/MobileBurgerMenu";

export default function Contact() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [number, setNumber] = useState("");

	const [projectsMenuOpen, setProjectsMenuOpen] = useState(false);

	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	const [isNameFieldUpdated, setIsNameFieldUpdated] =
		useState<boolean>(false);
	const [isEmailFieldUpdated, setIsEmailFieldUpdated] =
		useState<boolean>(false);
	const [isMessageFieldUpdated, setIsMessageFieldUpdated] =
		useState<boolean>(false);

	return (
		<div className='md:bg-projects-gradient bg-mobile-gradient  h-screen w-full overflow-x-hidden lg:overflow-y-hidden sm:overflow-y-visible m-none  pr-0  border-0 sm:border-l-[0.5px] border-orangeflame  '>
			<div className='sticky top-0 flex flex-grow flex-row justify-start items-baseline align-bottom w-full my-0 sm:pl-8 sm:pr-8 pt-10 pb-4 bg-project-title-gradient bg-opacity-100 border-b sm:border-0 border-orangeflame z-50'>
				<div className='flex flex-row flex-1 justify-between w-auto'>
					<h1 className='text-2xl font-bold text-left w-[10vw]  ml-4   sm:ml-0 justify-start h-auto text-orangeflame'>
						CONTACT
					</h1>
					<MobileBurgerMenu
						setProjectsMenuOpen={setProjectsMenuOpen}
						mobileMenuOpen={mobileMenuOpen}
						setMobileMenuOpen={setMobileMenuOpen}
					/>
				</div>
			</div>
			<div className=' flex w-full h-[90%] flex-grow flex-col space-y-6 justify-between pb-4 pt-4'>
				<TaglineText />

				<h3 className='md:text-xl lg:text-2xl text-lg text-wrap text-center font-thin text-white pb-12  w-[80%]  mx-12 flex-grow-0 justify-center '>
					Whether its a sophisticated
					<span className='text-emerald-200 font-light'>
						{" "}
						web platform{" "}
					</span>
					or cutting-edge{" "}
					<span className='text-orangeflame font-light'>
						{" "}
						mobile app
					</span>
					, I love bringing exciting ideas to life.
				</h3>

				<div className='bg-slate-800  bg-opacity-50 text-center w-screen p-4 lg:px-4 px-8 border-t border-b border-orangeflame '>
					<div className='   w-[80%] flex-grow-0 justify-center '>
						<h1 className='lg:text-2xl sm:text-xl font-light text-center justify-center align-text-top text-white '>
							If you are ready to create something amazing, reach
							out below — I would love to hear from you!
						</h1>
					</div>
				</div>

				{/* CONTACT FORM CONTAINER */}

				<ContactForm
					name={name}
					email={email}
					message={message}
					number={number}
					isNameFieldUpdated={isNameFieldUpdated}
					isEmailFieldUpdated={isEmailFieldUpdated}
					isMessageFieldUpdated={isMessageFieldUpdated}
					setIsNameFieldUpdated={setIsNameFieldUpdated}
					setIsEmailFieldUpdated={setIsEmailFieldUpdated}
					setIsMessageFieldUpdated={setIsMessageFieldUpdated}
					setName={setName}
					setEmail={setEmail}
					setMessage={setMessage}
					setNumber={setNumber}
				/>
			</div>
		</div>
	);
}

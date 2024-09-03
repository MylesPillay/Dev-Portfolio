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
		<div className='md:bg-projects-gradient bg-mobile-gradient  h-screen w-full overflow-x-hidden lg:overflow-y-hidden sm:overflow-y-visible m-none  pr-0  border-0 sm:border-l-[0.5px] border-orangeflame '>
			<div className='sticky top-0 flex flex-grow flex-row justify-start items-baseline align-bottom w-full my-0 sm:pl-8 sm:pr-8 pt-10 pb-4 bg-project-title-gradient bg-opacity-100  z-50'>
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
			<div className=' w-full h-full flex flex-col justify-between pb-10 pt-4'>
				<TaglineText />
				<div className='bg-slate-800 bg-opacity-50  w-screen p-4 lg:px-4 px-8 border-t border-b border-orangeflame '>
					<div className='w-[80%] justify-center'>
						<h1 className='lg:text-xl sm:text-md font-semibold text-center justify-center align-text-top text-white '>
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

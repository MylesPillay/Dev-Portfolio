"use client";
import { useEffect, useState } from "react";
import ContactForm from "../components/contact/ContactForm";

export default function Contact() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [number, setNumber] = useState("");

	const [isNameFieldUpdated, setIsNameFieldUpdated] =
		useState<boolean>(false);
	const [isEmailFieldUpdated, setIsEmailFieldUpdated] =
		useState<boolean>(false);
	const [isMessageFieldUpdated, setIsMessageFieldUpdated] =
		useState<boolean>(false);

	return (
		<div
			className='bg-projects-gradient  h-screen w-full overflow-x-hidden overflow-y-hidden  m-none  pr-0 py-6  '
			style={{
				borderColor: "#FF7D11",
				borderWidth: 0,
				borderLeft: "0.5px solid #FF7D11"
			}}>
			<div className='flex flex-col justify-between w-full'>
				<div className='flex flex-row justify-between w-full'>
					<div className='flex flex-col w-screen h-[95vh] rounded-lg items-center justify-center'>
						{/* HEADER SECTION */}

						<h1 className='text-2xl font-bold text-left justify-start align-text-bottom w-full h-[5vh]  text-orangeflame ml-[4.5vw] mt-[2.5vh]  '>
							CONTACT
						</h1>
						<div className=' w-full h-full flex flex-col justify-between pb-10 pt-4'>
							{/* TAGLINE TRIPLETS  */}
							<div className='text-lg font-semibold text-left w-full  justify-start ml-[10%] '>
								<h1 className=' w-auto text-white '>
									Have you dreamt up the next big thing?
								</h1>
								<h1 className=' w-auto  text-white my-8'>
									Whatever challenge needs solving or app
									needs building -
								</h1>
								<div className='text-emerald-200 w-[100%] text-center mt-10 text-4xl mb-8'>
									Let's turn it into{" "}
									<span className='text-orangeflame'>
										reality.
									</span>
								</div>
							</div>
							<div className='bg-slate-800 bg-opacity-50  w-screen p-4 border-t border-b border-orangeflame pr-[20vw]'>
								<h1 className='text-xl font-semibold text-center justify-center align-text-top text-white '>
									If you're ready to create something amazing,
									reach out below — I'd love to hear from you!
								</h1>
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
								setIsMessageFieldUpdated={
									setIsMessageFieldUpdated
								}
								setName={setName}
								setEmail={setEmail}
								setMessage={setMessage}
								setNumber={setNumber}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

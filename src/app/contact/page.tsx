"use client";
import { useEffect, useState } from "react";

export default function Contact() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [number, setNumber] = useState("");

	const [isNameFieldFilled, setIsNameFieldFilled] = useState(false);
	const [isEmailFieldFilled, setIsEmailFieldFilled] = useState(false);
	const [isMessageFieldFilled, setIsMessageFieldFilled] = useState(false);
	useEffect(() => {
		setIsNameFieldFilled(name.length > 0);
	}, [name]);

	useEffect(() => {
		setIsEmailFieldFilled(email.length > 0);
	}, [email]);

	useEffect(() => {
		setIsMessageFieldFilled(message.length > 0);
	}, [message]);

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
					<div className='flex flex-col w-auto h-[70vh] ml-8 rounded-lg items-center justify-center'>
						{/* HEADER SECTION */}

						<h1 className='text-2md font-bold text-left justify-start align-text-bottom w-full h-[5vh] mt-4 text-orangeflame '>
							CONTACT
						</h1>
						<div className=' w-full h-full flex flex-col justify-center items-center'>
							{/* TAGLINE TRIPLETS  */}
							<h1 className='text-xl font-bold text-center justify-center align-text-center text-white '>
								"Dreaming up the next big thing? Let's turn it
								into reality. Got a challenge that needs solving
								or an app that needs building? I’m here for it.
								If you're ready to create something amazing,
								reach out below—I'd love to hear from you!"
							</h1>
							{/* CONTACT FORM CONTAINER */}
							<form onSubmit={() => {}}>
								<div className='flex flex-block flex-wrap w-[40vw] mx-auto'>
									<div className='flex flex-col w-full md:w-1/2 lg:w-1/3 px-4 mb-2'>
										<h1 className='text-md font-bold text-left justify-start align-text-bottom w-auto  mt text-white'>
											Your Name :
										</h1>
										<input
											className={`text-md text-white bg-black bg-opacity-50 border text-left my-2 ${
												isNameFieldFilled
													? "border-red-400"
													: " border-orangeflame py-2 px-4 rounded-md focus:border-tealAccent   focus:mt-[7px] focus:border-2  focus:outline-none "
											}`}
											required
											type='text'
											value={name}
											onChange={(e) =>
												setName(e.target.value)
											}
											placeholder='Your Name'
										/>
										<div
											className={` text-sm text-red-600 text-left my-2 ${
												name.length ? null : "hidden"
											}`}>
											{" "}
											Please enter your name
										</div>
									</div>
									<br></br>
									<div className='flex flex-col w-full md:w-1/2 lg:w-1/3 px-4 mb-2'>
										<h1 className='text-md font-bold text-left justify-start align-text-bottom w-auto  mt text-white'>
											Your Email :
										</h1>
										<input
											className={`text-md text-white bg-black bg-opacity-50  border text-left my-2 ${
												isEmailFieldFilled
													? "border-red-400"
													: " border-orangeflame py-2 px-4 rounded-md focus:border-tealAccent   focus:mt-[7px] focus:border-2  focus:outline-none "
											}`}
											type='text'
											required
											placeholder='Email Address'
											value={email}
											onChange={(e) =>
												setEmail(e.target.value)
											}
										/>
										<div
											className={` text-sm text-red-600 text-left my-2 ${
												email.length ? null : "hidden"
											}`}>
											Please enter your email
										</div>
									</div>
									<br></br>
									<div className='flex flex-col w-full md:w-1/2 lg:w-1/3 px-4 mb-2'>
										<h1 className='text-md font-bold text-left justify-start align-text-bottom w-auto  mt text-white'>
											Your Contact Number:
										</h1>
										<input
											className={`text-md text-white bg-black bg-opacity-50  border text-left my-2 border-orangeflame py-2 px-4  rounded-md focus:border-tealAccent   focus:mt-[7px] focus:border-2  focus:outline-none `}
											type='number'
											placeholder='Contact Number'
											value={number}
											onChange={(e) =>
												setNumber(e.target.value)
											}
										/>
									</div>
									<br></br>
									<div className='flex flex-col w-full md:w-1/2 lg:w-1/3 px-4 mb-2'>
										<h1 className='text-md font-bold text-left justify-start align-text-bottom w-auto  mt text-white'>
											Your Message :
										</h1>
										<textarea
											className={`text-md text-white bg-black bg-opacity-50  border text-left my-2 ${
												isMessageFieldFilled
													? "border-red-400"
													: " border-orangeflame py-2 px-4 rounded-md focus:border-tealAccent   focus:mt-[7px] focus:border-2  focus:outline-none "
											}`}
											value={message}
											required
											onChange={(e) =>
												setMessage(e.target.value)
											}
											placeholder='Message'></textarea>
										<div
											className={`text-sm text-red-600 text-left my-2 ${
												message.length ? null : "hidden"
											}`}>
											Please let me know your reason for
											contacting
										</div>
									</div>
									<br></br>
									<button
										className='justify-center items-center self-center w-auto mx-auto p-2 px-8  rounded-lg  bg-orangeflame  text-white border border-white text-lg font-bold  hover:bg-opacity-80 hover:border-2 '
										type='submit'>
										Submit
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

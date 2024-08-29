import React from "react";

interface ContactFormProps {
	name: string;
	email: string;
	message: string;
	number: string;
	isNameFieldUpdated: boolean;
	isEmailFieldUpdated: boolean;
	isMessageFieldUpdated: boolean;
	setIsNameFieldUpdated: (value: boolean) => void;
	setIsEmailFieldUpdated: (value: boolean) => void;
	setIsMessageFieldUpdated: (value: boolean) => void;

	setName: (value: string) => void;
	setEmail: (value: string) => void;
	setMessage: (value: string) => void;
	setNumber: (value: string) => void;
}

const ContactForm: React.FC<ContactFormProps> = ({
	name,
	email,
	message,
	number,
	isNameFieldUpdated,
	isEmailFieldUpdated,
	isMessageFieldUpdated,
	setIsNameFieldUpdated,
	setIsEmailFieldUpdated,
	setIsMessageFieldUpdated,
	setName,
	setEmail,
	setMessage,
	setNumber
}) => {
	return (
		<form className='w-full justify-center ' onSubmit={() => {}}>
			<div className='flex  flex-wrap lg:w-[68%] md:mx-[8%] mx-[4%] md:w-[75%] mt-4 pb-10 md:pb-0'>
				<div className='flex md:flex-row flex-col flex-wrap justify-evenly md:w-[100%] w-[85%]'>
					<div className=' flex flex-col flex-grow space-y-2 p-6'>
						<div className=' flex-col space-y-2'>
							<h1 className='text-md font-bold text-left justify-start align-text-bottom w-auto  text-white'>
								Your Name :
							</h1>
							<input
								className={`text-md text-white w-full px-4 bg-black bg-opacity-50  text-left  border-2 border-opacity-75 focus:border-opacity-100 py-2 rounded-md focus:border-tealAccent   focus:border-2  focus:outline-none  ${
									isNameFieldUpdated && !name.length
										? "border-red-400"
										: " border-orangeflame"
								}`}
								required
								type='text'
								value={name}
								onChange={(e) => {
									setIsNameFieldUpdated(true);
									setName(e.target.value);
								}}
								placeholder=''
							/>
							<div
								className={`text-sm text-red-500 text-left ${
									isNameFieldUpdated && !name.length
										? "flex"
										: "hidden"
								}`}>
								{" "}
								Please enter your name
							</div>
						</div>

						<div className=' flex-col space-y-2 flex-grow'>
							<h1 className='text-md font-bold text-left justify-start align-text-bottom w-auto  mt text-white'>
								Your Email :
							</h1>
							<input
								className={`text-md text-white w-full bg-black bg-opacity-50   text-left   border-2 border-opacity-75 focus:border-opacity-100 py-2 px-4 rounded-md focus:border-tealAccent   focus:border-2  focus:outline-none
								${
									isEmailFieldUpdated && !email.length
										? "border-red-400"
										: " border-orangeflame"
								}`}
								type='text'
								required
								placeholder=''
								value={email}
								onChange={(e) => {
									setIsEmailFieldUpdated(true);
									setEmail(e.target.value);
								}}
							/>
							<div
								className={` text-sm text-red-500 text-left ${
									isEmailFieldUpdated && !email.length
										? "flex"
										: "hidden"
								}`}>
								Please enter your email
							</div>
						</div>

						<div className=' flex-col space-y-2 flex-grow'>
							<h1 className='text-md font-bold text-left justify-start align-text-bottom   mt text-white'>
								Your Contact Number:
							</h1>
							<input
								className={`text-md w-full  text-white bg-black bg-opacity-50  text-left my-2 border-orangeflame border-2 border-opacity-75 focus:border-opacity-100 py-2 px-4  rounded-md focus:border-tealAccent   focus:border-2  focus:outline-none `}
								type='number'
								placeholder=''
								value={number}
								onChange={(e) => setNumber(e.target.value)}
							/>
						</div>
					</div>
					<div className='justify-center flex-grow md:w-[50%] w-[90%] ml-[4%] md:py-6 sm:pt-0 md:pt-6 '>
						<div className='flex-col  space-y-2'>
							<h1 className='text-md font-bold text-left justify-start align-text-bottom w-auto   text-white'>
								Your Message :
							</h1>
							<textarea
								className={`text-md text-white w-full min-h-[21vh]  bg-black bg-opacity-50  border-2 border-opacity-75 focus:border-opacity-100 py-2 px-4 rounded-md focus:border-tealAccent   focus:border-2  focus:outline-none   text-left  ${
									isMessageFieldUpdated && !message.length
										? "border-red-400"
										: " border-orangeflame"
								}`}
								value={message}
								required
								onChange={(e) => {
									setIsMessageFieldUpdated(true);
									setMessage(e.target.value);
								}}
								placeholder=''></textarea>
							<div
								className={`text-sm text-red-500 text-left  ${
									isMessageFieldUpdated && !message.length
										? "flex"
										: "hidden"
								}`}>
								Please let me know your reason for contacting
							</div>
						</div>
						<div className=' flex-col flex-grow  w-[100%]  '>
							<div className='flex flex-grow justify-end items-center w-full'>
								<button
									className='justify-end  w-auto   self-end py-1 px-8 mt-4 rounded-md  bg-orangeflame  text-white border border-white lg:text-lg text-md font-bold  hover:bg-opacity-80  '
									type='submit'>
									Submit
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</form>
	);
};

export default ContactForm;

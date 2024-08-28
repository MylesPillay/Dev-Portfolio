"use client";
import { useEffect, useState } from "react";

export default function Contact() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [number, setNumber] = useState("");

	const [isNameFieldFilled, setIsNameFieldFilled] = useState<boolean | null>(
		false
	);
	const [isEmailFieldFilled, setIsEmailFieldFilled] = useState<
		boolean | null
	>(false);
	const [isMessageFieldFilled, setIsMessageFieldFilled] = useState<
		boolean | null
	>(false);

	useEffect(() => {
		setIsNameFieldFilled(name.length > 0 ? true : false);
	}, [name]);

	useEffect(() => {
		setIsEmailFieldFilled(email.length > 0 ? true : false);
	}, [email]);

	useEffect(() => {
		setIsMessageFieldFilled(message.length > 0 ? true : false);
	}, [message]);

	return (
		<div className='bg-projects-gradient min-h-screen w-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
			<div className='max-w-3xl w-full space-y-8'>
				<div>
					<h1 className='text-3xl font-bold text-center text-orangeflame'>
						Contact
					</h1>
					<p className='mt-2 text-center text-xl text-white'>
						If you would like to get in touch with me regarding a
						project / job opportunity, please fill out the form
						below. I'd love to hear from you!
					</p>
				</div>
				<form
					onSubmit={(e) => {
						e.preventDefault(); /* Handle form submission */
					}}
					className='mt-8 space-y-6'>
					<div className='rounded-md shadow-sm -space-y-px'>
						<div>
							<label htmlFor='name' className='sr-only'>
								Your Name
							</label>
							<input
								id='name'
								name='name'
								type='text'
								required
								className={`appearance-none rounded-none relative block w-full px-3 py-2 border ${
									isNameFieldFilled
										? "border-red-400"
										: "border-orangeflame"
								} placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-orangeflame focus:border-orangeflame focus:z-10 sm:text-sm`}
								placeholder='Your Name'
								value={name}
								onChange={(e) => setName(e.target.value)}
							/>
							{isNameFieldFilled && (
								<p className='text-sm text-red-600 mt-1'>
									Please enter your name
								</p>
							)}
						</div>
						<div>
							<label htmlFor='email' className='sr-only'>
								Your Email
							</label>
							<input
								id='email'
								name='email'
								type='email'
								required
								className={`appearance-none rounded-none relative block w-full px-3 py-2 border ${
									isEmailFieldFilled
										? "border-red-400"
										: "border-orangeflame"
								} placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-orangeflame focus:border-orangeflame focus:z-10 sm:text-sm`}
								placeholder='Email Address'
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
							{isEmailFieldFilled && (
								<p className='text-sm text-red-600 mt-1'>
									Please enter your email
								</p>
							)}
						</div>
						<div>
							<label htmlFor='number' className='sr-only'>
								Your Contact Number
							</label>
							<input
								id='number'
								name='number'
								type='tel'
								className='appearance-none rounded-none relative block w-full px-3 py-2 border border-orangeflame placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-orangeflame focus:border-orangeflame focus:z-10 sm:text-sm'
								placeholder='Contact Number (optional)'
								value={number}
								onChange={(e) => setNumber(e.target.value)}
							/>
						</div>
						<div>
							<label htmlFor='message' className='sr-only'>
								Your Message
							</label>
							<textarea
								id='message'
								name='message'
								required
								className={`appearance-none rounded-none relative block w-full px-3 py-2 border ${
									isMessageFieldFilled
										? "border-red-400"
										: "border-orangeflame"
								} placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-orangeflame focus:border-orangeflame focus:z-10 sm:text-sm`}
								placeholder='Your Message'
								rows={4}
								value={message}
								onChange={(e) =>
									setMessage(e.target.value)
								}></textarea>
							{isMessageFieldFilled && (
								<p className='text-sm text-red-600 mt-1'>
									Please let me know your reason for
									contacting
								</p>
							)}
						</div>
					</div>

					<div>
						<button
							type='submit'
							className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-orangeflame hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orangeflame'>
							Submit
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}

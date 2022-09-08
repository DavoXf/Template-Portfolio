import React from 'react';

const Contact = () => {
	return (
		<div
			name="contact"
			className="h-screen w-full bg-gradient-to-b  from-gray-800 to-black p-4 text-white"
		>
			<div className="max-w-screen-xl p-4 mx-auto flex flex-col justify-center w-full h-full">
				<div className="pb-8">
					<p className="text-4xl font-bold inline border-b-4 border-gray-500">
						Contact
					</p>
					<p className="py-6 w-25">
						I'm interested in new challenging and exciting opportunities. If you
						have other request or questions, don't hesitate to email me.
					</p>
				</div>

				<div className="flex justify-start items-center">
					<form
						action=""
						className=" flex flex-col w-full md:w-1/2"
						autoComplete="off"
					>
						<input
							type="text"
							name="name"
							placeholder="Name"
							className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
						/>
						<input
							type="email"
							name="email"
							placeholder="Email"
							className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
						/>
						<input
							type="text"
							name="subject"
							placeholder="Subject"
							className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
						/>
						<textarea
							name="message"
							rows="10"
							placeholder="Message"
							className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
						></textarea>
						<button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
							Send message
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Contact;

import React from 'react';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

const Home = () => {
	return (
		<div
			name="home"
			className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
		>
			<div className="max-w-screen-xl mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
				<div className="flex flex-col justify-center h-full md:mr-7">
					<h2 className="text-4xl sm:text-6xl font-bold text-white">
						Hi there!
						<p className="text-4xl sm:text-7xl">I'm Full Stack Developer</p>
					</h2>
					<p className="text-gray-500 py-4 max-w-xl lg:max-w-3xl">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
						lobortis nibh id ex eleifend euismod. Aliquam aliquet molestie
						viverra. Curabitur semper viverra tellus, eget cursus nisi tempor
						in. Sed non vulputate risus, id vehicula nulla. Cras in pharetra
						tellus. Maecenas mollis enim sed justo finibus lacinia. Ut sit amet
						augue vitae ligula vulputate aliquam ac at lorem.
					</p>

					<div>
						<button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
							CV
							<span className="group-hover:rotate-90 duration-300">
								<MdOutlineKeyboardArrowRight size={25} className="ml-1" />
							</span>
						</button>
					</div>
				</div>

				<div>
					<img
						src="https://picsum.photos/id/1/200/300"
						alt="my profile"
						className="rounded-2xl mx-auto w-2/3 md:w-full"
					/>
				</div>
			</div>
		</div>
	);
};

export default Home;

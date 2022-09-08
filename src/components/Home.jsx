import React from 'react';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import programming from '../assets/img/programming.svg';
import cv from '../assets/bg-home.webp';

const Home = () => {
	return (
		<div
			name="home"
			className="h-screen w-full via-black bg-no-repeat bg-cover img-home"
		>
			<div className="max-w-screen-xl mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
				<div className="flex flex-col justify-center h-full md:mr-7">
					<h2 className="text-4xl sm:text-6xl font-bold text-white">
						Hi there!
					</h2>
					<h3 className="text-4xl sm:text-7xl font-bold text-white">
						I'm Developer
					</h3>
					<p className="text-white py-4 max-w-xl lg:max-w-3xl">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
						lobortis nibh id ex eleifend euismod. Aliquam aliquet molestie
						viverra. Curabitur semper viverra tellus, eget cursus nisi tempor
						in. Sed non vulputate risus, id vehicula nulla. Cras in pharetra
						tellus. Maecenas mollis enim sed justo finibus lacinia. Ut sit amet
						augue vitae ligula vulputate aliquam ac at lorem.
					</p>

					<div>
						<a
							href={cv}
							className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
							rel="noreferrer"
							download
						>
							CV
							<span className="group-hover:rotate-90 duration-300">
								<MdOutlineKeyboardArrowRight size={25} className="ml-1" />
							</span>
						</a>
					</div>
				</div>

				<div>
					<img
						src={programming}
						alt="my profile"
						className="rounded-2xl mx-auto w-2/3 md:w-full"
					/>
				</div>
			</div>
		</div>
	);
};

export default Home;

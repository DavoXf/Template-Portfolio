import React from 'react';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

const Home = () => {
	return (
		<div
			name="home"
			className="h-screen w-full bg-gradient-to-b from-black to-gray-800 text-white"
		>
			<div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
				<div className="flex flex-col justify-center h-full">
					<h2 className="text-4xl sm:text-7xl font-bold text-white">
						I'm a Frontend Developer
					</h2>
					<p className="text-gray-200 py-4 max-w-2xl">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
						lobortis nibh id ex eleifend euismod. Aliquam aliquet molestie
						viverra. Curabitur semper viverra tellus, eget cursus nisi tempor
						in. Sed non vulputate risus, id vehicula nulla. Cras in pharetra
						tellus. Maecenas mollis enim sed justo finibus lacinia. Ut sit amet
						augue vitae ligula vulputate aliquam ac at lorem.
					</p>

					<div>
						<button>
							CV
							<span>
								<MdOutlineKeyboardArrowRight />
							</span>
						</button>
					</div>
				</div>

				<div>
					<img
						src="https://picsum.photos/id/1/200/300"
						alt="my profile"
						className="rounded-full mx-auto w-2/3 md:w-full"
					/>
				</div>
			</div>
		</div>
	);
};

export default Home;

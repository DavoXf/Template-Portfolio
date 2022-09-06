import React from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const NavBar = () => {
	return (
		<div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed">
			<div>
				<h1 className="text-5xl ml-2">DFMB</h1>
			</div>

			<ul className="flex">
				<li className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200">
					home
				</li>
				<li className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200">
					about
				</li>
				<li className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200">
					skills
				</li>
				<li className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200">
					contact
				</li>
			</ul>
		</div>
	);
};

export default NavBar;

import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { FiSettings } from 'react-icons/fi';
import logo from '../assets/img/logo.png';

const NavBar = () => {
	const [nav, setNav] = useState(false);

	const links = [
		{
			id: 1,
			link: 'home',
			icon: FiSettings,
		},
		{
			id: 2,
			link: 'about',
			icon: FiSettings,
		},
		{
			id: 3,
			link: 'skills',
			icon: FiSettings,
		},
		{
			id: 4,
			link: 'portfolio',
			icon: FiSettings,
		},
		{
			id: 5,
			link: 'contact',
			icon: FiSettings,
		},
		{
			id: 6,
			link: (
				<>
					<FiSettings size={25} />
				</>
			),
		},
	];

	return (
		<nav className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed">
			<div>
				<a href="/" className="cursor-pointer">
					<img src={logo} alt="logo" className="rounded-full h-20" />
				</a>
			</div>

			<ul className="hidden md:flex">
				{links.map(({ id, link }) => (
					<li
						key={id}
						className="px-4 cursor-pointer capitalize font-medium text-gray-200 hover:scale-105 duration-200"
					>
						{link}
					</li>
				))}
			</ul>

			{/* <FiSettings /> */}

			<div
				onClick={() => setNav(!nav)}
				className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
			>
				{nav ? <FaTimes size={30} /> : <FaBars size={30} />}
			</div>

			{nav && (
				<ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-200">
					{links.map(({ id, icon, link }) => (
						<li
							key={id}
							className="px-4 cursor-pointer capitalize py-4 text-4xl"
						>
							{link}
						</li>
					))}
				</ul>
			)}
		</nav>
	);
};

export default NavBar;

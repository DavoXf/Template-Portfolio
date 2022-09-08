import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const SocialLinks = () => {
	const links = [
		{
			id: 1,
			child: (
				<>
					LinkedIn <FaLinkedin size={20} />
				</>
			),
			href: 'https://linkedin.com',
			style: 'rounded-tr-md',
		},
		{
			id: 2,
			child: (
				<>
					GitHub <FaGithub size={20} />
				</>
			),
			href: 'https://github.com/BaxterDev',
		},
		{
			id: 3,
			child: (
				<>
					Mail <HiOutlineMail size={20} />
				</>
			),
			href: 'mailto:davidf.martinez.br@gmail.com',
		},
	];
	return (
		<div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
			<ul>
				{links.map(({ id, child, href, style }) => (
					<li
						key={id}
						className={
							'flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500"' +
							style
						}
					>
						<a
							className="flex justify-between items-center w-full text-white"
							href={href}
							target="_blank"
							rel="noreferrer"
						>
							{child}
						</a>
					</li>
				))}
			</ul>
		</div>
	);
};

export default SocialLinks;

import React from 'react';
import html from '../assets/img/skills/html.png';
import css from '../assets/img/skills/css.png';
import js from '../assets/img/skills/javascript.png';
import github from '../assets/img/skills/github.png';
import react from '../assets/img/skills/react.png';
import tailwind from '../assets/img/skills/tailwind.png';

const Skills = () => {
	const techs = [
		{
			id: 1,
			src: html,
			alt: 'Html Tech',
			title: 'HTML',
			style: 'shadow-orange-500',
		},
		{
			id: 2,
			src: css,
			alt: 'Css Tech',
			title: 'CSS',
			style: 'shadow-blue-700',
		},
		{
			id: 3,
			src: js,
			alt: 'JavaScript Tech',
			title: 'JavaScript',
			style: 'shadow-yellow-500',
		},
		{
			id: 4,
			src: github,
			alt: 'Github Tech',
			title: 'Github',
			style: 'shadow-gray-500',
		},
		{
			id: 5,
			src: react,
			alt: 'React Tech',
			title: 'React',
			style: 'shadow-blue-400',
		},
		{
			id: 6,
			src: tailwind,
			alt: 'Tailwind Tech',
			title: 'Tailwind',
			style: 'shadow-sky-400',
		},
	];
	return (
		<div
			name="skills"
			className="h-screen w-full bg-gradient-to-b from-black via-gray-800 to-black"
		>
			<div className="max-w-screen-xl mx-auto p-4 flex flex-col justify-between w-full h-full text-white md:flex-row">
				<div className="flex flex-col justify-center h-full">
					<div>
						<p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
							Skills
						</p>
						<p className="py-6">These are the tecnologies. I've worked with</p>
					</div>
					<div className="w-full grid grid:cols-2 sm:grid-cols-6 gap-4 text-center py-8 px-12 sm:px-0">
						{techs.map(({ id, src, alt, title, style }) => (
							<div
								key={id}
								className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
							>
								<img src={src} alt={alt} className="w-10 mx-auto" />
								<p className="mt-4">{title}</p>
							</div>
						))}
					</div>
				</div>
				<div className="flex flex-col justify-center h-full">
					<div>
						<p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
							Skills
						</p>
						<p className="py-6">These are the tecnologies. I've worked with</p>
					</div>
					<div className="w-full grid grid:cols-2 sm:grid-cols-6 gap-4 text-center py-8 px-12 sm:px-0">
						{techs.map(({ id, src, alt, title, style }) => (
							<div
								key={id}
								className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
							>
								<img src={src} alt={alt} className="w-10 mx-auto" />
								<p className="mt-4">{title}</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Skills;

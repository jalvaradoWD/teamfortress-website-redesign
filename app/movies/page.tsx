import Head from 'next/head';
import Link from 'next/link';

interface ICreateTeamMember {
	name: string;
	img: string;
	page: string;
}

const createTeamMember = (
	name: string,
	img: string,
	page: string
): ICreateTeamMember => {
	return {
		name,
		img,
		page,
	};
};

const meetTheTeamData = [
	createTeamMember(
		'scout',
		'/meet-the-team/meet-the-scout.png',
		'/classes/scout'
	),
	createTeamMember(
		'soldier',
		'/meet-the-team/meet-the-soldier.png',
		'/classes/soldier'
	),
	createTeamMember('pyro', '/meet-the-team/meet-the-pyro.png', '/classes/pyro'),
	createTeamMember(
		'demoman',
		'/meet-the-team/meet-the-demo.png',
		'/classes/demoman'
	),
	createTeamMember(
		'heavy',
		'/meet-the-team/meet-the-heavy.png',
		'/classes/heavy'
	),
	createTeamMember(
		'engineer',
		'/meet-the-team/meet-the-engi.png',
		'/classes/engineer'
	),
	createTeamMember(
		'medic',
		'/meet-the-team/meet-the-med.png',
		'/classes/medic'
	),
	createTeamMember(
		'sniper',
		'/meet-the-team/meet-the-sniper.png',
		'/classes/sniper'
	),
	createTeamMember('spy', '/meet-the-team/meet-the-spy.png', '/classes/spy'),
];

export default function About() {
	return (
		<main>
			<h1 className="h-16 text-2xl bg-black text-white flex items-center justify-center font-bold">
				Movies Page
			</h1>

			<section id="meet-the-team">
				<ul className="grid grid-cols-3 grid-rows-3 gap-8 mx-auto w-max grid-flow-col">
					{meetTheTeamData.map((member) => {
						return (
							<li key={member.name} className="flex gap-2 flex-col my-2">
								<h2 className={`capitalize text-center TF2 text-2xl`}>
									<Link href={member.page}>Meet the {member.name}</Link>
								</h2>
								<Link href={member.page}>
									<img
										src={member.img}
										alt={`Meet the ${member.name} thumbnail`}
										className="max-h-40"
									/>
								</Link>
							</li>
						);
					})}
				</ul>
			</section>
		</main>
	);
}

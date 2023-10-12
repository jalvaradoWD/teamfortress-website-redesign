interface ICreateTeamMember {
	name: string;
	img: string;
}

const createTeamMember = (name: string, img: string): ICreateTeamMember => {
	return {
		name,
		img,
	};
};

const meetTheTeamData = [
	createTeamMember('scout', '/meet-the-team/meet-the-scout.png'),
	createTeamMember('soldier', '/meet-the-team/meet-the-soldier.png'),
	createTeamMember('pyro', '/meet-the-team/meet-the-pyro.png'),
	createTeamMember('demoman', '/meet-the-team/meet-the-demo.png'),
	createTeamMember('heavy', '/meet-the-team/meet-the-heavy.png'),
	createTeamMember('engineer', '/meet-the-team/meet-the-engi.png'),
	createTeamMember('medic', '/meet-the-team/meet-the-med.png'),
	createTeamMember('sniper', '/meet-the-team/meet-the-sniper.png'),
	createTeamMember('spy', '/meet-the-team/meet-the-spy.png'),
];

export default function About() {
	return (
		<main>
			<h1>Movies Page</h1>

			<section id="meet-the-team">
				<ul className="grid grid-cols-3 grid-rows-3 gap-8 mx-auto w-max">
					{meetTheTeamData.map((member) => {
						return (
							<li>
								<h2 className={`capitalize text-center TF2`}>
									Meet the {member.name}
								</h2>
								<img
									src={member.img}
									alt={`Meet the ${member.name} thumbnail`}
									className="max-h-40"
								/>
							</li>
						);
					})}
				</ul>
			</section>
		</main>
	);
}

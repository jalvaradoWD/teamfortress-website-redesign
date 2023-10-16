import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

export default function ScoutPage() {
	return (
		<main className="px-8">
			<section className="flex flex-col gap-4 my-4">
				<h2 className="TF2Build">
					<p className="text-2xl">THE</p>
					<p className="text-6xl">SCOUT</p>
				</h2>
				<div>
					<p>Location of Origin: Boston, Massachusetts, USA</p>
					<p>Role: Offense</p>
				</div>

				<p>
					The youngest of eight boys from the south side of Boston, the Scout
					learned early how to problem solve with his fists. With seven older
					brothers on his side, fights tended to end before the runt of the
					litter could maneuver into punching distance, so the Scout trained
					himself to run. He ran everywhere, all the time, until he could beat
					his pack of mad dog siblings to the fray.
				</p>

				<p>
					<a href="https://wiki.teamfortress.com/wiki/Scout">
						View the Scout wiki page
					</a>
				</p>

				<Link href="/movies">View all TF2 movies</Link>
			</section>
			<iframe
				className="max-w-[48rem] mx-auto"
				allowFullScreen
				src="https://www.youtube.com/embed/geNMz0J9TEQ?si=OATzWDKun9dQvTol"
				title="YouTube video player"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				height="480"
			></iframe>
		</main>
	);
}

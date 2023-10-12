import Link from 'next/link';

export default function Home() {
	return (
		<main>
			<nav className="text-center bg-black text-white flex gap-4">
				<Link className="" href="/">
					Home
				</Link>
				<Link href="/movies">Movies</Link>
				<Link href="/comics">Comics</Link>
				<Link href="/history">History</Link>
				<Link href="/artwork">Artwork</Link>
			</nav>
		</main>
	);
}

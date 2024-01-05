import Link from 'next/link';
import styles from '../../styles/Home.module.css';

export default function CreateBooks() {
	const handleRequest = () => {
		const apiFetch = async () => {
			const data = await fetch(
				'https://silvia-nextjs-bookkeeper-e3uzzxqbva-uc.a.run.app/Books',
				{
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify({
						author: 'Sarah J Maas',
						title: 'Crescent City',
						publicationYear: "2020",
					}),
				}
			);
			const jsonData = await data.json();
			console.log(jsonData);
		};
		apiFetch();
	};

	return (
		<>
			<nav>
				<Link href="/">Back to home</Link>
			</nav>

			<h1 className={styles.title}>Create Books</h1>
			<button onClick={handleRequest}>Click me to create a book!</button>
		</>
	);
}

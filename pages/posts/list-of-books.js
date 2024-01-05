import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from '../../styles/Home.module.css';

export default function ListOfBooks() {
	const handleRequest = () => {
		const apiFetch = async () => {
			const data = await fetch(
				'https://silvia-nextjs-bookkeeper-e3uzzxqbva-uc.a.run.app/Books',
				{
					method: 'GET',
					headers: { 'Content-Type': 'application/json' },
				}
			);
			const jsonData = await data.json();
			console.log(jsonData);
			setListOfBooks(data);
		};
		apiFetch();
	};

	const [listOfBooks, setListOfBooks] = useState('I am empty!');

	useEffect(() => {}, [listOfBooks]);

	return (
		<>
			<nav>
				<Link href="/">Back to home</Link>
			</nav>

			<h1 className={styles.title}>List of books</h1>
			{/* {listOfBooks.((book) => {
				return <span>Authors: {listOfBooks.author}</span>;
				// <span>Title: {listOfBooks.title}</span>
			})} */}
			<button onClick={handleRequest}>Click me to get list!</button>
		</>
	);
}

import styles from './App.module.css';
import { useEffect, useState } from 'react';
import { ToDodListOutput } from './to-do-list-output/to-do-list-output';

export const App = () => {
	const [toDos, setToDos] = useState([]);

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/todos')
			.then((loadedData) => loadedData.json())
			.then((loadedToDos) => {
				setToDos(loadedToDos);
			});
	}, []);

	return (
		<div className={styles.container}>
			<h3 className={styles.header}>Список дел на 2024 год</h3>
			{<ToDodListOutput toDosList={toDos} />}
		</div>
	);
};

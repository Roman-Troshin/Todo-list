import styles from './App.module.css';
import { useEffect, useState } from 'react';
import { ToDosListOutput } from './to-do-list-output/to-do-list-output';
import { AddToDos } from './user-actions-with-todos/add-to-dos/add-to-dos';
import { ToDosSearch } from './user-actions-with-todos/to-dos-search/to-dos-search';
import { ToDosSort } from './user-actions-with-todos/to-dos-sort/to-dos-sort';
import { processUserRequestForSerchAndSort } from './help-functions/process-user-request-for-serch-and-sort';

export const App = () => {
	const [toDos, setToDos] = useState([]);
	const [changeToDosMarker, setChangeToDosMarker] = useState(false);
	const [fieldSearchValue, setFieldSearchValue] = useState('');
	const [isSortChecked, setIsSortChecked] = useState(false);

	useEffect(() => {
		fetch(
			`http://localhost:3004/todos${processUserRequestForSerchAndSort(
				fieldSearchValue,
				isSortChecked,
			)}`,
		)
			.then((loadedData) => loadedData.json())
			.then((loadedToDos) => {
				console.log(loadedToDos);
				setToDos(loadedToDos);
			});
	}, [changeToDosMarker, fieldSearchValue, isSortChecked]);

	return (
		<div className={styles.container}>
			<div className={styles.toDosItemList}>
				<h3 className={styles.header}>Список дел на 2024 год</h3>
				<div className={styles.settings}>
					<ToDosSort checked={isSortChecked} setChecked={setIsSortChecked} />
					<ToDosSearch setConfirmedSearchValue={setFieldSearchValue} />
				</div>
				<ToDosListOutput
					changingMarket={changeToDosMarker}
					setChangingMarker={setChangeToDosMarker}
					toDosList={toDos}
				/>
			</div>
			<AddToDos addMarker={changeToDosMarker} setAddMarker={setChangeToDosMarker} />
		</div>
	);
};

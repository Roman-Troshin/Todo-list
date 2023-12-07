import styles from './default-to-do-realisation.module.css';

export const DefaultToDoRealisation = ({
	actualToDoValue,
	setIsToDoInModificationProcess,
	reRecordMarker,
	setReRecordMarker,
	toDoId,
}) => {
	const onRequestDeleteToDo = () => {
		fetch(`http://localhost:3004/todos/${toDoId}`, {
			method: 'DELETE',
		})
			.then((rawResponse) => rawResponse.json())
			.then((response) => {
				console.log('Задача удалена ', response);
				setReRecordMarker(!reRecordMarker);
			});
	};

	return (
		<div className={styles.todoItem}>
			<div>{actualToDoValue}</div>
			<div>
				<button
					type="button"
					onClick={() => {
						setIsToDoInModificationProcess(true);
					}}
				>
					Исправить
				</button>
				<button
					type="button"
					onClick={() => {
						onRequestDeleteToDo();
					}}
				>
					Удалить
				</button>
			</div>
		</div>
	);
};

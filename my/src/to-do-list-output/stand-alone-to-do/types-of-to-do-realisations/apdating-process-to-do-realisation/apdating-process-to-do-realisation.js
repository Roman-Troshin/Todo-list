import styles from './apdating-process-to-do-realisation.module.css';
import { useRef } from 'react';

export const ApdatingProcessToDoRealisation = ({
	actualToDoValue,
	setActualToDoValue,
	setIsToDoInModificationProcess,
	reRecordMarker,
	setReRecordMarker,
	toDoId,
}) => {
	const initialFieldValue = useRef(actualToDoValue);

	const onRequestUpdateToDo = (value) => {
		fetch(`http://localhost:3004/todos/${toDoId}`, {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json;charset=utf-8' },
			body: JSON.stringify({
				value,
			}),
		})
			.then((rawResponse) => rawResponse.json())
			.then((response) => {
				console.log('Задача обновлена ', response);
				setReRecordMarker(!reRecordMarker);
			});
	};

	return (
		<div className={styles.todoItem}>
			<input
				name="changingToDosField"
				type="text"
				value={actualToDoValue}
				onChange={({ target }) => setActualToDoValue(target.value)}
			/>
			<div>
				<button
					type="button"
					onClick={() => {
						setActualToDoValue(initialFieldValue.current);
						setIsToDoInModificationProcess(false);
					}}
				>
					Отменить
				</button>
				<button
					type="button"
					onClick={() => {
						setIsToDoInModificationProcess(false);
						onRequestUpdateToDo(actualToDoValue);
					}}
				>
					Сохранить
				</button>
			</div>
		</div>
	);
};

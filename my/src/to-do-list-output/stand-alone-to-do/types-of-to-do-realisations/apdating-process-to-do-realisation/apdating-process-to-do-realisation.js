import styles from './apdating-process-to-do-realisation.module.css';
import { useRef } from 'react';
import { ref, set } from 'firebase/database';
import { db } from '../../../../firebase';

export const ApdatingProcessToDoRealisation = ({
	actualToDoValue,
	setActualToDoValue,
	setIsToDoInModificationProcess,
	toDoId,
}) => {
	const initialFieldValue = useRef(actualToDoValue);

	const onRequestUpdateToDo = (value) => {

		const updatingToDoDbRef = ref(db, `todos/${toDoId}`)

		set(updatingToDoDbRef, {
			'text': value
		})
			.then((response) => {
				console.log('Задача обновлена ', response);
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

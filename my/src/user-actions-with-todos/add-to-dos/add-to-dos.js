import styles from './add-to-dos.module.css';
import { useState } from 'react';
import { db } from '../../firebase';
import { ref, push } from 'firebase/database';

export const AddToDos = () => {
	const [fieldValue, setFieldValue] = useState('');

	const onRequestAddToDos = (event, value) => {
		event.preventDefault();

		const toDosDbRef = ref(db, 'todos');

		push(toDosDbRef, {
			'text': value,
		}).then((response) => {
			console.log('комментарий добавлен: ', response);
			setFieldValue('');
		});
	};

	return (
		<div>
			<form
				className={styles.form}
				onSubmit={(event) => onRequestAddToDos(event, fieldValue)}
			>
				<input
					name="toDosField"
					type="text"
					value={fieldValue}
					onChange={({ target }) => setFieldValue(target.value)}
				></input>
				<button type="submit">Добавить задачу</button>
			</form>
		</div>
	);
};

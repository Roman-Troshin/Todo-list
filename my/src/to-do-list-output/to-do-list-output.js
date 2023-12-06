import styles from './to-do-list-output.module.css';

export const ToDodListOutput = ({toDosList}) => {

	return (
		<ol>
		{
				toDosList.map((toDo, index) => (
					<li key={index} className={styles.todoItem}>{toDo.title}</li>
				))
		}
		</ol>
	)
};

import { StandaloneToDo } from './stand-alone-to-do/standaloneToDo';
import { getRandomKeyForTask } from '../help-functions/get-random-key-for-task';

export const ToDosListOutput = ({toDosList}) => {

	return (
		<div>
		{toDosList.map((ToDo) => (
			<StandaloneToDo
				key={getRandomKeyForTask()}
				toDoId={ToDo[0]}
				task={ToDo[1]}
			/>
		))}
		</div>
	);
};

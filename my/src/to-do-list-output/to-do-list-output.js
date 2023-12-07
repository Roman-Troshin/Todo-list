import { StandaloneToDo } from './stand-alone-to-do/standaloneToDo';
import { getRandomKeyForTask } from '../help-functions/get-random-key-for-task';

export const ToDosListOutput = ({ changingMarket, setChangingMarker, toDosList }) => {
	return (
		<div>
			{toDosList.map((toDo) => (
				<StandaloneToDo
					key={getRandomKeyForTask()}
					rewritingMarker={changingMarket}
					setRewritingMarker={setChangingMarker}
					task={toDo}
				/>
			))}
		</div>
	);
};

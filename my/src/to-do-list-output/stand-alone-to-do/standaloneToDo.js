import { useState } from 'react';
import { DefaultToDoRealisation } from './types-of-to-do-realisations/default-to-do-realisation/default-to-do-realisation';
import { ApdatingProcessToDoRealisation } from './types-of-to-do-realisations/apdating-process-to-do-realisation/apdating-process-to-do-realisation';

export const StandaloneToDo = ({ toDoId, task }) => {

	const [currentToDoValue, setCurrentToDoValue] = useState(task);
	const [isToDoInUpdatingProcess, setIsToDoInUpdatingProcess] = useState(false);

	return isToDoInUpdatingProcess === false ? (
		<DefaultToDoRealisation
			actualToDoValue={currentToDoValue}
			setIsToDoInModificationProcess={setIsToDoInUpdatingProcess}
			toDoId={toDoId}
		/>
	) : (
		<ApdatingProcessToDoRealisation
			actualToDoValue={currentToDoValue}
			setActualToDoValue={setCurrentToDoValue}
			setIsToDoInModificationProcess={setIsToDoInUpdatingProcess}
			toDoId={toDoId}
		/>
	);
};

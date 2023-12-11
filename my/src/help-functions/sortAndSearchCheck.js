export const sortAndSearchCheck = (toDos, fieldSearchValue, isSortChecked) => {
	const convertedToDos = [];

	Object.entries(toDos).forEach((toDo) => {
		const id = toDo[0];
		const { text } = toDo[1];
		convertedToDos.push([id, text]);
	});

	if(isSortChecked) {
	convertedToDos.sort((a, b) => a[1].localeCompare(b[1]))
}

	let searchedToDos = []
	if(Boolean(fieldSearchValue)) {
		searchedToDos = convertedToDos.filter((toDo) => toDo[1].includes(fieldSearchValue));
		return searchedToDos
	} else {
		return convertedToDos
	}
}

export function persons(state=[], action) {
	switch (action.type) {

		case 'PERSONS_FETCH_DATASUCCESS':
			return action.persons;

		default:
			return state;

	}
}

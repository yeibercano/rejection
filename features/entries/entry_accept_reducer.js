export function accept (state = { entries: [], score: 0 }, action) {
	const { type, payload } = action;
	switch (type) {
	  case 'ACCEPT':
	  	return {
	  		...state,
	  		entries: payload,
				score: state.score + 1
	  	}
	}
	return state
}

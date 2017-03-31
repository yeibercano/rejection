export function accept (state = { entries: [], score: 0 }, action) {
	switch (action.type) {
	  case 'ACCEPT':
	  	return {
	  		...state,
	  		entries: [
					...state.entries,
					action.payload
				],
				score: state.score + 1
	  	}
	}
	return state
}

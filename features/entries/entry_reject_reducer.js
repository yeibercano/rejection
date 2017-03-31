export function reject (state = { entries: [], score: 0 }, action) {
	switch (action.type) {
	  case 'REJECT':
	  	return {
	  		...state,
				entries: [
					...state.entries,
					action.payload
				],
				score: state.score + 10
	  	}
	}
	return state
}

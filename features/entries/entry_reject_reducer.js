export function reject (state = { entries: [], score: 0 }, action) {
	const { type, payload } = action;
	switch (type) {
	  case 'REJECT':
	  	return {
	  		...state,
				entries: [
					...state.entries,
					payload
				],
				score: state.score + 10
	  	}
	}
	return state
}

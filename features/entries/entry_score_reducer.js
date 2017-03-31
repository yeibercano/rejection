export function score (state = { currentScore:0 }, action) {
	switch (action.type) {
			case 'CURRENT_SCORE':
  	  	return {
  	  		...state,
					currentScore: state.currentScore + action.payload
  	  }
			case 'ACCEPT':
				return {
					...state,
					currentScore: state.currentScore + 1
			}
			case 'REJECT':
				return {
					...state,
					currentScore: state.currentScore + 10
			}

	}
	return state
}

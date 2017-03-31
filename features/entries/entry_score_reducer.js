export function score (state = { currentScore:null }, action) {
	switch (action.type) {
			case 'CURRENT_SCORE':
  	  	return {
  	  		...state,
					currentScore: action.payload || 0
  	  }
			case 'UPDATE_SCORE':
  	  	return {
  	  		...state,
					currentScore: action.payload
  	  }
	}
	return state
}

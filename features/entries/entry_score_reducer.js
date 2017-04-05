export function score (state = { currentScore:null }, action) {
	const { type, payload } = action;
	switch (type) {
			case 'CURRENT_SCORE':
  	  	return {
  	  		...state,
					currentScore: payload || 0
  	  }
			case 'UPDATE_SCORE':
  	  	return {
  	  		...state,
					currentScore: payload
  	  }
	}
	return state
}

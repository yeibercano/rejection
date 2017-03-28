export function score (state = { score: 0 }, action) {
	switch (action.type) {
	  case 'ACCEPT':
	  	return {
	  		...state,
	  		score:  action.payload
	  	}
      case 'REJECT':
  	  	return {
  	  		...state,
  	  		score: action.payload
  	  	}
			case 'CURRENT_SCORE':
  	  	return {
  	  		...state,
					score: action.payload || state.score
  	  }
	}
	return state
}

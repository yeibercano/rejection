export function score (state = { score: 0 }, action) {
	switch (action.type) {
	  case 'ACCEPT':
	  	return {
	  		...state,
	  		score: state.score + action.payload
	  	}
      case 'REJECT':
  	  	return {
  	  		...state,
  	  		score: state.score + action.payload
  	  	}
	}
	return state
}

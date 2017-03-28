export function reject (state = { entry: 0 }, action) {
	switch (action.type) {
	  case 'REJECT':
	  	return {
	  		...state,
	  		entry: action.payload
	  	}
	}
	return state
}

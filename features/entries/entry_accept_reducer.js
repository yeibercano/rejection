export function accept (state = { entry: 0 }, action) {
	switch (action.type) {
	  case 'ACCEPT':
	  	return {
	  		...state,
	  		entry: action.payload
	  	}
	}
	return state
}

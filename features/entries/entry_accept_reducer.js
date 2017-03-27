export function accept (state = { entry: null }, action) {
	switch (action.type) {
	  case 'ACCEPT':
	  	return {
	  		...state,
	  		entry: state.entry + action.payload
	  	}
	}
	return state
}

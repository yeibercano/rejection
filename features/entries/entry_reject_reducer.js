export function reject (state = { entry: null }, action) {
	switch (action.type) {
	  case 'REJECT':
	  	return {
	  		...state,
	  		entry: state.entry + action.payload
	  	}
	}
	return state
}

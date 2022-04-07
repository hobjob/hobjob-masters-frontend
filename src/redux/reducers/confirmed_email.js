const initialState = {
	isSend: false
}

const confirmed_email = (state = initialState, action) => {
	if (action.type === "SET_IS_SEND_CONFIRMED_EMAIL") {
		return {
			...state,
			isSend: action.payload
		}
	}

	return state;
}

export default confirmed_email;
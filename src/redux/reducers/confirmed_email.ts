import { ConfirmedEmailState, ConfirmedEmailTypesAction, ConfirmedEmailTypes } from '../types/confirmed_email/IConfirmedEmail'

const initialState: ConfirmedEmailState = {
	isSend: false
}

const confirmed_email = (state = initialState, action: ConfirmedEmailTypes) => {
	if (action.type === ConfirmedEmailTypesAction.SET_IS_SEND_CONFIRMED_EMAIL) {
		return {
			...state,
			isSend: action.payload
		}
	}

	return state;
}

export default confirmed_email;
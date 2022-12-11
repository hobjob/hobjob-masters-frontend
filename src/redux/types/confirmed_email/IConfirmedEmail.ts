export interface ConfirmedEmailState {
	isSend: boolean
}

export enum ConfirmedEmailTypesAction {
	SET_IS_SEND_CONFIRMED_EMAIL = "SET_IS_SEND_CONFIRMED_EMAIL"
}

interface setIsSendConfirmedEmail {
	type: ConfirmedEmailTypesAction.SET_IS_SEND_CONFIRMED_EMAIL
	payload: boolean
}

export type ConfirmedEmailTypes = setIsSendConfirmedEmail
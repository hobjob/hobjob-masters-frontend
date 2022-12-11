import { Dispatch } from 'redux';

import $api from '../../http/';

import { ConfirmedEmailTypesAction, ConfirmedEmailTypes } from '../types/confirmed_email/IConfirmedEmail'

export const fetchSendRepeatConfirmedEmailMaster = () => (dispatch: Dispatch<ConfirmedEmailTypes>) => {
	$api.get(`/masters/confirmed`).then(() => {
		dispatch({
			type: ConfirmedEmailTypesAction.SET_IS_SEND_CONFIRMED_EMAIL,
			payload: true
		})
	})
}

export const fetchConfirmedEmailMaster = (hash: string) => (dispatch: Dispatch<ConfirmedEmailTypes>) => {
	$api.get(`/masters/confirmed/${hash}`).then(() => {
		window.location.href = "/go/moderations-courses"
	})
}
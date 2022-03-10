import { SubmissionError } from 'redux-form'

import $api from '../../http/';

export const sendRegister = (data) => (dispatch) => {
	dispatch({
		type: "SET_SEND_REGISTER",
		payload: true
	})

	return $api.post(`/masters/register`, data).then(({ data }) => {
		localStorage.setItem("accessToken", data.accessToken)

		window.location.href = "/go/cabinet"
	}).catch(({ response }) => {
		dispatch({
			type: "SET_SEND_REGISTER",
			payload: false
		})

		if (response) {
			throw new SubmissionError({
				[response.data.fieldError]: response.data.message,
			});
		}
	})
}
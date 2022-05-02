import { SubmissionError } from 'redux-form'

import $api from '../../http/';

export const sendPasswordRecoveryEmail = (data) => (dispatch) => {
	localStorage.removeItem("accessToken")

	dispatch({
		type: "SET_SEND_PASSWORD_RECOVERY",
		payload: true
	})

	return $api.post(`/masters/password-recovery`, data).then(() => {
		dispatch({
			type: "SET_STATUS_PASSWORD_RECOVERY_EMAIL",
			payload: "success"
		})
		dispatch({
			type: "SET_SEND_PASSWORD_RECOVERY",
			payload: false
		})
	}).catch(({ response }) => {
		dispatch({
			type: "SET_STATUS_PASSWORD_RECOVERY_EMAIL",
			payload: "error"
		})
		dispatch({
			type: "SET_SEND_PASSWORD_RECOVERY",
			payload: false
		})

		if (response) {
			throw new SubmissionError({
				[response.data.fieldError]: response.data.message,
			});
		}
	})
}

export const sendPasswordRecoveryNewPassword = (data, hash) => (dispatch) => {
	dispatch({
		type: "SET_SEND_PASSWORD_RECOVERY",
		payload: true
	})


	return $api.post(`/masters/password-recovery/${hash}`, data).then(({ data }) => {
		localStorage.setItem("accessToken", data.accessToken)

		dispatch({
			type: "SET_STATUS_PASSWORD_RECOVERY_NEW_PASSWORD",
			payload: "success"
		})

		dispatch({
			type: "SET_SEND_PASSWORD_RECOVERY",
			payload: false
		})

		window.location.href = "/go/cabinet"
	}).catch(({ response }) => {
		dispatch({
			type: "SET_STATUS_PASSWORD_RECOVERY_NEW_PASSWORD",
			payload: "error"
		})

		dispatch({
			type: "SET_SEND_PASSWORD_RECOVERY",
			payload: false
		})

		if (response) {
			throw new SubmissionError({
				[response.data.fieldError]: response.data.message,
			});
		}
	})
}
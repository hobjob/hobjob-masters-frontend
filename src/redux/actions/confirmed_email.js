import $api from '../../http/';

export const fetchSendRepeatConfirmedEmailMaster = () => (dispatch) => {
	$api.get(`/masters/confirmed`).then(() => {
		dispatch({
			type: "SET_IS_SEND_CONFIRMED_EMAIL",
			payload: true
		})
	})
}

export const fetchConfirmedEmailMaster = (hash) => (dispatch) => {
	$api.get(`/masters/confirmed/${hash}`).then(() => {
		window.location.href = "/go/moderations-courses"
	})
}
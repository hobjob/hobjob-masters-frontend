import { SubmissionError } from 'redux-form'

import $api from '../../http/';

export const fetchMasterInfo = () => (dispatch) => {
	$api.get("/masters/my/info").then(({ data }) => {
		dispatch(setMasterInfo(data))
	})
}

export const fetchMasterPotencialCourses = () => (dispatch) => {
	$api.get("/masters/my/potencial-courses").then(({ data }) => {
		dispatch(setMasterPotencialCourses(data))
	})
}

export const fetchMasterStatistics = () => (dispatch) => {
	$api.get("/masters/my/statistics").then(({ data }) => {
		dispatch(setMasterStatistics(data))
	})
}

export const fetchUpdateMaster = (data) => (dispatch) => {
	dispatch({
		type: "SET_SEND_UPDATE_MASTER_INFO",
		payload: true
	})

	$api.put("/masters/my/info", data).then(({ data }) => {
		dispatch({
			type: "SET_SEND_UPDATE_MASTER_INFO",
			payload: false
		})

		dispatch(setMasterInfo(data))
	})
}

export const fetchUpdateMasterPayment = (data) => (dispatch) => {
	dispatch({
		type: "SET_SEND_UPDATE_MASTER_PAYMENT",
		payload: true
	})

	$api.put("/masters/my/payment", data).then(({ data }) => {
		dispatch({
			type: "SET_SEND_UPDATE_MASTER_PAYMENT",
			payload: false
		})

		dispatch(setMasterInfo(data))
	})
}

export const fetchUpdateMasterPassword = (data) => (dispatch) => {
	dispatch({
		type: "SET_SEND_UPDATE_MASTER_PASSWORD",
		payload: true
	})

	return $api.put("/masters/my/password", data).then(() => {
		window.location.reload()
	}).catch(({ response }) => {
		dispatch({
			type: "SET_SEND_UPDATE_MASTER_PASSWORD",
			payload: false
		})

		if (response) {
			throw new SubmissionError({
				[response.data.fieldError]: response.data.message,
			});
		}
	})
}

const setMasterInfo = (info) => ({
	type: "SET_MASTER_INFO",
	payload: info
})

const setMasterPotencialCourses = (items) => ({
	type: "SET_MASTER_POTENCIAL_COURSES",
	payload: items
})

const setMasterStatistics = (statistics) => ({
	type: "SET_MASTER_STATISTICS",
	payload: statistics
})
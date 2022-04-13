import $api from '../../http/';

import { fetchMasterDraftsCourses } from "./master";

export const sendAddDraft = () => (dispatch) => {
	$api.post(`/potencial-courses/drafts`).then(({ data }) => {
		window.location.href = `/go/drafts/${data._id}`
	})
}

export const sendDeleteDraft = (id) => (dispatch) => {
	dispatch({
		type: "SET_IS_SEND_DELETE_DRAFT",
		payload: true
	})

	$api.delete(`/potencial-courses/drafts/${id}`).then(() => {
		dispatch(fetchMasterDraftsCourses())
	})
}

export const sendUpdateDraft = (data, redirect, loaded, callbackFunc) => (dispatch) => {
	if (loaded) {
		dispatch({
			type: "SET_IS_SEND_UPDATE_DRAFT",
			payload: true
		})
	}

	$api.put(`/potencial-courses/drafts`, data).then(() => {
		if (callbackFunc) {
			callbackFunc()
		}

		if (redirect) {
			window.location.href = `/go/drafts`
		}
	})
}

export const fetchDraftById = (id) => (dispatch) => {
	dispatch({
		type: "SET_IS_LOADED_DRAFT_BY_ID",
		payload: false
	})

	$api.get(`/potencial-courses/drafts/${id}`).then(({ data }) => {
		dispatch(setDraftById(data))
	}).catch(() => {
		dispatch(setDraftById({}))
	})
}

const setDraftById = (item) => ({
	type: "SET_DRAFT_BY_ID",
	payload: item
})
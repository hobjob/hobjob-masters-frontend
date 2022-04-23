import $api from '../../http/';

import { fetchMasterDraftsCourses } from "./master";

export const sendCreateDraft = (data) => (dispatch) => {
	dispatch({
		type: "SET_IS_SEND_CREATE_DRAFT",
		payload: true
	})

	$api.post(`/potencial-courses/drafts`, data).then(() => {
		window.location.href = "/go/drafts";
	})
}

export const sendCreateDraftAndModeration = (data, paymentInfo) => (dispatch) => {
	dispatch({
		type: "SET_IS_SEND_SUBMIT_MODERATION_COURSE",
		payload: true

	})

	$api.post(`/potencial-courses/drafts`, data).then((response) => {
		$api.post(`/potencial-courses/moderation/${response.data._id}`, paymentInfo).then(() => {
			window.location.href = "/go/moderations-courses"
		})
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

export const sendUpdateDraft = (data, loaded, callbackFunc) => (dispatch) => {
	if (loaded) {
		dispatch(setIsSendUpdateDraft(true))
	}

	$api.put(`/potencial-courses/drafts`, data).then((response) => {
		if (callbackFunc) {
			callbackFunc()
		}

		if (loaded) {
			dispatch(setIsSendUpdateDraft(false))
		}

		dispatch(setDraftById(response.data))
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

export const setDraftById = (item) => ({
	type: "SET_DRAFT_BY_ID",
	payload: item
})

export const setIsSendUpdateDraft = (status) => ({
	type: "SET_IS_SEND_UPDATE_DRAFT",
	payload: status
})
import { Dispatch } from 'redux';

import $api from '../../http/';

import { fetchMasterDraftsCourses } from "./master";

import { DraftActionTypes, DraftActions } from '../types/draft/IDraft'
import { PotencialCoursesActionTypes, PotencialCoursesActions } from '../types/potencial_courses/IPotencialCourses'

import { Draft } from '../../models/IDraft'
import { MasterPaymentInfo } from '../../models/IMaster'

export const sendCreateDraft = (data: Draft) => (dispatch: Dispatch<DraftActions>) => {
	dispatch({
		type: DraftActionTypes.SET_IS_SEND_CREATE_DRAFT,
		payload: true
	})

	$api.post(`/potencial-courses/drafts`, data).then(() => {
		window.location.href = "/go/drafts";
	})
}

export const sendCreateDraftAndModeration = (data: Draft, paymentInfo: MasterPaymentInfo) => (dispatch: Dispatch<DraftActions | PotencialCoursesActions>) => {
	dispatch({
		type: PotencialCoursesActionTypes.SET_IS_SEND_SUBMIT_MODERATION_COURSE,
		payload: true
	})

	$api.post(`/potencial-courses/drafts`, data).then((response) => {
		$api.post(`/potencial-courses/moderation/${response.data._id}`, paymentInfo).then(() => {
			window.location.href = "/go/moderations-courses"
		})
	})
}

export const sendDeleteDraft = (id: string) => (dispatch: Dispatch<DraftActions | any>) => {
	dispatch({
		type: DraftActionTypes.SET_IS_SEND_DELETE_DRAFT,
		payload: true
	})

	$api.delete(`/potencial-courses/drafts/${id}`).then(() => {
		dispatch(fetchMasterDraftsCourses())
	})
}

export const sendUpdateDraft = (data: Draft, loaded: boolean, callbackFunc: any) => (dispatch: Dispatch<DraftActions>) => {
	if (loaded) {
		dispatch({
			type: DraftActionTypes.SET_IS_SEND_UPDATE_DRAFT,
			payload: true
		})
	}

	$api.put(`/potencial-courses/drafts`, data).then((response) => {
		if (callbackFunc) {
			callbackFunc()
		}

		if (loaded) {
			dispatch({
				type: DraftActionTypes.SET_IS_SEND_UPDATE_DRAFT,
				payload: false
			})
		}

		dispatch({
			type: DraftActionTypes.SET_DRAFT_BY_ID,
			payload: response.data
		})
	})
}

export const fetchDraftById = (id: string) => (dispatch: Dispatch<DraftActions>) => {
	dispatch({
		type: DraftActionTypes.SET_IS_LOADED_DRAFT_BY_ID,
		payload: false
	})

	$api.get(`/potencial-courses/drafts/${id}`).then(({ data }) => {
		dispatch({
			type: DraftActionTypes.SET_DRAFT_BY_ID,
			payload: data
		})
	}).catch(() => {
		dispatch({
			type: DraftActionTypes.SET_DRAFT_BY_ID,
			payload: {
				masterId: "",

				createDate: "",
				updateDate: "",

				title: "",
				description: "",

				image: {
					size_512: "",
					size_768: "",
					size_1024: "",
					size_1536: "",
					size_2048: ""
				},

				path: "",
				category: "",

				lessons: [],

				skills: [],
				useSkills: [],
				tools: [],
			}
		})
	})
}

export const setDraftById = (item: Draft) => ({
	type: DraftActionTypes.SET_DRAFT_BY_ID,
	payload: item
})

export const setIsSendUpdateDraft = (status: boolean) => ({
	type: DraftActionTypes.SET_IS_SEND_UPDATE_DRAFT,
	payload: status
})
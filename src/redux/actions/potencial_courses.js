import { SubmissionError } from 'redux-form'

import $api from '../../http/';

export const sendSubmitModerationCourse = (id, data) => (dispatch) => {
	dispatch({
		type: "SET_IS_SEND_SUBMIT_MODERATION_COURSE",
		payload: true
	})

	$api.post(`/potencial-courses/moderation/${id}`, data).then(({ data }) => {
		window.location.href = "/go/moderations-courses"
	})
}

export const sendUpdatePotencialCourse = (data) => (dispatch) => {
	dispatch({
		type: "SET_IS_SEND_SUBMIT_MODERATION_COURSE",
		payload: true
	})

	$api.put(`/potencial-courses/moderation`, data).then(({ data }) => {
		window.location.href = "/go/moderations-courses"
	})
}

export const fetchModerationCourseById = (id) => (dispatch) => {
	dispatch({
		type: "SET_IS_LOADED_MODERATION_COURSE_BY_ID",
		payload: false
	})

	$api.get(`/potencial-courses/moderation/${id}`).then(({ data }) => {
		dispatch(setModerationCourseById(data))
	}).catch(() => {
		dispatch({
			type: "SET_IS_LOADED_MODERATION_COURSE_BY_ID",
			payload: true
		})
	})
}

const setModerationCourseById = (course) => ({
	type: "SET_MODERATION_COURSE_BY_ID",
	payload: course
})
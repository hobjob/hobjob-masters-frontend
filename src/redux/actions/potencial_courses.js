import axios from 'axios';
import { SubmissionError } from 'redux-form'

import $api from '../../http/';

export const sendAddPotencialCourse = (data) => (dispatch) => {
	dispatch({
		type: "SET_IS_SEND_POTENCIAL_COURSE",
		payload: true
	})

	return $api.post(`/potencial-courses`, data).then(({ data }) => {
		window.location.href = "/go/moderation-courses"
	}).catch(({ response }) => {
		dispatch({
			type: "SET_IS_SEND_POTENCIAL_COURSE",
			payload: false
		})

		if (response) {
			throw new SubmissionError({
				[response.data.fieldError]: response.data.message,
			});
		}
	})
}

export const sendUpdatePotencialCourse = (id, data) => (dispatch) => {
	dispatch({
		type: "SET_IS_SEND_POTENCIAL_COURSE",
		payload: true
	})

	return $api.put(`/potencial-courses/${id}`, data).then(({ data }) => {
		// window.location.href = "/go/moderation-courses"
	}).catch(({ response }) => {
		dispatch({
			type: "SET_IS_SEND_POTENCIAL_COURSE",
			payload: false
		})

		if (response) {
			throw new SubmissionError({
				[response.data.fieldError]: response.data.message,
			});
		}
	})
}

export const fetchPotencialCourseById = (id) => (dispatch) => {
	dispatch({
		type: "SET_IS_LOADED_POTENCIAL_COURSE_BY_ID",
		payload: false
	})

	$api.get(`/potencial-courses/${id}`).then(({ data }) => {
		dispatch(setPotencialCourseById(data))
	}).catch(() => {
		dispatch({
			type: "SET_IS_LOADED_POTENCIAL_COURSE_BY_ID",
			payload: true
		})
	})
}

const setPotencialCourseById = (course) => ({
	type: "SET_POTENCIAL_COURSE_BY_ID",
	payload: course
})
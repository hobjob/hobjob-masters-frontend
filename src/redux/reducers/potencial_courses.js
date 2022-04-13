const initialState = {
	isSendSubmitModerationCourse: false,

	moderationCourseById: {},
	isLoadedModerationCourseById: false
}

const potencial_courses = (state = initialState, action) => {
	if (action.type === "SET_IS_SEND_SUBMIT_MODERATION_COURSE") {
		return {
			...state,
			isSendSubmitModerationCourse: action.payload
		}
	}

	if (action.type === "SET_MODERATION_COURSE_BY_ID") {
		return {
			...state,
			moderationCourseById: action.payload,
			isLoadedModerationCourseById: true
		}
	}

	if (action.type === "SET_IS_LOADED_MODERATION_COURSE_BY_ID") {
		return {
			...state,
			isLoadedModerationCourseById: action.payload,
		}
	}

	return state;
}

export default potencial_courses;
const initialState = {
	isSendPotencialCourse: false,

	potencialCourseById: {},
	isLoadedPotencialCourseById: false
}

const potencial_courses = (state = initialState, action) => {
	if (action.type === "SET_IS_SEND_POTENCIAL_COURSE") {
		return {
			...state,
			isSendPotencialCourse: action.payload
		}
	}

	if (action.type === "SET_POTENCIAL_COURSE_BY_ID") {
		return {
			...state,
			potencialCourseById: action.payload,
			isLoadedPotencialCourseById: true
		}
	}

	if (action.type === "SET_IS_LOADED_POTENCIAL_COURSE_BY_ID") {
		return {
			...state,
			isLoadedPotencialCourseById: action.payload,
		}
	}

	return state;
}

export default potencial_courses;
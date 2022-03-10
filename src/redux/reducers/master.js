const initialState = {
	masterInfo: {},
	potencialCoursesModeration: [],
	potencialCoursesReject: [],

	isLoadedPotencialCourses: false,
	isLoadedMasterInfo: false,

	isSendUpdateMasterInfo: false,
	isSendUpdateMasterPassword: false
}

const master = (state = initialState, action) => {
	if (action.type === "SET_MASTER_INFO") {
		return {
			...state,
			masterInfo: action.payload,
			isLoadedMasterInfo: true
		}
	}

	if (action.type === "SET_SEND_UPDATE_MASTER_INFO") {
		return {
			...state,
			isSendUpdateMasterInfo: action.payload,
		}
	}

	if (action.type === "SET_SEND_UPDATE_MASTER_PASSWORD") {
		return {
			...state,
			isSendUpdateMasterPassword: action.payload,
		}
	}

	if (action.type === "SET_MASTER_POTENCIAL_COURSES") {
		const potencialCoursesModerationArray = []
		const potencialCoursesRejectArray = []

		action.payload.map(course => {
			if (course.status === "moderation" || course.status === "uploading") {
				potencialCoursesModerationArray.push(course)
			}
			
			if (course.status === "reject") {
				potencialCoursesRejectArray.push(course)
			}
		})

		return {
			...state,
			potencialCoursesModeration: potencialCoursesModerationArray,
			potencialCoursesReject: potencialCoursesRejectArray,
			isLoadedPotencialCourses: true
		}
	}

	return state
}

export default master
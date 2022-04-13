const initialState = {
	masterInfo: {},
	statistics: {},

	moderationCourses: [],
	moderationCoursesReject: [],

	draftsCourses: [],

	isLoadedModerationCourses: false,
	isLoadedDraftsCourses: false,
	isLoadedMasterInfo: false,
	isLoadedMasterStatistics: false,

	isSendUpdateMasterInfo: false,
	isSendUpdateMasterPayment: false,
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

	if (action.type === "SET_SEND_UPDATE_MASTER_PAYMENT") {
		return {
			...state,
			isSendUpdateMasterPayment: action.payload,
		}
	}

	if (action.type === "SET_SEND_UPDATE_MASTER_PASSWORD") {
		return {
			...state,
			isSendUpdateMasterPassword: action.payload,
		}
	}

	if (action.type === "SET_MASTER_MODERATION_COURSES") {
		const { moderationCourses, moderationCoursesReject } = action.payload

		return {
			...state,
			moderationCourses,
			moderationCoursesReject,
			isLoadedModerationCourses: true
		}
	}

	if (action.type === "SET_MASTER_DRAFTS_COURSES") {
		return {
			...state,
			draftsCourses: action.payload,
			isLoadedDraftsCourses: true
		}
	}

	if (action.type === "SET_MASTER_STATISTICS") {
		return {
			...state,
			statistics: action.payload,
			isLoadedMasterStatistics: true
		}
	}

	return state
}

export default master
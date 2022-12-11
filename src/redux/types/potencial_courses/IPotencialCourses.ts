export enum PotencialCoursesActionTypes {
	SET_IS_SEND_SUBMIT_MODERATION_COURSE = "SET_IS_SEND_SUBMIT_MODERATION_COURSE",
	SET_MODERATION_COURSE_BY_ID = "SET_MODERATION_COURSE_BY_ID",
	SET_IS_LOADED_MODERATION_COURSE_BY_ID = "SET_IS_LOADED_MODERATION_COURSE_BY_ID"
}

interface setIsSendSubmitModerationCourse {
	type: PotencialCoursesActionTypes.SET_IS_SEND_SUBMIT_MODERATION_COURSE,
	payload: boolean
}

interface setModerationCourseById {
	type: PotencialCoursesActionTypes.SET_MODERATION_COURSE_BY_ID,
	payload: 1
}

interface setIsLoadedModerationCourseById {
	type: PotencialCoursesActionTypes.SET_IS_LOADED_MODERATION_COURSE_BY_ID,
	payload: boolean
}

export type PotencialCoursesActions = setIsSendSubmitModerationCourse | setModerationCourseById | setIsLoadedModerationCourseById
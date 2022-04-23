const initialState = {
	isLoadsGlobal: false,

	files: {}
}

const video = (state = initialState, action) => {
	if (action.type === "SET_STATUS_FILES") {
		const files = state.files
		let isLoadsGlobal = false

		files[action.payload.lessonIndex] = { ...action.payload }

		Object.keys(files).map(key => {
			if (files[key].isLoad) {
				isLoadsGlobal = true
			}
		})

		return {
			...state, files, isLoadsGlobal
		}
	}

	return state;
}

export default video;
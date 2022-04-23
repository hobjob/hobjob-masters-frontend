const initialState = {
	itemById: {},

	isLoadedById: false,
	isLoadedByIdAndUpdate: false,

	isSendCreateDraft: false,
	isSendDeleteDraft: false,
	isSendUpdateDraft: false,
}

const draft = (state = initialState, action) => {
	if (action.type === "SET_DRAFT_BY_ID") {
		return {
			...state,
			itemById: action.payload,

			isLoadedById: true,
			isLoadedByIdAndUpdate: true
		}
	}

	if (action.type === "SET_IS_LOADED_DRAFT_BY_ID") {
		return {
			...state,
			isLoadedById: action.payload
		}
	}

	if (action.type === "SET_IS_SEND_CREATE_DRAFT") {
		return {
			...state,
			isSendCreateDraft: action.payload
		}
	}

	if (action.type === "SET_IS_SEND_DELETE_DRAFT") {
		return {
			...state,
			isSendDeleteDraft: action.payload
		}
	}

	if (action.type === "SET_IS_SEND_UPDATE_DRAFT") {
		return {
			...state,
			isSendUpdateDraft: action.payload,
			isLoadedByIdAndUpdate: false
		}
	}

	return state;
}

export default draft;
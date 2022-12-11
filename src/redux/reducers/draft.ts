import { DraftState, DraftActionTypes, DraftActions } from '../types/draft/IDraft'

const initialState: DraftState = {
	itemById: {
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
	},

	isLoadedById: false,
	isLoadedByIdAndUpdate: false,

	isSendCreateDraft: false,
	isSendDeleteDraft: false,
	isSendUpdateDraft: false,
}

const draft = (state = initialState, action: DraftActions) => {
	if (action.type === DraftActionTypes.SET_DRAFT_BY_ID) {
		return {
			...state,
			itemById: action.payload,

			isLoadedById: true,
			isLoadedByIdAndUpdate: true
		}
	}

	if (action.type === DraftActionTypes.SET_IS_LOADED_DRAFT_BY_ID) {
		return {
			...state,
			isLoadedById: action.payload
		}
	}

	if (action.type === DraftActionTypes.SET_IS_SEND_CREATE_DRAFT) {
		return {
			...state,
			isSendCreateDraft: action.payload
		}
	}

	if (action.type === DraftActionTypes.SET_IS_SEND_DELETE_DRAFT) {
		return {
			...state,
			isSendDeleteDraft: action.payload
		}
	}

	if (action.type === DraftActionTypes.SET_IS_SEND_UPDATE_DRAFT) {
		return {
			...state,
			isSendUpdateDraft: action.payload,
			isLoadedByIdAndUpdate: false
		}
	}

	return state;
}

export default draft;
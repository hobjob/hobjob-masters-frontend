import { Draft } from '../../../models/IDraft'

export interface DraftState {
	itemById: {},

	isLoadedById: boolean,
	isLoadedByIdAndUpdate: boolean,

	isSendCreateDraft: boolean,
	isSendDeleteDraft: boolean,
	isSendUpdateDraft: boolean,
}

export enum DraftActionTypes {
	SET_DRAFT_BY_ID = "SET_DRAFT_BY_ID",
	SET_IS_LOADED_DRAFT_BY_ID = "SET_IS_LOADED_DRAFT_BY_ID",
	SET_IS_SEND_CREATE_DRAFT = "SET_IS_SEND_CREATE_DRAFT",
	SET_IS_SEND_DELETE_DRAFT = "SET_IS_SEND_DELETE_DRAFT",
	SET_IS_SEND_UPDATE_DRAFT = "SET_IS_SEND_UPDATE_DRAFT"
}

interface setDraftById {
	type: DraftActionTypes.SET_DRAFT_BY_ID,
	payload: Draft
}

interface setIsLoadedDraftById {
	type: DraftActionTypes.SET_IS_LOADED_DRAFT_BY_ID,
	payload: boolean
}

interface setIsSendCreateDraft {
	type: DraftActionTypes.SET_IS_SEND_CREATE_DRAFT,
	payload: boolean
}

interface setIsSendDeleteDraft {
	type: DraftActionTypes.SET_IS_SEND_DELETE_DRAFT,
	payload: boolean
}

interface setIsSendUpdateDraft {
	type: DraftActionTypes.SET_IS_SEND_UPDATE_DRAFT,
	payload: boolean
}

export type DraftActions = setDraftById | setIsLoadedDraftById | setIsSendCreateDraft | setIsSendDeleteDraft | setIsSendUpdateDraft
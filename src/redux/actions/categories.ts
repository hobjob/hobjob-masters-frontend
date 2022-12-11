import { Dispatch } from "redux";
import $api from '../../http/';

import { Category } from '../../models/ICategory'

import { CategoriesActionTypes, CategoriesActions } from '../types/categories/ICategories'

export const fetchCategories = () => (dispatch: Dispatch<CategoriesActions>) => {
	$api.get<Category[]>(`/categories`).then(({ data }) => {
		dispatch(setCategories(data))
	})
}

const setCategories = (items: Category[]) => ({
	type: CategoriesActionTypes.SET_CATEGORIES,
	payload: items
})
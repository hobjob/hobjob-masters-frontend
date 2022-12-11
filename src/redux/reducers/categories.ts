import { Category } from '../../models/ICategory'

import { CategoriesState, CategoriesActionTypes, CategoriesActions } from '../types/categories/ICategories'

const initialState: CategoriesState = {
	isLoadedAllCategories: false,
	items: {},
	itemsArray: [],
}

const categories = (state = initialState, action: CategoriesActions) => {
	if (action.type === CategoriesActionTypes.SET_CATEGORIES) {
		const newObj: any = {};

		action.payload.map((item) => {
			newObj[item.transfer] = item
		})

		const categoriesArray: Category[] = action.payload.map((item) => item);

		return {
			...state,
			isLoadedAllCategories: true,

			items: newObj,
			itemsArray: categoriesArray
		}
	}

	return state;
}

export default categories;
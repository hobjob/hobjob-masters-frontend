const initialState = {
	isLoadedAllCategories: false,
	items: {},
	itemsArray: {},
}

const categories = (state = initialState, action) => {
	if (action.type === "SET_CATEGORIES") {
		const newObj = {};

		action.payload.map((item) => {
			newObj[item.transfer] = item
		})

		const tempCategoriesArray = [];

		action.payload.map((item) => {
			tempCategoriesArray.push({
				...item,
				key: item.transfer,
			});
		});

		return {
			...state,
			isLoadedAllCategories: true,
			
			items: newObj,
			itemsArray: tempCategoriesArray
		}
	}

	return state;
}

export default categories;
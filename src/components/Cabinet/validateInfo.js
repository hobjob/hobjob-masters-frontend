export const validateInfo = (values) => {
	const errors = {};

	const defaultMin = 2;
	const defaultMax = 255;

	if (!values.name) {
		errors.name = 'Поле не может быть пустым';
	} else if (values.name.length > defaultMax) {
		errors.name = `Не более ${defaultMax} символов`;
	} else if (values.name.length < defaultMin) {
		errors.name = `Не менее ${defaultMin} символов`;
	}

	if (!values.surname) {
		errors.surname = 'Поле не может быть пустым';
	} else if (values.surname.length > defaultMax) {
		errors.surname = `Не более ${defaultMax} символов`;
	} else if (values.surname.length < defaultMin) {
		errors.surname = `Не менее ${defaultMin} символов`;
	}

	if (!values.masterDescription) {
		errors.masterDescription = 'Поле не может быть пустым';
	} else if (values.masterDescription.length > 1000) {
		errors.masterDescription = `Не более 1000 символов`;
	} else if (values.masterDescription.length < defaultMin) {
		errors.masterDescription = `Не менее ${defaultMin} символов`;
	}

	return errors;
};
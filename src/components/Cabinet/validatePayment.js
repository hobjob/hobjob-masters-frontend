export const validatePayment = (values) => {
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


	if (!values.numberCard) {
		errors.numberCard = 'Поле не может быть пустым';
	}
	else if (values.numberCard.length !== 19) {
		errors.numberCard = 'Поле не может быть пустым';
	}

	return errors;
};
const validate = values => {
	const errors = {};

	const defaultMin = 2;
	const defaultMax = 225;

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

	if (!values.avatar) {
		errors.avatar = 'Поле не может быть пустым';
	} else if (values.avatar.type !== "image/jpeg" && values.avatar.type !== "image/png") {
		errors.avatar = 'Ваше изображение неверного расширения. Доступные расширения: .jpg, .jpeg, .png';
	} else if (values.avatar.size > 2500000) {
		errors.avatar = `Ваше изображение слишком большое. Максимальный вес 2мб`;
	}

	if (!values.email) {
		errors.email = 'Поле не может быть пустым';
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
		errors.email = 'Неверный email'
	} else if (values.email.length > defaultMax) {
		errors.email = `Не более ${defaultMax} символов`;
	} else if (values.email.length < defaultMin) {
		errors.email = `Не менее ${defaultMin} символов`;
	}

	if (!values.password) {
		errors.password = 'Поле не может быть пустым';
	} else if (/[А-Яа-яЁё]/i.test(values.password)) {
		errors.password = 'Поле не может содержать кириллицу'
	} else if (values.password.length > defaultMax) {
		errors.password = `Не более ${defaultMax} символов`;
	} else if (values.password.length < defaultMin) {
		errors.password = `Не менее ${defaultMin} символов`;
	}

	return errors;
};

export default validate;
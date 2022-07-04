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

	if (values.socials) {
		errors.socials = {}

		if (values.socials.inst) {
			if (values.socials.inst.length > defaultMax) {
				errors.socials.inst = `Не более ${defaultMax} символов`;
			} else if (values.socials.inst.length < defaultMin) {
				errors.socials.inst = `Не менее ${defaultMin} символов`;
			}
		}

		if (values.socials.vk) {
			if (values.socials.vk.length > defaultMax) {
				errors.socials.vk = `Не более ${defaultMax} символов`;
			} else if (values.socials.vk.length < defaultMin) {
				errors.socials.vk = `Не менее ${defaultMin} символов`;
			}
		}

		if (values.socials.tiktok) {
			if (values.socials.tiktok.length > defaultMax) {
				errors.socials.tiktok = `Не более ${defaultMax} символов`;
			} else if (values.socials.tiktok.length < defaultMin) {
				errors.socials.tiktok = `Не менее ${defaultMin} символов`;
			}
		}

		if (values.socials.telegram) {
			if (values.socials.telegram.length > defaultMax) {
				errors.socials.telegram = `Не более ${defaultMax} символов`;
			} else if (values.socials.telegram.length < defaultMin) {
				errors.socials.telegram = `Не менее ${defaultMin} символов`;
			}
		}

	}

	return errors;
};
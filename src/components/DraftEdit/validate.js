const validate = (values) => {
	const errors = {}

	const defaultMin = 2;
	const defaultMax = 225;

	if (!values.title) {
		errors.title = 'Для модерации поле не может быть пустым';
	} else if (values.title.length > defaultMax) {
		errors.title = `Для модерации не более ${defaultMax} символов`;
	} else if (values.title.length < defaultMin) {
		errors.title = `Для модерации не менее ${defaultMin} символов`;
	}

	if (!values.description) {
		errors.description = 'Для модерации поле не может быть пустым';
	} else if (values.description.length > 1000) {
		errors.description = `Для модерации не более ${1000} символов`;
	} else if (values.description.length < defaultMin) {
		errors.description = `Для модерации не менее ${defaultMin} символов`;
	}

	if (!values.image) {
		errors.image = 'Поле не может быть пустым';
	} else if (values.image.type !== "image/jpeg" && values.image.type !== "image/png" && typeof values.image !== "string") {
		errors.image = 'Ваше изображение неверного расширения. Доступные расширения: .jpg, .jpeg, .png';
	} else if (values.image.size > 5500000 && typeof values.image !== "string") {
		errors.image = `Ваше изображение слишком большое. Максимальный вес 5мб`;
	}

	const lessonsArrayErrors = []

	if (values.lessons) {
		values.lessons.forEach((lesson, index) => {
			const lessonErrors = {}

			if (!lesson.title) {
				lessonErrors.title = 'Для модерации поле не может быть пустым';
				lessonsArrayErrors[index] = lessonErrors

			} else if (lesson.title.length > defaultMax) {
				lessonErrors.title = `Для модерации не более ${defaultMax} символов`;
				lessonsArrayErrors[index] = lessonErrors

			} else if (lesson.title.length < defaultMin) {
				lessonErrors.title = `Для модерации не менее ${defaultMin} символов`;
				lessonsArrayErrors[index] = lessonErrors

			}

			if (!lesson.description) {
				lessonErrors.description = 'Для модерации поле не может быть пустым';
				lessonsArrayErrors[index] = lessonErrors

			} else if (lesson.description.length > 1000) {
				lessonErrors.description = `Для модерации не более ${1000} символов`;
				lessonsArrayErrors[index] = lessonErrors

			} else if (lesson.description.length < defaultMin) {
				lessonErrors.description = `Для модерации не менее ${defaultMin} символов`;
				lessonsArrayErrors[index] = lessonErrors
			}

			if (!lesson.image) {
				lessonErrors.image = 'Для модерации поле не может быть пустым';
				lessonsArrayErrors[index] = lessonErrors
			} else if (lesson.image.type !== "image/jpeg" && lesson.image.type !== "image/png" && typeof lesson.image !== "string") {
				lessonErrors.image = 'Ваше изображение неверного расширения. Доступные расширения: .jpg, .jpeg, .png';
				lessonsArrayErrors[index] = lessonErrors

			} else if (lesson.image.size > 5500000 && typeof lesson.image !== "string") {
				lessonErrors.image = `Ваше изображение слишком большое. Максимальный вес 5мб`;
				lessonsArrayErrors[index] = lessonErrors
			}

			if (lesson.materials) {
				const materialsArrayErrors = []

				lesson.materials.forEach((material, materialIndex) => {
					const materialErrors = {}

					if (!material.title) {
						materialErrors.title = 'Для модерации поле не может быть пустым';
						materialsArrayErrors[materialIndex] = materialErrors

					} else if (material.title.length > defaultMax) {
						materialErrors.title = `Для модерации не более ${defaultMax} символов`;
						materialsArrayErrors[materialIndex] = materialErrors

					} else if (material.title.length < defaultMin) {
						materialErrors.title = `Для модерации не менее ${defaultMin} символов`;
						materialsArrayErrors[materialIndex] = materialErrors

					}

					if (!material.file) {
						materialErrors.file = 'Для модерации поле не может быть пустым';
						materialsArrayErrors[materialIndex] = materialErrors
					} else if (material.file.size > 10000000 && typeof material.file !== "string") {
						materialErrors.file = `Ваш файл слишком большой. Максимальный вес 10мб`;
						materialsArrayErrors[materialIndex] = materialErrors
					}
				})

				if (materialsArrayErrors.length) {
					lessonErrors.materials = materialsArrayErrors
					lessonsArrayErrors[index] = lessonErrors
				}

			}

			if (!lesson.video) {
				lessonErrors.video = 'Для модерации поле не может быть пустым';
				lessonsArrayErrors[index] = lessonErrors

			} else if (
				lesson.video.type !== "video/mp4" &&
				lesson.video.type !== "video/avi" &&
				lesson.video.type !== "video/mov" &&
				lesson.video.type !== "video/mpeg" &&
				lesson.video.type !== "video/webm" &&
				lesson.video.type !== "video/quicktime" &&
				lesson.video.type !== "video/heif" &&
				lesson.video.type !== "video/hevc" && !lesson.video.fileNameUser
			) {
				lessonErrors.video = 'Ваше видео неверного расширения. Доступные расширения: .mp4, .avi, .mov, .mpeg, .webm';
				lessonsArrayErrors[index] = lessonErrors

			} else if (lesson.video.size > 2500000000 && !lesson.video.fileNameUser) {
				lessonErrors.video = `Ваше видео слишком большое. Максимальный вес 2гб`;
				lessonsArrayErrors[index] = lessonErrors

			}

			if (lessonsArrayErrors.length) {
				errors.lessons = lessonsArrayErrors
			}
		})
	}

	if (!values.name) {
		errors.name = 'Для модерации поле не может быть пустым';
	} else if (values.name.length > defaultMax) {
		errors.name = `Для модерации не более ${defaultMax} символов`;
	} else if (values.name.length < defaultMin) {
		errors.name = `Для модерации не менее ${defaultMin} символов`;
	}

	if (!values.numberCard) {
		errors.numberCard = 'Для модерации поле не может быть пустым';
	} else if (values.numberCard.length !== 19) {
		errors.numberCard = 'Для модерации поле не может быть пустым';
	}

	return errors
}

export default validate
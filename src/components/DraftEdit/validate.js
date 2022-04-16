const validate = (values) => {
	const errors = {}

	const defaultMin = 2;
	const defaultMax = 225;

	if (!values.title) {
		errors.title = 'Поле не может быть пустым';
	} else if (values.title.length > defaultMax) {
		errors.title = `Не более ${defaultMax} символов`;
	} else if (values.title.length < defaultMin) {
		errors.title = `Не менее ${defaultMin} символов`;
	}

	if (!values.description) {
		errors.description = 'Поле не может быть пустым';
	} else if (values.description.length > 1000) {
		errors.description = `Не более ${1000} символов`;
	} else if (values.description.length < defaultMin) {
		errors.description = `Не менее ${defaultMin} символов`;
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
				lessonErrors.title = 'Поле не может быть пустым';
				lessonsArrayErrors[index] = lessonErrors

			} else if (lesson.title.length > defaultMax) {
				lessonErrors.title = `Не более ${defaultMax} символов`;
				lessonsArrayErrors[index] = lessonErrors

			} else if (lesson.title.length < defaultMin) {
				lessonErrors.title = `Не менее ${defaultMin} символов`;
				lessonsArrayErrors[index] = lessonErrors

			}

			if (!lesson.description) {
				lessonErrors.description = 'Поле не может быть пустым';
				lessonsArrayErrors[index] = lessonErrors

			} else if (lesson.description.length > 1000) {
				lessonErrors.description = `Не более ${1000} символов`;
				lessonsArrayErrors[index] = lessonErrors

			} else if (lesson.description.length < defaultMin) {
				lessonErrors.description = `Не менее ${defaultMin} символов`;
				lessonsArrayErrors[index] = lessonErrors
			}

			if (!lesson.image) {
				lessonErrors.image = 'Поле не может быть пустым';
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
						materialErrors.title = 'Поле не может быть пустым';
						materialsArrayErrors[materialIndex] = materialErrors

					} else if (material.length > defaultMax) {
						materialErrors.title = `Не более ${defaultMax} символов`;
						materialsArrayErrors[materialIndex] = materialErrors

					} else if (material.length < defaultMin) {
						materialErrors.title = `Не менее ${defaultMin} символов`;
						materialsArrayErrors[materialIndex] = materialErrors

					}

					if (material.file && typeof material.file !== "string") {
						if (material.file.size > 10000000) {
							materialErrors.file = `Ваш файл слишком большой. Максимальный вес 10мб`;
							materialsArrayErrors[materialIndex] = materialErrors

						}
					}
				})

				if (materialsArrayErrors.length) {
					lessonErrors.materials = materialsArrayErrors
					lessonsArrayErrors[index] = lessonErrors
				}

			}

			if (!lesson.video) {
				lessonErrors.video = 'Поле не может быть пустым';
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
		errors.name = 'Поле не может быть пустым';
	} else if (values.name.length > defaultMax) {
		errors.name = `Не более ${defaultMax} символов`;
	} else if (values.name.length < defaultMin) {
		errors.name = `Не менее ${defaultMin} символов`;
	}

	if (!values.numberCard) {
		errors.numberCard = 'Поле не может быть пустым';
	} else if (values.numberCard.length !== 19) {
		errors.numberCard = 'Поле не может быть пустым';
	}

	return errors
}

export default validate
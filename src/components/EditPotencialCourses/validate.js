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

	if (values.image && typeof values.image !== "string") {
		if (values.image.type !== "image/jpeg" && values.image.type !== "image/png") {
			errors.image = 'Ваше изображение неверного расширения. Доступные расширения: .jpg, .jpeg, .png';
		} else if (values.image.size > 2000000) {
			errors.image = `Ваше изображение слишком большое. Максимальный вес 2мб`;
		}
	}

	const lessonsArrayErrors = []

	if (values.lessons) {
		values.lessons.forEach((lesson, index) => {
			const lessonErrors = {}

			if (!lesson.title) {
				lessonErrors.title = 'Поле не может быть пустым';
				lessonsArrayErrors[index] = lessonErrors

			} else if (values.title.length > defaultMax) {
				lessonErrors.title = `Не более ${defaultMax} символов`;
				lessonsArrayErrors[index] = lessonErrors

			} else if (values.title.length < defaultMin) {
				lessonErrors.title = `Не менее ${defaultMin} символов`;
				lessonsArrayErrors[index] = lessonErrors

			}

			if (!lesson.description) {
				lessonErrors.description = 'Поле не может быть пустым';
				lessonsArrayErrors[index] = lessonErrors

			} else if (values.description.length > 1000) {
				lessonErrors.description = `Не более ${1000} символов`;
				lessonsArrayErrors[index] = lessonErrors

			} else if (values.description.length < defaultMin) {
				lessonErrors.description = `Не менее ${defaultMin} символов`;
				lessonsArrayErrors[index] = lessonErrors

			}

			if (lesson.image && typeof lesson.image !== "string") {
				if (lesson.image.type !== "image/jpeg" && lesson.image.type !== "image/png") {
					lessonErrors.image = 'Ваше изображение неверного расширения. Доступные расширения: .jpg, .jpeg, .png';
					lessonsArrayErrors[index] = lessonErrors

				} else if (lesson.image.size > 2000000) {
					lessonErrors.image = `Ваше изображение слишком большое. Максимальный вес 2мб`;
					lessonsArrayErrors[index] = lessonErrors

				}
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

			if (lesson.timecodes) {
				const timecodesArrayErrors = []

				lesson.timecodes.forEach((timecode, timecodeIndex) => {
					const timecodesErrors = {}

					if (!timecode.title) {
						timecodesErrors.title = 'Поле не может быть пустым';
						timecodesArrayErrors[timecodeIndex] = timecodesErrors

					} else if (timecode.length > defaultMax) {
						timecodesErrors.title = `Не более ${defaultMax} символов`;
						timecodesArrayErrors[timecodeIndex] = timecodesErrors

					} else if (timecode.length < defaultMin) {
						timecodesErrors.title = `Не менее ${defaultMin} символов`;
						timecodesArrayErrors[timecodeIndex] = timecodesErrors

					}

					if (!timecode.timecode) {
						timecodesErrors.timecode = 'Поле не может быть пустым';
						timecodesArrayErrors[timecodeIndex] = timecodesErrors

					} else if (!/^[0-5]{1}[0-9]{1}[:]{1}[0-5]{1}[0-9]{1}[:]{1}[0-5]{1}[0-9]{1}$/.test(timecode.timecode)) {
						timecodesErrors.timecode = `Неверный таймкод`;
						timecodesArrayErrors[timecodeIndex] = timecodesErrors

					}
				})

				if (timecodesArrayErrors.length) {
					lessonErrors.timecodes = timecodesArrayErrors
					lessonsArrayErrors[index] = lessonErrors
				}

			}

			if (lesson.video && !lesson.video.indexFile) {
				if (!lesson.video) {
					lessonErrors.video = 'Поле не может быть пустым';
					lessonsArrayErrors[index] = lessonErrors

				} else if (
					lesson.video.type !== "video/mp4" &&
					lesson.video.type !== "video/avi" &&
					lesson.video.type !== "video/mov" &&
					lesson.video.type !== "video/mpeg" &&
					lesson.video.type !== "video/webm"
				) {
					lessonErrors.video = 'Ваше видео неверного расширения. Доступные расширения: .mp4, .avi, .mov, .mpeg, .webm';
					lessonsArrayErrors[index] = lessonErrors

				} else if (lesson.video.size > 10000000000) {
					lessonErrors.video = `Ваше видео слишком большое. Максимальный вес 10гб`;
					lessonsArrayErrors[index] = lessonErrors

				}
			}

			if (lessonsArrayErrors.length) {
				errors.lessons = lessonsArrayErrors
			}
		})
	}

	return errors
}

export default validate
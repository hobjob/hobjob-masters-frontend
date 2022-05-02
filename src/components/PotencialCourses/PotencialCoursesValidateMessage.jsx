import React from "react";

const PotencialCoursesValidateMessage = ({
    errors,
    values,
    isPayment,
    stateErrorsMessageAnimationClose,
    ErrorMessageRef,
    files,
}) => {
    return (
        <div
            className={`potencial-courses-block-btn-validate-message-wrapper ${
                stateErrorsMessageAnimationClose ? "close" : ""
            }`}
            ref={ErrorMessageRef}
        >
            <div className="potencial-courses-block-btn-validate-message">
                <div className="potencial-courses-block-btn-validate-message-top">
                    <p className="potencial-courses-block-btn-validate-message-top__title">
                        Что нужно заполнить?
                    </p>
                    <div className="potencial-courses-block-btn-validate-message-top-info">
                        <div className="potencial-courses-block-btn-validate-message-top-info-circle"></div>
                        <p className="potencial-courses-block-btn-validate-message-top-info__title">
                            - заполнено
                        </p>
                    </div>
                </div>

                <div className="potencial-courses-block-btn-validate-message-block">
                    <p className="potencial-courses-block-btn-validate-message-block__subtitle">
                        Информация о курсе
                    </p>
                    <p
                        className={`potencial-courses-block-btn-validate-message-block__item ${
                            !errors.title ? "active" : ""
                        }`}
                    >
                        Название
                    </p>
                    <p
                        className={`potencial-courses-block-btn-validate-message-block__item ${
                            !errors.description ? "active" : ""
                        }`}
                    >
                        Описание
                    </p>
                    <p
                        className={`potencial-courses-block-btn-validate-message-block__item ${
                            !errors.category ? "active" : ""
                        }`}
                    >
                        Направление
                    </p>
                    <p
                        className={`potencial-courses-block-btn-validate-message-block__item ${
                            !errors.image ? "active" : ""
                        }`}
                    >
                        Фото курса
                    </p>
                </div>

                {values &&
                    values.lessons &&
                    values.lessons.map((lesson, index) => (
                        <div
                            className="potencial-courses-block-btn-validate-message-block"
                            key={`potencial-courses-block-btn-validate-message-block-${index}`}
                        >
                            <p className="potencial-courses-block-btn-validate-message-block__subtitle">
                                Урок #{index + 1}
                            </p>
                            <p
                                className={`potencial-courses-block-btn-validate-message-block__item ${
                                    errors &&
                                    errors.lessons &&
                                    errors.lessons[index] &&
                                    errors.lessons[index].title
                                        ? ""
                                        : "active"
                                }`}
                            >
                                Название
                            </p>
                            <p
                                className={`potencial-courses-block-btn-validate-message-block__item ${
                                    errors &&
                                    errors.lessons &&
                                    errors.lessons[index] &&
                                    errors.lessons[index].description
                                        ? ""
                                        : "active"
                                }`}
                            >
                                Описание
                            </p>
                            <p
                                className={`potencial-courses-block-btn-validate-message-block__item ${
                                    errors &&
                                    errors.lessons &&
                                    errors.lessons[index] &&
                                    errors.lessons[index].image
                                        ? ""
                                        : "active"
                                }`}
                            >
                                Фото урока
                            </p>

                            {lesson.materials &&
                                lesson.materials.map((material, subindex) => (
                                    <div
                                        className="potencial-courses-block-btn-validate-message-block-subblock"
                                        key={`potencial-courses-block-btn-validate-message-block-${index}-subblock-${subindex}`}
                                    >
                                        <p className="potencial-courses-block-btn-validate-message-block-subblock__subtitle">
                                            Материал #{subindex + 1}
                                        </p>

                                        <p
                                            className={`potencial-courses-block-btn-validate-message-block-subblock__item ${
                                                errors &&
                                                errors.lessons &&
                                                errors.lessons[index] &&
                                                errors.lessons[index]
                                                    .materials &&
                                                errors.lessons[index].materials[
                                                    subindex
                                                ] &&
                                                errors.lessons[index].materials[
                                                    subindex
                                                ].title
                                                    ? ""
                                                    : "active"
                                            }`}
                                        >
                                            Название
                                        </p>
                                        <p
                                            className={`potencial-courses-block-btn-validate-message-block-subblock__item ${
                                                errors &&
                                                errors.lessons &&
                                                errors.lessons[index] &&
                                                errors.lessons[index]
                                                    .materials &&
                                                errors.lessons[index].materials[
                                                    subindex
                                                ] &&
                                                errors.lessons[index].materials[
                                                    subindex
                                                ].file
                                                    ? ""
                                                    : "active"
                                            }`}
                                        >
                                            Файл
                                        </p>
                                    </div>
                                ))}

                            <p
                                className={`potencial-courses-block-btn-validate-message-block__item ${
                                    files[index] && files[index].isLoad
                                        ? "loaded"
                                        : ""
                                } ${
                                    (errors &&
                                        errors.lessons &&
                                        errors.lessons[index] &&
                                        errors.lessons[index].video) ||
                                    (files[index] && files[index].isLoad)
                                        ? ""
                                        : "active"
                                }`}
                            >
                                Видео{" "}
                                {files[index] && files[index].isLoad
                                    ? "(загружается)"
                                    : ""}
                            </p>
                        </div>
                    ))}

                {isPayment ? (
                    <div className="potencial-courses-block-btn-validate-message-block">
                        <p className="potencial-courses-block-btn-validate-message-block__subtitle">
                            Платежная информация
                        </p>
                        <p
                            className={`potencial-courses-block-btn-validate-message-block__item ${
                                !errors.name ? "active" : ""
                            }`}
                        >
                            Имя и фамилия получателя
                        </p>
                        <p
                            className={`potencial-courses-block-btn-validate-message-block__item ${
                                !errors.numberCard ? "active" : ""
                            }`}
                        >
                            Номер каты
                        </p>
                    </div>
                ) : null}
            </div>
        </div>
    );
};

export default PotencialCoursesValidateMessage;

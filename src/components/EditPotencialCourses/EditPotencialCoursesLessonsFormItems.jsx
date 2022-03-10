import React from "react";
import {useSelector} from "react-redux";
import {Field, FieldArray} from "redux-form";

import {
    RenderInput,
    RenderInputAutoSize,
    RenderImageInput,
    RenderVideoInput,
    EditPotencialCoursesLessonsFormItemsMaterials,
    EditPotencialCoursesLessonsFormItemsTimecodes,
} from "../";

const AddPotencialCoursesLessonsFormItems = ({fields}) => {
    const {potencialCourseById} = useSelector(
        ({potencial_courses}) => potencial_courses
    );

    const addLesson = () => {
        fields.push({});
    };

    const removeLesson = (index) => {
        if (index) fields.remove(index);
    };

    return (
        <>
            {fields.map((lesson, index) => (
                <div
                    className="add-potencial-courses-block-form-block"
                    key={`add-potencial-courses-block-form-block-${index}`}
                >
                    <div className="add-potencial-courses-block-form-block-subblock">
                        <div className="add-potencial-courses-block-form-block-top">
                            <h3 className="add-potencial-courses-block-form-block-top__title">
                                Урок #{index + 1}
                            </h3>

                            {index !== 0 ? (
                                <div
                                    className="add-potencial-courses-block-form-block-top-close"
                                    onClick={() => removeLesson(index)}
                                >
                                    <svg
                                        width="15"
                                        height="15"
                                        viewBox="0 0 15 15"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M15 0.883783L14.1162 0L7.5 6.61621L0.883783 0L0 0.883783L6.61621 7.5L0 14.1162L0.883783 15L7.5 8.38378L14.1162 15L15 14.1162L8.38378 7.5L15 0.883783Z"
                                            fill="black"
                                        />
                                    </svg>
                                </div>
                            ) : null}
                        </div>
                        <div className="add-potencial-courses-block-form-block-input">
                            <Field
                                component={RenderInput}
                                type="text"
                                name={`${lesson}.title`}
                                label="Название"
                            />
                        </div>
                        <div className="add-potencial-courses-block-form-block-input">
                            <Field
                                component={RenderInputAutoSize}
                                type="text"
                                name={`${lesson}.description`}
                                label="Описание"
                            />
                        </div>
                        <div className="add-potencial-courses-block-form-block-input">
                            <Field
                                component={RenderImageInput}
                                name={`${lesson}.image`}
                                label="Фотография урока"
                                defaultValue={
                                    potencialCourseById.lessons[index] &&
                                    potencialCourseById.lessons[index].image
                                }
                            />
                        </div>
                    </div>

                    <div className="add-potencial-courses-block-form-block-subblock">
                        <h3 className="add-potencial-courses-block-form-block-subblock__title">
                            Материалы
                        </h3>

                        <div className="add-potencial-courses-block-form-block-input">
                            <FieldArray
                                component={
                                    EditPotencialCoursesLessonsFormItemsMaterials
                                }
                                name={`${lesson}.materials`}
                                materialsValue={
                                    potencialCourseById.lessons[index] &&
                                    potencialCourseById.lessons[index].materials
                                }
                            />
                        </div>
                    </div>

                    <div className="add-potencial-courses-block-form-block-subblock">
                        <h3 className="add-potencial-courses-block-form-block-subblock__title">
                            Таймкоды
                        </h3>

                        <div className="add-potencial-courses-block-form-block-input">
                            <FieldArray
                                component={
                                    EditPotencialCoursesLessonsFormItemsTimecodes
                                }
                                name={`${lesson}.timecodes`}
                                timecodesValue={
                                    potencialCourseById.lessons[index] &&
                                    potencialCourseById.lessons[index].timecodes
                                }
                            />
                        </div>
                    </div>

                    <div className="add-potencial-courses-block-form-block-subblock">
                        <h3 className="add-potencial-courses-block-form-block-subblock__title">
                            Видео
                        </h3>

                        <div className="add-potencial-courses-block-form-block-input">
                            <Field
                                component={RenderVideoInput}
                                name={`${lesson}.video`}
                                label="Допустимые расширения (.mp4, .avi, .mov, .mpeg, .webm)"
                                defaultValue={
                                    potencialCourseById.lessons[index] &&
                                    potencialCourseById.lessons[index].video
                                        .fileName
                                }
                            />
                        </div>
                    </div>
                </div>
            ))}

            <button
                type="button"
                onClick={addLesson}
                className="btn__gray add-potencial-courses-block-form__btn"
            >
                Добавить урок
                <svg
                    width="17"
                    height="17"
                    viewBox="0 0 17 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M0 8H16.2917" stroke="black" />
                    <path d="M8 0V16.2917" stroke="black" />
                </svg>
            </button>
        </>
    );
};

export default AddPotencialCoursesLessonsFormItems;

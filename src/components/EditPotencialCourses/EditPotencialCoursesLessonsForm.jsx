import React from "react";
import {useSelector} from "react-redux";
import {FieldArray} from "redux-form";

import {EditPotencialCoursesLessonsFormItems, BtnLoader} from "../";

const EditPotencialCoursesLessonsForm = ({valid}) => {
    const {isSendSubmitModerationCourse} = useSelector(
        ({potencial_courses}) => potencial_courses
    );

    return (
        <div className="potencial-courses-block">
            <div className="potencial-courses-block-text">
                <span className="subtitle__mb potencial-courses-block-text__subtitle">
                    2 этап
                </span>

                <h2 className="potencial-courses-block-text__title">
                    Уроки в курсе
                </h2>
            </div>

            <div className="potencial-courses-block-form">
                <div className="potencial-courses-block-form-input">
                    <FieldArray
                        component={EditPotencialCoursesLessonsFormItems}
                        name="lessons"
                    />
                </div>

                {isSendSubmitModerationCourse ? (
                    <button
                        className="btn potencial-courses-block-form__btn disabled"
                        disabled
                    >
                        <BtnLoader />
                    </button>
                ) : (
                    <button
                        className={`btn ${
                            valid ? "disabled" : ""
                        } potencial-courses-block-form__btn`}
                        disabled={valid}
                    >
                        Отправить курс на модерацию
                    </button>
                )}
            </div>
        </div>
    );
};

export default EditPotencialCoursesLessonsForm;

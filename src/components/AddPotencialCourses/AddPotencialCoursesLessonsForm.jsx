import React from "react";
import {useSelector} from "react-redux";
import {FieldArray} from "redux-form";

import {AddPotencialCoursesLessonsFormItems, BtnLoader} from "../";

const AddPotencialCoursesLessonsForm = ({valid}) => {
    const {isSendPotencialCourse} = useSelector(
        ({potencial_courses}) => potencial_courses
    );

    return (
        <div className="add-potencial-courses-block">
            <div className="add-potencial-courses-block-text">
                <span className="subtitle__mb add-potencial-courses-block-text__subtitle">
                    2 этап
                </span>

                <h2 className="add-potencial-courses-block-text__title">
                    Уроки в курсе
                </h2>
            </div>

            <div className="add-potencial-courses-block-form">
                <div className="add-potencial-courses-block-form-input">
                    <FieldArray
                        component={AddPotencialCoursesLessonsFormItems}
                        name="lessons"
                    />
                </div>

                {isSendPotencialCourse ? (
                    <button
                        className="btn add-potencial-courses-block-form__btn disabled"
                        disabled
                    >
                        <BtnLoader />
                    </button>
                ) : (
                    <button
                        className={`btn ${
                            valid ? "disabled" : ""
                        } add-potencial-courses-block-form__btn`}
                        disabled={valid}
                    >
                        Отправить курс на модерацию (около 3 минут)
                    </button>
                )}
            </div>
        </div>
    );
};

export default AddPotencialCoursesLessonsForm;

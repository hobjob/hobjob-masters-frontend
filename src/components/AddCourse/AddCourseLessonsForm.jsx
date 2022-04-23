import React from "react";
import {FieldArray} from "redux-form";

import {AddCourseLessonsFormItems} from "../";

const AddCourseLessonsForm = () => {
    return (
        <div className="potencial-courses-block">
            <div className="potencial-courses-block-text">
                <span className="subtitle__mb potencial-courses-block-text__subtitle">
                    2 этап
                </span>

                <h2 className="potencial-courses-block-text__title">
                    Уроки в курсе
                </h2>

                <a
                    href="/course-regulations/course-quality-guide"
                    className="potencial-courses-block-text__link"
                >
                    Рекомендации по созданию уроков
                </a>
            </div>

            <div className="potencial-courses-block-form">
                <div className="potencial-courses-block-form-input">
                    <FieldArray
                        component={AddCourseLessonsFormItems}
                        name="lessons"
                    />
                </div>
            </div>
        </div>
    );
};

export default AddCourseLessonsForm;

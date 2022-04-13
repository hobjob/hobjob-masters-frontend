import React from "react";
import {FieldArray} from "redux-form";

import {DraftEditLessonsFormItems} from "../";

const DraftEditLessonsForm = () => {
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
                        component={DraftEditLessonsFormItems}
                        name="lessons"
                    />
                </div>
            </div>
        </div>
    );
};

export default DraftEditLessonsForm;

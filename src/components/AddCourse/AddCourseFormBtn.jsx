import React from "react";
import {useSelector} from "react-redux";

import {BtnLoader} from "../";

const AddCourseFormBtn = ({valid, sendCreateDraft}) => {
    const {isSendSubmitModerationCourse} = useSelector(
        ({potencial_courses}) => potencial_courses
    );
    const {isSendCreateDraft} = useSelector(({draft}) => draft);
    const {isLoadsGlobal} = useSelector(({video}) => video);

    return (
        <div className="potencial-courses-block-btn">
            {isSendCreateDraft ? (
                <button
                    className="btn potencial-courses-block-btn__btn disabled"
                    disabled
                >
                    <BtnLoader />
                </button>
            ) : (
                <button
                    onClick={sendCreateDraft}
                    type="button"
                    className={`btn-regular ${
                        isSendSubmitModerationCourse || isLoadsGlobal
                            ? "disabled"
                            : ""
                    } potencial-courses-block-btn__btn`}
                    disabled={
                        isSendSubmitModerationCourse || isLoadsGlobal
                            ? true
                            : false
                    }
                >
                    Сохранить в черновики
                </button>
            )}

            {isSendSubmitModerationCourse ? (
                <button
                    className="btn potencial-courses-block-btn__btn disabled"
                    disabled
                >
                    <BtnLoader />
                </button>
            ) : (
                <button
                    className={`btn ${
                        valid ? "disabled" : ""
                    } potencial-courses-block-btn__btn`}
                    disabled={valid}
                >
                    Отправить курс на модерацию
                </button>
            )}
        </div>
    );
};

export default AddCourseFormBtn;

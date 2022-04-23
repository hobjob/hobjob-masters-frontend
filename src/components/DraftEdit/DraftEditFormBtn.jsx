import React from "react";
import {useSelector} from "react-redux";

import {BtnLoader} from "../";

const DraftEditFormBtn = ({valid}) => {
    const {isSendSubmitModerationCourse} = useSelector(
        ({potencial_courses}) => potencial_courses
    );
    const {itemById} = useSelector(({draft}) => draft);

    return (
        <div className="potencial-courses-block-btn">
            <div className="potencial-courses-block-btn-status-draft">
                <p className="potencial-courses-block-btn-status-draft__title">
                    Все хорошо, мы сохранили ваш черновик в {itemById.updateDate}
                </p>
            </div>

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

export default DraftEditFormBtn;

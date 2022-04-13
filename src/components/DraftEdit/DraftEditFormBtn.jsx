import React from "react";
import {useSelector, connect} from "react-redux";
import {getFormValues} from "redux-form";

import {BtnLoader} from "../";

const DraftEditFormBtn = ({valid, values, sendUpdateDraft}) => {
    const {isSendSubmitModerationCourse} = useSelector(
        ({potencial_courses}) => potencial_courses
    );
    const {isSendUpdateDraft} = useSelector(({draft}) => draft);

    const [title, setTitle] = React.useState("");

    React.useEffect(() => {
        if (values) {
            setTitle(values.title);
        }
    }, [values]);

    return (
        <div className="potencial-courses-block-btn">
            {isSendUpdateDraft ? (
                <button
                    className="btn potencial-courses-block-btn__btn disabled"
                    disabled
                >
                    <BtnLoader />
                </button>
            ) : (
                <button
                    onClick={() => sendUpdateDraft(values)}
                    type="button"
                    className={`btn-regular ${
                        title === "" || title === undefined ? "disabled" : ""
                    } potencial-courses-block-btn__btn`}
                    disabled={
                        title === "" || title === undefined ? true : false
                    }
                >
                    Сохранить черновик
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

export default connect((state) => ({
    values: getFormValues("potencial-courses-info-form")(state),
}))(DraftEditFormBtn);

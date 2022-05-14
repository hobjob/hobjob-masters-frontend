import React from "react";
import {useSelector, connect} from "react-redux";
import {getFormSyncErrors, getFormValues} from "redux-form";

import {BtnLoader, PotencialCoursesValidateMessage} from "../";

const AddCourseFormBtn = ({valid, sendCreateDraft, errors, values}) => {
    const [stateErrorsMessage, setStateErrorsMessage] = React.useState(false);
    const [
        stateErrorsMessageAnimationClose,
        setStateErrorsMessageAnimationClose,
    ] = React.useState(false);

    const {isSendSubmitModerationCourse} = useSelector(
        ({potencial_courses}) => potencial_courses
    );
    const {isSendCreateDraft} = useSelector(({draft}) => draft);
    const {files, isLoadsGlobal} = useSelector(({video}) => video);
    const {masterInfo} = useSelector(({master}) => master);

    const ErrorMessageRef = React.useRef();

    React.useEffect(() => {
        document.body.addEventListener("click", clickEventStateErrorsMessage);
    }, []);

    const openStateErrorsMessage = () => {
        setTimeout(() => {
            setStateErrorsMessage(true);
        }, 1);
    };

    const closeStateErrorsMessage = () => {
        setStateErrorsMessageAnimationClose(true);

        setTimeout(() => {
            setStateErrorsMessageAnimationClose(false);
            setStateErrorsMessage(false);
        }, 180);
    };

    const clickEventStateErrorsMessage = (e) => {
        if (
            ErrorMessageRef.current &&
            !e.composedPath().includes(ErrorMessageRef.current)
        ) {
            closeStateErrorsMessage();
        }
    };

    return (
        <div className="potencial-courses-block-btn">
            {stateErrorsMessage ? (
                <PotencialCoursesValidateMessage
                    errors={errors}
                    values={values}
                    isPayment={masterInfo.paymentInfo.name === ""}
                    stateErrorsMessageAnimationClose={
                        stateErrorsMessageAnimationClose
                    }
                    ErrorMessageRef={ErrorMessageRef}
                    files={files}
                />
            ) : null}

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
                    className="btn disabled potencial-courses-block-btn__btn"
                    disabled
                >
                    <BtnLoader />
                </button>
            ) : valid || isLoadsGlobal ? (
                <button
                    className="btn disabled potencial-courses-block-btn__btn potencial-courses-block-btn__btn-moderation"
                    type="button"
                    onClick={openStateErrorsMessage}
                >
                    Отправить курс на модерацию{" "}
                    {valid || isLoadsGlobal ? <span>?</span> : null}
                </button>
            ) : (
                <button
                    className="btn potencial-courses-block-btn__btn"
                    type="submit"
                >
                    Отправить курс на модерацию
                </button>
            )}
        </div>
    );
};

export default connect((state) => ({
    errors: getFormSyncErrors("add-potencial-courses-info-form")(state),
    values: getFormValues("add-potencial-courses-info-form")(state),
}))(AddCourseFormBtn);

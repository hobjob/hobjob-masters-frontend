import React from "react";
import {useSelector, connect} from "react-redux";
import {FieldArray, getFormSyncErrors, getFormValues} from "redux-form";

import {
    EditRejectModerationCoursesLessonsFormItems,
    BtnLoader,
    PotencialCoursesValidateMessage,
} from "../";

const EditRejectModerationCoursesLessonsForm = ({valid, errors, values}) => {
    const [stateErrorsMessage, setStateErrorsMessage] = React.useState(false);
    const [
        stateErrorsMessageAnimationClose,
        setStateErrorsMessageAnimationClose,
    ] = React.useState(false);

    const {isSendSubmitModerationCourse} = useSelector(
        ({potencial_courses}) => potencial_courses
    );
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
                        component={EditRejectModerationCoursesLessonsFormItems}
                        name="lessons"
                    />
                </div>
                <div className="potencial-courses-block-form-btn">
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

                    {isSendSubmitModerationCourse ? (
                        <button
                            className="btn disabled potencial-courses-block-form__btn"
                            disabled
                        >
                            <BtnLoader />
                        </button>
                    ) : valid || isLoadsGlobal ? (
                        <button
                            className="btn disabled potencial-courses-block-form__btn potencial-courses-block-form__btn-moderation"
                            type="button"
                            onClick={openStateErrorsMessage}
                        >
                            Отправить курс на модерацию{" "}
                            {valid || isLoadsGlobal ? <span>?</span> : null}
                        </button>
                    ) : (
                        <button
                            className="btn potencial-courses-block-form__btn"
                            type="submit"
                        >
                            Отправить курс на модерацию
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default connect((state) => ({
    errors: getFormSyncErrors("edit-potencial-courses-info-form")(state),
    values: getFormValues("edit-potencial-courses-info-form")(state),
}))(EditRejectModerationCoursesLessonsForm);

import React from "react";
import {useSelector, connect} from "react-redux";
import {getFormSyncErrors, getFormValues} from "redux-form";

import {BtnLoader, PotencialCoursesValidateMessage} from "../";

const DraftEditFormBtn = ({valid, errors, values}) => {
    const [stateErrorsMessage, setStateErrorsMessage] = React.useState(false);
    const [
        stateErrorsMessageAnimationClose,
        setStateErrorsMessageAnimationClose,
    ] = React.useState(false);

    const {isSendSubmitModerationCourse} = useSelector(
        ({potencial_courses}) => potencial_courses
    );
    const {itemById} = useSelector(({draft}) => draft);
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

            <div className="potencial-courses-block-btn-status-draft">
                <p className="potencial-courses-block-btn-status-draft__title">
                    Все хорошо, мы сохранили ваш черновик в{" "}
                    {itemById.updateDate}
                </p>
            </div>

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
    errors: getFormSyncErrors("draft-potencial-courses-info-form")(state),
    values: getFormValues("draft-potencial-courses-info-form")(state),
}))(DraftEditFormBtn);

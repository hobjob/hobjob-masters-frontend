import React from "react";
import {useSelector} from "react-redux";
import {reduxForm} from "redux-form";

import {
    DraftEditInfoForm,
    DraftEditLessonsForm,
    DraftEditPaymentForm,
    DraftEditFormBtn,
} from "../";

import validate from "./validate";

let DraftEditForm = ({
    handleSubmit,
    initialize,
    invalid,
    submitting,
    pristine,
    sendUpdateDraft,
}) => {
    const {masterInfo} = useSelector(({master}) => master);
    const {itemById} = useSelector(({draft}) => draft);

    React.useEffect(() => {
        initialize(itemById);
    }, []);

    return (
        <form onSubmit={handleSubmit}>
            <DraftEditInfoForm />

            <DraftEditLessonsForm />

            {masterInfo.paymentInfo.name === "" ? (
                <DraftEditPaymentForm />
            ) : null}

            <DraftEditFormBtn
                valid={invalid || submitting}
                sendUpdateDraft={sendUpdateDraft}
            />
        </form>
    );
};

DraftEditForm = reduxForm({
    form: "potencial-courses-info-form",
    validate,
})(DraftEditForm);

export default DraftEditForm;

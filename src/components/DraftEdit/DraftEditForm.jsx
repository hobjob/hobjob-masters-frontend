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
    sendUpdateDraftOn,
    dirty,
}) => {
    const {masterInfo} = useSelector(({master}) => master);
    const {itemById} = useSelector(({draft}) => draft);

    React.useEffect(() => {
        initialize(itemById);
    }, []);

    const sendUpdateDraftOnDirty = (
        valuesFile,
        ignoreLessonIndex,
        ignoreLessonMaterialsIndex
	) => {
        if (dirty) {
            sendUpdateDraftOn(
                valuesFile,
                ignoreLessonIndex,
                ignoreLessonMaterialsIndex
            );
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <DraftEditInfoForm
                sendUpdateDraftOnDirty={sendUpdateDraftOnDirty}
                sendUpdateDraftOn={sendUpdateDraftOn}
            />

            <DraftEditLessonsForm
                sendUpdateDraftOnDirty={sendUpdateDraftOnDirty}
                sendUpdateDraftOn={sendUpdateDraftOn}
            />

            {masterInfo.paymentInfo.name === "" ? (
                <DraftEditPaymentForm />
            ) : null}

            <DraftEditFormBtn valid={invalid || submitting} />
        </form>
    );
};

DraftEditForm = reduxForm({
    form: "draft-potencial-courses-info-form",
    validate,
})(DraftEditForm);

export default DraftEditForm;

import React from "react";
import {useSelector} from "react-redux";
import {reduxForm} from "redux-form";

import {
    AddCourseInfoForm,
    AddCourseLessonsForm,
    AddCoursePaymentForm,
    AddCourseFormBtn,
} from "../";

import validate from "./validate";

let AddCourseForm = ({handleSubmit, invalid, submitting, sendCreateDraft}) => {
    const {masterInfo} = useSelector(({master}) => master);

    return (
        <form onSubmit={handleSubmit}>
            <AddCourseInfoForm />

            <AddCourseLessonsForm />

            {masterInfo.paymentInfo.name === "" ? (
                <AddCoursePaymentForm />
            ) : null}

            <AddCourseFormBtn
                valid={invalid || submitting}
                sendCreateDraft={sendCreateDraft}
            />
        </form>
    );
};

AddCourseForm = reduxForm({
    form: "add-potencial-courses-info-form",
    validate,
})(AddCourseForm);

export default AddCourseForm;

import React from "react";
import {useSelector} from "react-redux";
import {reduxForm} from "redux-form";

import {
    AddPotencialCoursesInfoForm,
    AddPotencialCoursesLessonsForm,
    AddPotencialCoursesPaymentForm,
} from "../";

import validate from "./validate";

let AddPotencialCoursesForm = ({
    handleSubmit,
    invalid,
    submitting,
    pristine,
}) => {
    const {masterInfo} = useSelector(({master}) => master);

    return (
        <form onSubmit={handleSubmit}>
            <AddPotencialCoursesInfoForm />

            <AddPotencialCoursesLessonsForm
                valid={invalid || submitting || pristine}
                btnVisible={masterInfo.paymentInfo.name !== ""}
            />

            {masterInfo.paymentInfo.name === "" ? (
                <AddPotencialCoursesPaymentForm
                    valid={invalid || submitting || pristine}
                />
            ) : null}
        </form>
    );
};

AddPotencialCoursesForm = reduxForm({
    form: "add-potencial-courses-info-form",
    validate,
})(AddPotencialCoursesForm);

export default AddPotencialCoursesForm;

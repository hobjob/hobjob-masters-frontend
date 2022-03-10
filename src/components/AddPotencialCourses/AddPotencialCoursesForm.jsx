import React from "react";
import {reduxForm} from "redux-form";

import {AddPotencialCoursesInfoForm, AddPotencialCoursesLessonsForm} from "../";

import validate from "./validate";

let AddPotencialCoursesForm = ({
    handleSubmit,
    invalid,
    submitting,
    pristine,
}) => {
    return (
        <form onSubmit={handleSubmit}>
            <AddPotencialCoursesInfoForm />

            <AddPotencialCoursesLessonsForm
                valid={invalid || submitting || pristine}
            />
        </form>
    );
};

AddPotencialCoursesForm = reduxForm({
    form: "add-potencial-courses-info-form",
    validate,
})(AddPotencialCoursesForm);

export default AddPotencialCoursesForm;

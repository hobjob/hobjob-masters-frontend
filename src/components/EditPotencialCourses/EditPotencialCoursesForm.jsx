import React from "react";

import {reduxForm} from "redux-form";
import {useSelector} from "react-redux";

import {
    EditPotencialCoursesInfoForm,
    EditPotencialCoursesLessonsForm,
} from "../";

import validate from "./validate";

let EditPotencialCoursesForm = ({
    handleSubmit,
    invalid,
    submitting,
    pristine,
    initialize,
}) => {
    const {moderationCourseById} = useSelector(
        ({potencial_courses}) => potencial_courses
    );

    React.useEffect(() => {
        initialize(moderationCourseById);
    }, []);

    return (
        <form onSubmit={handleSubmit}>
            <EditPotencialCoursesInfoForm />

            <EditPotencialCoursesLessonsForm
                valid={invalid || submitting || pristine}
            />
        </form>
    );
};

EditPotencialCoursesForm = reduxForm({
    form: "edit-potencial-courses-info-form",
    validate,
})(EditPotencialCoursesForm);

export default EditPotencialCoursesForm;

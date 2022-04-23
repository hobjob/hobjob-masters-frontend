import React from "react";

import {reduxForm} from "redux-form";
import {useSelector} from "react-redux";

import {
    EditRejectModerationCoursesInfoForm,
    EditRejectModerationCoursesLessonsForm,
} from "../";

import validate from "./validate";

let EditRejectModerationCoursesForm = ({
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
            <EditRejectModerationCoursesInfoForm />

            <EditRejectModerationCoursesLessonsForm
                valid={invalid || submitting || pristine}
            />
        </form>
    );
};

EditRejectModerationCoursesForm = reduxForm({
    form: "edit-potencial-courses-info-form",
    validate,
})(EditRejectModerationCoursesForm);

export default EditRejectModerationCoursesForm;

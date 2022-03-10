import React from "react";
import {reduxForm} from "redux-form";

import validate from "./validate";

import {RegisterFormOne, RegisterFormTwo, RegisterFormThree} from "../../";

let RegisterForm = ({handleSubmit, invalid, submitting, pristine}) => {
    const [index, setIndex] = React.useState(1);

    const plusIndex = () => {
        setIndex(index + 1);
    };

    return (
        <form onSubmit={handleSubmit}>
            {index == 1 ? (
                <RegisterFormOne
                    plusIndex={plusIndex}
                    valid={invalid || submitting || pristine}
                />
            ) : null}
            {index == 2 ? (
                <RegisterFormTwo
                    plusIndex={plusIndex}
                    valid={invalid || submitting || pristine}
                />
            ) : null}
            {index == 3 ? (
                <RegisterFormThree valid={invalid || submitting || pristine} />
            ) : null}
        </form>
    );
};

RegisterForm = reduxForm({
    form: "register",
    validate,
})(RegisterForm);

export default RegisterForm;

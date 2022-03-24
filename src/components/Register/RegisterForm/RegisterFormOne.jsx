import React from "react";

import {Field} from "redux-form";

import {RenderInput} from "../../";

const RegisterFormOne = ({plusIndex, valid}) => {
    return (
        <div className="reglog-block">
            <span className="reglog-block__number">1 / 3</span>

            <div className="reglog-block-title">
                <h2 className="reglog-block__title">Давайте знакомиться?</h2>
            </div>
            <div className="reglog-block-input">
                <Field
                    component={RenderInput}
                    type="name"
                    name="name"
                    label="Ваше имя"
                />
            </div>
            <div className="reglog-block-input">
                <Field
                    component={RenderInput}
                    type="name"
                    name="surname"
                    label="Ваша фамилия"
                />
            </div>

            <button
                className={`btn ${valid ? "disabled" : ""} reglog-block__btn`}
                onClick={plusIndex}
                disabled={valid}
            >
                Далее
            </button>
        </div>
    );
};

export default RegisterFormOne;

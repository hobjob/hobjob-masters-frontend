import React from "react";

import {Field} from "redux-form";

import {RenderInput, RenderImageInput} from "../../";

const RegisterFormTwo = ({plusIndex, valid}) => {
    return (
        <div className="reglog-block">
            <span className="reglog-block__number">2 / 3</span>

            <div className="reglog-block-title">
                <h2 className="reglog-block__title">Расскажите о себе</h2>
            </div>

            <div className="reglog-block-input file">
                <Field
                    component={RenderImageInput}
                    name="avatar"
                    label="Ваша фотография"
                />
            </div>

            <div className="reglog-block-input">
                <Field
                    component={RenderInput}
                    type="text"
                    name="masterDescription"
                    label="Расскажите о себе"
                    autoSize
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

export default RegisterFormTwo;

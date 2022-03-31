import React from "react";

import {Field} from "redux-form";

import {RenderInputAutoSize, RenderImageInput} from "../../";

const RegisterFormTwo = ({plusIndex, valid}) => {
    return (
        <div className="reglog-block">
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
                    component={RenderInputAutoSize}
                    type="text"
                    name="masterDescription"
                    label="Расскажите о себе"
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

import React from "react";
import {useSelector} from "react-redux";
import {Field, reduxForm} from "redux-form";

import {RenderInput, BtnLoader} from "../";

import {validatePassword as validate} from "./validatePassword";

let CabinetMasterPassword = ({handleSubmit, invalid, submitting, pristine}) => {
    const {isSendUpdateUserPassword} = useSelector(({master}) => master);

    const [passwordState1, setPasswordState1] = React.useState(false);
    const [passwordState2, setPasswordState2] = React.useState(false);
    const [passwordState3, setPasswordState3] = React.useState(false);

    const onClickSetPasswordState1 = () => {
        setPasswordState1(!passwordState1);
    };

    const onClickSetPasswordState2 = () => {
        setPasswordState2(!passwordState2);
    };

    const onClickSetPasswordState3 = () => {
        setPasswordState3(!passwordState3);
    };

    return (
        <form className="cabinet-block-form" onSubmit={handleSubmit}>
            <div className="cabinet-block-form-input">
                <Field
                    component={RenderInput}
                    setStatePasswordFunc={onClickSetPasswordState1}
                    passwordState={passwordState1}
                    type="password"
                    name="currentPassword"
                    label="Текущий пароль"
                />
            </div>
            <div className="cabinet-block-form-input">
                <Field
                    component={RenderInput}
                    setStatePasswordFunc={onClickSetPasswordState2}
                    passwordState={passwordState2}
                    type="password"
                    name="newPassword"
                    label="Новый пароль"
                />
            </div>
            <div className="cabinet-block-form-input">
                <Field
                    component={RenderInput}
                    setStatePasswordFunc={onClickSetPasswordState3}
                    passwordState={passwordState3}
                    type="password"
                    name="newPasswordRepeat"
                    label="Повторите новый пароль"
                />
            </div>
            {isSendUpdateUserPassword ? (
                <button
                    className="btn disabled cabinet-block-form-btn"
                    disabled
                >
                    <BtnLoader />
                </button>
            ) : (
                <button
                    className={`btn ${
                        invalid ? "disabled" : ""
                    } cabinet-block-form-btn`}
                    disabled={invalid || submitting || pristine}
                >
                    Обновить
                </button>
            )}
        </form>
    );
};

CabinetMasterPassword = reduxForm({
    form: "cabinet-master-password-form",
    validate,
})(CabinetMasterPassword);

export default CabinetMasterPassword;

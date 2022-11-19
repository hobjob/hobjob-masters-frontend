import React from "react";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {Field, reduxForm} from "redux-form";

import {RenderInput, BtnLoader} from "../";

import validate from "./validate";

let LoginForm = ({handleSubmit, registerLink}) => {
    const [passwordState, setPasswordState] = React.useState(false);

    const {isSend} = useSelector(({login}) => login);

    const onClickSetPasswordState = () => {
        setPasswordState(!passwordState);
    };

    return (
        <form className="reglog-block" onSubmit={handleSubmit}>
            <div className="reglog-block-title">
                <h2 className="reglog-block__title">Войти</h2>
                <Link
                    to={registerLink ? registerLink : "/go/register"}
                    className="reglog-block__subtitle"
                >
                    Зарегистрироваться
                </Link>
            </div>

            <div className="reglog-block-input">
                <Field
                    component={RenderInput}
                    type="text"
                    name="email"
                    label="Email"
                />
            </div>
            <div className="reglog-block-input">
                <Field
                    component={RenderInput}
                    setStatePasswordFunc={onClickSetPasswordState}
                    passwordState={passwordState}
                    type="password"
                    name="password"
                    label="Пароль"
                />
            </div>

            {isSend ? (
                <button className="btn reglog-block__btn disabled" disabled>
                    <BtnLoader />
                </button>
            ) : (
                <button className="btn reglog-block__btn">Войти</button>
            )}

            <div className="reglog-block-recovery">
                <Link
                    to="/go/password-recovery"
                    className="reglog-block-recovery__link"
                >
                    Забыли пароль?
                </Link>
            </div>
        </form>
    );
};

LoginForm = reduxForm({
    form: "login-form",
    validate,
})(LoginForm);

export default LoginForm;

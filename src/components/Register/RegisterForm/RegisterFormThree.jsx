import React from "react";
import {useSelector} from "react-redux";

import {Field} from "redux-form";

import {RenderInput, BtnLoader} from "../../";

const RegisterFormThree = ({valid}) => {
    const [passwordState, setPasswordState] = React.useState(false);

    const {isSend} = useSelector(({register}) => register);

    const onClickSetPasswordState = () => {
        setPasswordState(!passwordState);
    };

    return (
        <div className="reglog-block">
            <span className="reglog-block__number">3 / 3</span>

            <div className="reglog-block-title">
                <h2 className="reglog-block__title">Последний шаг</h2>
            </div>
            <div className="reglog-block-input">
                <Field
                    component={RenderInput}
                    type="email"
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
                <button
                    className={`btn ${
                        valid ? "disabled" : ""
                    } reglog-block__btn`}
                    disabled={valid}
                >
                    Зарегистрироваться
                </button>
            )}
            <span className="reglog-block__policy">
                Нажимая на кнопку, я соглашаюсь на обработку{" "}
                <a href="/policy">персональных данных</a> и с{" "}
                <a href="/regulations">правилами пользования Платформой</a>
            </span>
        </div>
    );
};

export default RegisterFormThree;

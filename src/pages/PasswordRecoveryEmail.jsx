import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {Helmet} from "react-helmet";

import {sendPasswordRecoveryEmail} from "../redux/actions/password_recovery";

import {
    PasswordRecoveryEmailForm,
    PasswordRecoveryEmailSuccess,
} from "../components/";

import Logo from "../assets/images/logo.svg";

const PasswordRecoveryEmail = () => {
    const dispatch = useDispatch();

    const {emailStatus} = useSelector(
        ({password_recovery}) => password_recovery
    );

    const onSubmit = ({email}) => {
        return dispatch(sendPasswordRecoveryEmail({email}));
    };

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Helmet>
                <title>Восстановить пароль - HobJob для мастеров</title>
            </Helmet>
            {!localStorage.getItem("accessToken") ? (
                <section className="reglog">
                    <div className="container">
                        <div className="reglog-wrapper">
                            <a href="/" className="reglog-logo">
                                <img
                                    src={Logo}
                                    alt="HobJob"
                                    className="reglog-logo__img"
                                />
							</a>
							
                            <div className="reglog-block-wrapper">
                                {emailStatus === "success" ? (
                                    <PasswordRecoveryEmailSuccess />
                                ) : (
                                    <PasswordRecoveryEmailForm
                                        onSubmit={onSubmit}
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                </section>
            ) : (
                (window.location.href = "/")
            )}
        </>
    );
};

export default PasswordRecoveryEmail;

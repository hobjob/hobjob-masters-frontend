import React from "react";
import {Link} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {Helmet} from "react-helmet";

import {RegisterForm} from "../components/";

import {sendRegister} from "../redux/actions/register";
import {fetchCategories} from "../redux/actions/categories";

import Logo from "../assets/images/logo.svg";

const Login = () => {
    const dispatch = useDispatch();

    const categories = useSelector(({categories}) => categories.items);

    const onSubmit = (data) => {
        const formData = new FormData();

        Object.keys(data).map((key) => {
            formData.append(key, data[key]);
        });

        return dispatch(sendRegister(formData));
    };

    React.useEffect(() => {
		window.scrollTo(0, 0);

        if (!Object.keys(categories).length) {
            dispatch(fetchCategories());
        }
    }, []);

    return (
        <>
            <Helmet>
                <title>Регистрация - HobJob для мастеров</title>
            </Helmet>
            {!localStorage.getItem("accessToken") ? (
                <section className="reglog">
                    <div className="container">
                        <div className="reglog-wrapper">
                            <Link to="/" className="reglog-logo">
                                <img
                                    src={Logo}
                                    alt="HobJob"
                                    className="reglog-logo__img"
                                />
                            </Link>

                            <div className="reglog-block-wrapper">
                                <RegisterForm onSubmit={onSubmit} />
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

export default Login;

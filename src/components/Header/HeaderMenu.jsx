import React from "react";
import {NavLink} from "react-router-dom";

const HeaderMenu = React.memo(() => {
    return (
        <nav className="header-nav">
            <NavLink
                to="/"
                className="header-nav__link"
                activeClassName="header-nav__link active"
            >
                Главная
            </NavLink>
            <NavLink
                to="/course-regulations"
                className="header-nav__link"
                activeClassName="header-nav__link active"
            >
                Рекомендации для мастеров
            </NavLink>
            <a
                href={process.env.REACT_APP_HOBJOB_DOMEN}
                className="header-nav__link nobg"
            >
                Платформа HobJob
            </a>
        </nav>
    );
});

export default HeaderMenu;

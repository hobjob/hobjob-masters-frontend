import React from "react";
import {NavLink} from "react-router-dom";

const HeaderMenu = React.memo(() => {
    const checkActive = (match, location) => {
        if (!location) return false;
        const {pathname} = location;

        return pathname === "/";
    };

    return (
        <nav className="header-nav">
            <NavLink
                to="/"
                className="header-nav__link"
                activeClassName="header-nav__link active"
                isActive={checkActive}
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
                className="header-nav__link"
            >
                Платформа HobJob
            </a>
        </nav>
    );
});

export default HeaderMenu;

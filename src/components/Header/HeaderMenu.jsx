import React from "react";
import {NavLink} from "react-router-dom";

const HeaderMenu = React.memo(() => {
    return (
        <nav className="header-nav">
            <NavLink
                to="/1"
                className="header-nav__link"
                activeClassName="header-nav__link active"
            >
                О нас
            </NavLink>
            <NavLink
                to="/1"
                className="header-nav__link"
                activeClassName="header-nav__link active"
            >
                Как добавить курс?
            </NavLink>
            <NavLink
                to="/course-regulations"
                className="header-nav__link"
                activeClassName="header-nav__link active"
            >
                Рекомендации для создания курса
            </NavLink>
        </nav>
    );
});

export default HeaderMenu;

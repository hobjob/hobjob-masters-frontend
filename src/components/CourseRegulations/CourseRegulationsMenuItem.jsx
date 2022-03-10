import React from "react";
import {Link} from "react-router-dom";

const CourseRegulationsMenuItem = ({index, title, subtitle}) => {
    const [stateOpen, setStateOpen] = React.useState(
        index === 0 ? true : false
    );

    const onClickMenu = () => {
        setStateOpen(!stateOpen);
    };

    return (
        <div className="course-regulations-menu-item" onClick={onClickMenu}>
            <p className="course-regulations-menu-item__title">{title}</p>

            <div
                className={`course-regulations-menu-item-list`}
                style={{height: stateOpen ? `${subtitle.length * 35}px` : 0}}
            >
                {subtitle.map((item, index) => (
                    <Link
                        to="/"
                        className="course-regulations-menu-item-list__title"
                        key={`course-regulations-menu-item-list__title-${index}`}
                    >
                        {item.title}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default CourseRegulationsMenuItem;

import React from "react";

import {Link, animateScroll as scroll} from "react-scroll";

const CourseRegulationsMenuItem = ({
    index,
    title,
    subtitle,
    onClickMenuAdaptive,
}) => {
    const [stateOpen, setStateOpen] = React.useState(
        index === 0 ? true : false
    );

    const onClickMenu = () => {
        setStateOpen(!stateOpen);
    };

    return (
        <div className="course-regulations-menu-item">
            <p
                className="course-regulations-menu-item__title"
                onClick={onClickMenu}
            >
                {title}
            </p>

            <div
                className={`course-regulations-menu-item-list`}
                style={{height: stateOpen ? `${subtitle.length * 40}px` : 0}}
            >
                {subtitle.map((item, index) => (
                    <Link
                        to={item.id}
                        spy={true}
                        smooth={true}
                        offset={window.screen.width > 1200 ? -125 : -600}
                        duration={500}
                        key={`course-regulations-menu-item-list__title-${index}`}
                    >
                        <span
                            className={`course-regulations-menu-item-list__title`}
                            onClick={onClickMenuAdaptive}
                        >
                            {item.title}
                        </span>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default CourseRegulationsMenuItem;

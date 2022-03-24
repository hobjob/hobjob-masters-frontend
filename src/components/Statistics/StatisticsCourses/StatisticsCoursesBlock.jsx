import React from "react";

import {checkDeclension} from "../../../Functions/checkDeclension";

const StatisticsCoursesBlock = ({
    image,
    countlessons,
    countMaterials,
    title,
    category,
    countStudents,
}) => {
    return (
        <div className="statistics-courses-block">
            <div className="statistics-courses-block-content">
                <div
                    className="statistics-courses-block-content-cover"
                    style={{
                        backgroundImage: `url('${`${process.env.REACT_APP_IMAGE_DOMEN}/${image}`}')`,
                    }}
                ></div>
                <div className="statistics-courses-block-content-text">
                    <div className="statistics-courses-block-content-text-item">
                        <span className="subtitle__mb statistics-courses-block-content-text__subtitle">
                            {
                                checkDeclension(countlessons, [
                                    "урок",
                                    "урока",
                                    "уроков",
                                ]).title
                            }
                            {" | "}
                            {
                                checkDeclension(countMaterials, [
                                    "материал",
                                    "материала",
                                    "материалов",
                                ]).title
                            }
                        </span>
                        <h4 className="statistics-courses-block-content-text__title">
                            {title}
                        </h4>
                    </div>

                    <p className="statistics-courses-block-content-text__category">
                        Направление: <span>{category}</span>
                    </p>
                </div>
            </div>

            <p className="statistics-courses-block__info">
                Учеников: {countStudents}
            </p>
        </div>
    );
};

export default StatisticsCoursesBlock;

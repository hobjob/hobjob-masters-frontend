import React from "react";
import NumberFormat from "react-number-format";
import moment from "moment";
import "moment/locale/ru";

import {checkDeclension} from "../../../Functions/checkDeclension";
import { abbreviateNumber } from "../../../Functions/abbreviateNumber";

const StatisticsCoursesBlock = ({
    image,
    countlessons,
    countMaterials,
    title,
    category,
    countViewingDuration,
}) => {
    return (
        <div className="statistics-courses-block">
            <div className="statistics-courses-block-content">
                <div
                    className="statistics-courses-block-content-cover"
                    style={{
                        backgroundImage: `url('${`${process.env.REACT_APP_IMAGE_DOMEN}/${image.size_768}`}')`,
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
                Просмотров за{" "}
                <span>{moment().locale("ru").format("MMMM")}</span> -
                <p className="statistics-courses-block__info__number">
                    {abbreviateNumber(countViewingDuration)}{" "}
                    {checkDeclension(countViewingDuration, ["минута", "минуты", "минут"]).text}
                </p>
            </p>
        </div>
    );
};

export default StatisticsCoursesBlock;

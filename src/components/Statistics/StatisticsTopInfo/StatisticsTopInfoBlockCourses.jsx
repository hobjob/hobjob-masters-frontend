import React from "react";
import NumberFormat from "react-number-format";

const StatisticsTopInfoBlockCourses = ({number}) => {
    return (
        <div className="statistics-top-info-block">
            <span className="statistics-top-info-block__description">
                Всего курсов
            </span>

            <h3 className="statistics-top-info-block__number">
                <NumberFormat
                    value={number}
                    displayType={"text"}
                    thousandSeparator={" "}
                />
            </h3>
        </div>
    );
};

export default StatisticsTopInfoBlockCourses;

import React from "react";
import NumberFormat from "react-number-format";

const StatisticsTopInfoBlockStudents = ({number}) => {
    return (
        <div className="statistics-top-info-block">
            <span className="statistics-top-info-block__description">
                Учеников
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

export default StatisticsTopInfoBlockStudents;

import React from "react";

import moment from "moment";
import "moment/locale/ru";

import NumberFormat from "react-number-format";

const StatisticsTopInfoBlockBalance = ({number}) => {
    return (
        <div className="statistics-top-info-block">
            <span className="statistics-top-info-block__description">
                Заработано за{" "}
                <span>
                    {moment().subtract(1, "months").locale("ru").format("MMMM")}
                </span>
            </span>

            <h3 className="statistics-top-info-block__number">
                
                <NumberFormat
                    value={number}
                    displayType={"text"}
                    thousandSeparator={" "}
                />{" "}₽
            </h3>
        </div>
    );
};

export default StatisticsTopInfoBlockBalance;

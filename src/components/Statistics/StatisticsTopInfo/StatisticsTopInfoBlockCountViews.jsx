import React from "react";
import NumberFormat from "react-number-format";

import {checkDeclension} from "../../../Functions/checkDeclension";

const StatisticsTopInfoBlockCountViews = ({number}) => {
    return (
        <div className="statistics-top-info-block">
            <span className="statistics-top-info-block__description">
                Среднее время просмотра
            </span>

            <h3 className="statistics-top-info-block__number">
                <NumberFormat
                    value={number}
                    displayType={"text"}
                    thousandSeparator={" "}
                />{" "}
                {checkDeclension(number, ["минута", "минуты", "минут"]).text}
            </h3>
        </div>
    );
};

export default StatisticsTopInfoBlockCountViews;

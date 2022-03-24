import React from "react";
import {useSelector} from "react-redux";

import {
    StatisticsTopInfoBlockBalance,
    StatisticsTopInfoBlockCourses,
    StatisticsTopInfoBlockStudents,
    StatisticsTopInfoBlockCountViews,
} from "../../";

const StatisticsTopInfo = () => {
    const {statistics} = useSelector(({master}) => master);

    return (
        <div className="statistics-top-info">
            <StatisticsTopInfoBlockBalance number={statistics.balance} />

            <StatisticsTopInfoBlockCourses
                number={statistics.totalCountCourses}
            />

            <StatisticsTopInfoBlockStudents
                number={statistics.totalCountStudents}
            />

            <StatisticsTopInfoBlockCountViews
                number={
                    statistics.totalCountViews ? statistics.totalCountViews : 0
                }
            />
        </div>
    );
};

export default StatisticsTopInfo;

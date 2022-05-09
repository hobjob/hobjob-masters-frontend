import React from "react";
import {useSelector} from "react-redux";

import {StatisticsCoursesBlock} from "../../";

const StatisticsCourses = () => {
    const {masterInfo} = useSelector(({master}) => master);
    const categories = useSelector(({categories}) => categories.items);

    return (
        <div className="statistics-courses">
            <h3 className="statistics-courses__title">Ваши курсы</h3>

            <div className="statistics-courses-block-wrapper">
                {masterInfo.courses.map((course, index) => (
                    <StatisticsCoursesBlock
                        {...course}
                        category={categories[course.category].title}
                        key={`statistics-courses-block-${index}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default StatisticsCourses;

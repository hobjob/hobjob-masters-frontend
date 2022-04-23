import React from "react";
import {Redirect, useHistory} from "react-router-dom";
import {Helmet} from "react-helmet";
import {useDispatch, useSelector} from "react-redux";

import {StatisticsTopInfo, StatisticsCourses, Loader} from "../components/";

import {fetchMasterStatistics} from "../redux/actions/master";
import {fetchCategories} from "../redux/actions/categories";

const Statistics = () => {
    const history = useHistory();

    const dispatch = useDispatch();

    const {statistics, isLoadedMasterStatistics} = useSelector(
        ({master}) => master
    );
    const {isLoadedAllCategories} = useSelector(({categories}) => categories);
    const categories = useSelector(({categories}) => categories.items);

    React.useEffect(() => {
        window.scrollTo(0, 0);

        if (!Object.keys(statistics).length) {
            dispatch(fetchMasterStatistics());
        }

        if (!Object.keys(categories).length) {
            dispatch(fetchCategories());
        }
    }, []);

    return (
        <>
            <Helmet>
                <title>Статистика - HobJob для мастеров</title>
            </Helmet>
            <section className="statistics">
                <div className="container">
                    <div className="statistics-wrapper">
                        {isLoadedMasterStatistics && isLoadedAllCategories ? (
                            statistics.courses.length ? (
                                <>
                                    <StatisticsTopInfo />

                                    <StatisticsCourses />
                                </>
                            ) : (
                                <Redirect to="/go/moderations-courses" />
                            )
                        ) : (
                            <Loader />
                        )}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Statistics;

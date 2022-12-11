import React from "react";
import {Navigate} from "react-router-dom";
import {Helmet} from "react-helmet";
import {useDispatch, useSelector} from "react-redux";

import {StatisticsTopInfo, StatisticsCourses, Loader} from "../components/";

import {fetchMasterStatistics} from "../redux/actions/master";
import {fetchCategories} from "../redux/actions/categories";

const Statistics = () => {
    const dispatch = useDispatch();

    const {masterInfo, statistics, isLoadedMasterStatistics} = useSelector(
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
            {localStorage.getItem("accessToken") ? (
                <>
                    <Helmet>
                        <title>Статистика - HobJob для мастеров</title>
                    </Helmet>
                    <section className="statistics">
                        <div className="container">
                            <div className="statistics-wrapper">
                                {isLoadedMasterStatistics &&
                                isLoadedAllCategories ? (
                                    masterInfo.courses.length ? (
                                        <>
                                            <StatisticsTopInfo />

                                            <StatisticsCourses />
                                        </>
                                    ) : (
                                        <Navigate to="/go/moderations-courses" />
                                    )
                                ) : (
                                    <Loader />
                                )}
                            </div>
                        </div>
                    </section>
                </>
            ) : (
                (window.location.href = "/go/login")
            )}
        </>
    );
};

export default Statistics;

import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {Helmet} from "react-helmet";
import moment from "moment";

import {fetchMasterModerationCourses} from "../redux/actions/master";

import {checkDeclension} from "../Functions/checkDeclension";

import {
    Loader,
    ConfirmedEmail,
    ModerationCoursesBlock,
    ModerationCoursesBlockEdit,
    ModerationCoursesNull,
} from "../components/";

const ModerationCourses = () => {
    const dispatch = useDispatch();

    const {
        masterInfo,
        moderationCourses,
        moderationCoursesReject,
        isLoadedModerationCourses,
    } = useSelector(({master}) => master);
    const {isLoadedAllCategories} = useSelector(({categories}) => categories);
    const categories = useSelector(({categories}) => categories.items);

    React.useEffect(() => {
        window.scrollTo(0, 0);

        if (!moderationCourses.length || !moderationCoursesReject.length) {
            dispatch(fetchMasterModerationCourses());
        }
    }, []);

    return (
        <>
            {localStorage.getItem("accessToken") ? (
                <>
                    <Helmet>
                        <title>Курсы на модерации - HobJob для мастеров</title>
                    </Helmet>

                    {isLoadedModerationCourses && isLoadedAllCategories ? (
                        masterInfo.confirmedEmail ? (
                            <section className="moderations-courses">
                                <div className="container">
                                    <div className="moderations-courses-wrapper">
                                        {moderationCourses.length ||
                                        moderationCoursesReject.length ? (
                                            <>
                                                {moderationCourses.length ? (
                                                    <div className="moderations-courses-section">
                                                        <h2 className="moderations-courses-section__title">
                                                            На модерации
                                                        </h2>

                                                        <div className="moderations-courses-section-block-wrapper">
                                                            {moderationCourses.map(
                                                                (
                                                                    course,
                                                                    index
                                                                ) => (
                                                                    <ModerationCoursesBlock
                                                                        {...course}
                                                                        key={`moderations-courses-block-${index}`}
                                                                    />
                                                                )
                                                            )}
                                                        </div>
                                                    </div>
                                                ) : null}
                                                {moderationCoursesReject.length ? (
                                                    <div className="moderations-courses-section">
                                                        <h2 className="moderations-courses-section__title">
                                                            Отклоненные
                                                        </h2>

                                                        <div className="moderations-courses-block-wrapper">
                                                            {moderationCoursesReject.map(
                                                                (
                                                                    course,
                                                                    index
                                                                ) => (
                                                                    <ModerationCoursesBlockEdit
                                                                        {...course}
                                                                        category={
                                                                            categories[
                                                                                course
                                                                                    .category
                                                                            ]
                                                                                .title
                                                                        }
                                                                        days={checkDeclension(
                                                                            moment(
                                                                                course.errorDate,
                                                                                "DD.MM.YYYY"
                                                                            )
                                                                                .add(
                                                                                    14,
                                                                                    "days"
                                                                                )
                                                                                .diff(
                                                                                    moment(),
                                                                                    "days"
                                                                                ),
                                                                            [
                                                                                "день",
                                                                                "дня",
                                                                                "дней",
                                                                            ]
                                                                        )}
                                                                        key={`moderations-courses-block-${index}`}
                                                                    />
                                                                )
                                                            )}
                                                        </div>
                                                    </div>
                                                ) : null}
                                            </>
                                        ) : (
                                            <ModerationCoursesNull />
                                        )}
                                    </div>
                                </div>
                            </section>
                        ) : (
                            <ConfirmedEmail />
                        )
                    ) : (
                        <Loader />
                    )}
                </>
            ) : (
                (window.location.href = "/go/login")
            )}
        </>
    );
};

export default ModerationCourses;

import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {Helmet} from "react-helmet";
import moment from "moment";

import {fetchMasterPotencialCourses} from "../redux/actions/master";

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
        potencialCoursesModeration,
        potencialCoursesReject,
        isLoadedPotencialCourses,
    } = useSelector(({master}) => master);
    const {isLoadedAllCategories} = useSelector(({categories}) => categories);
    const categories = useSelector(({categories}) => categories.items);

    React.useEffect(() => {
        window.scrollTo(0, 0);

        if (
            !potencialCoursesModeration.length ||
            !potencialCoursesReject.length
        ) {
            dispatch(fetchMasterPotencialCourses());
        }
    }, []);

    return (
        <>
            {localStorage.getItem("accessToken") ? (
                <>
                    <Helmet>
                        <title>Курсы на модерации - HobJob для мастеров</title>
                    </Helmet>

                    {isLoadedPotencialCourses && isLoadedAllCategories ? (
                        masterInfo.confirmedEmail ? (
                            <section className="moderation-courses">
                                <div className="container">
                                    <div className="moderation-courses-wrapper">
                                        {potencialCoursesModeration.length ||
                                        potencialCoursesReject.length ? (
                                            <>
                                                {potencialCoursesModeration.length ? (
                                                    <div className="moderation-courses-section">
                                                        <h2 className="moderation-courses-section__title">
                                                            На модерации
                                                        </h2>

                                                        <div className="moderation-courses-section-block-wrapper">
                                                            {potencialCoursesModeration.map(
                                                                (
                                                                    course,
                                                                    index
                                                                ) => (
                                                                    <ModerationCoursesBlock
                                                                        {...course}
                                                                        category={
                                                                            categories[
                                                                                course
                                                                                    .category
                                                                            ]
                                                                                .title
                                                                        }
                                                                        key={`moderation-courses-block-${index}`}
                                                                    />
                                                                )
                                                            )}
                                                        </div>
                                                    </div>
                                                ) : null}
                                                {potencialCoursesReject.length ? (
                                                    <div className="moderation-courses-section">
                                                        <h2 className="moderation-courses-section__title">
                                                            Отклоненные
                                                        </h2>

                                                        <div className="moderation-courses-block-wrapper">
                                                            {potencialCoursesReject.map(
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
                                                                        // days={checkDeclension(
                                                                        //     moment(
                                                                        //         course.errorDate,
                                                                        //         "DD.MM.YYYY"
                                                                        //     )
                                                                        //         .add(
                                                                        //             14,
                                                                        //             "days"
                                                                        //         )
                                                                        //         .diff(
                                                                        //             course.errorDate,
                                                                        //             "days"
                                                                        //         )
                                                                        // )}
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
                                                                        key={`moderation-courses-block-${index}`}
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

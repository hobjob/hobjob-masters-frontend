import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {Helmet} from "react-helmet";
import {useParams} from "react-router-dom";

import {
    EditRejectModerationCoursesErrorMessage,
    EditRejectModerationCoursesForm,
    Loader,
} from "../components/";

import {
    fetchModerationCourseById,
    sendUpdatePotencialCourse,
} from "../redux/actions/potencial_courses";

const EditRejectModerationCourses = () => {
    const dispatch = useDispatch();
	const {id} = useParams();

    const {
        isSendSubmitModerationCourse,
        isLoadedModerationCourseById,
        moderationCourseById,
    } = useSelector(({potencial_courses}) => potencial_courses);
    const {isLoadedAllCategories, itemsArray} = useSelector(
        ({categories}) => categories
    );

    React.useEffect(() => {
        window.scrollTo(0, 0);

        return () => {
            window.onbeforeunload = undefined;
        };
    }, []);

    React.useEffect(() => {
        dispatch(fetchModerationCourseById(id));
    }, [id]);

    const onSubmit = (data) => {
        const formData = new FormData();

        Object.keys(data).map((key) => {
            if (key === "lessons") {
                data[key].map((lesson, index_lesson) => {
                    if (lesson.image) {
                        formData.append(
                            `lessons-${index_lesson + 1}-image`,
                            lesson.image
                        );
                    }
                    if (lesson.materials) {
                        lesson.materials.map((material, material_index) => {
                            formData.append(
                                `lessons-${index_lesson + 1}-materials-${
                                    material_index + 1
                                }`,
                                material.file
                            );
                        });
                    }
                });
                formData.append(key, JSON.stringify(data[key]));
            } else {
                formData.append(key, data[key]);
            }
        });
        if (!data["category"]) {
            formData.append(`category`, itemsArray[0].transfer);
        }

        dispatch(sendUpdatePotencialCourse(formData));
    };

    React.useEffect(() => {
        if (!isSendSubmitModerationCourse) {
            window.onbeforeunload = () => true;
        } else {
            window.onbeforeunload = undefined;
        }
    }, [isSendSubmitModerationCourse]);

    return (
        <>
            {localStorage.getItem("accessToken") ? (
                <>
                    {/* <Prompt
                        when={!isSendSubmitModerationCourse}
                        message={() =>
                            "У вас есть не сохраненные данные курса. Если вы перейдете на другую страницу данные не сохранятся."
                        }
                    /> */}

                    <Helmet>
                        <title>Изменить курс - HobJob для мастеров</title>
                    </Helmet>

                    {isLoadedAllCategories && isLoadedModerationCourseById ? (
                        Object.keys(moderationCourseById).length ? (
                            <section className="potencial-courses">
                                <div className="container">
                                    <div className="potencial-courses-wrapper">
                                        <EditRejectModerationCoursesErrorMessage
                                            {...moderationCourseById}
                                        />

                                        <EditRejectModerationCoursesForm
                                            onSubmit={onSubmit}
                                        />
                                    </div>
                                </div>
                            </section>
                        ) : (
                            (window.location.href = "/")
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

export default EditRejectModerationCourses;

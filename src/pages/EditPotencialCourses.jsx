import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {Helmet} from "react-helmet";

import {
    EditPotencialCoursesErrorMessage,
    EditPotencialCoursesForm,
    Loader,
} from "../components/";

import {
    fetchPotencialCourseById,
    sendUpdatePotencialCourse,
} from "../redux/actions/potencial_courses";

const EditPotencialCourses = ({
    match: {
        params: {id},
    },
}) => {
    const dispatch = useDispatch();

    const {isLoadedPotencialCourseById, potencialCourseById} = useSelector(
        ({potencial_courses}) => potencial_courses
    );
    const {isLoadedAllCategories} = useSelector(({categories}) => categories);

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    React.useEffect(() => {
        dispatch(fetchPotencialCourseById(id));
    }, [id]);

    const onSubmit = (data) => {
        const formData = new FormData();

        Object.keys(data).map((key) => {
            formData.append(key, JSON.stringify(data[key]));

            if (key === "image") {
                formData.append(`image`, data[key]);
            }

            if (key === "lessons") {
                data[key].map((lesson, index_lesson) => {
                    if (lesson.image) {
                        formData.append(
                            `lessons-${index_lesson + 1}-image`,
                            lesson.image
                        );
                    }

                    if (lesson.video && !lesson.video.indexFile) {
                        formData.append(
                            `lessons-${index_lesson + 1}-video`,
                            lesson.video
                        );
                    }

                    if (lesson.materials) {
                        lesson.materials.map((material, material_index) => {
                            if (material.file) {
                                formData.append(
                                    `lessons-${index_lesson + 1}-materials-${
                                        material_index + 1
                                    }`,
                                    material.file
                                );
                            }
                        });
                    }
                });
            }
        });

        return dispatch(sendUpdatePotencialCourse(id, formData));
    };

    return (
        <>
            {localStorage.getItem("accessToken") ? (
                <>
                    <Helmet>
                        <title>Изменить курс - HobJob для мастеров</title>
                    </Helmet>

                    {isLoadedAllCategories && isLoadedPotencialCourseById ? (
                        Object.keys(potencialCourseById).length ? (
                            <section className="add-potencial-courses">
                                <div className="container">
                                    <div className="add-potencial-courses-wrapper">
                                        <EditPotencialCoursesErrorMessage
                                            {...potencialCourseById}
                                        />

                                        <EditPotencialCoursesForm
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

export default EditPotencialCourses;

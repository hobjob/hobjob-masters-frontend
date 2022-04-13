import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {Helmet} from "react-helmet";

import {
    EditPotencialCoursesErrorMessage,
    EditPotencialCoursesForm,
    Loader,
} from "../components/";

import {
    fetchModerationCourseById,
    sendUpdatePotencialCourse,
} from "../redux/actions/potencial_courses";

const EditPotencialCourses = ({
    match: {
        params: {id},
    },
}) => {
    const dispatch = useDispatch();

    const {isLoadedModerationCourseById, moderationCourseById} = useSelector(
        ({potencial_courses}) => potencial_courses
    );
    const {isLoadedAllCategories, itemsArray} = useSelector(({categories}) => categories);

    React.useEffect(() => {
        window.scrollTo(0, 0);
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

    return (
        <>
            {localStorage.getItem("accessToken") ? (
                <>
                    <Helmet>
                        <title>Изменить курс - HobJob для мастеров</title>
                    </Helmet>

                    {isLoadedAllCategories && isLoadedModerationCourseById ? (
                        Object.keys(moderationCourseById).length ? (
                            <section className="potencial-courses">
                                <div className="container">
                                    <div className="potencial-courses-wrapper">
                                        <EditPotencialCoursesErrorMessage
                                            {...moderationCourseById}
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

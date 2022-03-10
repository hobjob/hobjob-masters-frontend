import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {Helmet} from "react-helmet";

import {AddPotencialCoursesForm, Loader} from "../components/";

import {sendAddPotencialCourse} from "../redux/actions/potencial_courses";

const AddPotencialCourses = () => {
    const dispatch = useDispatch();

    const {isLoadedAllCategories} = useSelector(({categories}) => categories);

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

                    if (lesson.video) {
                        formData.append(
                            `lessons-${index_lesson + 1}-video`,
                            lesson.video
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
            }
        });

        return dispatch(sendAddPotencialCourse(formData));
    };

    return (
        <>
            {localStorage.getItem("accessToken") ? (
                <>
                    <Helmet>
                        <title>Новый курс - HobJob для мастеров</title>
                    </Helmet>

                    {isLoadedAllCategories ? (
                        <section className="add-potencial-courses">
                            <div className="container">
                                <div className="add-potencial-courses-wrapper">
                                    <AddPotencialCoursesForm
                                        onSubmit={onSubmit}
                                    />
                                </div>
                            </div>
                        </section>
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

export default AddPotencialCourses;

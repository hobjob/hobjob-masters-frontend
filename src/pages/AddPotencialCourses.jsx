import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {Helmet} from "react-helmet";

import {
    AddPotencialCoursesInfoMessage,
    AddPotencialCoursesForm,
    Loader,
    ConfirmedEmail,
} from "../components/";

import {sendAddPotencialCourse} from "../redux/actions/potencial_courses";

const AddPotencialCourses = () => {
    const dispatch = useDispatch();

    const {isLoadedAllCategories, itemsArray} = useSelector(
        ({categories}) => categories
    );
    const {masterInfo, isLoadedMasterInfo} = useSelector(({master}) => master);

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

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

        if (!data["category"]) {
            formData.append(`category`, JSON.stringify(itemsArray[0].transfer));
        }

        return dispatch(sendAddPotencialCourse(formData));
    };

    return (
        <>
            {localStorage.getItem("accessToken") ? (
                <>
                    <Helmet>
                        <title>Новый курс - HobJob для мастеров</title>
                    </Helmet>

                    {isLoadedAllCategories && isLoadedMasterInfo ? (
                        masterInfo.confirmedEmail ? (
                            <section className="add-potencial-courses">
                                <div className="container">
                                    <div className="add-potencial-courses-wrapper">
                                        <AddPotencialCoursesInfoMessage />

                                        <AddPotencialCoursesForm
                                            onSubmit={onSubmit}
                                        />
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

export default AddPotencialCourses;

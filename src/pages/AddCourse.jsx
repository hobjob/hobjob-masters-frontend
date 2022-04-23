import React from "react";
import {Prompt} from "react-router-dom";
import {useDispatch, useSelector, connect} from "react-redux";
import {getFormValues} from "redux-form";
import {Helmet} from "react-helmet";

import {
    PotencialCoursesInfoMessage,
    AddCourseForm,
    Loader,
    ConfirmedEmail,
} from "../components/";

import {
    sendCreateDraft,
    sendCreateDraftAndModeration,
} from "../redux/actions/draft";

const AddCourse = ({values}) => {
    const dispatch = useDispatch();

    const {isLoadedAllCategories, itemsArray} = useSelector(
        ({categories}) => categories
    );
    const {masterInfo, isLoadedMasterInfo} = useSelector(({master}) => master);
    const {isSendCreateDraft} = useSelector(({draft}) => draft);
    const {isSendSubmitModerationCourse} = useSelector(
        ({potencial_courses}) => potencial_courses
    );

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const onSubmit = (data) => {
        const formData = new FormData();

        const {name, numberCard} = data;

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

        dispatch(sendCreateDraftAndModeration(formData, {name, numberCard}));
    };

    const sendCreateDraftClick = () => {
        const formData = new FormData();

        if (values) {
            Object.keys(values).map((key) => {
                if (key === "lessons") {
                    values[key].map((lesson, index_lesson) => {
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
                    formData.append(key, JSON.stringify(values[key]));
                } else {
                    formData.append(key, values[key]);
                }
            });
            if (!values["category"]) {
                formData.append(`category`, itemsArray[0].transfer);
            }
        } else {
            values = {lessons: [{}, {}]};
            formData.append("lessons", JSON.stringify(values["lessons"]));
        }

        dispatch(sendCreateDraft(formData));
    };

    React.useEffect(() => {
        console.log(isSendCreateDraft, isSendSubmitModerationCourse);

        if (!isSendCreateDraft && !isSendSubmitModerationCourse) {
            window.onbeforeunload = () => true;
        } else {
            window.onbeforeunload = undefined;
        }
    }, [isSendCreateDraft, isSendSubmitModerationCourse]);

    return (
        <>
            {localStorage.getItem("accessToken") ? (
                <>
                    <Prompt
                        when={
                            !isSendCreateDraft || !isSendSubmitModerationCourse
                        }
                        message={() =>
                            "У вас есть не сохраненные данные курса. Если вы перейдете на другую страницу данные не сохранятся."
                        }
                    />

                    <Helmet>
                        <title>Добавить курс - HobJob для мастеров</title>
                    </Helmet>

                    {isLoadedAllCategories && isLoadedMasterInfo ? (
                        masterInfo.confirmedEmail ? (
                            <section className="potencial-courses">
                                <div className="container">
                                    <div className="potencial-courses-wrapper">
                                        <PotencialCoursesInfoMessage />

                                        <AddCourseForm
                                            sendCreateDraft={
                                                sendCreateDraftClick
                                            }
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

export default connect((state) => ({
    values: getFormValues("potencial-courses-info-form")(state),
}))(AddCourse);

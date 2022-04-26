import React from "react";
import {Prompt} from "react-router-dom";
import {useDispatch, useSelector, connect} from "react-redux";
import {getFormValues} from "redux-form";

import {Helmet} from "react-helmet";

import {
    DraftNotificationUpdate,
    PotencialCoursesInfoMessage,
    DraftEditForm,
    Loader,
    ConfirmedEmail,
} from "../components/";

import {sendSubmitModerationCourse} from "../redux/actions/potencial_courses";
import {fetchDraftById, sendUpdateDraft} from "../redux/actions/draft";
import {Redirect} from "react-router-dom";

const DraftEdit = ({
    match: {
        params: {id},
    },
    values,
}) => {
    const dispatch = useDispatch();

    const {isLoadedAllCategories, itemsArray} = useSelector(
        ({categories}) => categories
    );
    const {masterInfo, isLoadedMasterInfo} = useSelector(({master}) => master);
    const {isSendUpdateDraft, isLoadedById, itemById} = useSelector(
        ({draft}) => draft
    );
    const {isLoadsGlobal} = useSelector(({video}) => video);

    const [visibleNotificationUpdate, setVisibleNotificationUpdate] =
        React.useState(false);
    const [
        animationVisibleNotificationUpdate,
        setAnimationVisibleNotificationUpdate,
    ] = React.useState(false);

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    React.useEffect(() => {
        dispatch(fetchDraftById(id));
    }, [id]);

    React.useEffect(() => {
        if (isLoadsGlobal) {
            window.onbeforeunload = () => true;
        } else {
            window.onbeforeunload = undefined;
        }
    }, [isLoadsGlobal]);

    React.useEffect(() => {
        if (isSendUpdateDraft) {
            setVisibleNotificationUpdate(true);
        } else {
            setTimeout(() => {
                setAnimationVisibleNotificationUpdate(true);

                setTimeout(() => {
                    setVisibleNotificationUpdate(false);
                    setAnimationVisibleNotificationUpdate(false);
                }, 200);
            }, 500);
        }
    }, [isSendUpdateDraft]);

    const onSubmit = (data) => {
        const {name, numberCard} = data;

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

        dispatch(
            sendUpdateDraft(formData, false, () => {
                dispatch(sendSubmitModerationCourse(id, {name, numberCard}));
            })
        );
    };

    const sendUpdateDraftOn = (
        valuesFile,
        ignoreLessonIndex,
        ignoreLessonMaterialsIndex,
        category
    ) => {
        const formData = new FormData();

        if (valuesFile) {
            if (typeof valuesFile[Object.keys(valuesFile)[0]] === "object") {
                const value = valuesFile[Object.keys(valuesFile)[0]];
                const key = Object.keys(valuesFile)[0];
                const keySplit = key.split(".");

                const keySplit1_type = keySplit[0].split("[")[0];
                const keySplit1_number =
                    keySplit.length >= 2
                        ? keySplit[0].split("[")[1].replace(/[^0-9]/g, "")
                        : null;

                if (keySplit.length === 1) {
                    values[keySplit1_type] = value;
                }

                if (keySplit.length === 2) {
                    const keySplit_type = keySplit[1];

                    values[keySplit1_type][keySplit1_number][keySplit_type] =
                        value;
                }

                if (keySplit.length === 3) {
                    const keySplit2_type = keySplit[1].split("[")[0];
                    const keySplit2_number = keySplit[1]
                        .split("[")[1]
                        .replace(/[^0-9]/g, "");

                    const keySplit_type = keySplit[2];

                    values[keySplit1_type][keySplit1_number][keySplit2_type][
                        keySplit2_number
                    ][keySplit_type] = value;
                }
            }
        }

        if (category) {
            values.category = category;
        }

        Object.keys(values).map((key) => {
            if (key === "lessons") {
                const newLessons = [];

                values[key].map((lesson, index_lesson) => {
                    if (ignoreLessonIndex !== index_lesson) {
                        if (lesson.image) {
                            formData.append(
                                `lessons-${index_lesson + 1}-image`,
                                lesson.image
                            );
                        }
                        if (lesson.materials) {
                            const newLessonsMaterials = [];

                            lesson.materials.map((material, material_index) => {
                                if (
                                    ignoreLessonMaterialsIndex !==
                                    material_index
                                ) {
                                    formData.append(
                                        `lessons-${
                                            index_lesson + 1
                                        }-materials-${material_index + 1}`,
                                        material.file
                                    );

                                    newLessonsMaterials.push(material);
                                }
                            });

                            lesson.materials = newLessonsMaterials;
                        }

                        newLessons.push(lesson);
                    }
                });

                values.lessons = newLessons;

                formData.append(key, JSON.stringify(values[key]));
            } else {
                formData.append(key, values[key]);
            }
        });

        dispatch(sendUpdateDraft(formData, true));
    };

    return (
        <>
            {localStorage.getItem("accessToken") ? (
                <>
                    {isLoadedAllCategories &&
                    isLoadedMasterInfo &&
                    isLoadedById ? (
                        masterInfo.confirmedEmail ? (
                            Object.keys(itemById).length ? (
                                <>
                                    <Prompt
                                        when={isLoadsGlobal}
                                        message={() =>
                                            "У вас есть не сохраненные данные курса. Если вы перейдете на другую страницу данные не сохранятся."
                                        }
                                    />

                                    <Helmet>
                                        <title>
                                            {itemById.title !== ""
                                                ? itemById.title
                                                : "Без названия"}{" "}
                                            (черновик) - HobJob для мастеров
                                        </title>
                                    </Helmet>

                                    <section className="potencial-courses">
                                        {visibleNotificationUpdate ? (
                                            <DraftNotificationUpdate
                                                animationVisibleNotificationUpdate={
                                                    animationVisibleNotificationUpdate
                                                }
                                            />
                                        ) : null}

                                        <div className="container">
                                            <div className="potencial-courses-wrapper">
                                                <PotencialCoursesInfoMessage />

                                                <DraftEditForm
                                                    sendUpdateDraftOn={
                                                        sendUpdateDraftOn
                                                    }
                                                    onSubmit={onSubmit}
                                                />
                                            </div>
                                        </div>
                                    </section>
                                </>
                            ) : (
                                <Redirect to="/go/drafts" />
                            )
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
}))(DraftEdit);

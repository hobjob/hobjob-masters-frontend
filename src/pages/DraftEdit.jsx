import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {Helmet} from "react-helmet";

import {
    DraftEditInfoMessage,
    DraftEditForm,
    Loader,
    ConfirmedEmail,
} from "../components/";

import {sendSubmitModerationCourse} from "../redux/actions/potencial_courses";
import {fetchDraftById, sendUpdateDraft} from "../redux/actions/draft";

const DraftEdit = ({
    match: {
        params: {id},
    },
}) => {
    const dispatch = useDispatch();

    const {isLoadedAllCategories, itemsArray} = useSelector(
        ({categories}) => categories
    );
    const {masterInfo, isLoadedMasterInfo} = useSelector(({master}) => master);
    const {isLoadedById, itemById} = useSelector(({draft}) => draft);

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    React.useEffect(() => {
        dispatch(fetchDraftById(id));
    }, [id]);

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
            sendUpdateDraft(formData, false, false, () => {
                dispatch(sendSubmitModerationCourse(id, {name, numberCard}));
            })
        );
    };

    const sendUpdateDraftClick = (data) => {
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

        dispatch(sendUpdateDraft(formData, true, true));
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
                                    <Helmet>
                                        <title>
                                            {itemById.title !== ""
                                                ? itemById.title
                                                : "Без названия"}{" "}
                                            (черновик) - HobJob для мастеров
                                        </title>
                                    </Helmet>
                                    <section className="potencial-courses">
                                        <div className="container">
                                            <div className="potencial-courses-wrapper">
                                                <DraftEditInfoMessage />

                                                <DraftEditForm
                                                    sendUpdateDraft={
                                                        sendUpdateDraftClick
                                                    }
                                                    onSubmit={onSubmit}
                                                />
                                            </div>
                                        </div>
                                    </section>
                                </>
                            ) : (
                                (window.location.href = "/go/drafts")
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

export default DraftEdit;

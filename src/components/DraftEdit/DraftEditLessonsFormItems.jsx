import React from "react";
import {useSelector} from "react-redux";
import {Field, FieldArray} from "redux-form";

import {
    RenderInput,
    RenderImageInput,
    RenderVideoInput,
    DraftEditLessonsFormItemsMaterials,
} from "../";

const DraftEditLessonsFormItems = ({
    fields,
    sendUpdateDraftOnDirty,
    sendUpdateDraftOn,
}) => {
    const {itemById} = useSelector(({draft}) => draft);

    const addLesson = () => {
        fields.push({});
    };

    const removeLesson = (index) => {
        if (index !== 0 && index !== 1) {
            fields.remove(index);
            sendUpdateDraftOn(index);
        }
    };

    return (
        <>
            {fields.map((lesson, index) => (
                <div
                    className="potencial-courses-block-form-block"
                    key={`potencial-courses-block-form-block-${index}`}
                >
                    <div className="potencial-courses-block-form-block-subblock">
                        <div className="potencial-courses-block-form-block-top">
                            <h3 className="potencial-courses-block-form-block-top__title">
                                Урок #{index + 1}
                                {index !== 0 && index !== 1 ? null : (
                                    <span>Обязательно</span>
                                )}
                            </h3>

                            {index !== 0 && index !== 1 ? (
                                <div
                                    className="potencial-courses-block-form-block-top-close"
                                    onClick={() => removeLesson(index)}
                                >
                                    <svg
                                        width="15"
                                        height="15"
                                        viewBox="0 0 15 15"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M15 0.883783L14.1162 0L7.5 6.61621L0.883783 0L0 0.883783L6.61621 7.5L0 14.1162L0.883783 15L7.5 8.38378L14.1162 15L15 14.1162L8.38378 7.5L15 0.883783Z"
                                            fill="black"
                                        />
                                    </svg>
                                </div>
                            ) : null}
                        </div>
                        <div className="potencial-courses-block-form-block-input">
                            <Field
                                component={RenderInput}
                                type="text"
                                name={`${lesson}.title`}
                                label="Название"
                                onBlurFunc={sendUpdateDraftOnDirty}
                            />
                        </div>
                        <div className="potencial-courses-block-form-block-input">
                            <Field
                                component={RenderInput}
                                type="text"
                                name={`${lesson}.description`}
                                label="Описание"
                                onBlurFunc={sendUpdateDraftOnDirty}
                                autoSize
                            />
                        </div>
                        <div className="potencial-courses-block-form-block-input">
                            <Field
                                component={RenderImageInput}
                                name={`${lesson}.image`}
                                label="Фотография урока"
                                defaultValue={
                                    itemById.lessons[index] &&
                                    itemById.lessons[index].image.size_512
                                }
                                onFunc={sendUpdateDraftOn}
                            />
                        </div>
                    </div>

                    <div className="potencial-courses-block-form-block-subblock">
                        <h3 className="potencial-courses-block-form-block-subblock__title">
                            Материалы
                        </h3>

                        <div className="potencial-courses-block-form-block-input">
                            <FieldArray
                                component={DraftEditLessonsFormItemsMaterials}
                                name={`${lesson}.materials`}
                                materialsValue={
                                    itemById.lessons[index] &&
                                    itemById.lessons[index].materials
                                }
                                sendUpdateDraftOnDirty={sendUpdateDraftOnDirty}
                                sendUpdateDraftOn={sendUpdateDraftOn}
                            />
                        </div>
                    </div>

                    <div className="potencial-courses-block-form-block-subblock">
                        <h3 className="potencial-courses-block-form-block-subblock__title">
                            Видео
                        </h3>

                        <div className="potencial-courses-block-form-block-input">
                            <Field
                                component={RenderVideoInput}
                                name={`${lesson}.video`}
                                label="Допустимые расширения (.mp4, .avi, .mov, .mpeg, .webm)"
                                defaultValue={
                                    itemById.lessons[index] &&
                                    itemById.lessons[index].video &&
                                    itemById.lessons[index].video.fileNameUser
                                }
                                lessonIndex={index}
                                url={`/potencial-courses/drafts/upload-video/${
                                    itemById._id
                                }/${index + 1}`}
                            />
                        </div>
                    </div>
                </div>
            ))}

            <button
                type="button"
                onClick={addLesson}
                className="btn__gray potencial-courses-block-form__btn"
            >
                Добавить урок
                <svg
                    width="17"
                    height="17"
                    viewBox="0 0 17 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M0 8H16.2917" stroke="black" />
                    <path d="M8 0V16.2917" stroke="black" />
                </svg>
            </button>
        </>
    );
};

export default DraftEditLessonsFormItems;

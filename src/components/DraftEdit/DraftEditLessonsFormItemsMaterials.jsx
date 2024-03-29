import React from "react";
import {Field} from "redux-form";

import {RenderInput, RenderFileInput} from "../";

const DraftEditLessonsFormItemsMaterials = ({
    fields,
    materialsValue,
    sendUpdateDraftOnDirty,
    sendUpdateDraftOn,
}) => {
    const addMaterial = () => {
        fields.push({});
    };

    const removeMaterial = (index) => {
        fields.remove(index);
        sendUpdateDraftOn(null, index);
    };

    return (
        <>
            {fields.map((material, index) => (
                <div
                    className="potencial-courses-block-form-block-subblock-subblock"
                    key={`potencial-courses-block-form-block-${index}`}
                >
                    <div className="potencial-courses-block-form-block-top">
                        <h4 className="potencial-courses-block-form-block-top__title">
                            Материал #{index + 1}
                        </h4>

                        <div
                            className="potencial-courses-block-form-block-top-close"
                            onClick={() => removeMaterial(index)}
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
                    </div>

                    <div className="potencial-courses-block-form-block-input">
                        <Field
                            component={RenderInput}
                            type="text"
                            name={`${material}.title`}
                            label="Название"
                            onBlurFunc={sendUpdateDraftOnDirty}
                        />
                    </div>

                    <div className="potencial-courses-block-form-block-input">
                        <Field
                            component={RenderFileInput}
                            name={`${material}.file`}
                            label="Файл"
                            defaultValue={
                                materialsValue &&
                                materialsValue[index] &&
                                typeof materialsValue[index].file ===
                                    "string" &&
                                materialsValue[index].file.split("/")[
                                    materialsValue[index].file.split("/")
                                        .length - 1
                                ]
                            }
                            onFunc={sendUpdateDraftOn}
                        />
                    </div>
                </div>
            ))}

            <button
                type="button"
                onClick={addMaterial}
                className="btn__gray potencial-courses-block-form__btn"
            >
                Добавить материал
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

export default DraftEditLessonsFormItemsMaterials;

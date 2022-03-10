import React from "react";
import {Field} from "redux-form";

import {RenderInput, RenderFileInput} from "../";

const EditPotencialCoursesLessonsFormItemsMaterials = ({
    fields,
    materialsValue,
}) => {
    React.useEffect(() => {
        if (!materialsValue) {
            fields.push({});
        }
    }, []);

    const addMaterial = () => {
        fields.push({});
    };

    const removeMaterial = (index) => {
        if (index) fields.remove(index);
    };
    return (
        <>
            {fields.map((material, index) => (
                <div
                    className="add-potencial-courses-block-form-block-subblock-subblock"
                    key={`add-potencial-courses-block-form-block-${index}`}
                >
                    <div className="add-potencial-courses-block-form-block-top">
                        <h4 className="add-potencial-courses-block-form-block-top__title">
                            Материал #{index + 1}
                        </h4>

                        {index !== 0 ? (
                            <div
                                className="add-potencial-courses-block-form-block-top-close"
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
                        ) : null}
                    </div>

                    <div className="add-potencial-courses-block-form-block-input">
                        <Field
                            component={RenderInput}
                            type="text"
                            name={`${material}.title`}
                            label="Заголовок"
                        />
                    </div>

                    <div className="add-potencial-courses-block-form-block-input">
                        <Field
                            component={RenderFileInput}
                            name={`${material}.file`}
                            label="Файл"
                            defaultValue={
                                materialsValue &&
                                materialsValue[index] &&
                                materialsValue[index].file.split("/")[
                                    materialsValue[index].file.split("/")
                                        .length - 1
                                ]
                            }
                        />
                    </div>
                </div>
            ))}

            <button
                type="button"
                onClick={addMaterial}
                className="btn__gray add-potencial-courses-block-form__btn"
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

export default EditPotencialCoursesLessonsFormItemsMaterials;

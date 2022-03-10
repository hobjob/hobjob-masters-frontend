import React from "react";
import {useSelector} from "react-redux";
import {Field} from "redux-form";

import {
    RenderInput,
    RenderInputAutoSize,
    RenderSelect,
    RenderImageInput,
} from "../";

const AddPotencialCoursesInfoForm = () => {
    const categories = useSelector(({categories}) => categories.itemsArray);

    return (
        <div className="add-potencial-courses-block">
            <div className="add-potencial-courses-block-text">
                <span className="subtitle__mb add-potencial-courses-block-text__subtitle">
                    1 этап
                </span>

                <h2 className="add-potencial-courses-block-text__title">
                    Информация о курсе
                </h2>
            </div>

            <div className="add-potencial-courses-block-form">
                <div className="add-potencial-courses-block-form-block">
                    <div className="add-potencial-courses-block-form-input">
                        <Field
                            component={RenderInput}
                            type="text"
                            name="title"
                            label="Название"
                        />
                    </div>

                    <div className="add-potencial-courses-block-form-input">
                        <Field
                            component={RenderInputAutoSize}
                            type="text"
                            name="description"
                            label="Описание"
                        />
                    </div>

                    <div className="add-potencial-courses-block-form-input">
                        <Field
                            component={RenderSelect}
                            name="category"
                            label="Направление"
                            choise={categories}
                        />
                    </div>

                    <div className="add-potencial-courses-block-form-input">
                        <Field
                            component={RenderImageInput}
                            name="image"
                            label="Фото курса"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddPotencialCoursesInfoForm;

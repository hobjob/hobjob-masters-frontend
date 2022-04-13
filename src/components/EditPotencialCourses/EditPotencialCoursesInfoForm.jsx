import React from "react";
import {useSelector} from "react-redux";
import {Field} from "redux-form";

import {
    RenderInput,
    RenderInputAutoSize,
    RenderSelect,
    RenderImageInput,
} from "../";

const EditPotencialCoursesInfoForm = () => {
    const categories = useSelector(({categories}) => categories.itemsArray);

    const {moderationCourseById} = useSelector(
        ({potencial_courses}) => potencial_courses
    );

    return (
        <div className="potencial-courses-block">
            <div className="potencial-courses-block-text">
                <span className="subtitle__mb potencial-courses-block-text__subtitle">
                    1 этап
                </span>

                <h2 className="potencial-courses-block-text__title">
                    Информация о курсе
                </h2>
            </div>

            <div className="potencial-courses-block-form">
                <div className="potencial-courses-block-form-block">
                    <div className="potencial-courses-block-form-input">
                        <Field
                            component={RenderInput}
                            type="text"
                            name="title"
                            label="Название"
                        />
                    </div>

                    <div className="potencial-courses-block-form-input">
                        <Field
                            component={RenderInputAutoSize}
                            type="text"
                            name="description"
                            label="Описание"
                        />
                    </div>

                    <div className="potencial-courses-block-form-input">
                        <Field
                            component={RenderSelect}
                            name="category"
                            label="Направление"
                            choise={categories}
                        />
                    </div>

                    <div className="potencial-courses-block-form-input">
                        <Field
                            component={RenderImageInput}
                            name="image"
                            label="Фото курса"
                            defaultValue={moderationCourseById.image}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditPotencialCoursesInfoForm;

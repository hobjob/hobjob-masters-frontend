import React from "react";
import {Field} from "redux-form";
import {useSelector} from "react-redux";
import {createTextMask} from "redux-form-input-masks";

import {BtnLoader, RenderInput} from "../";

const AddPotencialCoursesPaymentForm = ({valid}) => {
    const {isSendPotencialCourse} = useSelector(
        ({potencial_courses}) => potencial_courses
    );

    const cardMask = createTextMask({
        pattern: "9999 9999 9999 9999",
        guide: false,
        stripMask: false,
	});
	
    return (
        <div className="add-potencial-courses-block">
            <div className="add-potencial-courses-block-text">
                <span className="subtitle__mb add-potencial-courses-block-text__subtitle">
                    3 этап
                </span>

                <h2 className="add-potencial-courses-block-text__title">
                    Платежная информация
                </h2>

                <p className="description add-potencial-courses-block-text__description">
                    Для загрузки курса добавьте данные карты на которую вам
                    будет поступать платёж
                </p>
            </div>

            <div className="add-potencial-courses-block-form">
                <div className="add-potencial-courses-block-form-block">
                    <div className="add-potencial-courses-block-form-input">
                        <Field
                            component={RenderInput}
                            type="name"
                            name="name"
                            label="Имя и фамилия получателя"
                        />
                    </div>

                    <div className="add-potencial-courses-block-form-input">
                        <Field
                            component={RenderInput}
                            type="text"
                            name="numberCard"
                            label="Номер каты"
                            {...cardMask}
                        />
                    </div>
                </div>

                {isSendPotencialCourse ? (
                    <button
                        className="btn add-potencial-courses-block-form__btn disabled"
                        disabled
                    >
                        <BtnLoader />
                    </button>
                ) : (
                    <button
                        className={`btn ${
                            valid ? "disabled" : ""
                        } add-potencial-courses-block-form__btn`}
                        disabled={valid}
                    >
                        Отправить курс на модерацию
                    </button>
                )}
            </div>
        </div>
    );
};

export default AddPotencialCoursesPaymentForm;

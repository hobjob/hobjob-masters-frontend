import React from "react";
import {Field} from "redux-form";
import {createTextMask} from "redux-form-input-masks";

import {RenderInput} from "../";

const DraftEditPaymentForm = () => {
    const cardMask = createTextMask({
        pattern: "9999 9999 9999 9999",
        guide: false,
        stripMask: false,
    });

    return (
        <div className="potencial-courses-block">
            <div className="potencial-courses-block-text">
                <span className="subtitle__mb potencial-courses-block-text__subtitle">
                    3 этап
                </span>

                <h2 className="potencial-courses-block-text__title">
                    Платежная информация
                </h2>

                <p className="description potencial-courses-block-text__description">
                    Для загрузки курса добавьте данные карты, на которую вам
                    будет поступать платёж
                </p>
            </div>

            <div className="potencial-courses-block-form">
                <div className="potencial-courses-block-form-block">
                    <div className="potencial-courses-block-form-input">
                        <Field
                            component={RenderInput}
                            type="name"
                            name="name"
                            label="Имя и фамилия получателя"
                        />
                    </div>

                    <div className="potencial-courses-block-form-input">
                        <Field
                            component={RenderInput}
                            type="text"
                            name="numberCard"
                            label="Номер каты"
                            {...cardMask}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DraftEditPaymentForm;

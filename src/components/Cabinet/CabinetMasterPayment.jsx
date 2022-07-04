import React from "react";
import {useSelector} from "react-redux";
import {Field, reduxForm, formValueSelector} from "redux-form";
import {createTextMask} from "redux-form-input-masks";

import {RenderInput, BtnLoader} from "../";

import {validatePayment as validate} from "./validatePayment";

let CabinetMasterPayment = ({
    handleSubmit,
    initialize,
    name,
    numberCard,
    invalid,
}) => {
    const valid = !invalid;

    const {isSendUpdateMasterPayment} = useSelector(({master}) => master);

    const selector = formValueSelector("cabinet-master-payment-form");

    const {nameValue, numberCardValue} = useSelector((state) => {
        const {name, numberCard} = selector(state, "name", "numberCard");
        return {
            nameValue: name,
            numberCardValue: numberCard,
        };
    });

    React.useEffect(() => {
        initialize({
            name,
            numberCard,
        });
    }, [name, numberCard]);

    const cardMask = createTextMask({
        pattern: "9999 9999 9999 9999",
        guide: false,
        stripMask: false,
    });

    return (
        <form className="cabinet-block-form" onSubmit={handleSubmit} id="payment">
            <div className="cabinet-block-form-input">
                <Field
                    component={RenderInput}
                    type="name"
                    name="name"
                    label="Имя и фамилия получателя"
                />
            </div>

            <div className="cabinet-block-form-input">
                <Field
                    component={RenderInput}
                    type="text"
                    name="numberCard"
                    label="Номер каты"
                    {...cardMask}
                />
            </div>

            {isSendUpdateMasterPayment ? (
                <button
                    className="btn disabled cabinet-block-form-btn"
                    disabled
                >
                    <BtnLoader />
                </button>
            ) : (
                <button
                    className={`btn ${
                        (nameValue !== name ||
                            numberCardValue !== numberCard) &&
                        valid
                            ? ""
                            : "disabled"
                    } cabinet-block-form-btn`}
                >
                    Сохранить
                </button>
            )}
        </form>
    );
};

CabinetMasterPayment = reduxForm({
    form: "cabinet-master-payment-form",
    validate,
})(CabinetMasterPayment);

export default CabinetMasterPayment;

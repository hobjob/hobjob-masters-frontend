import React from "react";
import {useSelector} from "react-redux";
import {Field, reduxForm, formValueSelector} from "redux-form";

import {RenderInput, BtnLoader} from "../";

import {validateInfo as validate} from "./validateInfo";

let CabinetMasterInfoForm = ({
    handleSubmit,
    initialize,
    name,
    surname,
    masterDescription,
    socials,
    edit,
	invalid,
}) => {
    const valid = !invalid;

    const {isSendUpdateMasterInfo} = useSelector(({master}) => master);

    const selector = formValueSelector("cabinet-master-info-form");

    const {nameValue, surnameValue, masterDescriptionValue, socialsValue} =
        useSelector((state) => {
            const {name, surname, masterDescription, socials} = selector(
                state,
                "name",
                "surname",
                "masterDescription",
                "socials"
            );
            return {
                nameValue: name,
                surnameValue: surname,
                masterDescriptionValue: masterDescription,
                socialsValue: socials,
            };
        });

    React.useEffect(() => {
        initialize({
            name,
            surname,
            masterDescription,
            socials,
        });
    }, [name, surname, masterDescription, socials]);

    return (
        <form className="cabinet-block-form" onSubmit={handleSubmit}>
            <div className="cabinet-block-form-input">
                <Field
                    component={RenderInput}
                    type="name"
                    name="name"
                    label="Имя"
                    disabled={!edit}
                />
            </div>

            <div className="cabinet-block-form-input">
                <Field
                    component={RenderInput}
                    type="name"
                    name="surname"
                    label="Фамилия"
                    disabled={!edit}
                />
            </div>

            <div className="cabinet-block-form-input">
                <Field
                    component={RenderInput}
                    type="text"
                    name="masterDescription"
                    label="О себе"
                    disabled={!edit}
                    autoSize
                />
            </div>

            <div className="cabinet-block-form-input">
                <Field
                    component={RenderInput}
                    type="text"
                    name="socials[inst]"
                    label="Ссылка на ваш Instagram"
                    disabled={!edit}
                />
            </div>

            <div className="cabinet-block-form-input">
                <Field
                    component={RenderInput}
                    type="text"
                    name="socials[vk]"
                    label="Ссылка на ваш Вконтакте"
                    disabled={!edit}
                />
            </div>

            <div className="cabinet-block-form-input">
                <Field
                    component={RenderInput}
                    type="text"
                    name="socials[tiktok]"
                    label="Ссылка на ваш TikTok"
                    disabled={!edit}
                />
            </div>

            <div className="cabinet-block-form-input">
                <Field
                    component={RenderInput}
                    type="text"
                    name="socials[telegram]"
                    label="Ссылка на ваш Telegram"
                    disabled={!edit}
                />
            </div>

            {isSendUpdateMasterInfo ? (
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
                            surnameValue !== surname ||
                            masterDescriptionValue !== masterDescription ||
                            socialsValue.inst !== socials.inst ||
                            socialsValue.vk !== socials.vk ||
                            socialsValue.tiktok !== socials.tiktok ||
                            socialsValue.telegram !== socials.telegram) &&
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

CabinetMasterInfoForm = reduxForm({
    form: "cabinet-master-info-form",
    validate,
})(CabinetMasterInfoForm);

export default CabinetMasterInfoForm;

import React from "react";
import {useSelector} from "react-redux";
import {Field, reduxForm, formValueSelector} from "redux-form";

import {RenderInput, RenderInputAutoSize, BtnLoader} from "../";

import {validateInfo as validate} from "./validateInfo";

let CabinetMasterInfoForm = ({
    handleSubmit,
    initialize,
    name,
    surname,
    instagram,
    masterDescription,
	edit
}) => {
    const {isSendUpdateMasterInfo} = useSelector(({master}) => master);

    const selector = formValueSelector("cabinet-master-info-form");

    const {
        nameValue,
        surnameValue,
        instagramValue,
        masterDescriptionValue,
    } = useSelector((state) => {
        const {name, surname, instagram, masterDescription,} =
            selector(
                state,
                "name",
                "surname",
                "instagram",
                "masterDescription"
            );
        return {
            nameValue: name,
            surnameValue: surname,
            instagramValue: instagram,
            masterDescriptionValue: masterDescription,
        };
    });

    React.useEffect(() => {
        initialize({
            name,
            surname,
            instagram,
            masterDescription,
        });
    }, [name, surname, instagram, masterDescription]);

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
                    name="instagram"
                    label="Instagram"
                    disabled={!edit}
                />
            </div>

            <div className="cabinet-block-form-input">
                <Field
                    component={RenderInputAutoSize}
                    type="text"
                    name="masterDescription"
                    label="О себе"
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
                        nameValue !== name ||
                        surnameValue !== surname ||
                        instagramValue !== instagram ||
                        masterDescriptionValue !== masterDescription
                            ? ""
                            : "disabled"
                    } cabinet-block-form-btn`}
                >
                    Обновить
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

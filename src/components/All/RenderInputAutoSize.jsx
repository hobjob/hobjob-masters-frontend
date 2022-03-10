import React from "react";
import TextareaAutosize from "react-textarea-autosize";

const RenderInputAutoSize = ({
    disabled,
    input,
    label,
    type,
    meta: {touched, error},
    classNameInput,
}) => {
    return (
        <>
            <div style={{position: "relative"}}>
                <TextareaAutosize
                    {...input}
                    type={type}
                    className={`input__field ${classNameInput} ${
                        touched && error ? "error" : ""
                    }`}
                    required
                    disabled={disabled ? true : false}
                />
                <label
                    className={`input__label ${
                        touched && error ? "error" : ""
                    } ${disabled ? "active" : ""}`}
                >
                    {label}
                </label>
            </div>

            {touched && error && <span className="input__error">{error}</span>}
        </>
    );
};

export default RenderInputAutoSize;

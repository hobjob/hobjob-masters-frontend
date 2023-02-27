import React from "react";
import TextareaAutosize from "react-textarea-autosize";

const RenderInput = ({
    disabled,
    input,
    label,
    type,
    meta: {error},
    classNameInput,
    setStatePasswordFunc,
    passwordState,
    autoSize,
    onBlurFunc,
}) => {
    const [valueInput, setValueInput] = React.useState("");
    const [focusInput, setFocusInput] = React.useState(false);
    const [touchedInput, setTouchedInput] = React.useState(false);

    React.useEffect(() => {
        setValueInput(input.value);
    }, [input.value]);

    const onBlurInput = () => () => {
        setFocusInput(false);
        setTouchedInput(true);

        if (onBlurFunc) {
            onBlurFunc();
        }
    };

    const onFocusInput = () => () => {
        setFocusInput(true);
    };

    return (
        <>
            <div
                style={{position: "relative"}}
                className={`input ${touchedInput && error ? "error" : ""}`}
            >
                {autoSize ? (
                    <TextareaAutosize
                        {...input}
                        type={passwordState ? "text" : type}
                        className={`input__field ${classNameInput} ${
                            touchedInput && error ? "error" : ""
                        } ${valueInput !== "" || focusInput ? "focus" : ""}`}
                        disabled={disabled ? true : false}
                        placeholder={label}
                        onBlur={onBlurInput(input.onBlur)}
                        onFocus={onFocusInput(input.onFocus)}
                    />
                ) : (
                    <input
                        {...input}
                        type={passwordState ? "text" : type}
                        className={`input__field ${classNameInput}`}
                        placeholder={label}
                        disabled={disabled ? true : false}
                        onBlur={onBlurInput(input.onBlur)}
                        onFocus={onFocusInput(input.onFocus)}
                    />
                )}

                {type === "password" ? (
                    <div className="input-state">
                        <span
                            className={`input-state__hidden ${
                                passwordState ? "active" : ""
                            }`}
                            onClick={setStatePasswordFunc}
                        >
                            Скрыть
                        </span>{" "}
                        <span
                            className={`input-state__visible ${
                                passwordState ? "active" : ""
                            }`}
                            onClick={setStatePasswordFunc}
                        >
                            Показать
                        </span>
                    </div>
                ) : null}
            </div>

            {touchedInput && error && (
                <span className="input__error">{error}</span>
            )}
        </>
    );
};

export default RenderInput;

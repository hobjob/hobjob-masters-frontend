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
}) => {
    const [valueInput, setValueInput] = React.useState("");
    const [focusInput, setFocusInput] = React.useState(false);
    const [touchedInput, setTouchedInput] = React.useState(false);

    React.useEffect(() => {
        setValueInput(input.value);
    }, [input.value]);

    const onChangeInput = (delegate) => (e) => {
        setValueInput(e.target.value);
        delegate(e.target.value);
    };

    const onBlurInput = () => () => {
        setFocusInput(false);
        setTouchedInput(true);
    };

    const onFocusInput = () => () => {
        setFocusInput(true);
    };

    return (
        <>
            <div style={{position: "relative"}}>
                {autoSize ? (
                    <TextareaAutosize
                        {...input}
                        type={passwordState ? "text" : type}
                        className={`input__field ${classNameInput} ${
                            touchedInput && error ? "error" : ""
                        } ${valueInput !== "" || focusInput ? "focus" : ""}`}
                        disabled={disabled ? true : false}
                        onChange={onChangeInput(input.onChange)}
                        onBlur={onBlurInput(input.onBlur)}
                        onFocus={onFocusInput(input.onFocus)}
                    />
                ) : (
                    <input
                        {...input}
                        type={passwordState ? "text" : type}
                        className={`input__field ${classNameInput} ${
                            touchedInput && error ? "error" : ""
                        } ${valueInput !== "" || focusInput ? "focus" : ""}`}
                        disabled={disabled ? true : false}
                        onChange={onChangeInput(input.onChange)}
                        onBlur={onBlurInput(input.onBlur)}
                        onFocus={onFocusInput(input.onFocus)}
                    />
                )}
                <label
                    className={`input__label ${
                        touchedInput && error ? "error" : ""
                    } ${disabled ? "active" : ""}`}
                >
                    {label}
                </label>

                {type === "password" ? (
                    <div className="input-state">
                        <span
                            className={`input-state__hidden ${
                                passwordState ? "active" : ""
                            }`}
                            onClick={setStatePasswordFunc}
                        >
                            ????????????
                        </span>{" "}
                        <span
                            className={`input-state__visible ${
                                passwordState ? "active" : ""
                            }`}
                            onClick={setStatePasswordFunc}
                        >
                            ????????????????
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

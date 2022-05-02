import React from "react";

const RenderSelect = ({
    disabled,
    input,
    label,
    choise,
    meta: {touched, error},
    onFunc,
}) => {
    const adaptEventToValue = (delegate) => (e) => {
        delegate(e.target.value);
        onFunc();
    };

    return (
        <div className="select">
            <label
                className={`select__label ${touched && error ? "error" : ""}`}
            >
                {label}
            </label>
            {onFunc ? (
                <select
                    {...input}
                    className={`select__field ${
                        touched && error ? "error" : ""
                    }`}
                    disabled={disabled ? true : false}
                    onChange={adaptEventToValue(input.onChange)}
                >
                    {typeof choise[0] == "object"
                        ? choise.map((item, index) => (
                              <option
                                  value={item.key}
                                  className="select__option"
                                  key={`select__option-${index}`}
                              >
                                  {item.title}
                              </option>
                          ))
                        : choise.map((item, index) => (
                              <option
                                  value={item}
                                  className="select__option"
                                  key={`select__option-${index}`}
                              >
                                  {item}
                              </option>
                          ))}
                </select>
            ) : (
                <select
                    {...input}
                    className={`select__field ${
                        touched && error ? "error" : ""
                    }`}
                    disabled={disabled ? true : false}
                >
                    {typeof choise[0] == "object"
                        ? choise.map((item, index) => (
                              <option
                                  value={item.key}
                                  className="select__option"
                                  key={`select__option-${index}`}
                              >
                                  {item.title}
                              </option>
                          ))
                        : choise.map((item, index) => (
                              <option
                                  value={item}
                                  className="select__option"
                                  key={`select__option-${index}`}
                              >
                                  {item}
                              </option>
                          ))}
                </select>
            )}
        </div>
    );
};

export default RenderSelect;

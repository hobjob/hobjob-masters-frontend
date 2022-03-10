import React from "react";

const EditPotencialCoursesErrorMessage = ({errorMessage, number}) => {
    return (
        <div className="add-potencial-courses-error-message">
            <div className="add-potencial-courses-error-message-title">
                <h3 className="add-potencial-courses-error-message-title__title">
                    Почему мы отклонили ваш курс?
                </h3>
            </div>
            <div className="add-potencial-courses-error-message-text">
                <span className="subtitle__mb add-potencial-courses-error-message-text__subtitle">
                    Сообщение от нашей команды
                </span>
                <p className="add-potencial-courses-error-message-text__message">
                    {errorMessage}
                </p>
                <p className="add-potencial-courses-error-message-text__info">
                    Если у вас остались вопросы, вы можете написать нам на:{" "}
                    <a href="mailto:support@hobjob.ru">support@hobjob.ru</a>,{" "}
                    указав номер курса: #{number}
                </p>
            </div>
        </div>
    );
};

export default EditPotencialCoursesErrorMessage;

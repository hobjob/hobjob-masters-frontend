import React from "react";
import {Link} from "react-router-dom";

const EditRejectModerationCoursesErrorMessage = ({errorMessage, number}) => {
    return (
        <div className="potencial-courses-error-message">
            <div className="potencial-courses-error-message-title">
                <h3 className="potencial-courses-error-message-title__title">
                    Почему мы отклонили ваш курс?
                </h3>
            </div>
            <div className="potencial-courses-error-message-text">
                <span className="subtitle__mb potencial-courses-error-message-text__subtitle">
                    Сообщение от нашей команды
                </span>
                <p className="potencial-courses-error-message-text__message">
                    {errorMessage}
                </p>
                <p className="potencial-courses-error-message-text__info">
                    Если у вас остались вопросы, вы можете написать нам на:{" "}
                    <a href="mailto:support@hobjob.ru">support@hobjob.ru</a>,{" "}
                    указав номер курса: #{number}
                </p>
                <Link
                    to="/course-regulations"
                    className="btn potencial-courses-error-message-text__btn"
                >
                    Рекомендации для мастеров
                </Link>
            </div>
        </div>
    );
};

export default EditRejectModerationCoursesErrorMessage;

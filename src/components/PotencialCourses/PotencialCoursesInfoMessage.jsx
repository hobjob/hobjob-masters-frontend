import React from "react";
import { Link } from "react-router-dom";

const PotencialCoursesInfoMessage = () => {
    return (
        <div className="potencial-courses-info-message">
            <div className="potencial-courses-info-message-image-adaptive">
                <img
                    src={`${process.env.REACT_APP_IMAGE_DOMEN}/all/potencial-courses-info-message-image-horizontal.svg`}
                    alt=""
                    className="potencial-courses-info-message-image-adaptive__image"
                />
            </div>
            <div className="potencial-courses-info-message-text">
                <h3 className="potencial-courses-info-message-text__title">
                    Какой путь проходит курс?
                </h3>
                <p className="potencial-courses-info-message-text__description">
                    После загрузки курса на платформу, наша команда начинает его
                    проверку, в течение 72 часов на вашу почту придёт ответ о
                    его статусе. Нельзя изменить курс после отправки на
                    модерацию, будьте внимательны.
                </p>
                <p className="potencial-courses-info-message-text__info">
                    Если модерация не пройдена - не страшно. На исправление
                    ошибок есть 14 дней.
                </p>
                <Link
                    to="/course-regulations"
                    className="btn potencial-courses-info-message-text__btn"
                >
                    Рекомендации для мастеров
                </Link>
            </div>
            <div className="potencial-courses-info-message-image">
                <img
                    src={`${process.env.REACT_APP_IMAGE_DOMEN}/all/potencial-courses-info-message-image-vertical.svg`}
                    alt=""
                    className="potencial-courses-info-message-image__image"
                />
            </div>
        </div>
    );
};

export default PotencialCoursesInfoMessage;

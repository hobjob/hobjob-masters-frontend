import React from "react";

const AddPotencialCoursesInfoMessage = () => {
    return (
        <div className="add-potencial-courses-info-message">
            <div className="add-potencial-courses-info-message-image-adaptive">
                <img
                    src={`${process.env.REACT_APP_IMAGE_DOMEN}/all/add-potencial-courses-info-message-image-horizontal.svg`}
                    alt=""
                    className="add-potencial-courses-info-message-image-adaptive__image"
                />
            </div>
            <div className="add-potencial-courses-info-message-text">
                <h3 className="add-potencial-courses-info-message-text__title">
                    Какой путь проходит курс?
                </h3>
                <p className="add-potencial-courses-info-message-text__description">
                    После загрузки курса на платформу, наша команда начинает его
                    проверку, в течение 72 часов на вашу почту придёт ответ о
                    его статусе. Нельзя изменить курс после отправки на
                    модерацию, будьте внимательны.
                </p>
                <p className="add-potencial-courses-info-message-text__info">
                    Если модерация не пройдена - не страшно. На исправление
                    ошибок есть 14 дней.
                </p>
            </div>
            <div className="add-potencial-courses-info-message-image">
                <img
                    src={`${process.env.REACT_APP_IMAGE_DOMEN}/all/add-potencial-courses-info-message-image-vertical.svg`}
                    alt=""
                    className="add-potencial-courses-info-message-image__image"
                />
            </div>
        </div>
    );
};

export default AddPotencialCoursesInfoMessage;

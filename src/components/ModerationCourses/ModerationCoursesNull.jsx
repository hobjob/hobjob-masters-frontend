import React from "react";
import { Link } from "react-router-dom";

const ModerationCoursesNull = () => {
    return (
        <div className="moderations-courses-null">
            <div className="moderations-courses-null-text">
                <h2 className="moderations-courses-null-text__title">
                    У вас нет курсов на модерации
                </h2>
                <p className="description__mb moderations-courses-null-text__description">
                    Чтобы начать зарабатывать вместе с HobJob, отправьте нам
                    свой курс
                </p>
                <div className="moderations-courses-null-text-btn">
                    <Link
                        to="/go/add/course"
                        className="btn moderations-courses-null-text__btn"
                    >
                        Добавить курс
                    </Link>
                    <Link
                        to="/course-regulations"
                        className="btn-regular moderations-courses-null-text__btn"
                    >
                        Рекомендации для мастеров
                    </Link>
                </div>
            </div>
            <div className="moderations-courses-null-img">
                <img
                    src={`${process.env.REACT_APP_IMAGE_DOMEN}/all/training-null.svg`}
                    alt="Не знаете с чего начать?"
                    className="moderations-courses-null__img"
                />
            </div>
        </div>
    );
};

export default ModerationCoursesNull;

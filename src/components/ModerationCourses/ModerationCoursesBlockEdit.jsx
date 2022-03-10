import React from "react";
import {Link} from "react-router-dom";

const ModerationCoursesBlockEdit = ({_id, image, number, title, category}) => {
    return (
        <Link
            to={`/go/courses/edit/${_id}`}
            className="moderation-courses-section-block edit"
        >
            <div className="moderation-courses-section-block-content">
                <div
                    className="moderation-courses-section-block-content-cover"
                    style={{
                        backgroundImage: `url('${`${process.env.REACT_APP_IMAGE_DOMEN}/${image}`}')`,
                    }}
                ></div>
                <div className="moderation-courses-section-block-content-text">
                    <div className="moderation-courses-section-block-content-text-item">
                        <span className="subtitle__mb moderation-courses-section-block-content-text__subtitle">
                            Курс #{number}
                        </span>
                        <h3 className="moderation-courses-section-block-content-text__title">
                            {title}
                        </h3>
                    </div>
                    <p className="moderation-courses-section-block-content-text__category">
                        <span>Направление:</span> {category}
                    </p>
                </div>
            </div>

            <p className="moderation-courses-section-block__status reject">
                Отклонен, <span>подробнее</span>
            </p>
        </Link>
    );
};

export default ModerationCoursesBlockEdit;

import React from "react";

const ModerationCoursesBlock = ({image, number, title, category}) => {
    return (
        <div className="moderation-courses-section-block">
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
            <span className="moderation-courses-section-block__status moderation">На модерации</span>
        </div>
    );
};

export default ModerationCoursesBlock;

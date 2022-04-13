import React from "react";

const ModerationCoursesBlock = ({image, number, title, category}) => {
    return (
        <div className="moderations-courses-section-block">
            <div className="moderations-courses-section-block-content">
                <div
                    className="moderations-courses-section-block-content-cover"
                    style={{
                        backgroundImage: `url('${`${process.env.REACT_APP_IMAGE_DOMEN}/${image}`}')`,
                    }}
                ></div>
                <div className="moderations-courses-section-block-content-text">
                    <div className="moderations-courses-section-block-content-text-item">
                        <span className="subtitle__mb moderations-courses-section-block-content-text__subtitle">
                            Курс #{number}
                        </span>
                        <h3 className="moderations-courses-section-block-content-text__title">
                            {title}
                        </h3>
                    </div>
                    <p className="moderations-courses-section-block-content-text__category">
                        <span>Направление:</span> {category}
                    </p>
                </div>
            </div>
            <div className="moderations-courses-section-block-status-wrapper">
                <span className="moderations-courses-section-block__status moderation">
                    На модерации
                </span>
            </div>
        </div>
    );
};

export default ModerationCoursesBlock;

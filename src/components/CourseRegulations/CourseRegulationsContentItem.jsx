import React from "react";

const CourseRegulationsContentItem = ({title, items, mainIndex}) => {
    return (
        <div className="course-regulations-content-item">
            <h2 className="course-regulations-content-item__title">{title}</h2>

            {items.map((item, index) => (
                <div
                    className="course-regulations-content-item-block"
                    key={`course-regulations-content-item-${mainIndex}-block-${index}`}
                >
                    <div className="course-regulations-content-item-block-top-text">
                        <h2 className="course-regulations-content-item-block-top-text__title">
                            {item.title}
                        </h2>
                        <p className="course-regulations-content-item-block-top-text__description">
                            {item.description}
                        </p>
                    </div>

                    <div className="course-regulations-content-item-block-descriptions-wrapper">
                        {item.blocksDescriptions.map((block, subindex) => (
                            <div
                                className="course-regulations-content-item-block-descriptions"
                                key={`course-regulations-content-item-${mainIndex}-block-${index}-descriptions-${subindex}`}
                            >
                                <span className="subtitle__mb course-regulations-content-item-block-descriptions__subtitle">
                                    {block.subtitle}
                                </span>
                                <p className="course-regulations-content-item-block-descriptions__description">
                                    {block.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CourseRegulationsContentItem;

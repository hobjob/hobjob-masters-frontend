import React from "react";

import {Link, animateScroll as scroll} from "react-scroll";

const CourseRegulationsContentItem = ({title, items, mainIndex}) => {
    return (
        <div className="course-regulations-content-item">
            <h2 className="course-regulations-content-item__title">{title}</h2>

            {items.map((item, index) => (
                <div
                    id={item.id}
                    className="course-regulations-content-item-block"
                    key={`course-regulations-content-item-${mainIndex}-block-${index}`}
                >
                    <div className="course-regulations-content-item-block-top-text">
                        <h2 className="course-regulations-content-item-block-top-text__title">
                            {item.title}
                        </h2>
                        {item.description && (
                            <p className="course-regulations-content-item-block-top-text__description">
                                {item.description}
                            </p>
                        )}
                    </div>

                    <div className="course-regulations-content-item-block-descriptions-wrapper">
                        {item.blocksDescriptions.map((block, subindex) => (
                            <div
                                className="course-regulations-content-item-block-descriptions"
                                key={`course-regulations-content-item-${mainIndex}-block-${index}-descriptions-${subindex}`}
                            >
                                {block.subtitle && (
                                    <span className="subtitle__mb course-regulations-content-item-block-descriptions__subtitle">
                                        {block.subtitle}
                                    </span>
                                )}
                                <p
                                    className="course-regulations-content-item-block-descriptions__description"
                                    dangerouslySetInnerHTML={{
                                        __html: block.description,
                                    }}
                                ></p>

                                {block.hrefTitle && (
                                    <Link
                                        to={block.hrefId}
                                        spy={true}
                                        smooth={true}
                                        offset={-150}
                                        duration={500}
                                    >
                                        <span className="course-regulations-content-item-block-descriptions__link">
                                            {block.hrefTitle}
                                        </span>
                                    </Link>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CourseRegulationsContentItem;

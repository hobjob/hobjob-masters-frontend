import React from "react";

const CategoriesItem = ({transfer, title, image, subtitle}) => {
    return (
        <div className="categories-item">
            <div className="categories-item-text">
                <h3 className="categories-item__title">{title}</h3>
            </div>

            <div className="categories-item-img">
                <img
                    src={`${process.env.REACT_APP_IMAGE_DOMEN}/${image}`}
                    alt={title}
                    className="categories-item__img"
                />
            </div>
        </div>
    );
};

export default CategoriesItem;

import React from "react";

const CategoriesItem = ({transfer, title, image, subtitle}) => {
    return (
        <div className="categories-item">
            <p className="categories-item__title">{title}</p>
        </div>
    );
};

export default CategoriesItem;

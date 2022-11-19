import React from "react";

const HomeCategoriesItem = ({transfer, title, image, subtitle}) => {
    return (
        <div className="main-categories-item">
            <p className="main-categories-item__title">{title}</p>
        </div>
    );
};

export default HomeCategoriesItem;

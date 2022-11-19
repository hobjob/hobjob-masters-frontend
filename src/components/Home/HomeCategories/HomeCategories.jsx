import React from "react";
import {useSelector} from "react-redux";

import {Loader, HomeCategoriesItem} from "../../";

const HomeCategories = () => {
    const {items, isLoadedAllCategories} = useSelector(
        ({categories}) => categories
    );

    return (
        <section className="main-categories">
            <div className="container">
                <div className="main-categories-wrapper">
                    <div className="main-categories-text">
                        <h2 className="main-categories-text__title">
                            Какие курсы можно предложить?
                        </h2>
                        <p className="main-categories-text__description">
                            Курсы должны быть нацелены на создание проекта в
                            любом из направлений HobJob
                        </p>
                    </div>

                    <div className="main-categories-items-wrapper">
                        {isLoadedAllCategories ? (
                            Object.keys(items).map((key, index) => (
                                <HomeCategoriesItem
                                    {...items[key]}
                                    key={`main-categories-items-${index}`}
                                />
                            ))
                        ) : (
                            <Loader />
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeCategories;

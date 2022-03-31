import React from "react";
import {useDispatch, useSelector} from "react-redux";

import {checkDeclension} from "../../Functions/checkDeclension";

import {Loader, CategoriesItem} from "../";

const CategoriesSection = () => {
    const dispatch = useDispatch();

    const {items, isLoadedAllCategories} = useSelector(
        ({categories}) => categories
    );

    return (
        <section className="categories">
            <div className="container">
                <div className="categories-wrapper">
                    <div className="categories-text">
                        <h2 className=" categories-text__title">
                            Какие курсы можно предложить?
                        </h2>
                        <p className="categories-text__description">
                            Курсы должны быть нацелены на создание проекта в
                            любом из направлений HobJob
                        </p>
                    </div>

                    <div className="categories-items-wrapper">
                        {isLoadedAllCategories ? (
                            Object.keys(items).map((key, index) => (
                                <CategoriesItem
                                    {...items[key]}
                                    key={`categories-items-${index}`}
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

export default CategoriesSection;

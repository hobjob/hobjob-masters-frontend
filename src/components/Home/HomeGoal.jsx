import React from "react";

import MainGoalImage from "../../assets/images/main-goal-image.svg";
import MainGoalImageMedia from "../../assets/images/main-goal-image-media.svg";

const HomeGoal = () => {
    return (
        <section className="main-goal">
            <div className="container">
                <div className="main-goal-wrapper">
                    <picture className="main-goal-picture">
                        <source
                            media="(max-width: 750px)"
                            alt="Наша цель - объединить мастеров своего дела на одной платформе и предоставить им удобную площадку для размещения своих курсов и обучения людей"
                            srcSet={MainGoalImageMedia}
                            className="main-goal-picture__image"
                        />

                        <img
                            src={MainGoalImage}
                            alt="Наша цель - объединить мастеров своего дела на одной платформе и предоставить им удобную площадку для размещения своих курсов и обучения людей"
                            className="main-goal-picture__image"
                        />
                    </picture>
                </div>
            </div>
        </section>
    );
};

export default HomeGoal;

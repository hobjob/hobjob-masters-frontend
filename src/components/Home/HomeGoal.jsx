import React from 'react'

import MainGoalImage from "../../assets/images/main-goal-image.svg";

const HomeGoal = () => {
  return (
      <section className="main-goal">
          <div className="container">
              <div className="main-goal-wrapper">
                  <img
                      src={MainGoalImage}
                      alt="Наша цель - объединить мастеров своего дела на одной платформе и предоставить им удобную площадку для размещения своих курсов и обучения людей"
                      className="main-goal__image"
                  />
              </div>
          </div>
      </section>
  );
}

export default HomeGoal
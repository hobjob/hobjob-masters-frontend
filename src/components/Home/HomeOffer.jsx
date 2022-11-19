import React from 'react'
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

import MainImage1 from "../../assets/images/main-image1.jpg";
import MainImage2 from "../../assets/images/main-image2.jpg";
import MainImage3 from "../../assets/images/main-image3.jpg";

const HomeOffer = () => {
	const { isLoadedMasterInfo } = useSelector(({ master }) => master);
	
  return (
      <section className="main-offer">
          <div className="container">
              <div className="main-offer-wrapper">
                  <h1 className="main-offer__title">
                      Рынок онлайн образования растёт на 20% каждый год.
                      Монетизируйте то, что умеете делать лучше всего - один раз
                      запишите курс и зарабатывайте на нём, не тратя деньги на
                      рекламу.{" "}
                      {isLoadedMasterInfo ? (
                          <Link to="/go/add/course">Добавить курс</Link>
                      ) : (
                          <Link to="/go/register">Стать мастером</Link>
                      )}
                  </h1>

                  <div className="main-offer-img-wrapper">
                      <div
                          style={{
                              backgroundImage: `url('${MainImage1}')`,
                          }}
                          className="main-offer-img"
                      ></div>
                      <div
                          style={{
                              backgroundImage: `url('${MainImage2}')`,
                          }}
                          className="main-offer-img"
                      ></div>
                      <div
                          style={{
                              backgroundImage: `url('${MainImage3}')`,
                          }}
                          className="main-offer-img"
                      ></div>
                  </div>
              </div>
          </div>
      </section>
  );
}

export default HomeOffer
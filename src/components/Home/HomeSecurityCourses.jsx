import React from 'react'
import {Link} from "react-router-dom";

import MainSecurityCoursesImage from "../../assets/images/main-security-courses-image.jpg";

const HomeSecurityCourses = () => {
  return (
      <section className="main-security-courses">
          <div className="container">
              <div className="main-security-courses-wrapper">
                  <div className="main-security-courses-text">
                      <h2 className="main-security-courses-text__title">
                          Ваши курсы в безопасности
                      </h2>
                      <p className="main-security-courses-text__description">
                          Мы продумали сложную систему безопасности курсов наших
                          мастеров. Никто не сможет их скачать, удалить или
                          скопировать.
                      </p>
                      <Link
                          to="/go/register"
                          className="btn main-security-courses-text__link"
                      >
                          Выложить курс
                      </Link>
                  </div>

                  <div className="main-security-courses-image">
                      <img
                          src={MainSecurityCoursesImage}
                          alt=""
                          className="main-security-courses-image__image"
                      />
                  </div>
              </div>
          </div>
      </section>
  );
}

export default HomeSecurityCourses
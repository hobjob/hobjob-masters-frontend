import React from "react";
import {Link} from "react-router-dom";

const HomeFaq = () => {
    return (
        <section className="main-faq">
            <div className="container">
                <div className="main-faq-wrapper">
                    <h2 className="main-faq__title">
                        Часто задаваемые вопросы
                    </h2>

                    <div className="main-faq-items-wrapper">
                        <div className="main-faq-item">
                            <h3 className="main-faq-item__title">
                                Кто может опубликовать курс в HobJob?
                            </h3>
                            <p className="main-faq-item__description">
                                Любой профессионал в творческой сфере. Вы можете
                                загрузить на платформу уже имеющийся курс или
                                снять новый, воспользовавшись нашими советами.
                            </p>
                        </div>

                        <div className="main-faq-item">
                            <h3 className="main-faq-item__title">
                                Нужно ли платить за размещение курса на
                                платформе?
                            </h3>
                            <p className="main-faq-item__description">
                                Нет, вы можете публиковать неограниченное
                                количество курсов, прошедших нашу модерацию.
                                Также не нужно вкладываться в рекламу, мы
                                занимаемся ей сами. Но можете продвигать курс
                                среди своих подписчиков или знакомых, привлекая
                                на него больше людей и зарабатывая на
                                реферальной программе.
                            </p>
                        </div>

                        <div className="main-faq-item">
                            <h3 className="main-faq-item__title">
                                Как стать мастером HobJob?
                            </h3>
                            <p className="main-faq-item__description">
                                <Link to="/go/register">Зарегистрируйтесь</Link> и загрузите свой
                                курс на платформу. Как только он пройдет
                                модерацию, вы станете активным мастером HobJob.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeFaq;

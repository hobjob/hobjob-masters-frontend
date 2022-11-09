import React from "react";
import {Helmet} from "react-helmet";

import {
    HomeOffer,
    HomeGoal,
    HomeServices,
    HomeMaster,
    HomeSecurityCourses,
} from "../components/";

const Home = () => {
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Helmet>
                <title>Главная - HobJob для мастеров</title>
			</Helmet>

			<HomeOffer />
			
			<HomeGoal />

			<HomeServices />
			
			<HomeMaster />

			<HomeSecurityCourses />
			
            {/* <section className="main-payment">
                <div className="container">
                    <div className="main-payment-wrapper">
                        <h2 className="main-payment__title">
                            Как я буду зарабатывать?
                        </h2>

                        <div className="main-payment-description">
                            <p className="main-payment-description__description">
                                HobJob работает по системе подписки. Каждый
                                месяц 30% от общей прибыли отправляется на
                                выплаты мастерам. Мастер получает оплату из
                                этого фонда за минуты просмотра своего курса.
                            </p>
                            <p className="main-payment-description__description">
                                Например, если минуты просмотра ваших курсов
                                составляют 5% от общего числа просмотренных
                                минут всех курсов на платформе, то вы получаете
                                5% от зарплатного фонда.
                            </p>

                            <div className="main-payment-description-img">
                                <img
                                    src={PaymentImage}
                                    alt=""
                                    className="main-payment-description-img__img"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <CategoriesSection />
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
                                    Любой профессионал в творческой сфере. Вы
                                    можете загрузить на платформу уже имеющийся
                                    курс или снять новый, воспользовавшись
                                    нашими советами.
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
                                    занимаемся ей сами. Но можете продвигать
                                    курс среди своих подписчиков или знакомых,
                                    привлекая на него больше людей и зарабатывая
                                    на реферальной программе.
                                </p>
                            </div>

                            <div className="main-faq-item">
                                <h3 className="main-faq-item__title">
                                    Как стать мастером HobJob?
                                </h3>
                                <p className="main-faq-item__description">
                                    Зарегистрируйтесь и загрузите свой курс на
                                    платформу. Как только он пройдет модерацию,
                                    вы станете активным мастером HobJob.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="main-footer">
                <div className="container">
                    <div className="main-footer-wrapper">
                        <div className="main-footer-block">
                            <h2 className="main-footer-block__title">
                                Готовы делиться своими знаниями?
                            </h2>
                            <p className="main-footer-block__description">
                                Вдохновляйте других на творчество. Учите тому,
                                что любите и умеете
                            </p>
                            {isLoadedMasterInfo ? (
                                <Link
                                    to="/go/add/course"
                                    className="btn main-footer-block__btn"
                                >
                                    Добавить курс
                                </Link>
                            ) : (
                                <a
                                    href="/go/register"
                                    className="btn main-footer-block__btn"
                                >
                                    Стать мастером
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </section> */}
        </>
    );
};

export default Home;

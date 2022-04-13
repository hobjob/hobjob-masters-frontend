import React from "react";
import {Helmet} from "react-helmet";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

import {CategoriesSection} from "../components/";

import MainImage1 from "../assets/images/main-image1.jpg";
import MainImage2 from "../assets/images/main-image2.jpg";
import MainImage3 from "../assets/images/main-image3.jpg";

import PaymentImage from "../assets/images/payment-image.svg";

const Home = () => {
    const {isLoadedMasterInfo} = useSelector(({master}) => master);

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Helmet>
                <title>Главная - HobJob для мастеров</title>
            </Helmet>

            <section className="main-offer">
                <div className="container">
                    <div className="main-offer-wrapper">
                        <h1 className="main-offer__title">
                            Рынок онлайн образования растёт на 20% каждый год.
                            Монетизируйте то, что умеете делать лучше всего -
                            один раз запишите курс и зарабатывайте на нём, не
                            тратя деньги на рекламу.{" "}
                            {isLoadedMasterInfo ? (
                                <Link to="/go/drafts">Добавить курс</Link>
                            ) : (
                                <a href="/go/register">Стать мастером</a>
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

            <section className="main-services">
                <div className="container">
                    <div className="main-services-wrapper">
                        <h2 className="main-services__title">
                            Плюсы создания курса и работы с HobJob
                        </h2>
                        <div className="main-services-items-wrapper">
                            <div className="main-services-item">
                                <h3 className="main-services-item__title">
                                    Новая аудитория
                                </h3>
                                <p className="main-services-item__description">
                                    За счёт просмотров вашего курса, придут
                                    новые подписчики и клиенты, с которыми вы
                                    сможете общаться и продавать свой продукт.
                                </p>
                            </div>

                            <div className="main-services-item">
                                <h3 className="main-services-item__title">
                                    Поддержка от HobJob
                                </h3>
                                <p className="main-services-item__description">
                                    Чтобы вам было проще, мы подготовили
                                    подробную инструкцию по созданию курса.
                                    Ребята из нашей команды рассказали, как
                                    снимать, где снимать, что снимать, чем
                                    снимать и как монтировать.
                                    <br />
                                    <Link to="/course-regulations">
                                        Рекомендации для мастеров
                                    </Link>
                                </p>
                            </div>

                            <div className="main-services-item">
                                <h3 className="main-services-item__title">
                                    Помощь в продвижении
                                </h3>
                                <p className="main-services-item__description">
                                    Команда HobJob занимается рекламой всех
                                    курсов на платформе. Вам не нужно за неё
                                    платить. Также ваш курс будет продвигаться
                                    внутри платформы среди её пользователей.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="main-payment">
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
                                Например, если просмотр ваших курсов составляет
                                5% от общего числа просмотренных минут, то вы
                                получаете 5% от зарплатного фонда.
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
                                    нашими советами, которые будут доступны
                                    после регистрации.
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
                                    to="/go/drafts"
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
            </section>
        </>
    );
};

export default Home;

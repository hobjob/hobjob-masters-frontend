import React from "react";
import {Link} from "react-router-dom";

const HomeServices = () => {
    return (
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
                                За счёт просмотров вашего курса, придут новые
                                подписчики и клиенты, с которыми вы сможете
                                общаться и продавать свой продукт.
                            </p>
                        </div>

                        <div className="main-services-item">
                            <h3 className="main-services-item__title">
                                Поддержка от HobJob
                            </h3>
                            <p className="main-services-item__description">
                                Чтобы вам было проще, мы подготовили подробную
                                инструкцию по созданию курса. Ребята из нашей
                                команды рассказали, как снимать, где снимать,
                                что снимать, чем снимать и как монтировать.
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
                                Команда HobJob занимается рекламой всех курсов
                                на платформе. Вам не нужно за неё платить. Также
                                ваш курс будет продвигаться внутри платформы
                                среди её пользователей.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeServices;

import React from "react";
import {Link} from "react-router-dom";

import MainMasterAboutImage from "../../assets/images/main-master-about-image.png";
import MainMasterFilmedCourseImage from "../../assets/images/main-master-filmed-course-image.jpg";
import MainMasterUploadCourseImage1 from "../../assets/images/main-master-upload-course-image1.jpg";
import MainMasterUploadCourseImage2 from "../../assets/images/main-master-upload-course-image2.jpg";
import MainMasterUploadCourseStatisticsImage from "../../assets/images/main-master-upload-course-statistics-image.jpg";
import MainMasterPaymentImage from "../../assets/images/main-master-payment-image.svg";

const HomeMaster = () => {
    return (
        <section className="main-master">
            <div className="container">
                <div className="main-master-wrapper">
                    <div className="main-master-about">
                        <div className="main-master-about-wrapper">
                            <div className="main-master-about-text">
                                <h2 className="main-master-about-text__title">
                                    Меня зовут Яна, и сегодня я поделюсь своей
                                    историей о работе с HobJob
                                </h2>
                                <p className="main-master-about-text__description">
                                    Я познакомилась с HobJob, когда только
                                    начала проводить мастер-классы по
                                    суккулентам и активно вести сообщество во
                                    ВКонтакте. И после каждого поста или мастер
                                    класса я думала, как сделать так, чтобы
                                    каждый раз не отвечать на одинаковые
                                    вопросы, которые мне задают. И вот тогда то
                                    у меня появилась идея сделать онлайн курс, в
                                    который я внесла все часто задаваемые
                                    вопросы моих подписчиков.
                                </p>
                            </div>
                            <div className="main-master-about-image">
                                <img
                                    src={MainMasterAboutImage}
                                    alt=""
                                    className="main-master-about-image__image"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="main-master-filmed-course">
                        <div className="main-master-filmed-course-wrapper">
                            <div className="main-master-filmed-course-title">
                                <h2 className="main-master-filmed-course-title__title">
                                    Как я сняла курс?
                                </h2>
                            </div>
                            <div className="main-master-filmed-course-content">
                                <p className="main-master-filmed-course-content__description">
                                    На платформе есть{" "}
                                    <Link to="/course-regulations">
                                        очень удобное руководство по созданию
                                        своего курса.
                                    </Link>{" "}
                                    С помощью него я быстро написала сценарий и
                                    решила снимать в студии. Вышло дёшево,
                                    что-то в районе 3000 рублей за 3 часа, свет,
                                    декор, стол входили в стоимость.
                                </p>

                                <p className="main-master-filmed-course-content__description">
                                    Выбрала студию, потому что там красивый фон,
                                    хотя по правилам платформы можно снимать
                                    хоть на фоне стены у себя дома, главное,
                                    чтобы всё было гармонично и ничего не
                                    отвлекало от обучения.
                                </p>

                                <p className="main-master-filmed-course-content__description">
                                    Сняв курс, я сама его смонтировала в простой
                                    бесплатной программе на компьютере. А
                                    снимала на свой 12 iphone
                                </p>

                                <div
                                    className="main-master-filmed-course-content-image"
                                    style={{
                                        backgroundImage: `url(${MainMasterFilmedCourseImage})`,
                                    }}
                                ></div>
                            </div>
                        </div>
                    </div>

                    <div className="main-master-upload-course">
                        <div className="main-master-upload-course-wrapper">
                            <div className="main-master-upload-course-text">
                                <h2 className="main-master-upload-course-text__title">
                                    Загрузка курса
                                </h2>
                                <div className="main-master-upload-course-text-descriptions">
                                    <p className="main-master-upload-course-text-descriptions__description">
                                        Загрузила курс на платформу. И тут
                                        просто все идеально. Меня очень
                                        порадовал интерфейс загрузки курса и
                                        самой платформы.
                                    </p>
                                    <p className="main-master-upload-course-text-descriptions__description">
                                        Ничего сложно: название урока, описание,
                                        видео самого урока, фото и можно
                                        добавить дополнительные материалы к
                                        уроку. Я сделала памятку по уходу за
                                        суккулентами.
                                    </p>
                                </div>
                            </div>
                            <div className="main-master-upload-course-images">
                                <img
                                    src={MainMasterUploadCourseImage1}
                                    alt=""
                                    className="main-master-upload-course-images__image"
                                />

                                <img
                                    src={MainMasterUploadCourseImage2}
                                    alt=""
                                    className="main-master-upload-course-images__image"
                                />
                            </div>

                            <p className="main-master-upload-course-moderation__description">
                                Дальше отправила курс на модерацию и начала
                                заниматься своими делами. Модерация прошла
                                быстро, на следующий день на почту прислали
                                письмо, что мой курс то что надо, и теперь я
                                полноценный мастер HobJob.
                            </p>
                            <img
                                src={MainMasterUploadCourseStatisticsImage}
                                alt=""
                                className="main-master-upload-course-statistics__image"
                            />
                        </div>
                    </div>

                    <div className="main-master-payment">
                        <div className="main-master-payment-wrapper">
                            <div className="main-master-payment-title">
                                <h2 className="main-master-payment-title__title">
                                    Как я заработала на курсе?
                                </h2>
                            </div>
                            <div className="main-master-payment-content">
                                <div className="main-master-payment-content-descriptions">
                                    <p className="main-master-payment-content-descriptions__description">
                                        У HobJob довольно интересная система
                                        распределения прибыли с одного человека.
                                        Во-первых, платформа работает по системе
                                        подписки, и я буду получать прибыль с
                                        человека, пока он не отпишется или не
                                        перестанет смотреть мой курс.
                                    </p>
                                    <p className="main-master-payment-content-descriptions__description">
                                        Во-вторых, если подписчик смотрел в этом
                                        месяце только ваш курс, то прибыль с
                                        него получаете только вы. А если он
                                        смотрел ваш курс и чей-то ещё, то
                                        прибыль с этого подписчика будет
                                        делиться между вами в зависимости от
                                        количества минут, проведённых человеком
                                        на вашем курсе.
                                    </p>
                                    <p className="main-master-payment-content-descriptions__description">
                                        Очень круто, что деньги присылают прям
                                        на карту, её просто нужно указать в
                                        своём профиле. Выплаты раз в месяц.
                                    </p>
                                </div>
                                <img
                                    src={MainMasterPaymentImage}
                                    alt=""
                                    className="main-master-payment-content__image"
								/>
								
                                <div className="main-master-payment-content-bottom">
                                    <p className="main-master-payment-content-bottom__description">
                                        И вот месяц подошёл к концу, а мне на
                                        карту пришло 28 000₽ Я была в шоке.
                                        Продвижением курса я почти не
                                        занималась, только выложила в своём
                                        сообществе. А теперь всем знакомым
                                        советую разместить свои курсы на HobJob,
                                        чтобы зарабатывать на любимом деле ещё
                                        больше.
                                    </p>
                                    <Link
                                        to="/go/register"
                                        className="btn main-master-payment-content-bottom__link"
                                    >
                                        Стать мастером
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeMaster;

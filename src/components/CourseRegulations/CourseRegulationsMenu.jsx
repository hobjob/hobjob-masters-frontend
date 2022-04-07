import React from "react";

import {CourseRegulationsMenuItem} from "../";

const CourseRegulationsMenu = () => {
    const regulationsMenu = [
        {
            title: "С чего начать?",
            subtitle: [
                {
                    title: "Выберите тему курса",
                    id: "theme-course",
                },
                {
                    title: "Дайте название",
                    id: "give-name",
                },
                {
                    title: "Составьте описание",
                    id: "write-description",
                },
                {
                    title: "Снимите курс",
                    id: "take-course",
                },
                {
                    title: "Загрузите на платформу",
                    id: "upload-platform",
                },
            ],
        },
        {
            title: "Стандарты качества HobJob",
            subtitle: [
                {
                    title: "Руководство по качеству курса",
                    id: "course-quality-guide",
                },
                {
                    title: "Недопустимые темы",
                    id: "invalid-themes",
                },
                {
                    title: "Дополнительные правила для мастера",
                    id: "additional-rules-master",
                },
            ],
        },
        {
            title: "Съемка и редактирование",
            subtitle: [
                {
                    title: "Выберите качественное оборудование",
                    id: "choose-quality-equipment",
                },
                {
                    title: "Подготовьте локацию для съемки",
                    id: "prepare-location-shooting",
                },
                {
                    title: "Проработайте сценарий",
                    id: "work-script",
                },
                {
                    title: "Снимите и смонтируйте курс",
                    id: "film-mount-course",
                },
                {
                    title: "Настройки для записи и экспорта видео",
                    id: "settings-recording-exporting-videos",
                },
            ],
        },
        {
            title: "Реклама курса",
            subtitle: [
                {
                    title: "Рекомендации по социальным сетям",
                    id: "social-media-recommendations",
                },
                {
                    title: "Будет ли HobJob продвигать курс?",
                    id: "will-HobJob-promote-course",
                },
            ],
        },
        {
            title: "Выплаты",
            subtitle: [
                {
                    title: "От чего зависит моя прибыль?",
                    id: "what-does-profit-depend-on",
                },
                {
                    title: "Где я могу найти информацию о статике просмотров курса?",
                    id: "statistics-info-master",
                },
                {
                    title: "Когда и как я буду получать платежи от HobJob?",
                    id: "when-how-will-receive-payments-HobJob?",
                },
                {
                    title: "Могу ли я сделать скидку на свой курс?",
                    id: "can-make-discount-course",
                },
                {
                    title: "Могу ли я предоставить бесплатный доступ к курсу?",
                    id: "can-provide-free-access-course?",
                },
                {
                    title: "Нужно ли мне платить налог с доходов от HobJob?",
                    id: "do-need-pay-tax-on-HobJob-income?",
                },
            ],
        },
    ];

    const [stateOpenAdaptive, setStateOpenAdaptive] = React.useState(false);
	
    const onClikcMenuAdaptive = () => {
        setStateOpenAdaptive(!stateOpenAdaptive);
    };

    return (
        <div className="course-regulations-menu-wrapper">
            {stateOpenAdaptive ? (
                <span
                    onClick={onClikcMenuAdaptive}
                    className="course-regulations-menu__btn"
                >
                    <svg
                        width="20"
                        height="14"
                        viewBox="0 0 20 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <line
                            y1="1.25"
                            x2="20"
                            y2="1.25"
                            stroke="black"
                            strokeWidth="1.5"
                        />
                        <line
                            y1="7.25"
                            x2="20"
                            y2="7.25"
                            stroke="black"
                            strokeWidth="1.5"
                        />
                        <line
                            y1="13.25"
                            x2="20"
                            y2="13.25"
                            stroke="black"
                            strokeWidth="1.5"
                        />
                    </svg>
                    Меню
                </span>
            ) : (
                <span
                    onClick={onClikcMenuAdaptive}
                    className="course-regulations-menu__btn"
                >
                    <svg
                        width="20"
                        height="14"
                        viewBox="0 0 20 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <line
                            y1="1.25"
                            x2="20"
                            y2="1.25"
                            stroke="black"
                            strokeWidth="1.5"
                        />
                        <line
                            y1="7.25"
                            x2="20"
                            y2="7.25"
                            stroke="black"
                            strokeWidth="1.5"
                        />
                        <line
                            y1="13.25"
                            x2="20"
                            y2="13.25"
                            stroke="black"
                            strokeWidth="1.5"
                        />
                    </svg>
                    Меню
                </span>
            )}

            <div
                className={`course-regulations-menu ${
                    stateOpenAdaptive || window.screen.width > 1200
                        ? ""
                        : "close"
                }`}
            >
                {regulationsMenu.map((item, index) => (
                    <CourseRegulationsMenuItem
                        {...item}
                        onClikcMenuAdaptive={onClikcMenuAdaptive}
                        index={index}
                        key={`course-regulations-menu-${index}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default CourseRegulationsMenu;

import React from "react";

import {CourseRegulationsMenuItem} from "../";

const CourseRegulationsMenu = () => {
    const regulationsMenu = [
        {
            title: "С чего начать?",
            subtitle: [
                {
                    title: "Выберите тему курса",
                },
                {
                    title: "Дайте название",
                },
                {
                    title: "Составьте описание",
                },
                {
                    title: "Снимите курс",
                },
                {
                    title: "Загрузите на платформу",
                },
            ],
        },
        {
            title: "Стандарты качества HobJob",
            subtitle: [
                {
                    title: "Руководство по качеству курса",
                },
                {
                    title: "Допустимые темы",
                },
                {
                    title: "Модерация",
                },
                {
                    title: "Дополнительные правила для мастера",
                },
                {
                    title: "Публикациях чужих бесплатных курсов",
                },
            ],
        },
        {
            title: "Съемка и редактирование",
            subtitle: [
                {
                    title: "Выберите качественное оборудование",
                },
                {
                    title: "Подготовьте локацию для съемки",
                },
                {
                    title: "Проработайте сценарий",
                },
                {
                    title: "Снимите и смонтируйте курс",
                },
                {
                    title: "Настройки для записи и экспорта видео",
                },
            ],
        },
        {
            title: "Загрузка курса на платформу HobJob",
            subtitle: [
                {
                    title: "Пошаговое руководство по загрузке и публикации",
                },
            ],
        },
        {
            title: "Реклама курса",
            subtitle: [
                {
                    title: "Рекомендации по социальным сетям",
                },
                {
                    title: "Важность фото ",
                },
                {
                    title: "Будет ли HobJob продвигать курс?",
                },
            ],
        },
    ];

    return (
        <div className="course-regulations-menu-wrapper">
            <div className="course-regulations-menu">
                {regulationsMenu.map((item, index) => (
                    <CourseRegulationsMenuItem
                        {...item}
                        index={index}
                        key={`course-regulations-menu-${index}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default CourseRegulationsMenu;

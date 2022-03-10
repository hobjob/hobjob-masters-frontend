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

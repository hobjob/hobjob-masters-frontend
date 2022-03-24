import React from "react";
import {Helmet} from "react-helmet";

import {
    CourseRegulationsMenu,
    CourseRegulationsContentItem,
} from "../components/";

const CourseRegulations = () => {
    const regulationsBlocks = [
        {
            title: "С чего начать?",
            items: [
                {
                    title: "Выберите тему курса",
                    description:
                        "Несколько советов, которые помогут определиться с темой курса",
                    blocksDescriptions: [
                        {
                            subtitle: "Учите тому, что знаете",
                            description:
                                "Пусть ваш курс будет сосредоточен на конкретном изделии, навыке или предмете, которым владеете в совершенстве и о котором есть что рассказать.",
                        },
                        {
                            subtitle: "Поставьте себя на место ученика",
                            description:
                                "Спросите: «Чему бы я хотел научиться, когда только начинал разбираться в этой сфере, каких знаний мне не хватало?». Это поможет более узко подобрать тему курса и проработать его сценарий.",
                        },
                    ],
                },
            ],
        },
    ];

    return (
        <>
            <Helmet>
                <title>
                    Рекомендации по созданию курса - HobJob для мастеров
                </title>
            </Helmet>

            <section className="course-regulations">
                <div className="container">
                    <div className="course-regulations-wrapper">
						<CourseRegulationsMenu />
						
                        <div className="course-regulations-content-wrapper">
                            {regulationsBlocks.map((item, index) => (
                                <CourseRegulationsContentItem
                                    {...item}
                                    mainIndex={index}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default CourseRegulations;

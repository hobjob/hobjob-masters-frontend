import React from "react";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

const HomeFooter = () => {
	const { isLoadedMasterInfo } = useSelector(({ master }) => master);
	
    return (
        <section className="main-footer">
            <div className="container">
                <div className="main-footer-wrapper">
                    <div className="main-footer-block">
                        <h2 className="main-footer-block__title">
                            Готовы делиться своими знаниями?
                        </h2>
                        <p className="main-footer-block__description">
                            Вдохновляйте других на творчество. Учите тому, что
                            любите и умеете
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
        </section>
    );
};

export default HomeFooter;

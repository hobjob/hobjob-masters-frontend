import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {Helmet} from "react-helmet";

import {fetchMasterReferrals} from "../redux/actions/master";

import {Loader, ReferralsBlockLink, ReferralsPartners} from "../components/";

const Referrals = () => {
    const dispatch = useDispatch();

    const {masterInfo, isLoadedMasterInfo, referrals, isLoadedMasterReferrals} =
        useSelector(({master}) => master);

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    React.useEffect(() => {
        if (!referrals.length && isLoadedMasterInfo) {
            dispatch(fetchMasterReferrals());
        }
    }, [isLoadedMasterInfo]);

    return (
        <>
            <Helmet>
                <title>Пригласи друга - HobJob для мастеров</title>
            </Helmet>

            {localStorage.getItem("accessToken") ? (
                isLoadedMasterInfo && isLoadedMasterReferrals ? (
                    <section className="referrals">
                        <div className="container">
                            <div className="referrals-wrapper">
                                <div className="referrals-top-text-wrapper">
                                    <div className="referrals-top">
                                        <div className="referrals-top-text">
                                            <h2 className="title referrals-top-text__title">
                                                Делитесь своим курсом с
                                                подписчиками
                                            </h2>
                                            <p className="description referrals-top-text__description">
                                                Поделитесь своей уникальной
                                                ссылкой в соц.сетях и получите
                                                400 рублей за каждого нового
                                                пользователя на платформе, как
                                                только он оплатит подписку.
                                            </p>

                                            <Link
                                                to="/go/referrals/policy"
                                                className="btn__gray referrals-top-text__btn"
                                            >
                                                Ознакомиться с правилами
                                            </Link>
                                        </div>
                                        <div className="referrals-top-img">
                                            <img
                                                src={`${process.env.REACT_APP_IMAGE_DOMEN}/all/referral-masters.svg`}
                                                alt=""
                                                className="referrals-top-img__img"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="referrals-info-block-wrapper">
                                    <ReferralsBlockLink {...masterInfo} />
                                </div>

                                <ReferralsPartners referrals={referrals} />
                            </div>
                        </div>
                    </section>
                ) : (
                    <Loader />
                )
            ) : (
                (window.location.href = "/go/login")
            )}
        </>
    );
};

export default Referrals;

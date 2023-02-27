import React from "react";
import {useSelector} from "react-redux";

import moment from "moment";
import "moment/locale/ru";

import NumberFormat from "react-number-format";

import {ReferralsBlockLinkSelect} from "../";

const ReferralsBlockLink = ({_id}) => {
    const {masterInfo} = useSelector(({master}) => master);

    const [stateCopy, setStateCopy] = React.useState(false);
    const [stateLink, setStateLink] = React.useState(`hobjob.ru?ref=${_id}`);
    const [isPervInitStateLink, setIsPervInitStateLink] = React.useState(true);

    React.useEffect(() => {
        if (!isPervInitStateLink) copyLink();
    }, [stateLink]);

    const copyLink = () => {
        navigator.clipboard.writeText(`https://${stateLink}`);

        setStateCopy(true);

        setTimeout(() => {
            setStateCopy(false);
        }, 1800);
    };

    return (
        <div className="referrals-info-block referrals-info-block-link">
            <div className="referrals-info-block-link-balance">
                <span className="referrals-info-block-link-balance__description">
                    Заработано за{" "}
                    <span>{moment().locale("ru").format("MMMM")}</span>
                </span>

                <h3 className="referrals-info-block-link-balance__number">
                    <NumberFormat
                        value={
                            masterInfo.balance[0].sum.referrals.buy +
                            masterInfo.balance[0].sum.referrals.subscribe
                        }
                        displayType={"text"}
                        thousandSeparator={" "}
                    />{" "}
                    ₽
                </h3>
            </div>

            <h3 className="referrals-info-block-link__title">
                Ваша реферальная ссылка
            </h3>
            <p className="referrals-info-block-link__subtitle">
                Это уникальная ссылка для вашего аккаунта, с помощью неё мы
                фиксируем ваших партнеров в системе
            </p>

            <ReferralsBlockLinkSelect
                setStateLink={setStateLink}
                _id={_id}
                setIsPervInitStateLink={setIsPervInitStateLink}
            />

            <div className="referrals-info-block-link-copy">
                <input
                    className="referrals-info-block-link-copy__link"
                    value={stateLink}
                    readOnly
                />
                <div className="referrals-info-block-link-copy-subtitle">
                    <span
                        onClick={copyLink}
                        className={`referrals-info-block-link-copy-subtitle__subtitle ${
                            stateCopy ? "active" : ""
                        }`}
                    >
                        Копировать
                    </span>
                    <span
                        className={`referrals-info-block-link-copy-subtitle__success ${
                            stateCopy ? "active" : ""
                        }`}
                    >
                        Скопировано{" "}
                        <svg
                            width="10"
                            height="8"
                            viewBox="0 0 10 8"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M0.353577 3.27808L4.03779 6.96231"
                                stroke="#dd9e5e"
                            />
                            <path
                                d="M3.33063 6.96225L9.64643 0.646454"
                                stroke="#dd9e5e"
                            />
                        </svg>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default ReferralsBlockLink;

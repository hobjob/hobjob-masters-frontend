import React from "react";
import {Link, NavLink} from "react-router-dom";
import {useSelector} from "react-redux";

import Logo from "../../assets/images/logo.svg";

const HeaderModalMenu = React.memo(
    ({
        HeaderModalMenuRef,
        modalMenuAnimationState,
        onClickCloseModalMenu,
        clickLogout,
    }) => {
        const checkActive = (match, location) => {
            if (!location) return false;
            const {pathname} = location;

            return pathname === "/";
        };

        const {masterInfo, isLoadedMasterInfo} = useSelector(
            ({master}) => master
        );

        return (
            <div
                className={`header-modal-menu-wrapper ${
                    modalMenuAnimationState ? "hidden" : ""
                }`}
                ref={HeaderModalMenuRef}
            >
                <div className="header-modal-menu-content">
                    <div
                        className="header-modal-menu-close"
                        onClick={onClickCloseModalMenu}
                    >
                        <svg
                            width="39"
                            height="38"
                            viewBox="0 0 39 38"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <line
                                x1="1.29289"
                                y1="36.2929"
                                x2="36.6482"
                                y2="0.937555"
                                stroke="black"
                                strokeWidth="2"
                            />
                            <line
                                x1="2.70711"
                                y1="1.29289"
                                x2="38.0624"
                                y2="36.6482"
                                stroke="black"
                                strokeWidth="2"
                            />
                        </svg>
                    </div>
                    <Link
                        to="/"
                        className="header-modal-menu-logo__link"
                        onClick={onClickCloseModalMenu}
                    >
                        <img
                            src={Logo}
                            alt="HobJob"
                            className="header-modal-menu-logo__img"
                        />
                    </Link>
                    <nav className="header-modal-menu-nav">
                        <NavLink
                            to="/"
                            className="header-modal-menu-nav__link"
                            activeClassName="header-modal-menu-nav__link active"
                            onClick={onClickCloseModalMenu}
                            isActive={checkActive}
                        >
                            Главная
                        </NavLink>
                        <NavLink
                            to="/course-regulations"
                            className="header-modal-menu-nav__link"
                            activeClassName="header-modal-menu-nav__link active"
                            onClick={onClickCloseModalMenu}
                        >
                            Рекомендации для мастеров
                        </NavLink>
                        <a
                            href={process.env.REACT_APP_HOBJOB_DOMEN}
                            className="header-modal-menu-nav__link"
                        >
                            Платформа HobJob
                        </a>
                        {!isLoadedMasterInfo ? (
                            <div className="header-modal-menu-nav-bottom">
                                <a
                                    href="/go/login"
                                    className="header-modal-menu-nav__link"
                                    activeClassName="header-modal-menu-nav__link active"
                                    onClick={onClickCloseModalMenu}
                                >
                                    Войти
                                </a>
                                <a
                                    href="/go/register"
                                    className="header-modal-menu-nav__link"
                                    activeClassName="header-modal-menu-nav__link active"
                                    onClick={onClickCloseModalMenu}
                                >
                                    Зарегистрироваться
                                </a>
                            </div>
                        ) : (
                            <div className="header-modal-menu-nav-bottom">
                                <NavLink
                                    to="/go/statistics"
                                    className="header-modal-menu-nav__link"
                                    activeClassName="header-modal-menu-nav__link active"
                                    onClick={onClickCloseModalMenu}
                                >
                                    Статистика
                                </NavLink>

                                <Link
                                    to="/go/add/course"
                                    className="header-modal-menu-nav__link"
                                >
                                    Добавить курс
                                </Link>

                                <NavLink
                                    to="/go/moderations-courses"
                                    className="header-modal-menu-nav__link"
                                    activeClassName="header-modal-menu-nav__link active"
                                    onClick={onClickCloseModalMenu}
                                >
                                    Курсы на модерации
                                </NavLink>

                                <NavLink
                                    to="/go/drafts"
                                    className="header-modal-menu-nav__link"
                                    activeClassName="header-modal-menu-nav__link active"
                                    onClick={onClickCloseModalMenu}
                                >
                                    Черновики{" "}
                                    {masterInfo.draftsCount
                                        ? `(${masterInfo.draftsCount})`
                                        : null}
                                </NavLink>

                                <NavLink
                                    to="/go/referrals"
                                    className="header-modal-menu-nav__link"
                                    activeClassName="header-modal-menu-nav__link active"
                                    onClick={onClickCloseModalMenu}
                                >
                                    Реферальная программа
                                </NavLink>

                                <NavLink
                                    to="/go/cabinet"
                                    className="header-modal-menu-nav__link"
                                    activeClassName="header-modal-menu-nav__link active"
                                    onClick={onClickCloseModalMenu}
                                >
                                    Настройки
                                </NavLink>

                                <span
                                    onClick={clickLogout}
                                    className="header-modal-menu-nav__link"
                                >
                                    Выйти
                                </span>
                            </div>
                        )}
                    </nav>
                    <div className="header-modal-menu-social">
                        <a
                            href="https://vk.com/hobjob"
                            className="header-modal-menu-social__link"
                        >
                            <svg
                                width="25"
                                height="16"
                                viewBox="0 0 28 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M27.8515 14.4274C27.8176 14.3543 27.786 14.2937 27.7566 14.2451C27.2708 13.3702 26.3425 12.2963 24.9722 11.0231L24.9432 10.9939L24.9287 10.9796L24.914 10.965H24.8993C24.2774 10.3721 23.8836 9.97345 23.7186 9.76936C23.4169 9.38058 23.3493 8.98705 23.5142 8.58831C23.6307 8.28705 24.0684 7.65082 24.8263 6.67876C25.2249 6.16361 25.5406 5.75072 25.7738 5.43966C27.4553 3.20419 28.1843 1.77569 27.9606 1.15361L27.8738 1.00824C27.8154 0.920721 27.6648 0.840656 27.4221 0.767638C27.1788 0.694773 26.8679 0.682723 26.4888 0.731283L22.2903 0.760285C22.2223 0.736184 22.1252 0.738431 21.9986 0.767638C21.8723 0.796845 21.809 0.8115 21.809 0.8115L21.736 0.848009L21.678 0.891871C21.6294 0.920873 21.5759 0.971884 21.5175 1.0448C21.4595 1.11746 21.4109 1.20273 21.3721 1.2999C20.915 2.4759 20.3953 3.56928 19.812 4.57999C19.4524 5.18266 19.1221 5.70497 18.8205 6.14721C18.5193 6.5893 18.2666 6.91503 18.0627 7.12382C17.8584 7.33281 17.6741 7.50024 17.5086 7.62672C17.3433 7.75325 17.2171 7.80671 17.1297 7.78715C17.0422 7.7676 16.9597 7.74819 16.8816 7.72879C16.7456 7.64127 16.6363 7.52225 16.5538 7.37162C16.471 7.22099 16.4152 7.03139 16.3861 6.803C16.3571 6.57445 16.3399 6.37786 16.335 6.21257C16.3305 6.04749 16.3326 5.81399 16.3424 5.51273C16.3525 5.21131 16.3571 5.00737 16.3571 4.90045C16.3571 4.53107 16.3643 4.13019 16.3787 3.6977C16.3934 3.26521 16.4053 2.92253 16.4153 2.67008C16.4252 2.41738 16.4298 2.15002 16.4298 1.86817C16.4298 1.58631 16.4126 1.36526 16.3787 1.20483C16.3452 1.0446 16.2938 0.889062 16.226 0.738278C16.1579 0.587647 16.0581 0.471125 15.9272 0.388405C15.796 0.305788 15.6329 0.240225 15.4388 0.191512C14.9237 0.0749389 14.2677 0.0118781 13.4706 0.00207431C11.6629 -0.017329 10.5014 0.0993972 9.98634 0.3521C9.78224 0.45887 9.59756 0.604752 9.43242 0.789288C9.25744 1.00318 9.23303 1.11991 9.35935 1.13911C9.94258 1.22648 10.3555 1.43547 10.5985 1.76589L10.686 1.94098C10.7541 2.0673 10.8222 2.29095 10.8902 2.61162C10.9582 2.93229 11.0021 3.28701 11.0214 3.67559C11.0699 4.38519 11.0699 4.99261 11.0214 5.49792C10.9727 6.00343 10.9267 6.39696 10.8829 6.67882C10.839 6.96067 10.7734 7.18907 10.686 7.36396C10.5985 7.53889 10.5402 7.64582 10.511 7.68462C10.4818 7.72343 10.4575 7.74789 10.4382 7.75749C10.3119 7.80589 10.1805 7.83056 10.0445 7.83056C9.90837 7.83056 9.74323 7.76244 9.54889 7.62631C9.35461 7.49018 9.15296 7.30319 8.94397 7.06504C8.73498 6.82684 8.49928 6.49397 8.23677 6.06639C7.97447 5.6388 7.70231 5.13344 7.42045 4.55032L7.18725 4.12743C7.04147 3.85537 6.84233 3.45924 6.58963 2.93938C6.33677 2.41932 6.11328 1.91626 5.91899 1.43031C5.84132 1.22622 5.72465 1.07084 5.56917 0.963919L5.4962 0.920057C5.44769 0.88125 5.36982 0.840043 5.263 0.79613C5.15603 0.752269 5.04441 0.720815 4.92768 0.701462L0.933198 0.730466C0.525013 0.730466 0.248056 0.822938 0.102225 1.00763L0.0438618 1.09499C0.0147057 1.14365 0 1.22137 0 1.32834C0 1.43527 0.0291561 1.56649 0.0875193 1.72187C0.670641 3.09236 1.30477 4.41409 1.98991 5.68725C2.67506 6.96042 3.27043 7.98599 3.77569 8.76304C4.28104 9.54066 4.79615 10.2746 5.32101 10.9644C5.84587 11.6545 6.19329 12.0967 6.36327 12.291C6.53346 12.4857 6.66714 12.6312 6.76431 12.7284L7.12884 13.0782C7.36209 13.3115 7.70461 13.5909 8.15655 13.9164C8.6086 14.2421 9.10905 14.5628 9.65817 14.8789C10.2074 15.1945 10.8463 15.4521 11.5753 15.6513C12.3042 15.8507 13.0137 15.9307 13.7038 15.8921H15.3803C15.7203 15.8627 15.9779 15.7558 16.153 15.5713L16.211 15.4982C16.25 15.4402 16.2866 15.3501 16.3203 15.2288C16.3544 15.1073 16.3713 14.9735 16.3713 14.8279C16.3614 14.4101 16.3932 14.0335 16.4659 13.6982C16.5385 13.3631 16.6214 13.1104 16.714 12.9402C16.8066 12.7701 16.911 12.6267 17.0273 12.5103C17.1438 12.3938 17.2268 12.3231 17.2756 12.2988C17.324 12.2744 17.3626 12.2578 17.3918 12.2478C17.625 12.1701 17.8995 12.2454 18.2157 12.474C18.5316 12.7024 18.8279 12.9844 19.1051 13.3196C19.3821 13.655 19.7149 14.0314 20.1036 14.4492C20.4925 14.8672 20.8326 15.1779 21.1241 15.3823L21.4155 15.5573C21.6102 15.674 21.8629 15.7809 22.1739 15.8781C22.4844 15.9752 22.7565 15.9995 22.9901 15.951L26.722 15.8927C27.0911 15.8927 27.3784 15.8316 27.5821 15.7104C27.7862 15.5889 27.9075 15.455 27.9466 15.3095C27.9856 15.1637 27.9877 14.9984 27.954 14.8136C27.9195 14.6292 27.8854 14.5003 27.8515 14.4274Z"
                                    fill="#dd9e5e"
                                />
                            </svg>
                        </a>
                        <a
                            href="https://www.youtube.com/channel/UCFEZn2Om4MucJT60ApT7y6w"
                            className="header-modal-menu-social__link"
                        >
                            <svg
                                width="23"
                                height="19"
                                viewBox="0 0 26 19"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M25.4643 2.84852C25.1647 1.73466 24.2865 0.856618 23.1728 0.55669C21.1382 0 12.9997 0 12.9997 0C12.9997 0 4.86152 0 2.82693 0.535584C1.73466 0.835194 0.835036 1.73482 0.535426 2.84852C0 4.88294 0 9.10208 0 9.10208C0 9.10208 0 13.3425 0.535426 15.3556C0.835353 16.4693 1.71324 17.3474 2.82709 17.6473C4.88294 18.2042 13 18.2042 13 18.2042C13 18.2042 21.1382 18.2042 23.1728 17.6686C24.2867 17.3688 25.1647 16.4908 25.4646 15.3771C25.9999 13.3425 25.9999 9.1235 25.9999 9.1235C25.9999 9.1235 26.0213 4.88294 25.4643 2.84852V2.84852ZM10.4086 12.9999V5.20429L17.1762 9.10208L10.4086 12.9999Z"
                                    fill="#dd9e5e"
                                />
                            </svg>
                        </a>

                        <a
                            href="https://vm.tiktok.com/ZSJggxQqj/"
                            className="header-modal-menu-social__link"
                        >
                            <svg
                                width="20"
                                height="23"
                                viewBox="0 0 20 23"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M19.9893 5.6998C18.6881 5.6998 17.4876 5.26875 16.5235 4.54158C15.4178 3.70799 14.6234 2.4852 14.3429 1.07584C14.2734 0.727615 14.236 0.368261 14.2325 0H10.5156V10.1563L10.5111 15.7194C10.5111 17.2067 9.54259 18.4678 8.20002 18.9113C7.81039 19.04 7.38958 19.101 6.95141 19.077C6.39212 19.0462 5.868 18.8775 5.41246 18.605C4.44305 18.0252 3.78579 16.9734 3.76798 15.7702C3.73993 13.8897 5.26017 12.3565 7.13933 12.3565C7.51026 12.3565 7.8665 12.4171 8.20002 12.5271V9.75111V8.7532C7.84824 8.7011 7.49022 8.67394 7.12819 8.67394C5.07137 8.67394 3.14768 9.52891 1.77261 11.0692C0.733284 12.2332 0.109868 13.7183 0.0136837 15.2755C-0.112335 17.3212 0.636209 19.2658 2.08788 20.7005C2.30117 20.9111 2.52516 21.1066 2.75938 21.287C4.00399 22.2448 5.52557 22.764 7.12819 22.764C7.49022 22.764 7.84824 22.7373 8.20002 22.6852C9.69711 22.4635 11.0784 21.7781 12.1685 20.7005C13.508 19.3767 14.248 17.6191 14.2561 15.7484L14.2369 7.44091C14.8759 7.93386 15.5746 8.34175 16.3245 8.65835C17.4907 9.15041 18.7273 9.39977 19.9999 9.39933V6.70038V5.69891C20.0008 5.6998 19.9902 5.6998 19.9893 5.6998V5.6998Z"
                                    fill="#dd9e5e"
                                />
                            </svg>
                        </a>

                        <a
                            href="https://t.me/hobjob"
                            className="header-modal-menu-social__link"
                        >
                            <svg
                                width="25"
                                height="25"
                                viewBox="0 0 25 25"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M12.5 0C5.625 0 0 5.625 0 12.5C0 19.375 5.625 25 12.5 25C19.375 25 25 19.375 25 12.5C25 5.625 19.375 0 12.5 0ZM18.625 7.625L16.5 17.875C16.375 18.625 15.875 18.75 15.375 18.375L12.125 15.875C11.375 16.625 10.625 17.25 10.5 17.5C10.25 17.625 10.125 17.875 9.875 17.875C9.5 17.875 9.5 17.625 9.375 17.375L8.25 13.625L4.875 12.5C4.125 12.25 4.125 11.75 5 11.375L17.75 6.5C18.25 6.375 18.875 6.625 18.625 7.625ZM15.625 8.75L8.5 13.25L9.625 17L9.875 14.5L16 9C16.375 8.625 16.125 8.625 15.625 8.75Z"
                                    fill="#DD9E5E"
                                />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
);

export default HeaderModalMenu;

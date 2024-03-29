import React from "react";
import {useSelector} from "react-redux";

const ReferralsBlockLinkSelect = ({
    setStateLink,
    _id,
    setIsPervInitStateLink,
}) => {
    const {masterInfo} = useSelector(({master}) => master);

    const [choise, setChoise] = React.useState([]);
    const [stateList, setStateList] = React.useState(false);
    const [stateListAnimationClose, setStateListAnimationClose] =
        React.useState(false);
    const [stateListItemIndex, setStateListItemIndex] = React.useState(0);

    const stateListRef = React.useRef();

    React.useEffect(() => {
        setChoise([
            {
                title: "Главная страница HobJob",
                image: {size_512: "/all/referral-main-select.png"},
            },
            {
                title: `${masterInfo.name} ${masterInfo.surname} (страница мастера)`,
                image: {size_512: `/${masterInfo.avatar.size_512}`},
            },
            ...masterInfo.courses,
        ]);

        document.body.addEventListener("click", clickEventStateList);
    }, []);

    React.useEffect(() => {
        const index = parseInt(localStorage.getItem("referrals-select-index"));

        if (choise[index]) {
            if (index !== 0 && index !== 1) {
                setStateLink(
                    `hobjob.ru/course/${choise[index].url}?ref=${_id}`
                );
            } else {
                setStateLink(`hobjob.ru/master/${masterInfo._id}?ref=${_id}`);
            }

            setStateListItemIndex(index);
        }
    }, [choise]);

    const openStateList = () => {
        setTimeout(() => {
            setStateList(true);
        }, 1);
    };

    const closeStateList = (index) => {
        setStateListAnimationClose(true);

        if (index !== 1 && index !== 0) {
            setStateLink(`hobjob.ru/course/${choise[index].url}?ref=${_id}`);
        } else if (index === 1) {
            setStateLink(`hobjob.ru/master/${masterInfo._id}?ref=${_id}`);
        } else {
            setStateLink(`hobjob.ru?ref=${_id}`);
        }

        localStorage.setItem("referrals-select-index", index);
        setStateListItemIndex(index);
        setIsPervInitStateLink(false);

        setTimeout(() => {
            setStateListAnimationClose(false);
            setStateList(false);
        }, 180);
    };

    const clickEventStateList = (e) => {
        if (
            stateListRef.current &&
            !e.composedPath().includes(stateListRef.current)
        ) {
            setStateListAnimationClose(true);

            setTimeout(() => {
                setStateListAnimationClose(false);
                setStateList(false);
            }, 180);
        }
    };

    return (
        <>
            <div className="referrals-info-block-link-select-wrapper">
                <div
                    className="referrals-info-block-link-select"
                    onClick={openStateList}
                >
                    {choise[stateListItemIndex] &&
                    choise[stateListItemIndex].image ? (
                        <div
                            className="referrals-info-block-link-select-image"
                            style={{
                                backgroundImage: `url('${`${process.env.REACT_APP_IMAGE_DOMEN}/${choise[stateListItemIndex].image.size_512}`}')`,
                            }}
                        ></div>
                    ) : null}

                    <p className="referrals-info-block-link-select__title">
                        <span>Ссылаться на</span>

                        {choise[stateListItemIndex] &&
                            choise[stateListItemIndex].title}
                        <svg
                            width="17"
                            height="10"
                            viewBox="0 0 17 10"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M1 1L8.5 8.5L16 1" stroke="black" />
                        </svg>
                    </p>
                </div>

                {stateList ? (
                    <div
                        className={`referrals-info-block-link-select-list-wrapper ${
                            stateListAnimationClose ? "close" : ""
                        }`}
                        ref={stateListRef}
                    >
                        <div className="referrals-info-block-link-select-list">
                            {choise.map((item, index) =>
                                index !== stateListItemIndex ? (
                                    <div
                                        key={`referrals-info-block-link-select-list-item-${index}`}
                                        className="referrals-info-block-link-select-list-item"
                                        onClick={() => {
                                            closeStateList(index);
                                        }}
                                    >
                                        <div
                                            className="referrals-info-block-link-select-list-item-image"
                                            style={{
                                                backgroundImage: `url('${`${process.env.REACT_APP_IMAGE_DOMEN}/${item.image.size_512}`}')`,
                                            }}
                                        ></div>

                                        <p className="referrals-info-block-link-select-list-item__title">
                                            {item.title}
                                        </p>
                                    </div>
                                ) : null
                            )}
                        </div>
                    </div>
                ) : null}
            </div>
        </>
    );
};

export default ReferralsBlockLinkSelect;

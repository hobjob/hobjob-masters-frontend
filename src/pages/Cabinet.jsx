import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {Helmet} from "react-helmet";

import {
    Loader,
    CabinetCardMasterInfo,
    CabinetMasterInfoForm,
    CabinetMasterPayment,
    CabinetMasterPassword,
    CabinetMessage,
} from "../components/";

import {
    fetchUpdateMaster,
    fetchUpdateMasterPayment,
    fetchUpdateMasterPassword,
} from "../redux/actions/master";

const Cabinet = () => {
    const {hash} = window.location;

    const [masterInfoMessage, setMasterInfoMessage] = React.useState(false);

    const dispatch = useDispatch();

    const {masterInfo, isLoadedMasterInfo} = useSelector(({master}) => master);
    const {isLoadedAllCategories} = useSelector(({categories}) => categories);

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    React.useEffect(() => {
        if (isLoadedMasterInfo) {
            if (hash !== "") {
				const id = hash.replace("#", "");

                const element = document.getElementById(id);

                if (element) {
                    window.scrollTo(
                        0,
                        element.getBoundingClientRect().top - 100
                    );
                }
            }
        }
    }, [isLoadedMasterInfo]);

    const onSubmitCabinetMasterInfoForm = (data) => {
        dispatch(fetchUpdateMaster(data));
    };

    const onSubmitCabinetMasterPayment = (data) => {
        dispatch(fetchUpdateMasterPayment(data));
    };

    const onSubmitCabinetMasterPassword = (data) => {
        return dispatch(fetchUpdateMasterPassword(data));
    };

    const closeMasterInfoMessage = () => {
        localStorage.setItem("close-master-info-message", true);
        setMasterInfoMessage(true);
    };

    return (
        <>
            {localStorage.getItem("accessToken") ? (
                <>
                    <Helmet>
                        <title>Мой профиль - HobJob для мастеров</title>
                    </Helmet>

                    {isLoadedMasterInfo && isLoadedAllCategories ? (
                        <section className="cabinet">
                            <div className="container">
                                <div className="cabinet-wrapper">
                                    <CabinetCardMasterInfo {...masterInfo} />

                                    <div className="cabinet-block-wrapper">
                                        {localStorage.getItem(
                                            "close-master-info-message"
                                        ) ||
                                        masterInfoMessage ||
                                        masterInfo.edit ? null : (
                                            <CabinetMessage
                                                message={
                                                    "Вы не можете поменять свои личные данные, так как являетесь подтвержденным мастером HobJob. Если вы хотите изменить данные напишите на почту поддержки"
                                                }
                                                closeFunc={
                                                    closeMasterInfoMessage
                                                }
                                            />
                                        )}

                                        <div className="cabinet-block">
                                            <div className="cabinet-block-text">
                                                <h3 className="cabinet-block-text__title">
                                                    О себе
                                                </h3>
                                            </div>

                                            <CabinetMasterInfoForm
                                                onSubmit={
                                                    onSubmitCabinetMasterInfoForm
                                                }
                                                {...masterInfo}
                                            />
                                        </div>

                                        <div className="cabinet-block">
                                            <div className="cabinet-block-text">
                                                <h3 className="cabinet-block-text__title">
                                                    Платежная информация
                                                </h3>
                                            </div>

                                            <CabinetMasterPayment
                                                onSubmit={
                                                    onSubmitCabinetMasterPayment
                                                }
                                                {...masterInfo.paymentInfo}
                                            />
                                        </div>

                                        <div className="cabinet-block">
                                            <div className="cabinet-block-text">
                                                <h3 className="cabinet-block-text__title">
                                                    Изменение пароля
                                                </h3>
                                            </div>

                                            <CabinetMasterPassword
                                                onSubmit={
                                                    onSubmitCabinetMasterPassword
                                                }
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    ) : (
                        <Loader />
                    )}
                </>
            ) : (
                (window.location.href = "/go/login")
            )}
        </>
    );
};

export default Cabinet;

import React from "react";
import {Helmet} from "react-helmet";
import {useDispatch, useSelector} from "react-redux";

import {sendDeleteDraft} from "../redux/actions/draft";

import {DraftsNull, DraftsItems, Loader, ConfirmedEmail} from "../components/";

const Drafts = () => {
    const dispatch = useDispatch();

    const {masterInfo, isLoadedMasterInfo, draftsCourses} = useSelector(
        ({master}) => master
    );
    const {isSendDeleteDraft} = useSelector(({draft}) => draft);

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const deleteCourseDraft = (id) => {
        dispatch(sendDeleteDraft(id));
    };

    return (
        <>
            {localStorage.getItem("accessToken") ? (
                isLoadedMasterInfo ? (
                    <>
                        <Helmet>
                            <title>Черновики - HobJob для мастеров</title>
                        </Helmet>
                        {masterInfo.confirmedEmail ? (
                            <section className="drafts">
                                <div className="container">
                                    <div className="drafts-wrapper">
                                        <div className="drafts-top-text">
                                            <h2 className="drafts-top-text__title">
                                                Черновики
                                                {draftsCourses.length ? (
                                                    <span>
                                                        ({draftsCourses.length})
                                                    </span>
                                                ) : null}
                                            </h2>
                                        </div>
                                        {draftsCourses.length ? (
                                            <div className="drafts-items-wrapper">
                                                {draftsCourses.map(
                                                    (item, index) => (
                                                        <DraftsItems
                                                            {...item}
                                                            deleteCourseDraft={
                                                                deleteCourseDraft
                                                            }
                                                            isSendDeleteDraft={
                                                                isSendDeleteDraft
                                                            }
                                                            key={`drafts-item-${index}`}
                                                        />
                                                    )
                                                )}
                                            </div>
                                        ) : (
                                            <DraftsNull />
                                        )}
                                    </div>
                                </div>
                            </section>
                        ) : (
                            <ConfirmedEmail />
                        )}
                    </>
                ) : (
                    <Loader />
                )
            ) : (
                (window.location.href = "/go/login")
            )}
        </>
    );
};

export default Drafts;

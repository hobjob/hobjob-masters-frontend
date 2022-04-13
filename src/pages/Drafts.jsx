import React from "react";
import {Helmet} from "react-helmet";
import {useDispatch, useSelector} from "react-redux";

import {fetchMasterDraftsCourses} from "../redux/actions/master";
import {sendAddDraft, sendDeleteDraft} from "../redux/actions/draft";

import {DraftsNull, DraftsItems, Loader} from "../components/";

const Drafts = () => {
    const dispatch = useDispatch();

    const {draftsCourses, isLoadedDraftsCourses} = useSelector(
        ({master}) => master
    );
    const {isSendDeleteDraft} = useSelector(({draft}) => draft);

    React.useEffect(() => {
        window.scrollTo(0, 0);

        if (!draftsCourses.length) {
            dispatch(fetchMasterDraftsCourses());
        }
    }, []);

    const addCourseDraft = () => {
        dispatch(sendAddDraft());
    };

    const deleteCourseDraft = (id) => {
        dispatch(sendDeleteDraft(id));
    };

    return (
        <>
            {localStorage.getItem("accessToken") ? (
                <>
                    <Helmet>
                        <title>Черновики - HobJob для мастеров</title>
                    </Helmet>
                    {isLoadedDraftsCourses ? (
                        <section className="drafts">
                            <div className="container">
                                <div className="drafts-wrapper">
                                    <div className="drafts-top-text">
                                        <h2 className="drafts-top-text__title">
                                            Черновики
                                        </h2>
                                        <button
                                            className="btn-small drafts-top-text__btn"
                                            onClick={addCourseDraft}
                                        >
                                            Добавитиь черновик
                                        </button>
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
                        <Loader />
                    )}
                </>
            ) : (
                (window.location.href = "/go/login")
            )}
        </>
    );
};

export default Drafts;

import React from "react";
import {Link} from "react-router-dom";

const DraftsItems = ({
    createDate,
    image,
    title,
    _id,
    deleteCourseDraft,
    isSendDeleteDraft,
}) => {
    return (
        <div className={`drafts-item ${isSendDeleteDraft ? "loader" : ""}`}>
            <Link to={`/go/drafts/${_id}`} className="drafts-item-text">
                <span className="drafts-item-text__subtitle">{createDate}</span>
                <div className="drafts-item-text-bottom">
                    {image ? (
                        <div
                            className="drafts-item-text-bottom-image"
                            style={{
                                backgroundImage: `url("${process.env.REACT_APP_IMAGE_DOMEN}/${image}")`,
                            }}
                        ></div>
                    ) : null}
                    <h3 className="drafts-item-text-bottom__title">
                        {title !== "" ? title : "Без названия"}
                    </h3>
                </div>
            </Link>
            <span
                className="drafts-item__delete"
                onClick={() => deleteCourseDraft(_id)}
            >
                Удалить
            </span>
        </div>
    );
};

export default DraftsItems;

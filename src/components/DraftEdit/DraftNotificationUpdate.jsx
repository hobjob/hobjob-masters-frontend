import React from "react";

const DraftNotificationUpdate = ({animationVisibleNotificationUpdate}) => {
    return (
        <div
            className={`potencial-courses-notification ${
                animationVisibleNotificationUpdate ? "close" : ""
            }`}
        >
            <div className="potencial-courses-notification-loader"></div>
            <span className="potencial-courses-notification__title">
                Сохраняем черновик
            </span>
        </div>
    );
};

export default DraftNotificationUpdate;

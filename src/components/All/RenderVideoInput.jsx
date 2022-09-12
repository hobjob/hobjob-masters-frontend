import React from "react";
import {useDispatch} from "react-redux";
import * as uuid from "uuid";

import $api from "../../http/";

import {setStatusFile} from "../../redux/actions/video";
import {setDraftById, setIsSendUpdateDraft} from "../../redux/actions/draft";

const RenderVideoInput = ({
    input: {value: omitValue, onChange, onBlur, ...inputProps},
    meta: {touched, error},
    label,
    defaultValue,
    url,
    lessonIndex,
    warningMessage,
    ...props
}) => {
    const dispatch = useDispatch();

    const chunkSize = 1000 * 1024;

    const [currentChunkIndex, setCurrentChunkIndex] = React.useState(0);
    const [title, setTitle] = React.useState("");
    const [fileId, setFileId] = React.useState("");
    const [file, setFile] = React.useState(null);
    const [progress, setProgress] = React.useState(0);

    const adaptFileEventToValue = () => (e) => {
        if (e.target.files[0]) {
            const type = e.target.files[0].type;
            const size = e.target.files[0].size;

            if (
                type === "video/mp4" ||
                type === "video/avi" ||
                type === "video/mov" ||
                type === "video/mpeg" ||
                type === "video/webm" ||
                type === "video/heif" ||
                type === "video/hevc" ||
                type === "video/quicktime"
            ) {
                if (size < 25000000000) {
                    setFile(e.target.files[0]);
                    setProgress(1);
                    setFileId(uuid.v4());

                    dispatch(setStatusFile({lessonIndex, isLoad: true}));
                }
            }
        }
    };

    React.useEffect(() => {
        if (file) {
            readAndUploadCurrentChunk();
        }
    }, [file]);

    React.useEffect(() => {
        if (currentChunkIndex !== 0) {
            readAndUploadCurrentChunk();
        }

        if (file) {
            if (file.finalFilename) {
                setProgress(100);
                onChange(file);

                dispatch(setStatusFile({lessonIndex, isLoad: false}));
            } else {
                const chunks = Math.ceil(file.size / chunkSize);

                if (Math.round((currentChunkIndex / chunks) * 100)) {
                    setProgress(Math.round((currentChunkIndex / chunks) * 100));
                }
            }
        }
    }, [currentChunkIndex]);

    const readAndUploadCurrentChunk = () => {
        const reader = new FileReader();

        if (!file) {
            return;
        }

        const from = currentChunkIndex * chunkSize;
        const to = from + chunkSize;
        const blob = file.slice(from, to);

        reader.onload = (e) => uploadChunk(e);
        reader.readAsDataURL(blob);
    };

    const uploadChunk = (readerEvent) => {
        const data = readerEvent.target.result;
        const params = new URLSearchParams();

        params.set("name", file.name);
        params.set("size", file.size);
        params.set("currentChunkIndex", currentChunkIndex);
        params.set("totalChunks", Math.ceil(file.size / chunkSize));
        params.set("fileId", fileId);

        setTitle(file.name);

        const headers = {"Content-Type": "application/octet-stream"};

        $api.post(`${url}?${params.toString()}`, data, {
            headers,
        }).then((response) => {
            const filesize = file.size;
            const chunks = Math.ceil(filesize / chunkSize) - 1;
            const isLastChunk = currentChunkIndex === chunks;

            if (isLastChunk) {
                if (response.data.draft) {
                    file.finalFilename = response.data.file.finalFilename;
                    file.fileNameUser = response.data.file.fileNameUser;

                    dispatch(setIsSendUpdateDraft(true));
                    dispatch(setIsSendUpdateDraft(false));
                    dispatch(setDraftById(response.data.draft));
                } else {
                    file.finalFilename = response.data.finalFilename;
                    file.fileNameUser = response.data.fileNameUser;
                }

                setCurrentChunkIndex(0);
            } else {
                setCurrentChunkIndex(currentChunkIndex + 1);
            }
        });
    };

    return (
        <>
            <span className="input-file-block__subtitle">{label}</span>

            {touched && error && error !== "Поле не может быть пустым" && (
                <span className="input-file-block__error">{error}</span>
            )}

            <div className="input-file-block">
                {progress !== 0 && progress < 100 ? (
                    <div className="input-file-block__label">
                        <div className="btn__gray input-file-block__btn">
                            <div
                                className="input-file-block__btn-loader-pleacholder"
                                style={{width: `${progress}%`}}
                            ></div>
                            <span className="input-file-block__btn-loader__text">
                                {progress}%
                            </span>
                        </div>
                        <span className="input-file-block__title">
                            {defaultValue && title === ""
                                ? defaultValue
                                : title}
                        </span>
                    </div>
                ) : progress === 100 || defaultValue ? (
                    <label className="input-file-block__label">
                        <input
                            className="input-file-block__field"
                            onChange={adaptFileEventToValue(onChange)}
                            onBlur={adaptFileEventToValue(onBlur)}
                            type="file"
                            multiple={false}
                            accept=".mp4, .avi, .mov, .mpeg, .webm"
                            {...props.input}
                        />

                        <div className="btn__gray input-file-block__btn">
                            <span className="input-file-block__btn__text">
                                Заменить видео
                            </span>

                            <svg
                                width="22"
                                height="22"
                                viewBox="0 0 22 22"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="input-file-block__btn__svg"
                            >
                                <path
                                    d="M1.15601 12.7934C1.88231 11.8716 2.75644 11.0287 3.53196 10.3308C3.81065 10.0799 4.46986 9.50395 4.62455 9.16879C4.87926 8.61691 5.53773 8.43383 5.80385 7.9548C6.2799 7.09791 7.46595 6.73506 8.02372 5.96039C8.37085 5.47826 8.92028 5.0751 9.34176 4.67703C9.76823 4.27426 10.2229 3.85734 10.6771 3.42836C12.0215 2.15871 13.7778 1.24318 15.6718 1.24318C17.1547 1.24318 19.6989 0.798978 20.0509 2.73465C20.1449 3.25158 20.5069 3.54687 20.7446 3.97465C20.9262 4.30151 20.8226 4.8556 20.8226 5.22333C20.8226 5.6797 21.1629 6.15617 20.9007 6.62809C20.6338 7.10851 20.1709 7.39557 19.8081 7.79872C19.2488 8.42017 18.7705 9.07606 18.3947 9.82781C17.8069 11.0033 16.7235 11.8452 15.8279 12.7934C14.5487 14.1479 12.6071 14.8448 11.3015 16.2273C10.687 16.8779 10.0204 17.439 9.39379 18.0656C8.95517 18.5042 7.5517 19.0109 7.39071 19.5744C7.21686 20.1829 5.6115 20.2855 5.13616 20.2855C4.20139 20.2855 3.43562 20.0258 2.63881 19.5831C1.7791 19.1055 1.62426 18.1785 1.62426 17.2331C1.62426 16.2659 2.53587 15.3116 3.09839 14.5884C4.35401 12.974 5.83354 11.3076 7.55546 10.2007C9.44248 8.9876 10.6332 6.7863 12.7062 5.80431C13.6152 5.37377 14.1543 4.9892 15.2036 4.9892C15.7079 4.9892 16.8882 5.53273 16.9205 6.08179C16.9767 7.03622 16.8914 7.67749 16.1054 8.26697C15.4568 8.7534 14.8661 9.67958 14.3451 10.3047C13.7768 10.9868 12.7905 12.1223 12.0039 12.5593C11.2184 12.9957 10.3716 13.5765 9.82736 14.2762C9.31346 14.9369 8.77406 15.6821 8.09309 16.0712C7.45221 16.4374 7.12195 17.1464 6.46287 17.4759"
                                    stroke="black"
                                    strokeLinecap="round"
                                />
                                <path
                                    d="M1 13.1055C1 11.7297 1.59907 11.1412 2.87301 10.6862C4.13361 10.236 4.93267 9.69125 5.68253 8.54441C6.22818 7.70988 6.46011 6.88235 7.174 6.16846C7.91441 5.42805 8.99419 5.31268 9.74072 4.60762C10.1164 4.2528 10.5718 4.17542 10.9287 3.81852C11.4018 3.34541 11.8274 3.01243 12.16 2.41376C12.4004 1.98118 12.5201 1.46099 12.8971 1.12173C13.1533 0.891177 14.3811 1.08705 14.7007 1.08705C15.2959 1.08705 17.6813 0.725121 17.8484 1.47726C18.0441 2.35772 19.615 2.12777 19.8775 3.04677C20.0081 3.50363 19.8509 3.79188 20.2331 4.17405C20.5584 4.49936 20.8048 5.02735 20.8227 5.49209C20.8645 6.5775 19.574 7.24691 19.574 8.34497C19.574 9.61733 19.4083 9.96511 18.1693 10.4868C17.4486 10.7902 16.1701 11.3214 15.828 12.091C15.5684 12.6751 14.7566 14.0237 14.1978 14.3195C13.4573 14.7115 12.2594 15.4083 11.8479 16.1492C11.589 16.6152 11.2054 16.9174 11.0241 17.4412C10.9214 17.7378 10.5933 18.1674 10.3304 18.3777C9.72888 18.8589 8.76572 19.2554 8.02379 19.6264C7.17775 20.0494 6.40081 20.9098 5.36169 20.9098C4.9823 20.9098 4.15669 21.0589 3.80952 20.8751C3.63387 20.7821 3.35221 19.6911 3.34126 19.505C3.28517 18.5514 2.09259 18.4026 2.09259 17.3979C2.09259 16.7034 1.79842 14.9686 2.56084 14.545C3.54993 13.9955 4.49779 13.918 5.37903 13.1836C6.16578 12.528 6.39055 11.3827 7.0526 10.5735C7.46271 10.0723 7.59567 9.50095 8.17988 9.12539C8.59892 8.85601 9.24858 8.25 9.57597 7.86804C10.3693 6.94243 11.7056 6.49012 12.7757 6.0037C13.6901 5.58807 16.4848 4.71713 15.4812 4.67699C14.9011 4.65379 14.4678 4.36482 13.8943 4.36482C13.0932 4.36482 15.5419 4.17343 16.2963 4.44286C16.9377 4.67194 17.2328 5.83221 17.2328 6.55C17.2328 7.79469 16.647 8.06794 15.9061 8.89126C15.1837 9.69391 14.6976 10.7584 13.955 11.5447C12.9982 12.5577 11.9608 13.2943 10.7553 13.964C9.85977 14.4615 8.94913 14.7754 8.45736 15.759C8.07758 16.5185 7.36365 17.1036 6.61904 17.4759"
                                    stroke="black"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </div>
                        <span className="input-file-block__title">
                            {defaultValue && title === ""
                                ? defaultValue
                                : progress !== 0
                                ? title
                                : ""}
                        </span>
                    </label>
                ) : (
                    <label className="input-file-block__label">
                        <input
                            className="input-file-block__field"
                            onChange={adaptFileEventToValue(onChange)}
                            onBlur={adaptFileEventToValue(onBlur)}
                            type="file"
                            multiple={false}
                            accept=".mp4, .avi, .mov, .mpeg, .webm"
                            {...props.input}
                        />

                        <div className="btn__gray input-file-block__btn">
                            <span className="input-file-block__btn__text">
                                Выбрать видео
                            </span>

                            <svg
                                width="22"
                                height="22"
                                viewBox="0 0 22 22"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="input-file-block__btn__svg"
                            >
                                <path
                                    d="M1.15601 12.7934C1.88231 11.8716 2.75644 11.0287 3.53196 10.3308C3.81065 10.0799 4.46986 9.50395 4.62455 9.16879C4.87926 8.61691 5.53773 8.43383 5.80385 7.9548C6.2799 7.09791 7.46595 6.73506 8.02372 5.96039C8.37085 5.47826 8.92028 5.0751 9.34176 4.67703C9.76823 4.27426 10.2229 3.85734 10.6771 3.42836C12.0215 2.15871 13.7778 1.24318 15.6718 1.24318C17.1547 1.24318 19.6989 0.798978 20.0509 2.73465C20.1449 3.25158 20.5069 3.54687 20.7446 3.97465C20.9262 4.30151 20.8226 4.8556 20.8226 5.22333C20.8226 5.6797 21.1629 6.15617 20.9007 6.62809C20.6338 7.10851 20.1709 7.39557 19.8081 7.79872C19.2488 8.42017 18.7705 9.07606 18.3947 9.82781C17.8069 11.0033 16.7235 11.8452 15.8279 12.7934C14.5487 14.1479 12.6071 14.8448 11.3015 16.2273C10.687 16.8779 10.0204 17.439 9.39379 18.0656C8.95517 18.5042 7.5517 19.0109 7.39071 19.5744C7.21686 20.1829 5.6115 20.2855 5.13616 20.2855C4.20139 20.2855 3.43562 20.0258 2.63881 19.5831C1.7791 19.1055 1.62426 18.1785 1.62426 17.2331C1.62426 16.2659 2.53587 15.3116 3.09839 14.5884C4.35401 12.974 5.83354 11.3076 7.55546 10.2007C9.44248 8.9876 10.6332 6.7863 12.7062 5.80431C13.6152 5.37377 14.1543 4.9892 15.2036 4.9892C15.7079 4.9892 16.8882 5.53273 16.9205 6.08179C16.9767 7.03622 16.8914 7.67749 16.1054 8.26697C15.4568 8.7534 14.8661 9.67958 14.3451 10.3047C13.7768 10.9868 12.7905 12.1223 12.0039 12.5593C11.2184 12.9957 10.3716 13.5765 9.82736 14.2762C9.31346 14.9369 8.77406 15.6821 8.09309 16.0712C7.45221 16.4374 7.12195 17.1464 6.46287 17.4759"
                                    stroke="black"
                                    strokeLinecap="round"
                                />
                                <path
                                    d="M1 13.1055C1 11.7297 1.59907 11.1412 2.87301 10.6862C4.13361 10.236 4.93267 9.69125 5.68253 8.54441C6.22818 7.70988 6.46011 6.88235 7.174 6.16846C7.91441 5.42805 8.99419 5.31268 9.74072 4.60762C10.1164 4.2528 10.5718 4.17542 10.9287 3.81852C11.4018 3.34541 11.8274 3.01243 12.16 2.41376C12.4004 1.98118 12.5201 1.46099 12.8971 1.12173C13.1533 0.891177 14.3811 1.08705 14.7007 1.08705C15.2959 1.08705 17.6813 0.725121 17.8484 1.47726C18.0441 2.35772 19.615 2.12777 19.8775 3.04677C20.0081 3.50363 19.8509 3.79188 20.2331 4.17405C20.5584 4.49936 20.8048 5.02735 20.8227 5.49209C20.8645 6.5775 19.574 7.24691 19.574 8.34497C19.574 9.61733 19.4083 9.96511 18.1693 10.4868C17.4486 10.7902 16.1701 11.3214 15.828 12.091C15.5684 12.6751 14.7566 14.0237 14.1978 14.3195C13.4573 14.7115 12.2594 15.4083 11.8479 16.1492C11.589 16.6152 11.2054 16.9174 11.0241 17.4412C10.9214 17.7378 10.5933 18.1674 10.3304 18.3777C9.72888 18.8589 8.76572 19.2554 8.02379 19.6264C7.17775 20.0494 6.40081 20.9098 5.36169 20.9098C4.9823 20.9098 4.15669 21.0589 3.80952 20.8751C3.63387 20.7821 3.35221 19.6911 3.34126 19.505C3.28517 18.5514 2.09259 18.4026 2.09259 17.3979C2.09259 16.7034 1.79842 14.9686 2.56084 14.545C3.54993 13.9955 4.49779 13.918 5.37903 13.1836C6.16578 12.528 6.39055 11.3827 7.0526 10.5735C7.46271 10.0723 7.59567 9.50095 8.17988 9.12539C8.59892 8.85601 9.24858 8.25 9.57597 7.86804C10.3693 6.94243 11.7056 6.49012 12.7757 6.0037C13.6901 5.58807 16.4848 4.71713 15.4812 4.67699C14.9011 4.65379 14.4678 4.36482 13.8943 4.36482C13.0932 4.36482 15.5419 4.17343 16.2963 4.44286C16.9377 4.67194 17.2328 5.83221 17.2328 6.55C17.2328 7.79469 16.647 8.06794 15.9061 8.89126C15.1837 9.69391 14.6976 10.7584 13.955 11.5447C12.9982 12.5577 11.9608 13.2943 10.7553 13.964C9.85977 14.4615 8.94913 14.7754 8.45736 15.759C8.07758 16.5185 7.36365 17.1036 6.61904 17.4759"
                                    stroke="black"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </div>
                        <span className="input-file-block__title">
                            {defaultValue && title === ""
                                ? defaultValue
                                : progress !== 0
                                ? title
                                : ""}
                        </span>
                    </label>
                )}
            </div>
        </>
    );
};

export default RenderVideoInput;

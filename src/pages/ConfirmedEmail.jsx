import React from "react";
import {useDispatch} from "react-redux";

import {Loader} from "../components/";

import {fetchConfirmedEmailMaster} from "../redux/actions/confirmed_email";

const ConfirmedEmail = ({
    match: {
        params: {hash},
    },
}) => {
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(fetchConfirmedEmailMaster(hash));
    }, []);

    return <Loader />;
};

export default ConfirmedEmail;

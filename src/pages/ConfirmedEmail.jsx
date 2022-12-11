import React from "react";
import {useDispatch} from "react-redux";
import {useParams} from "react-router-dom";

import {Loader} from "../components/";

import {fetchConfirmedEmailMaster} from "../redux/actions/confirmed_email";

const ConfirmedEmail = () => {
    const dispatch = useDispatch();
	const {hash} = useParams();

    React.useEffect(() => {
        dispatch(fetchConfirmedEmailMaster(hash));
    }, []);

    return <Loader />;
};

export default ConfirmedEmail;

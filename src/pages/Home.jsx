import React from "react";
import {Helmet} from "react-helmet";

const Home = () => {
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Helmet>
                <title>Главная - HobJob для мастеров</title>
            </Helmet>
        </>
    );
};

export default Home;

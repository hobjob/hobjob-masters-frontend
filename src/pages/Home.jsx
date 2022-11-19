import React from "react";
import {Helmet} from "react-helmet";

import {
    HomeOffer,
    HomeGoal,
    HomeServices,
    HomeMaster,
    HomeCategories,
    HomeSecurityCourses,
    HobJobGood,
    HomeFaq,
    HomeFooter,
} from "../components/";

const Home = () => {
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Helmet>
                <title>Главная - HobJob для мастеров</title>
            </Helmet>

            <HomeOffer />

            <HomeGoal />

            <HomeServices />

            <HomeMaster />

            <HomeCategories />

			<HomeSecurityCourses />
			
			<HobJobGood />

			<HomeFaq />
			
			<HomeFooter />
        </>
    );
};

export default Home;

import dotenv from "dotenv";
import React from "react";
import {Route, Routes, Navigate, useLocation} from "react-router-dom";
import {compose} from "redux";

import {Header, Footer} from "./components/";

import {
    Home,
    Login,
    Register,
    PasswordRecoveryEmail,
    PasswordRecoveryNewPassword,
    Referrals,
    ReferralsPolicy,
    Cabinet,
    ModerationCourses,
    AddCourse,
    DraftEdit,
    Drafts,
    EditRejectModerationCourses,
    Statistics,
    Policy,
    PublicOffer,
    Regulations,
    EngineeringWorks,
    CourseRegulations,
    ConfirmedEmail,
} from "./pages/";

dotenv.config();

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
        YooMoneyCheckoutWidget?: any;
    }
}

const App: React.FC = () => {
    const {pathname} = useLocation();

    return (
        <>
            {false ? (
                <EngineeringWorks />
            ) : (
                <div className="wrapper">
                    {pathname.indexOf("/payment") !== -1 ||
                    pathname.indexOf("/login") !== -1 ||
                    pathname.indexOf("/register") !== -1 ||
                    pathname === "/go/password-recovery" ||
                    pathname.indexOf("/go/password-recovery") !== -1 ? null : (
                        <Header />
                    )}

                    <React.Suspense fallback={<></>}>
                        <Routes>
                            <Route path="/" element={<Home />} />

                            {/* CourseRegulations */}
                            <Route
                                path="/course-regulations/:blockId"
                                element={<CourseRegulations />}
                                
                            />
                            <Route
                                path="/course-regulations"
                                element={<CourseRegulations />}
                                
                            />

                            {/* Policy */}
                            <Route path="/policy" element={<Policy />} />
                            <Route
                                path="/public-offer"
                                element={<PublicOffer />}
                            />
                            <Route
                                path="/regulations"
                                element={<Regulations />}
                            />

                            {/* Go */}
                            <Route path="/go/login" element={<Login />} />
                            <Route path="/go/register" element={<Register />} />

                            <Route
                                path="/go/password-recovery"
                                element={<PasswordRecoveryEmail />}
                            />
                            <Route
                                path="/go/password-recovery/:hash"
                                element={<PasswordRecoveryNewPassword />}
                            />

                            <Route
                                path="/go/confirmed/:hash"
                                element={
                                    <ConfirmedEmail />
                                }
                            />

                            <Route
                                path="/go/referrals"
                                element={<Referrals />}
                            />
                            <Route
                                path="/go/referrals/policy"
                                element={<ReferralsPolicy />}
                            />

                            <Route path="/go/cabinet" element={<Cabinet />} />

                            <Route
                                path="/go/moderations-courses"
                                element={<ModerationCourses />}
                            />
                            <Route
                                path="/go/moderations-courses/edit/:id"
                                element={<EditRejectModerationCourses />}
                            />

                            <Route
                                path="/go/add/course"
                                element={<AddCourse />}
                            />

                            <Route
                                path="/go/drafts/:id"
                                element={<DraftEdit />}
                            />
                            <Route path="/go/drafts" element={<Drafts />} />

                            <Route
                                path="/go/statistics"
                                element={<Statistics />}
                            />

                            <Route path="*" element={<Navigate to="/" />} />
                        </Routes>
                    </React.Suspense>

                    {pathname.indexOf("/payment") !== -1 ||
                    pathname.indexOf("/login") !== -1 ||
                    pathname.indexOf("/register") !== -1 ||
                    pathname === "/go/password-recovery" ||
                    pathname.indexOf("/go/password-recovery") !== -1 ? null : (
                        <Footer />
                    )}
                </div>
            )}
        </>
    );
};

export default App;

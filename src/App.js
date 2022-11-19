import dotenv from 'dotenv';
import React, { Suspense } from 'react'
import { Route, Switch, useLocation } from 'react-router-dom';

import { Header, Footer } from './components/';

import { Home, Login, Register, PasswordRecoveryEmail, PasswordRecoveryNewPassword, Referrals, ReferralsPolicy, Cabinet, ModerationCourses, AddCourse, DraftEdit, Drafts, EditRejectModerationCourses, Statistics, Policy, PublicOffer, Regulations, EngineeringWorks, CourseRegulations, ConfirmedEmail } from './pages/';

dotenv.config()

const App = () => {
	const { pathname } = useLocation();

	return (
		<>
			{false ? <EngineeringWorks /> : <div className="wrapper">
				{pathname.indexOf("/payment") !== -1 || pathname.indexOf("/login") !== -1 || pathname.indexOf("/register") !== -1 || pathname === "/go/password-recovery" || pathname.indexOf("/go/password-recovery") !== -1 ? null : <Header />}

				<Suspense fallback={() => <></>}>
					<Switch>
						<Route path="/" render={() => <Home />} exact />

						{/* CourseRegulations */}
						<Route path="/course-regulations/:blockId" render={(props) => <CourseRegulations {...props} />} exact />
						<Route path="/course-regulations" render={(props) => <CourseRegulations {...props} />} exact />

						{/* Policy */}
						<Route path="/policy" render={() => <Policy />} exact />
						<Route path="/public-offer" render={() => <PublicOffer />} exact />
						<Route path="/regulations" render={() => <Regulations />} exact />

						{/* Go */}
						<Route path="/go/login" render={() => <Login />} exact />
						<Route path="/go/register" render={() => <Register />} exact />

						<Route path="/go/password-recovery" render={() => <PasswordRecoveryEmail />} exact />
						<Route path="/go/password-recovery/:hash" render={(props) => <PasswordRecoveryNewPassword {...props} />} exact />

						<Route path="/go/confirmed/:hash" render={(props) => <ConfirmedEmail {...props} />} exact />

						<Route path="/go/referrals" render={() => <Referrals />} exact />
						<Route path="/go/referrals/policy" render={() => <ReferralsPolicy />} exact />

						<Route path="/go/cabinet" render={() => <Cabinet />} exact />

						<Route path="/go/moderations-courses" render={() => <ModerationCourses />} exact />
						<Route path="/go/moderations-courses/edit/:id" render={(props) => <EditRejectModerationCourses {...props} />} exact />

						<Route path="/go/add/course" render={() => <AddCourse />} exact />

						<Route path="/go/drafts/:id" render={(props) => <DraftEdit {...props} />} exact />
						<Route path="/go/drafts" render={() => <Drafts />} exact />

						<Route path="/go/statistics" render={() => <Statistics />} exact />

						<Route render={() => window.location.href = "/"} exact />
					</Switch>
				</Suspense>

				{pathname.indexOf("/payment") !== -1 || pathname.indexOf("/login") !== -1 || pathname.indexOf("/register") !== -1 || pathname === "/go/password-recovery" || pathname.indexOf("/go/password-recovery") !== -1 ? null : <Footer />}
			</div>}
		</>
	)
}

export default App


import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'

import categories from './categories';
import register from './register';
import login from './login';
import password_recovery from './password_recovery';
import master from './master';
import potencial_courses from './potencial_courses';
import draft from './draft';
import confirmed_email from './confirmed_email';
import video from './video';

export const rootReducer = combineReducers({
	categories,
	register,
	login,
	password_recovery,
	master,
	potencial_courses,
	draft,
	confirmed_email,
	video,
	form: formReducer
});

export type RootState = ReturnType<typeof rootReducer>
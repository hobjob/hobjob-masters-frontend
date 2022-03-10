import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'

import categories from './categories';
import register from './register';
import login from './login';
import password_recovery from './password_recovery';
import master from './master';
import potencial_courses from './potencial_courses';

const rootReducer = combineReducers({
	categories,
	register,
	login,
	password_recovery,
	master,
	potencial_courses,
	form: formReducer
});

export default rootReducer;
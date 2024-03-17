import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk';
import global from './reducers/global';
import questions from './reducers/questions';
import users from './reducers/users';

const reduxLogger = require('redux-logger');
const logger = reduxLogger.createLogger;

const rootReducer = combineReducers({
    global: global,
    users: users,
    questions: questions
});

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(logger()).concat(thunk),
});

export default store;

import {createStore, applyMiddleware} from 'redux';
import modules from './modules';
import penderMiddleware from 'redux-pender';

const configure = () => {
    const store = createStore(modules, applyMiddleware(penderMiddleware()));
    return store;
};

export default configure;

import {combineReducers} from 'redux';
import list from './list';
import {penderReducer} from 'redux-pender';

export default combineReducers({list, pender: penderReducer});

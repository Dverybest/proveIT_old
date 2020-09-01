import {combineReducers} from 'redux';
import homeReducer from '../pages/home/homeReducer';

export default combineReducers({
    sample: homeReducer
});
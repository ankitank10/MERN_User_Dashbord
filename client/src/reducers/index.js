import { combineReducers } from 'redux';
import {userData} from './userDetailReducer';

export default combineReducers({
  userData: userData
});
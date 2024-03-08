import { combineReducers } from '@reduxjs/toolkit';
import parentReducer from './parentSlice';


const rootReducer = combineReducers({
    parents: parentReducer,
});

export default rootReducer;
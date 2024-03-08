import { combineReducers } from '@reduxjs/toolkit';
import parentReducer from './parentSlice';
import childrenReducer from './childrenSlice';


const rootReducer = combineReducers({
    parents: parentReducer,
    children: childrenReducer,
});

export default rootReducer;
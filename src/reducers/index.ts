import { combineReducers } from 'redux';
import planetsReducer from './planetsReducer';

const rootReducer = combineReducers({
    planetsState: planetsReducer
});

export default rootReducer;
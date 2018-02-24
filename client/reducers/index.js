import { combineReducers } from 'redux';

import currentTasks from './currentTasks';
import finishedTasks from './finishedTasks';

export default combineReducers({
    currentTasks,
    finishedTasks
});
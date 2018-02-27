import { combineReducers } from 'redux';

import currentTasks from './currentTasks';
import finishedTasks from './finishedTasks';
import timeToFinish from './timeToFinish';
import time from './time';

export default combineReducers({
    currentTasks,
    finishedTasks,
    time,
    timeToFinish
});
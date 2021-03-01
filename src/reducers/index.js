import { combineReducers } from 'redux';

import galleries from './galleries';
import auth from './auth';

export const reducers = combineReducers({ galleries, auth });

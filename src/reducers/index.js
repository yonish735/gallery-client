import { combineReducers } from 'redux';

import galleries from './galleries';
import pictures from './pictures';
import search from './search';
import auth from './auth';

export const reducers = combineReducers({ galleries, pictures, search, auth });

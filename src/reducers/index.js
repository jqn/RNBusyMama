/**
  Reducers specify how the application's state changes in response to actions sent to the store.
**/
import {combineReducers} from 'redux';

import * as themeReducers from './theme';

export default combineReducers({...themeReducers});

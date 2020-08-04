import {combineReducers} from 'redux';
import postReducer from './postReducer';
import authReducer from './authReducer';


const rootReducer = combineReducers({
  auth: authReducer,
  posts: postReducer
});

export default rootReducer

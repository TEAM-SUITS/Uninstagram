import { combineReducers } from 'redux';
import { currentUserReducer } from './currentUser/currentUser';
import { postReducer } from './post/post';

/* combine reducers -> root reducer------------------------------------------------------ */

const rootReducer = combineReducers({
  currentUser: currentUserReducer,
  post: postReducer,
});

export default rootReducer;

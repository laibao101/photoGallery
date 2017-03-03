import { createStore, compse } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';

import { browserHistory } from 'react-router';

//import root reducer
import rootReducer from './reducers/index';

//import data
import comments from './data/comments.js';
import posts from './data/posts.js';


//create an object for the default data
const defaultState = {
	comments,
	posts
}

const store = createStore(rootReducer,defaultState);

export const history = syncHistoryWithStore(browserHistory,store);

export default store;

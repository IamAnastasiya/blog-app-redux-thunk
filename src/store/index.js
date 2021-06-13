import { createStore, combineReducers, applyMiddleware } from "redux"
import postsReducer from "./reducers/postsReducer";
import albumsReducer from "./reducers/albumsReducer";
import favoritesReducer from "./reducers/favoritesReducer";
import logger from "redux-logger";
import thunk from 'redux-thunk';

const reducer = combineReducers({postsReducer, albumsReducer, favoritesReducer})

const store = createStore(reducer, applyMiddleware(thunk, logger));
export default store;
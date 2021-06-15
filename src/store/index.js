import { createStore, combineReducers, applyMiddleware } from "redux"
import postsReducer from "./reducers/postsReducer";
import albumsReducer from "./reducers/albumsReducer";
import favoritesReducer from "./reducers/favoritesReducer";
import routeReducer from "./reducers/routeReducer";
import commentsReducer from "./reducers/commentsReducer";
import logger from "redux-logger";
import thunk from 'redux-thunk';

const reducer = combineReducers({postsReducer, albumsReducer, favoritesReducer, routeReducer, commentsReducer})

const store = createStore(reducer, applyMiddleware(thunk, logger));
export default store;
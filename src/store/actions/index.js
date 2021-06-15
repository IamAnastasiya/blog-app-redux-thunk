import api from "../../utils/api";

//fetching data
export const GET_POSTS = 'GET_POSTS';
export const GET_ALBUMS = 'GET_ALBUMS';

//favorites handling
export const ADD_POST_TO_FAVORITE = 'ADD_POST_TO_FAVORITE';
export const REMOVE_POST_FROM_FAVORITES = 'REMOVE_POST_FROM_FAVORITES'
export const ADD_ALBUM_TO_FAVORITE = 'ADD_ALBUM_TO_FAVORITE';
export const REMOVE_ALBUM_FROM_FAVORITES = 'REMOVE_ALBUM_FROM_FAVORITES';

//route handling
export const SET_DEFAULT_ROUTE = 'SET_DEFAULT_ROUTE';
export const UPDATE_ROUTE_FILTER_NUMBER = 'UPDATE_ROUTE_FILTER_NUMBER';
export const UPDATE_POSTS_ROUTE_ORDER = 'UPDATE_POSTS_ROUTE_ORDER';
export const UPDATE_ROUTE_PAGE = 'UPDATE_ROUTE_PAGE';
export const DOUBLE_FILTER_NUMBER = 'DOUBLE_FILTER_NUMBER';

// comments handling
export const ADD_COMMENT = 'ADD_COMMENT';


export const getPosts = (route) => {
    return (dispatch) => {
        api.get(route)
            .then(response => {
                const totalCount = response.headers['x-total-count'];
                dispatch({type: GET_POSTS, payload: response.data, count: totalCount});
            })
    }
}

export const getAlbums = (route) => {
    return (dispatch) => {
        api.get(route)
            .then(response => {
                const totalCount = response.headers['x-total-count'];
                dispatch({type: GET_ALBUMS, payload: response.data, count: totalCount});
            })
    }
}

export const addToFavorite = (post) => {
    return {type: ADD_POST_TO_FAVORITE, favorite: post};
}

export const removeFromFavorites = (id) => {
    return {type: REMOVE_POST_FROM_FAVORITES, id: id};
}

export const addToFavoriteAlbums = (album) => {
    return {type: ADD_ALBUM_TO_FAVORITE, favorite: album};
}

export const removeFromFavoriteAlbums = (id) => {
    return {type: REMOVE_ALBUM_FROM_FAVORITES, id: id};
}

export const updateRouteParamsFilter = (payload) => {
    return {type: UPDATE_ROUTE_FILTER_NUMBER, payload: +payload};
}

export const doubleRouteParamsFilter = (payload) => {
    return {type: DOUBLE_FILTER_NUMBER, payload: +payload};
}

export const updateRouteParamsOrder= (payload) => {
    return {type: UPDATE_POSTS_ROUTE_ORDER, payload: payload};
}

export const updateRouteParamsPage = (payload) => {
    return {type: UPDATE_ROUTE_PAGE, payload: payload};
}

export const setInitialRoute = () => {
    return {type: SET_DEFAULT_ROUTE};
}

export const addNewComment = (comment) => {
    return (dispatch) => {
        api.post('http://localhost:3000/comments', {
            id: Math.random(),
            name: comment.name,
            email: comment.email,
            text: comment.text,
        }).then(response => {
            dispatch({type: ADD_COMMENT, content: response.data});
        })
        .catch(error => console.log(error));
    }
}

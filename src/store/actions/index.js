import api from "../../utils/api";

export const SET_POSTS = 'SET_POSTS';
export const SET_ALBUMS = 'SET_ALBUMS';
export const ADD_POST_TO_FAVORITE = 'ADD_POST_TO_FAVORITE';
export const REMOVE_POST_FROM_FAVORITES = 'REMOVE_POST_FROM_FAVORITES'
export const ADD_ALBUM_TO_FAVORITE = 'ADD_ALBUM_TO_FAVORITE';
export const REMOVE_ALBUM_FROM_FAVORITES = 'REMOVE_ALBUM_FROM_FAVORITES';

export const getPosts = (route) => {
    return (dispatch) => {
        api.get(route)
            .then(response => {
                const totalCount = response.headers['x-total-count'];
                dispatch({type: SET_POSTS, payload: response.data, count: totalCount});
            })
    }
}

export const getAlbums = (route) => {
    return (dispatch) => {
        api.get(route)
            .then(response => {
                const totalCount = response.headers['x-total-count'];
                dispatch({type: SET_ALBUMS, payload: response.data, count: totalCount});
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


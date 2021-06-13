import {
    ADD_POST_TO_FAVORITE,
    REMOVE_POST_FROM_FAVORITES,
    ADD_ALBUM_TO_FAVORITE,
    REMOVE_ALBUM_FROM_FAVORITES,
} from "../actions";

const favorites = {
    posts: [],
    albums: []
}


export default function favoritesReducer (state= favorites, action) {
    switch (action.type) {

        case ADD_POST_TO_FAVORITE:
            return {
                ...state,
                posts: [...state.posts, action.favorite]
            }
        case REMOVE_POST_FROM_FAVORITES:
            return {
                ...state,
                posts: state.posts.filter(favorite => favorite.id !== action.id)
            }
        case ADD_ALBUM_TO_FAVORITE:
            return {
                ...state,
                albums: [...state.albums, action.favorite]
            }
        case REMOVE_ALBUM_FROM_FAVORITES:
            return {
                ...state,
                albums: state.albums.filter(favorite => favorite.id !== action.id)
            }
        default:
            return state;
    }
}


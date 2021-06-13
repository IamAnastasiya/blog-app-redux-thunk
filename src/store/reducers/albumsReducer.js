import {SET_ALBUMS} from "../actions";

const albums = [];

export default function albumsReducer (state = albums, action) {
    switch (action.type) {
        case SET_ALBUMS:
            return {
                albums: action.payload,
                totalCount: action.count,
                isLoaded: true
            }
        default:
            return state;
    }
}
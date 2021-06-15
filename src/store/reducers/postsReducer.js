import {GET_POSTS} from "../actions";

const initialState = {
    posts: []
}

export default function postsReducer (state = initialState, action) {
    switch (action.type) {
        case GET_POSTS:
            return {
                posts: action.payload,
                totalCount: action.count,
                isLoaded: true
            }
        default:
            return state;
    }
}


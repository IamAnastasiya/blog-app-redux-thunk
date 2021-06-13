import {SET_POSTS} from "../actions";

const posts = [];

export default function postsReducer (state = posts, action) {
    switch (action.type) {
        case SET_POSTS:
            return {
                posts: action.payload,
                totalCount: action.count,
                isLoaded: true
            }
        default:
            return state;
    }
}


import {ADD_COMMENT} from "../actions";

const initialState = {
    comments: []
};

export default function commentsReducer (state = initialState, action) {
    switch (action.type) {
        case ADD_COMMENT:
            return {...state, comments: [action, ...state.comments]};
        default:
            return state;
    }
}


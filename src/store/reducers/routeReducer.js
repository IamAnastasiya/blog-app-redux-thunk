import {SET_DEFAULT_ROUTE,
    UPDATE_ROUTE_FILTER_NUMBER,
    UPDATE_POSTS_ROUTE_ORDER,
    UPDATE_ROUTE_PAGE,
    DOUBLE_FILTER_NUMBER
} from "../actions";


const params = {
    currentPage: 1,
    filterLimit: 6,
    orderValue: 'asc',
    id: ""
}

export default function routeReducer (state = params, action) {
    switch (action.type) {
        case SET_DEFAULT_ROUTE:
            return {
                currentPage: 1,
                filterLimit: 6,
                orderValue: 'asc'
            }
        case UPDATE_ROUTE_FILTER_NUMBER:
            return {
                ...state,
                filterLimit: action.payload
            }
        case DOUBLE_FILTER_NUMBER:
            return {
                ...state,
                filterLimit: action.payload * 2
            }
        case UPDATE_POSTS_ROUTE_ORDER:
            return {
                ...state,
                orderValue: action.payload,
            }
        case UPDATE_ROUTE_PAGE:
            return {
                ...state,
                currentPage: action.payload,
            }

        default:
            return state;
    }
}



import { SET_CURRENT_USER, USER_LOADING } from '../actions/types'
//const is_empty = require("is_empty")

const initialState = {
    isAuthenticated: false,
    user: {},
    loading: false
}

export default function(state = initialState, action ) {
    switch( action.type ) {
        case SET_CURRENT_USER: 
            return {
                ...state,
                isAuthenticated: "!isEmpty",
                user: action.payload
            };

        case USER_LOADING: 
            return {
                ...state,
                loading: true
            };
        default:
            return state;        
    }
}
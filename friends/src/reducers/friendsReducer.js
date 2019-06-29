import {
    GET_FRIENDS,
    GET_FRIENDS_FAILURE,
    GET_FRIENDS_SUCCESS
} from "../actions"; /* we need our action types here*/

const initialState = {
    friends: [],
    // Array characters, Boolean fetching, null error.
    fetching: false,
    error: null
};
export const friendsReducer = (state = initialState, action) => {
    switch (action.type) {
        // Fill me in with the important reducers
        // action types should be FETCHING, SUCCESS and FAILURE
        // your switch statement should handle all of these cases.
        case GET_FRIENDS:
            return { ...state, fetching: true };
        case GET_FRIENDS_FAILURE:
            return { ...state, fetching: false, error: action.payload };
        case GET_FRIENDS_SUCCESS:
            console.log(action.payload);
            return {
                ...state,
                friends: [...state.friends, ...action.payload],
                fetching: false
            }
        default:
            return state;
    }
};
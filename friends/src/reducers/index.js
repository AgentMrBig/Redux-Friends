import { LOGIN_SUCCESS } from '../actions';

const initialState = {
    friends: [],
    inLoggingIn: false,
    isLoading: false,
    isFetchingData: false,
    error: ''
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoggedIn: true
            };
        default:
            return state;
    }
}

export default reducer;

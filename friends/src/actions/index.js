import axios from 'axios'

// action types
export const LOGIN_START = 'LOGIN_START'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'
export const API_REQUEST_START = 'API_REQUEST_START'
export const API_REQUEST_SUCCESS = 'API_REQUEST_SUCCESS'
export const API_REQUEST_FAILURE = 'API_REQUEST_FAILURE'

// action creators
export const login = authData => async dispatch => {
    dispatch({ type: LOGIN_START })
    try {
        const { data } = await axios.post('http://localhost:5000/api/login', authData)
        const token = data.payload
        localStorage.setItem('auth_token', token)
        dispatch({ type: LOGIN_SUCCESS, payload: token })
    } catch (error) {
        dispatch({ type: LOGIN_FAILURE, payload: error.response.data.error })
    }
}

export const getFriends = () => async dispatch => {
    dispatch({ type: API_REQUEST_START })
    try {
        const token = localStorage.getItem('auth_token')
        const { data } = await axios.get('http://localhost:5000/api/friends', {
            headers: { 'Authorization': token }
        })
        dispatch({ type: API_REQUEST_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: API_REQUEST_FAILURE, payload: error.toString() })
    }
}

export const addFriend = friend => async dispatch => {
    dispatch({ type: API_REQUEST_START })
    try {
        const token = localStorage.getItem('auth_token')
        const { data } = await axios.post('http://localhost:5000/api/friends', friend, {
            headers: { 'Authorization': token }
        })
        dispatch({ type: API_REQUEST_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: API_REQUEST_FAILURE, payload: error.toString() })
    }
}

export const updateFriend = () => async dispatch => {
    dispatch({ type: API_REQUEST_START })
    try {
        const { data } = await axios.put()
        // dispatch({ type: API_REQUEST_SUCCESS, payload: /* TODO */ })
    } catch (error) {
        dispatch({ type: API_REQUEST_FAILURE, payload: error.toString() })
    }
}

export const deleteFriend = () => async dispatch => {
    dispatch({ type: API_REQUEST_START })
    try {
        const { data } = await axios.delete()
        // dispatch({ type: API_REQUEST_SUCCESS, payload: /* TODO */ })
    } catch (error) {
        dispatch({ type: API_REQUEST_FAILURE, payload: error.toString() })
    }
}
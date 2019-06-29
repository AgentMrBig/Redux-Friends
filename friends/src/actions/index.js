// we'll need axios

// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator
import axios from "axios";

export const GET_FRIENDS = "GET_FRIENDS";
export const GET_FRIENDS_SUCCESS = "GET_FRIENDS_SUCCESS";
export const GET_FRIENDS_FAILURE = "GET_FRIENDS_FAILURE";

export const getCharacters = () => dispatch => {
    dispatch({ type: GET_FRIENDS });
    axios
        .get("https://swapi.co/api/people")
        .then(({ data }) => {
            dispatch({
                type: GET_FRIENDS_SUCCESS,
                payload: data.results
            });
        })
        .catch(err => {
            dispatch({
                type: GET_FRIENDS_FAILURE,
                payload: err
            });
        });
};
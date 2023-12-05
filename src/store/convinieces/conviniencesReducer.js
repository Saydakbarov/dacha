import {
  GET_CONVIENCE_BEGIN,
  GET_CONVIENCE_SUCCESS,
  GET_CONVIENCE_FAIL,
  POST_CONVIENCE_BEGIN,
  POST_CONVIENCE_SUCCESS,
  POST_CONVIENCE_FAIL,
} from "./conviniencesAction";

const initialState = {
    getConBegin: false,
    getConSuccess: false,
    getConFail: false,
    getConData: [],
    postConBegin: false,
    postConSuccess: false,
    postConFail: false
};


export default (state=initialState, action) => {
    switch (action.type) {
        case GET_CONVIENCE_BEGIN:
            return {
                ...state,
                getConBegin: true
            };
        case GET_CONVIENCE_SUCCESS:
            return {
                ...state,
                getConBegin: false,
                getConSuccess: true,
                getConFail: false,
                getConData: [...state.getConData, action.payload],
            };
        case GET_CONVIENCE_FAIL:
            return {
                ...state,
                getConBegin: false,
                getConSuccess: false,
                getConFail: true
            };
        case POST_CONVIENCE_BEGIN:
            return {
                ...state,
                postConBegin: true
            };
        case POST_CONVIENCE_SUCCESS:
            return{
                ...state,
                postConBegin: false,
                postConSuccess: true,
                postConFail: false
            };
        case POST_CONVIENCE_FAIL:
            return {
                ...state,
                postConBegin: false,
                postConSuccess: false,
                postConFail: true
            };
        default:
            return state
    }
}
import {
  BEGIN_SIGNUP,
  SUCCESS_SIGNUP,
  ERROR_SIGNUP,
  BEGIN_LOGIN_AUTHORIZATION,
  SUCCESS_LOGIN_AUTHORIZATION,
  ERROR_LOGIN_AUTHORIZATION,
  BEGIN_LOGIN,
  SUCCESS_LOGIN,
  ERROR_LOGIN,
  LOGOUT_MAIN,
  FORGET_PASSWORD,
  FORGET_PASSWORD_ERROR,
} from "./authActions";

const initialState = {
  beginLogin: false,
  successLogin: false,
  errorLogin: false,
  beginAuth: false,
  successAuth: false,
  errorAuth: false,
  userAuthed: false,
  data: 0,
  status: 0,
  mainAuthBegin: false,
  mainAuthSuccess: false,
  mainAuthError: false,
  forgetPasswordSuccess: false,
  forgetPasswordData: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case BEGIN_SIGNUP:
      return {
        ...state,
        beginLogin: true,
        errorLogin: false,
      };
    case SUCCESS_SIGNUP:
      return {
        ...state,
        beginLogin: false,
        successLogin: true,
        errorLogin: false,
        data: action.payload,
        status: action.status,
      };
    case ERROR_SIGNUP:
      return {
        ...state,
        beginLogin: false,
        errorLogin: true,
        successLogin: false,
      };

    case BEGIN_LOGIN_AUTHORIZATION:
      return {
        ...state,
        beginAuth: true,
        errorAuth: false,
      };
    case SUCCESS_LOGIN_AUTHORIZATION:
      return {
        ...state,
        beginAuth: false,
        errorAuth: false,
        successAuth: true,
        userAuthed: action.payload,
      };
    case ERROR_LOGIN_AUTHORIZATION:
      return {
        ...state,
        beginAuth: false,
        errorAuth: true,
        successAuth: false,
      };
    case BEGIN_LOGIN:
      return {
        ...state,
        mainAuthBegin: true,
        mainAuthError: false,
      };
    case SUCCESS_LOGIN:
      return {
        ...state,
        mainAuthBegin: false,
        mainAuthError: false,
        mainAuthSuccess: true,
      };
    case ERROR_LOGIN:
      return {
        ...state,
        mainAuthBegin: false,
        mainAuthError: true,
        mainAuthSuccess: false,
      };
    case LOGOUT_MAIN:
      return {
        ...state,
        mainAuthBegin: false,
      };
    case FORGET_PASSWORD:
      return {
        ...state,
        forgetPasswordSuccess: true,
        forgetPasswordError: false,
        forgetPasswordData: action.payload,
      };
    case FORGET_PASSWORD_ERROR:
      return {
        ...state,
        forgetPasswordSuccess: false,
        forgetPasswordError: true,
      };
    default:
      return state;
  }
};

import {
  GET_ALL_PAYMENT_INFO_BEGIN,
  GET_ALL_PAYMENT_INFO_FAIL,
  GET_ALL_PAYMENT_INFO_SUCCESS,
  POST_PAYMENT_INFO_FAIL,
  POST_PAYMENT_INFO_SUCCESS,
  POST_PAYMENT_INFO_BEGIN,
  EDIT_PAYMENT_INFO_FAIL,
  EDIT_PAYMENT_INFO_SUCCESS,
  EDIT_PAYMENT_INFO_BEGIN,
  DELETE_PAYMENT_INFO_BEGIN,
  DELETE_PAYMENT_INFO_FAIL,
  DELETE_PAYMENT_INFO_SUCCESS,
} from "./paymentInfoAction";

const initialState = {
  getAllPaymentBegin: false,
  getAllPaymentSuccess: false,
  getAllPaymentFail: false,
  paymentData: [],
  editPaymentBegin: false,
  editPaymentSuccess: false,
  editPaymentFail: false,
  postPaymentBegin: false,
  postPaymentSuccess: false,
  postPaymentFail: false,
  deletePaymentBegin: false,
  deletePaymentSuccess: false,
  deletePaymentFail: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_PAYMENT_INFO_BEGIN:
      return {
        ...state,
        getAllPaymentBegin: true,
      };
    case GET_ALL_PAYMENT_INFO_SUCCESS:
      return {
        ...state,
        getAllPaymentBegin: false,
        getAllPaymentSuccess: true,
        getAllPaymentFail: false,
        paymentData: [...state.paymentData, ...action.payload],
      };
    case GET_ALL_PAYMENT_INFO_FAIL:
      return {
        ...state,
        getAllPaymentBegin: false,
        getAllPaymentSuccess: false,
        getAllPaymentFail: true,
      };
    case POST_PAYMENT_INFO_BEGIN:
      return {
        ...state,
        postPaymentBegin: true,
      };
    case POST_PAYMENT_INFO_SUCCESS:
      return {
        ...state,
        postPaymentBegin: false,
        postPaymentSuccess: true,
        postPaymentFail: false,
      };
    case POST_PAYMENT_INFO_FAIL:
      return {
        ...state,
        postPaymentBegin: false,
        postPaymentSuccess: false,
        postPaymentFail: true,
      };
    case EDIT_PAYMENT_INFO_BEGIN:
      return {
        ...state,
        editPaymentBegin: true,
      };
    case EDIT_PAYMENT_INFO_SUCCESS:
      return {
        ...state,
        editPaymentBegin: false,
        editPaymentSuccess: true,
        editPaymentFail: false,
      };
    case EDIT_PAYMENT_INFO_FAIL:
      return {
        ...state,
        editPaymentBegin: false,
        editPaymentSuccess: false,
        editPaymentFail: true,
      };
    case DELETE_PAYMENT_INFO_BEGIN:
      return {
        ...state,
        deletePaymentBegin: true,
      };
    case DELETE_PAYMENT_INFO_SUCCESS:
      return {
        ...state,
        deletePaymentBegin: false,
        deletePaymentSuccess: true,
        deletePaymentFail: false,
        paymentData: state.paymentData.filter(payment => payment.id !== action.payload)
      };
    case DELETE_PAYMENT_INFO_FAIL:
      return {
        ...state,
        deletePaymentBegin: false,
        deletePaymentSuccess: false,
        deletePaymentFail: true,
      };
    default:
      return state;
  }
};

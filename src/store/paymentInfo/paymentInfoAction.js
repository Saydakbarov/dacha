import axiosInstance from "service/axiosInstance";


export const GET_ALL_PAYMENT_INFO_BEGIN = 'GET_ALL_PAYMENT_INFO_BEGIN';
export const GET_ALL_PAYMENT_INFO_SUCCESS = 'GET_ALL_PAYMENT_INFO_SUCCESS';
export const GET_ALL_PAYMENT_INFO_FAIL = 'GET_ALL_PAYMENT_INFO_FAIL';

export const POST_PAYMENT_INFO_BEGIN = 'POST_PAYMENT_INFO_BEGIN';
export const POST_PAYMENT_INFO_SUCCESS = 'POST_PAYMENT_INFO_SUCCESS';
export const POST_PAYMENT_INFO_FAIL = 'POST_PAYMENT_INFO_FAIL';

export const DELETE_PAYMENT_INFO_BEGIN = 'DELETE_PAYMENT_INFO_BEGIN';
export const DELETE_PAYMENT_INFO_SUCCESS = 'DELETE_PAYMENT_INFO_SUCCESS';
export const DELETE_PAYMENT_INFO_FAIL = 'DELETE_PAYMENT_INFO_FAIL';

export const EDIT_PAYMENT_INFO_BEGIN = 'EDIT_PAYMENT_INFO_BEGIN';
export const EDIT_PAYMENT_INFO_SUCCESS = 'EDIT_PAYMENT_INFO_SUCCESS';
export const EDIT_PAYMENT_INFO_FAIL = 'EDIT_PAYMENT_INFO_FAIL';

export const getAllPaymentInfo = () => async dispatch => {
    dispatch({type: GET_ALL_PAYMENT_INFO_BEGIN});

    try {
        const response = await axiosInstance().get('/api/v1/paymentInfo');

        dispatch({type: GET_ALL_PAYMENT_INFO_SUCCESS, payload: response.data});
    } catch (error) {
        dispatch({type: GET_ALL_PAYMENT_INFO_FAIL})
    }
};

export const postPaymentInfo = () => async dispatch => {
    dispatch({type: POST_PAYMENT_INFO_BEGIN});

    try {

        await axiosInstance().get('/api/v1/paymentInfo');

        dispatch({type: POST_PAYMENT_INFO_SUCCESS});
    } catch (error) {
        dispatch({type: POST_PAYMENT_INFO_FAIL})
    }

    dispatch(getAllPaymentInfo());
};

export const editPaymentInfo = (id, bankNumber, inn, mfo, bankName, bankBranch) => async dispatch => {
    dispatch({type: EDIT_PAYMENT_INFO_BEGIN});

    try {
        const data = {
            "bankNumber": bankNumber,
            "inn": inn,
            "mfo": mfo,
            "bankName": bankName,
            "bankBranch": bankBranch
        }

        await axiosInstance().put(`/api/v1/paymentInfo/${id}`, data);

        dispatch({type: EDIT_PAYMENT_INFO_SUCCESS})
    } catch (error) {
        dispatch({type: EDIT_PAYMENT_INFO_FAIL});
    }
    dispatch(getAllPaymentInfo())
};

export const deletePaymentInfo = (id) => async dispatch => {
    dispatch({type: DELETE_PAYMENT_INFO_BEGIN});

    try {
        await axiosInstance().delete(`/api/v1/paymentInfo/${id}`);

        dispatch({type: DELETE_PAYMENT_INFO_SUCCESS, payload: id});
    } catch (error) {
        dispatch({type: DELETE_PAYMENT_INFO_FAIL});
    }
}



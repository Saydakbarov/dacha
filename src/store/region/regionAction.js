import axiosInstance from "service/axiosInstance";
import { Notification } from 'rsuite';


export const ADD_REGION_BEGIN = 'ADD_REGION_BEGIN';
export const ADD_REGION_SUCCESS = 'ADD_REGION_SUCCESS';
export const ADD_REGION_FAIL = 'ADD_REGION_FAIL';

export const GET_REGION_BEGIN_SECOND = 'GET_REGION_BEGIN_SECOND';
export const GET_REGION_SUCCESS_SECOND = 'GET_REGION_SUCCESS_SECOND';
export const GET_REGION_FAIL_SECOND = 'GET_REGION_FAIL_SECOND';

export const GET_REGION_BEGIN_ALL = 'GET_REGION_BEGIN_ALL';
export const GET_REGION_SUCCESS_ALL = 'GET_REGION_SUCCESS_ALL';
export const GET_REGION_FAIL_ALL = 'GET_REGION_FAIL_ALL';

export const DELETE_REGION_ITEM_BEGIN = 'DELETE_REGION_ITEM_BEGIN';
export const DELETE_REGION_ITEM_SUCCESS = 'DELETE_REGION_ITEM_SUCCESS';
export const DELETE_REGION_ITEM_FAIL = 'DELETE_REGION_ITEM_FAIL';


export const EDIT_REGION_ITEM_BEGIN = 'EDIT_REGION_ITEM_BEGIN';
export const EDIT_REGION_ITEM_SUCCESS = 'EDIT_REGION_ITEM_SUCCESS';
export const EDIT_REGION_ITEM_FAIL = 'EDIT_REGION_ITEM_FAIL';

export const getAllRegionByName = (nameUz, nameRu, nameEn) => async dispatch => {
    dispatch({ type: GET_REGION_BEGIN_SECOND });
    const lang = localStorage.getItem('i18nextLng');

    try {
        const data = {
            "nameUz": nameUz,
            "nameRu": nameRu,
            "nameEn": nameEn
        }

        const response = await axiosInstance().get(`/api/v1/region?lang=${lang}`, data);

        dispatch({ type: GET_REGION_SUCCESS_SECOND, payload: response.data });
    } catch (error) {
        dispatch({ type: GET_REGION_FAIL_SECOND })
        Notification["error"]({
            title: "Iltimos qaytadan urining!",
            placement: "bottomEnd",
        });
    }
};

export const getAllRegion = () => async dispatch => {
    dispatch({ type: GET_REGION_BEGIN_ALL });

    try {

        const response = await axiosInstance().get(`/api/v1/region/all`);

        dispatch({ type: GET_REGION_SUCCESS_ALL, payload: response.data });
    } catch (error) {
        dispatch({ type: GET_REGION_FAIL_ALL })
        Notification["error"]({
            title: "Iltimos qaytadan urining!",
            placement: "bottomEnd",
        });
    }
};

export const addRegion = (nameUz, nameRu, nameEn) => async dispatch => {
    dispatch({ type: ADD_REGION_BEGIN });

    const data = {
        "nameUz": nameUz,
        "nameRu": nameRu,
        "nameEn": nameEn
    }
    try {
        await axiosInstance().post('/api/v1/region', data);
        dispatch({ type: ADD_REGION_SUCCESS });

        Notification["success"]({
            title: "Tuman qo'shildi",
            placement: "bottomEnd",
        });
    } catch (error) {

        dispatch({ type: ADD_REGION_FAIL });
        Notification["error"]({
            title: "Iltimos qaytadan urining!",
            placement: "bottomEnd",
        });
    }

    dispatch(getAllRegion())
};

export const deleteRegion = (id) => async dispatch => {
    dispatch({ type: DELETE_REGION_ITEM_BEGIN });

    try {
        await axiosInstance().delete(`/api/v1/region/${id}`);

        dispatch({ type: DELETE_REGION_ITEM_SUCCESS, payload: id });
        Notification["success"]({
            title: "O'chirildi",
            placement: "bottomEnd",
        });
    } catch (error) {

        dispatch({ type: DELETE_REGION_ITEM_FAIL });
        Notification["error"]({
            title: "Удалите области, принадлежащие области!",
            placement: "bottomEnd",
        });
    }
    dispatch(getAllRegion())
};

export const editRegion = (id, nameUz, nameRu, nameEn) => async dispatch => {
    dispatch({ type: EDIT_REGION_ITEM_BEGIN });

    const data = {
        "nameUz": nameUz,
        "nameRu": nameRu,
        "nameEn": nameEn
    };

    try {
        await axiosInstance().put(`/api/v1/region/${id}`, data);

        dispatch({ type: EDIT_REGION_ITEM_SUCCESS });
        Notification["success"]({
            title: "O'zgartirildi",
            placement: "bottomEnd",
        });
    } catch (error) {

        dispatch({ type: EDIT_REGION_ITEM_FAIL });
        Notification["error"]({
            title: "O'zgartirishda xatolik bor",
            placement: "bottomEnd",
        });
    };
    dispatch(getAllRegion());
};

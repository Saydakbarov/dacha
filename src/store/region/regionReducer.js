import {
  ADD_REGION_BEGIN,
  ADD_REGION_FAIL,
  ADD_REGION_SUCCESS,
  GET_REGION_BEGIN_SECOND,
  GET_REGION_FAIL_SECOND,
  GET_REGION_SUCCESS_SECOND,
  DELETE_REGION_ITEM_BEGIN,
  DELETE_REGION_ITEM_SUCCESS,
  DELETE_REGION_ITEM_FAIL,
  EDIT_REGION_ITEM_BEGIN,
  EDIT_REGION_ITEM_SUCCESS,
  EDIT_REGION_ITEM_FAIL,
  GET_REGION_BEGIN_ALL,
  GET_REGION_SUCCESS_ALL,
  GET_REGION_FAIL_ALL,
} from "./regionAction";

const initialState = {
  beginAddRegion: false,
  successAddRegion: false,
  failAddRegion: false,
  beginGetRegion: false,
  successGetRegion: false,
  failGetRegion: false,
  regionsData: [],
  beginDeleteRegion: false,
  successDeleteRegion: false,
  failDeleteRegion: false,
  beginEditRegion: false,
  successEditRegion: false,
  failEditRegion: false,
  getRegionByLangBegin: false,
  getRegionByLangSuccess: false,
  getRegionByLangFail: false,
  getRegionByLangData: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_REGION_BEGIN:
      return {
        ...state,
        beginAddRegion: true,
      };
    case ADD_REGION_SUCCESS:
      return {
        ...state,
        beginAddRegion: false,
        successAddRegion: true,
        failAddRegion: false,
      };
    case ADD_REGION_FAIL:
      return {
        ...state,
        beginAddRegion: false,
        successAddRegion: false,
        failAddRegion: true,
      };
    case GET_REGION_BEGIN_ALL:
      return {
        ...state,
        beginGetRegion: true,
      };
    case GET_REGION_SUCCESS_ALL:
      return {
        ...state,
        beginGetRegion: false,
        regionsData: action.payload,
        successGetRegion: true,
        failGetRegion: false,
      };
    case GET_REGION_FAIL_ALL:
      return {
        ...state,
        beginGetRegion: false,
        successGetRegion: false,
        failGetRegion: true,
      };
    case DELETE_REGION_ITEM_BEGIN:
      return {
        ...state,
        beginDeleteRegion: true,
      };
    case DELETE_REGION_ITEM_SUCCESS:
      return {
        ...state,
        beginDeleteRegion: false,
        successDeleteRegion: true,
        failDeleteRegion: false,
        regionsData: state.regionsData.filter(
          (region) => region.id !== action.payload
        ),
      };
    case DELETE_REGION_ITEM_FAIL:
      return {
        ...state,
        beginDeleteRegion: false,
        successDeleteRegion: false,
        failDeleteRegion: true,
      };
    case EDIT_REGION_ITEM_BEGIN:
      return {
        beginEditRegion: true,
      };
    case EDIT_REGION_ITEM_SUCCESS:
      return {
        beginEditRegion: false,
        successEditRegion: true,
        failEditRegion: false,
      };
    case EDIT_REGION_ITEM_FAIL:
      return {
        beginEditRegion: false,
        successEditRegion: false,
        failEditRegion: true,
      };
    case GET_REGION_BEGIN_SECOND:
      return {
        ...state,
        getRegionByLangBegin: true,
      };
    case GET_REGION_SUCCESS_SECOND:
      return {
        ...state,
        getRegionByLangBegin: false,
        getRegionByLangSuccess: true,
        getRegionByLangFail: false,
        getRegionByLangData: action.payload,
      };
    case GET_REGION_FAIL_SECOND:
      return {
        ...state,
        getRegionByLangBegin: false,
        getRegionByLangSuccess: false,
        getRegionByLangFail: true,
      };
    default:
      return state;
  }
};

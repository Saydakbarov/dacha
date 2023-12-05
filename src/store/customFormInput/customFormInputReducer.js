import { HANDLE_INPUT } from "./customFromInputAction";

const initialState = {
  linkVideo: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case HANDLE_INPUT:
      return {
        ...state,
        linkVideo: action.payload,
      };
    default:
      return state;
  }
};

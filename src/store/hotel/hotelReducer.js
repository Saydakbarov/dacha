import { ADD_ROOM, CLOSE_ADD_ROOM } from "./hotelActions";

const initialState = {
  modalRoom: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_ROOM:
      return {
        ...state,
        modalRoom: true,
      };
    case CLOSE_ADD_ROOM:
      return {
        ...state,
        modalRoom: false,
      };
    default:
      return state;
  }
};

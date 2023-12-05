import { CHANGE_MAP } from "./mapAction";

const initialState = {
  viewport: {
    latitude: 41.291019,
    longitude: 69.210099,
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_MAP:
      return {
        ...state,
        viewport: action.payload
      };
    default:
      return state;
  }
};

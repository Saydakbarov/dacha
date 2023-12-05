const initialState = {
  toggleLang: false,
  showModal: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "open_lang":
      return {
        ...state,
        toggleLang: true,
      };
    case "close_lang":
      return {
        ...state,
        toggleLang: false,
      };
    case "open_modal":
      return {
        ...state,
        showModal: !state.showModal,
      };
    case "close_modal":
      return {
        ...state,
        showModal: false,
      };
    default:
      return false;
  }
};

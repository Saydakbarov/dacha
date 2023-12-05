export const HANDLE_INPUT = "HANDLE_INPUT";

export const handleChangeForm = (e) => {
  return {
    type: HANDLE_INPUT,
    payload: e,
  };
};
